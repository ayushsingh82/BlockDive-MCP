import React, { useState } from 'react';

const AIInsights = () => {
  const [query, setQuery] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');

  // Sample AI insights - replace with actual AI API calls
  const sampleInsights = {
    address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    network: 'Ethereum',
    summary: {
      behavior: 'Whale wallet with high-frequency trading patterns',
      riskScore: 'Low (0.15)',
      category: 'Institutional Investor',
      activity: 'Active DeFi user with significant liquidity provision'
    },
    patterns: [
      'Frequent interactions with Uniswap V3 and Aave',
      'Regular DCA (Dollar Cost Averaging) behavior',
      'Prefers stablecoin pairs for trading',
      'High gas usage during peak market hours'
    ],
    recommendations: [
      'Consider monitoring for large position changes',
      'This wallet shows institutional trading patterns',
      'Low risk profile - stable trading history'
    ],
    metrics: {
      totalTransactions: '12,456',
      totalVolume: '$2.4B',
      avgTransactionSize: '$192K',
      activeDays: '89%',
      topTokens: ['USDT', 'USDC', 'ETH', 'WBTC', 'DAI']
    }
  };

  const handleQuery = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setInsights(sampleInsights);
      setLoading(false);
    }, 2000);
  };

  const handleAddressAnalysis = async () => {
    if (!selectedAddress) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setInsights(sampleInsights);
      setLoading(false);
    }, 2000);
  };

  const predefinedQueries = [
    "Show me the top performing wallets on Ethereum",
    "Analyze DeFi activity patterns for the last 30 days",
    "Find wallets with unusual trading behavior",
    "Compare token performance across networks",
    "Identify potential whale movements",
    "Analyze gas usage patterns"
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        AI-Powered Blockchain Insights
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> AI-powered analysis engine that provides intelligent insights into address behavior, 
          contract activity, and token transaction history. Use natural language queries to generate quick insights and identify 
          patterns across blockchain networks.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Natural Language Query Interface */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500 mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Natural Language Query</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about blockchain data..."
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleQuery}
              disabled={loading}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Ask AI'}
            </button>
          </div>

          {/* Predefined Queries */}
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-2">Try these queries:</p>
            <div className="flex flex-wrap gap-2">
              {predefinedQueries.map((predefinedQuery, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(predefinedQuery)}
                  className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-600 hover:border-green-500 hover:text-green-400"
                >
                  {predefinedQuery}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Address Analysis */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500 mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Address Analysis</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <select
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="ethereum">Ethereum</option>
              <option value="base">Base</option>
              <option value="aptos">Aptos</option>
              <option value="tron">Tron</option>
              <option value="bsc">BSC</option>
              <option value="polygon">Polygon</option>
            </select>
            
            <input
              type="text"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
              placeholder="Enter wallet address..."
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
            <button
              onClick={handleAddressAnalysis}
              disabled={loading || !selectedAddress}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze Address'}
            </button>
          </div>
        </div>

        {/* AI Insights Display */}
        {insights && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Summary Card */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Address Summary</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white font-mono text-sm">{insights.address}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Network</p>
                  <p className="text-white">{insights.network}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Behavior Pattern</p>
                  <p className="text-white">{insights.summary.behavior}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Risk Score</p>
                  <p className="text-white">{insights.summary.riskScore}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="text-white">{insights.summary.category}</p>
                </div>
              </div>
            </div>

            {/* Metrics Card */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Transactions</p>
                  <p className="text-white font-semibold">{insights.metrics.totalTransactions}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Volume</p>
                  <p className="text-white font-semibold">{insights.metrics.totalVolume}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Avg Transaction</p>
                  <p className="text-white font-semibold">{insights.metrics.avgTransactionSize}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Active Days</p>
                  <p className="text-white font-semibold">{insights.metrics.activeDays}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Top Tokens</p>
                <div className="flex flex-wrap gap-2">
                  {insights.metrics.topTokens.map((token, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                      {token}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Patterns Card */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Behavior Patterns</h3>
              <ul className="space-y-2">
                {insights.patterns.map((pattern, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span className="text-white text-sm">{pattern}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations Card */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">AI Recommendations</h3>
              <ul className="space-y-2">
                {insights.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">💡</span>
                    <span className="text-white text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <p className="text-gray-400 mt-4">AI is analyzing the data...</p>
          </div>
        )}

        {/* Features Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">AI Analysis</h3>
            <p className="text-gray-400 text-sm">
              Advanced machine learning models analyze transaction patterns and behavior
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Risk Scoring</h3>
            <p className="text-gray-400 text-sm">
              Intelligent risk assessment based on historical data and patterns
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Pattern Detection</h3>
            <p className="text-gray-400 text-sm">
              Identify unusual behavior and potential market-moving activities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights; 