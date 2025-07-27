import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TopPerformers = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [selectedNetwork, setSelectedNetwork] = useState('all');
  const [performers, setPerformers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sample data - replace with actual API calls
  const topPerformersData = [
    {
      rank: 1,
      symbol: 'PEPE',
      name: 'Pepe',
      address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      network: 'Ethereum',
      price: '$0.00001234',
      change24h: '+45.67%',
      change7d: '+234.56%',
      change30d: '+567.89%',
      volume24h: '$89.2M',
      volume7d: '$456.7M',
      marketCap: '$5.2B',
      holders: '234.5K',
      liquidity: '$12.3M',
      trend: 'bullish',
      category: 'Meme',
      riskLevel: 'High',
      volumeChart: [1200, 1900, 3000, 5000, 2000, 3000, 4000, 6000, 8000, 12000],
      priceChart: [0.000008, 0.000009, 0.000010, 0.000011, 0.000012, 0.000013, 0.000014, 0.000015, 0.000016, 0.000017]
    },
    {
      rank: 2,
      symbol: 'SHIB',
      name: 'Shiba Inu',
      address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
      network: 'Ethereum',
      price: '$0.00002345',
      change24h: '+23.45%',
      change7d: '+123.45%',
      change30d: '+345.67%',
      volume24h: '$67.8M',
      volume7d: '$234.5M',
      marketCap: '$13.8B',
      holders: '1.2M',
      liquidity: '$45.6M',
      trend: 'bullish',
      category: 'Meme',
      riskLevel: 'Medium',
      volumeChart: [800, 1200, 1800, 2200, 1500, 2000, 2500, 3000, 3500, 4000],
      priceChart: [0.000018, 0.000019, 0.000020, 0.000021, 0.000022, 0.000023, 0.000024, 0.000025, 0.000026, 0.000027]
    },
    {
      rank: 3,
      symbol: 'DOGE',
      name: 'Dogecoin',
      address: '0x3832d2F059E55934220881F831bE501D180671A7',
      network: 'Ethereum',
      price: '$0.1234',
      change24h: '+12.34%',
      change7d: '+67.89%',
      change30d: '+123.45%',
      volume24h: '$45.6M',
      volume7d: '$189.3M',
      marketCap: '$17.8B',
      holders: '890K',
      liquidity: '$23.4M',
      trend: 'bullish',
      category: 'Meme',
      riskLevel: 'Medium',
      volumeChart: [600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300],
      priceChart: [0.110, 0.112, 0.114, 0.116, 0.118, 0.120, 0.122, 0.124, 0.126, 0.128]
    },
    {
      rank: 4,
      symbol: 'FLOKI',
      name: 'Floki Inu',
      address: '0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E',
      network: 'Ethereum',
      price: '$0.00003456',
      change24h: '+34.56%',
      change7d: '+156.78%',
      change30d: '+289.12%',
      volume24h: '$34.5M',
      volume7d: '$145.6M',
      marketCap: '$3.4B',
      holders: '156.7K',
      liquidity: '$18.9M',
      trend: 'bullish',
      category: 'Meme',
      riskLevel: 'High',
      volumeChart: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
      priceChart: [0.000025, 0.000026, 0.000027, 0.000028, 0.000029, 0.000030, 0.000031, 0.000032, 0.000033, 0.000034]
    },
    {
      rank: 5,
      symbol: 'BONK',
      name: 'Bonk',
      address: '0xA697e272a73744b343528C3Dc4702F96AeA2DeAa',
      network: 'Solana',
      price: '$0.00004567',
      change24h: '+56.78%',
      change7d: '+234.56%',
      change30d: '+456.78%',
      volume24h: '$23.4M',
      volume7d: '$98.7M',
      marketCap: '$2.8B',
      holders: '89.3K',
      liquidity: '$12.3M',
      trend: 'bullish',
      category: 'Meme',
      riskLevel: 'High',
      volumeChart: [300, 450, 600, 750, 900, 1050, 1200, 1350, 1500, 1650],
      priceChart: [0.000029, 0.000030, 0.000031, 0.000032, 0.000033, 0.000034, 0.000035, 0.000036, 0.000037, 0.000038]
    }
  ];

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPerformers(topPerformersData);
      setLoading(false);
    }, 1000);
  }, []);

  const getVolumeChartData = (token) => ({
    labels: ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d'],
    datasets: [
      {
        label: 'Volume (M)',
        data: token.volumeChart,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      }
    ]
  });

  const getPriceChartData = (token) => ({
    labels: ['1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d'],
    datasets: [
      {
        label: 'Price',
        data: token.priceChart,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#fff',
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const getTrendColor = (trend) => {
    return trend === 'bullish' ? 'text-green-400' : 'text-red-400';
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black p-8">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        Top Performing Tokens
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> Real-time tracking of the highest performing tokens across all networks. 
          Monitor volume trends, price movements, and market dynamics to identify the most active and profitable 
          trading opportunities with comprehensive risk assessment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Controls */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>

            <select
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="all">All Networks</option>
              <option value="ethereum">Ethereum</option>
              <option value="solana">Solana</option>
              <option value="bsc">BSC</option>
              <option value="polygon">Polygon</option>
              <option value="base">Base</option>
            </select>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <p className="text-gray-400 mt-4">Loading top performers...</p>
          </div>
        )}

        {/* Top Performers Grid */}
        {!loading && (
          <div className="space-y-6">
            {performers.map((token, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-green-500">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      index < 3 ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
                    } font-bold text-lg`}>
                      {token.rank}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{token.symbol}</h3>
                      <p className="text-gray-400">{token.name}</p>
                      <p className="text-gray-500 text-sm font-mono">{token.address.slice(0, 8)}...{token.address.slice(-6)}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {token.network}
                    </span>
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {token.category}
                    </span>
                    <span className={`px-3 py-1 text-sm rounded-full border ${getRiskColor(token.riskLevel)} border-current`}>
                      {token.riskLevel} Risk
                    </span>
                    <span className={`px-3 py-1 text-sm rounded-full border ${getTrendColor(token.trend)} border-current`}>
                      {token.trend.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Price and Changes */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Current Price</p>
                    <p className="text-2xl font-bold text-white">{token.price}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">24h Change</p>
                    <p className={`text-xl font-bold ${token.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change24h}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">7d Change</p>
                    <p className={`text-xl font-bold ${token.change7d.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change7d}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">30d Change</p>
                    <p className={`text-xl font-bold ${token.change30d.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change30d}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">24h Volume</p>
                    <p className="text-white font-semibold">{token.volume24h}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">7d Volume</p>
                    <p className="text-white font-semibold">{token.volume7d}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Market Cap</p>
                    <p className="text-white font-semibold">{token.marketCap}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Holders</p>
                    <p className="text-white font-semibold">{token.holders}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Liquidity</p>
                    <p className="text-white font-semibold">{token.liquidity}</p>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-green-400 font-semibold mb-3">Volume Trend (10 Days)</h4>
                    <Line data={getVolumeChartData(token)} options={chartOptions} />
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-green-400 font-semibold mb-3">Price Trend (10 Days)</h4>
                    <Line data={getPriceChartData(token)} options={chartOptions} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Market Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Total Volume 24h</h4>
            <p className="text-3xl font-bold text-white">$260.5M</p>
            <p className="text-green-500 text-sm">+15.7%</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Active Tokens</h4>
            <p className="text-3xl font-bold text-white">1,234</p>
            <p className="text-green-500 text-sm">+23.4%</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Avg Gain</h4>
            <p className="text-3xl font-bold text-white">+34.6%</p>
            <p className="text-green-500 text-sm">+8.9%</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Market Sentiment</h4>
            <p className="text-3xl font-bold text-white">Bullish</p>
            <p className="text-green-500 text-sm">+12.3%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPerformers; 