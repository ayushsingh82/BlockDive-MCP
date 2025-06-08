import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MCP = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiCategories, setApiCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [apiOperations, setApiOperations] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState('');
  const [apiSpec, setApiSpec] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize MCP server connection
  const initializeMCP = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/mcp/init', {
        apiKey
      });
      if (response.data.success) {
        await fetchApiCategories();
      }
    } catch (err) {
      setError('Failed to initialize MCP server');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch API categories
  const fetchApiCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/mcp/categories');
      setApiCategories(response.data.categories);
    } catch (err) {
      setError('Failed to fetch API categories');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch API operations for selected category
  const fetchApiOperations = async (category) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/mcp/operations', {
        category
      });
      setApiOperations(response.data.operations);
    } catch (err) {
      setError('Failed to fetch API operations');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch API specification
  const fetchApiSpec = async (operation) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/mcp/spec', {
        operation
      });
      setApiSpec(response.data.spec);
    } catch (err) {
      setError('Failed to fetch API specification');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Execute API call
  const executeApiCall = async (params) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/mcp/execute', {
        operation: selectedOperation,
        params
      });
      setResponse(response.data.result);
    } catch (err) {
      setError('Failed to execute API call');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedOperation('');
    setApiSpec(null);
    setResponse(null);
    fetchApiOperations(category);
  };

  // Handle operation selection
  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
    setApiSpec(null);
    setResponse(null);
    fetchApiSpec(operation);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="p-8 bg-black rounded-lg border-4 border-transparent max-w-4xl w-full"
        style={{ borderImage: 'linear-gradient(90deg, #32CD32, #1E90FF, #8A2BE2) 1' }}>
        
        <h1 className="text-2xl font-bold mb-6 text-green-500 text-center">Nodit MCP Explorer</h1>

        {/* API Key Input */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-300">Nodit API Key:</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
            placeholder="Enter your Nodit API Key"
          />
          <button
            onClick={initializeMCP}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            disabled={loading}
          >
            Initialize MCP
          </button>
        </div>

        {/* API Categories */}
        {apiCategories.length > 0 && (
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">API Categories:</label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategorySelect(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
            >
              <option value="">Select a category</option>
              {apiCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* API Operations */}
        {apiOperations.length > 0 && (
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">API Operations:</label>
            <select
              value={selectedOperation}
              onChange={(e) => handleOperationSelect(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
            >
              <option value="">Select an operation</option>
              {apiOperations.map((operation) => (
                <option key={operation} value={operation}>
                  {operation}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* API Specification */}
        {apiSpec && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-green-500">API Specification</h2>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-white">
              {JSON.stringify(apiSpec, null, 2)}
            </pre>
          </div>
        )}

        {/* API Response */}
        {response && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-green-500">API Response</h2>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-white">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900 text-white rounded-lg">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MCP;
