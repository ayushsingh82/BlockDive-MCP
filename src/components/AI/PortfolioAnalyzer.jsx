import React, { useState } from 'react';

const PortfolioAnalyzer = () => {
  const [portfolioAddress, setPortfolioAddress] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('all');

  const handlePortfolioAnalysis = () => {
    if (!portfolioAddress) return;
    setLoading(true);
    setTimeout(() => {
      setAnalysis({
        address: portfolioAddress,
        totalValue: '$45,678.90',
        change24h: '+12.34%',
        change7d: '+23.45%',
        change30d: '+45.67%',
        riskScore: 7.2,
        diversification: 8.5,
        performance: 9.1,
        assets: [
          {
            symbol: 'ETH',
            name: 'Ethereum',
            amount: '2.5',
            value: '$8,234.50',
            percentage: '18.0%',
            change24h: '+5.67%',
            risk: 'Low',
            category: 'Layer 1'
          },
          {
            symbol: 'PEPE',
            name: 'Pepe',
            amount: '1,234,567',
            value: '$15,234.00',
            percentage: '33.4%',
            change24h: '+23.45%',
            risk: 'High',
            category: 'Meme'
          },
          {
            symbol: 'USDT',
            name: 'Tether USD',
            amount: '12,000',
            value: '$12,000.00',
            percentage: '26.3%',
            change24h: '+0.02%',
            risk: 'Very Low',
            category: 'Stablecoin'
          },
          {
            symbol: 'SHIB',
            name: 'Shiba Inu',
            amount: '45,678,901',
            value: '$10,210.40',
            percentage: '22.3%',
            change24h: '+8.90%',
            risk: 'Medium',
            category: 'Meme'
          }
        ],
        insights: [
          'High concentration in meme tokens (55.7%) - consider diversifying',
          'Good stablecoin allocation (26.3%) provides downside protection',
          'Portfolio shows strong momentum with 12.34% daily gain',
          'Risk score of 7.2 indicates moderate-high risk tolerance'
        ],
        recommendations: [
          'Consider reducing meme token exposure to 30% for better risk management',
          'Add more DeFi tokens for yield generation opportunities',
          'Include some blue-chip NFTs for portfolio diversification',
          'Set up stop-loss orders for high-risk positions'
        ],
        riskBreakdown: {
          veryLow: 26.3,
          low: 18.0,
          medium: 22.3,
          high: 33.4
        },
        categoryBreakdown: {
          'Layer 1': 18.0,
          'Meme': 55.7,
          'Stablecoin': 26.3
        }
      });
      setLoading(false);
    }, 2000);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Very Low': return 'text-green-400';
      case 'Low': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const getRiskBgColor = (risk) => {
    switch (risk) {
      case 'Very Low': return 'bg-green-600';
      case 'Low': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'High': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black p-8">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        Portfolio Analyzer
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> AI-powered portfolio analysis tool that provides comprehensive insights into 
          your crypto holdings. Get risk assessment, diversification analysis, performance metrics, and personalized 
          recommendations to optimize your investment strategy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Portfolio Input */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500 mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Analyze Your Portfolio</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <select
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="all">All Networks</option>
              <option value="ethereum">Ethereum</option>
              <option value="bsc">BSC</option>
              <option value="polygon">Polygon</option>
              <option value="base">Base</option>
              <option value="tron">Tron</option>
            </select>
            
            <input
              type="text"
              value={portfolioAddress}
              onChange={(e) => setPortfolioAddress(e.target.value)}
              placeholder="Enter wallet address to analyze..."
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
            <button
              onClick={handlePortfolioAnalysis}
              disabled={loading || !portfolioAddress}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze Portfolio'}
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            <p>💡 Tip: Enter any wallet address to analyze its portfolio composition and performance</p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <p className="text-gray-400 mt-4">AI is analyzing portfolio...</p>
          </div>
        )}

        {/* Analysis Results */}
        {analysis && !loading && (
          <div className="space-y-8">
            {/* Portfolio Overview */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Portfolio Analysis</h3>
                  <p className="text-gray-400 font-mono text-sm">{analysis.address}</p>
                </div>
                <div className="flex flex-col items-end mt-4 md:mt-0">
                  <p className="text-3xl font-bold text-white">{analysis.totalValue}</p>
                  <p className={`text-lg ${analysis.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {analysis.change24h} (24h)
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-gray-400 text-sm">Risk Score</p>
                  <p className="text-2xl font-bold text-white">{analysis.riskScore}/10</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-gray-400 text-sm">Diversification</p>
                  <p className="text-2xl font-bold text-white">{analysis.diversification}/10</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-gray-400 text-sm">Performance</p>
                  <p className="text-2xl font-bold text-white">{analysis.performance}/10</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-gray-400 text-sm">7d Change</p>
                  <p className={`text-2xl font-bold ${analysis.change7d.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {analysis.change7d}
                  </p>
                </div>
              </div>
            </div>

            {/* Assets Breakdown */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Portfolio Assets</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Asset</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Value</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">% of Portfolio</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">24h Change</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Risk</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Category</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {analysis.assets.map((asset, index) => (
                      <tr key={index} className="hover:bg-gray-800 transition-colors">
                        <td className="px-4 py-4">
                          <div>
                            <p className="text-white font-semibold">{asset.symbol}</p>
                            <p className="text-gray-400 text-sm">{asset.name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-white">{asset.amount}</td>
                        <td className="px-4 py-4 text-white font-semibold">{asset.value}</td>
                        <td className="px-4 py-4 text-white">{asset.percentage}</td>
                        <td className={`px-4 py-4 ${asset.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {asset.change24h}
                        </td>
                        <td className="px-4 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getRiskBgColor(asset.risk)} text-white`}>
                            {asset.risk}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded">
                            {asset.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risk & Category Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Risk Breakdown */}
              <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Risk Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Very Low Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{width: `${analysis.riskBreakdown.veryLow}%`}}></div>
                      </div>
                      <span className="text-white text-sm">{analysis.riskBreakdown.veryLow}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Low Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: `${analysis.riskBreakdown.low}%`}}></div>
                      </div>
                      <span className="text-white text-sm">{analysis.riskBreakdown.low}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Medium Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: `${analysis.riskBreakdown.medium}%`}}></div>
                      </div>
                      <span className="text-white text-sm">{analysis.riskBreakdown.medium}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">High Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: `${analysis.riskBreakdown.high}%`}}></div>
                      </div>
                      <span className="text-white text-sm">{analysis.riskBreakdown.high}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Category Distribution</h3>
                <div className="space-y-3">
                  {Object.entries(analysis.categoryBreakdown).map(([category, percentage]) => (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-gray-400">{category}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${percentage}%`}}></div>
                        </div>
                        <span className="text-white text-sm">{percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">AI Portfolio Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Key Observations</h4>
                  <ul className="space-y-2">
                    {analysis.insights.map((insight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-white text-sm">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {analysis.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">💡</span>
                        <span className="text-white text-sm">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Health Score */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Portfolio Health Score</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{analysis.riskScore}</span>
                  </div>
                  <p className="text-green-400 font-semibold">Risk Management</p>
                  <p className="text-gray-400 text-sm">Moderate-High Risk</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{analysis.diversification}</span>
                  </div>
                  <p className="text-blue-400 font-semibold">Diversification</p>
                  <p className="text-gray-400 text-sm">Good Spread</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-purple-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{analysis.performance}</span>
                  </div>
                  <p className="text-purple-400 font-semibold">Performance</p>
                  <p className="text-gray-400 text-sm">Excellent Returns</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Portfolio Analysis</h3>
            <p className="text-gray-400 text-sm">
              Comprehensive analysis of asset allocation, risk distribution, and performance metrics
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">AI Insights</h3>
            <p className="text-gray-400 text-sm">
              AI-powered recommendations for portfolio optimization and risk management
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Risk Assessment</h3>
            <p className="text-gray-400 text-sm">
              Detailed risk scoring and diversification analysis for informed decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalyzer; 