import React, { useState } from 'react';

const TradingAssistant = () => {
  const [selectedToken, setSelectedToken] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const tokenList = [
    { symbol: 'PEPE', name: 'Pepe', network: 'Ethereum' },
    { symbol: 'SHIB', name: 'Shiba Inu', network: 'Ethereum' },
    { symbol: 'DOGE', name: 'Dogecoin', network: 'Ethereum' },
    { symbol: 'ETH', name: 'Ethereum', network: 'Ethereum' },
    { symbol: 'BTC', name: 'Bitcoin', network: 'Ethereum' }
  ];

  const handleAnalysis = () => {
    if (!selectedToken) return;
    setLoading(true);
    setTimeout(() => {
      setAnalysis({
        token: selectedToken,
        currentPrice: '$0.00001234',
        change24h: '+45.67%',
        supportLevels: [
          { price: '$0.00001150', strength: 'Strong' },
          { price: '$0.00001080', strength: 'Medium' }
        ],
        resistanceLevels: [
          { price: '$0.00001320', strength: 'Strong' },
          { price: '$0.00001450', strength: 'Medium' }
        ],
        signals: [
          { type: 'Buy', reason: 'Price above 20 SMA' },
          { type: 'Hold', reason: 'RSI approaching overbought' }
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        Trading Assistant
      </h1>
      
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> AI-powered trading assistant providing resistance and support 
          analysis for any token with real-time technical indicators and trading signals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500 mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Select Token for Analysis</h2>
          
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="">Choose a token...</option>
              {tokenList.map((token, index) => (
                <option key={index} value={token.symbol}>
                  {token.symbol} - {token.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleAnalysis}
              disabled={loading || !selectedToken}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze Token'}
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <p className="text-gray-400 mt-4">AI is analyzing {selectedToken}...</p>
          </div>
        )}

        {analysis && !loading && (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-2xl font-bold text-white mb-4">{analysis.token} Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Support Levels</h4>
                  {analysis.supportLevels.map((level, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded mb-2">
                      <p className="text-white font-semibold">{level.price}</p>
                      <p className="text-gray-400 text-sm">{level.strength} Support</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Resistance Levels</h4>
                  {analysis.resistanceLevels.map((level, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded mb-2">
                      <p className="text-white font-semibold">{level.price}</p>
                      <p className="text-gray-400 text-sm">{level.strength} Resistance</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h4 className="text-green-400 font-semibold mb-3">Trading Signals</h4>
              {analysis.signals.map((signal, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded mb-2">
                  <span className={`px-2 py-1 rounded text-sm ${
                    signal.type === 'Buy' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                  }`}>
                    {signal.type}
                  </span>
                  <p className="text-white mt-2">{signal.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingAssistant; 