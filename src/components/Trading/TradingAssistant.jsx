import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TradingAssistant = () => {
  const [selectedToken, setSelectedToken] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1d');

  // Sample token list
  const tokenList = [
    { symbol: 'PEPE', name: 'Pepe', address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933', network: 'Ethereum' },
    { symbol: 'SHIB', name: 'Shiba Inu', address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE', network: 'Ethereum' },
    { symbol: 'DOGE', name: 'Dogecoin', address: '0x3832d2F059E55934220881F831bE501D180671A7', network: 'Ethereum' },
    { symbol: 'FLOKI', name: 'Floki Inu', address: '0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E', network: 'Ethereum' },
    { symbol: 'BONK', name: 'Bonk', address: '0xA697e272a73744b343528C3Dc4702F96AeA2DeAa', network: 'Solana' },
    { symbol: 'ETH', name: 'Ethereum', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', network: 'Ethereum' },
    { symbol: 'BTC', name: 'Bitcoin', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', network: 'Ethereum' },
    { symbol: 'USDT', name: 'Tether USD', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', network: 'Ethereum' }
  ];

  // Sample analysis data
  const sampleAnalysis = {
    token: 'PEPE',
    currentPrice: '$0.00001234',
    change24h: '+45.67%',
    supportLevels: [
      { price: '$0.00001150', strength: 'Strong', volume: '$2.3M' },
      { price: '$0.00001080', strength: 'Medium', volume: '$1.8M' },
      { price: '$0.00000990', strength: 'Weak', volume: '$0.9M' }
    ],
    resistanceLevels: [
      { price: '$0.00001320', strength: 'Strong', volume: '$3.1M' },
      { price: '$0.00001450', strength: 'Medium', volume: '$2.4M' },
      { price: '$0.00001600', strength: 'Weak', volume: '$1.2M' }
    ],
    technicalIndicators: {
      rsi: 72.5,
      macd: 'Bullish',
      bollingerBands: 'Upper Band',
      movingAverages: {
        sma20: '$0.00001120',
        sma50: '$0.00000980',
        ema12: '$0.00001210'
      }
    },
    tradingSignals: [
      { type: 'Buy', strength: 'Strong', reason: 'Price above 20 SMA with increasing volume' },
      { type: 'Hold', strength: 'Medium', reason: 'RSI approaching overbought territory' },
      { type: 'Watch', strength: 'Weak', reason: 'Potential resistance at $0.00001320' }
    ],
    riskAssessment: {
      riskLevel: 'High',
      volatility: 'Very High',
      liquidity: 'Good',
      marketSentiment: 'Bullish'
    },
    priceChart: [0.000008, 0.000009, 0.000010, 0.000011, 0.000012, 0.000013, 0.000014, 0.000015, 0.000016, 0.000017],
    volumeChart: [1200, 1900, 3000, 5000, 2000, 3000, 4000, 6000, 8000, 12000]
  };

  const handleTokenAnalysis = async () => {
    if (!selectedToken) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis(sampleAnalysis);
      setLoading(false);
    }, 2000);
  };

  const getChartData = () => ({
    labels: ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d'],
    datasets: [
      {
        label: 'Price',
        data: analysis?.priceChart || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      }
    ]
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const getStrengthColor = (strength) => {
    switch (strength) {
      case 'Strong': return 'text-green-400';
      case 'Medium': return 'text-yellow-500';
      case 'Weak': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSignalColor = (type) => {
    switch (type) {
      case 'Buy': return 'text-green-400';
      case 'Sell': return 'text-red-400';
      case 'Hold': return 'text-yellow-500';
      case 'Watch': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black p-8">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        Trading Assistant
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> AI-powered trading assistant that provides comprehensive resistance and support 
          analysis for any token. Get real-time technical indicators, trading signals, and risk assessment to make 
          informed trading decisions with confidence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Token Selection */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500 mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Select Token for Analysis</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <select
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Choose a token...</option>
              {tokenList.map((token, index) => (
                <option key={index} value={token.symbol}>
                  {token.symbol} - {token.name} ({token.network})
                </option>
              ))}
            </select>

            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="1d">1 Day</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="90d">90 Days</option>
            </select>

            <button
              onClick={handleTokenAnalysis}
              disabled={loading || !selectedToken}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze Token'}
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <p className="text-gray-400 mt-4">AI is analyzing {selectedToken}...</p>
          </div>
        )}

        {/* Analysis Results */}
        {analysis && !loading && (
          <div className="space-y-8">
            {/* Token Overview */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{analysis.token}</h3>
                  <p className="text-gray-400">Trading Analysis & Technical Indicators</p>
                </div>
                <div className="flex flex-col items-end mt-4 md:mt-0">
                  <p className="text-3xl font-bold text-white">{analysis.currentPrice}</p>
                  <p className={`text-lg ${analysis.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {analysis.change24h}
                  </p>
                </div>
              </div>
            </div>

            {/* Support & Resistance Levels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Support Levels */}
              <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Support Levels</h3>
                <div className="space-y-3">
                  {analysis.supportLevels.map((level, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded">
                      <div>
                        <p className="text-white font-semibold">{level.price}</p>
                        <p className={`text-sm ${getStrengthColor(level.strength)}`}>
                          {level.strength} Support
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Volume</p>
                        <p className="text-white text-sm">{level.volume}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resistance Levels */}
              <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Resistance Levels</h3>
                <div className="space-y-3">
                  {analysis.resistanceLevels.map((level, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded">
                      <div>
                        <p className="text-white font-semibold">{level.price}</p>
                        <p className={`text-sm ${getStrengthColor(level.strength)}`}>
                          {level.strength} Resistance
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Volume</p>
                        <p className="text-white text-sm">{level.volume}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Indicators */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Technical Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-gray-400 text-sm">RSI</p>
                  <p className="text-white font-semibold">{analysis.technicalIndicators.rsi}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-gray-400 text-sm">MACD</p>
                  <p className="text-white font-semibold">{analysis.technicalIndicators.macd}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-gray-400 text-sm">Bollinger Bands</p>
                  <p className="text-white font-semibold">{analysis.technicalIndicators.bollingerBands}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-gray-400 text-sm">20 SMA</p>
                  <p className="text-white font-semibold">{analysis.technicalIndicators.movingAverages.sma20}</p>
                </div>
              </div>
            </div>

            {/* Trading Signals */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Trading Signals</h3>
              <div className="space-y-3">
                {analysis.tradingSignals.map((signal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        signal.type === 'Buy' ? 'bg-green-600 text-white' :
                        signal.type === 'Sell' ? 'bg-red-600 text-white' :
                        signal.type === 'Hold' ? 'bg-yellow-600 text-white' :
                        'bg-blue-600 text-white'
                      }`}>
                        {signal.type}
                      </span>
                      <span className={`text-sm ${getStrengthColor(signal.strength)}`}>
                        {signal.strength}
                      </span>
                    </div>
                    <p className="text-white text-sm">{signal.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Risk Assessment</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Risk Level</p>
                  <p className={`text-xl font-semibold ${getStrengthColor(analysis.riskAssessment.riskLevel)}`}>
                    {analysis.riskAssessment.riskLevel}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Volatility</p>
                  <p className="text-xl font-semibold text-yellow-500">
                    {analysis.riskAssessment.volatility}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Liquidity</p>
                  <p className="text-xl font-semibold text-green-400">
                    {analysis.riskAssessment.liquidity}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Market Sentiment</p>
                  <p className="text-xl font-semibold text-green-400">
                    {analysis.riskAssessment.marketSentiment}
                  </p>
                </div>
              </div>
            </div>

            {/* Price Chart */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Price Chart (10 Days)</h3>
              <Line data={getChartData()} options={chartOptions} />
            </div>

            {/* AI Recommendations */}
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-semibold text-green-400 mb-4">AI Trading Recommendations</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 text-xl">💡</span>
                  <div>
                    <p className="text-white font-semibold">Entry Strategy</p>
                    <p className="text-gray-400 text-sm">
                      Consider buying at support levels around $0.00001150 with stop loss at $0.00001080
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">🎯</span>
                  <div>
                    <p className="text-white font-semibold">Take Profit Targets</p>
                    <p className="text-gray-400 text-sm">
                      Set profit targets at resistance levels: $0.00001320, $0.00001450, $0.00001600
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">⚠️</span>
                  <div>
                    <p className="text-white font-semibold">Risk Management</p>
                    <p className="text-gray-400 text-sm">
                      High volatility detected. Use proper position sizing and consider trailing stops
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Technical Analysis</h3>
            <p className="text-gray-400 text-sm">
              Advanced technical indicators and chart patterns for informed decisions
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Support & Resistance</h3>
            <p className="text-gray-400 text-sm">
              AI-powered identification of key support and resistance levels
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">AI Signals</h3>
            <p className="text-gray-400 text-sm">
              Real-time trading signals and risk assessment powered by AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingAssistant; 