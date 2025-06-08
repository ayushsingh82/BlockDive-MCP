const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const router = express.Router();

// MCP server instance
let mcpProcess = null;

// Initialize MCP server
const initializeMCP = async (apiKey) => {
  return new Promise((resolve, reject) => {
    try {
      // Kill existing process if any
      if (mcpProcess) {
        mcpProcess.kill();
      }

      // Set environment variable for API key
      process.env.NODIT_API_KEY = apiKey;

      // Start MCP server using npx
      mcpProcess = spawn('npx', ['@noditlabs/nodit-mcp-server@latest']);

      mcpProcess.stdout.on('data', (data) => {
        console.log(`MCP Server: ${data}`);
        if (data.toString().includes('Server started')) {
          resolve(true);
        }
      });

      mcpProcess.stderr.on('data', (data) => {
        console.error(`MCP Server Error: ${data}`);
        reject(new Error(data.toString()));
      });

      mcpProcess.on('close', (code) => {
        console.log(`MCP Server process exited with code ${code}`);
        mcpProcess = null;
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Send command to MCP server
const sendCommand = async (method, params = {}) => {
  return new Promise((resolve, reject) => {
    if (!mcpProcess) {
      reject(new Error('MCP server not initialized'));
      return;
    }

    const command = {
      method,
      params,
      jsonrpc: '2.0',
      id: Date.now()
    };

    mcpProcess.stdin.write(JSON.stringify(command) + '\n');

    const timeout = setTimeout(() => {
      reject(new Error('Command timeout'));
    }, 10000);

    const handler = (data) => {
      try {
        const response = JSON.parse(data.toString());
        if (response.id === command.id) {
          clearTimeout(timeout);
          mcpProcess.stdout.removeListener('data', handler);
          resolve(response.result);
        }
      } catch (error) {
        console.error('Error parsing response:', error);
      }
    };

    mcpProcess.stdout.on('data', handler);
  });
};

// API Routes
router.post('/init', async (req, res) => {
  try {
    const { apiKey } = req.body;
    await initializeMCP(apiKey);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/categories', async (req, res) => {
  try {
    const categories = await sendCommand('tools/call', {
      name: 'list_nodit_api_categories',
      arguments: {}
    });
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/operations', async (req, res) => {
  try {
    const { category } = req.body;
    const operations = await sendCommand('tools/call', {
      name: 'list_nodit_node_apis',
      arguments: { category }
    });
    res.json({ operations });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/spec', async (req, res) => {
  try {
    const { operation } = req.body;
    const spec = await sendCommand('tools/call', {
      name: 'get_nodit_api_spec',
      arguments: { operation }
    });
    res.json({ spec });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/execute', async (req, res) => {
  try {
    const { operation, params } = req.body;
    const result = await sendCommand('tools/call', {
      name: 'call_nodit_api',
      arguments: { operation, params }
    });
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 