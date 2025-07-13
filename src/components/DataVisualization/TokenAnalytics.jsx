import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
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
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const TokenAnalytics = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');
  const [timeRange, setTimeRange] = useState('7d');

  // Sample data - replace with actual API calls
  const tokenFlowData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Token Transfers',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 4000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
      {
        label: 'NFT Transfers',
        data: [800, 1200, 1800, 2200, 1500, 2000, 2500],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const dailyActivityData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Transactions/Hour',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
      },
    ],
  };

  const assetDistributionData = {
    labels: ['USDT', 'USDC', 'ETH', 'BTC', 'Other'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  const walletDistributionData = {
    labels: ['Whales (>$1M)', 'Large ($100K-$1M)', 'Medium ($10K-$100K)', 'Small (<$10K)'],
    datasets: [
      {
        data: [5, 15, 35, 45],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Token Analytics Dashboard',
        color: '#fff',
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

  return (
    <div className="min-h-screen bg-black p-8">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        Token Analytics Dashboard
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> Comprehensive analytics dashboard showing token flows, daily activity patterns, 
          and asset distribution across different wallet categories. Real-time data visualization for better insight 
          comprehension across multiple blockchain networks.
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
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

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Token Flow Chart */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Token Flow Activity</h3>
          <Line data={tokenFlowData} options={chartOptions} />
        </div>

        {/* Daily Activity Chart */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Daily Activity Breakdown</h3>
          <Bar data={dailyActivityData} options={chartOptions} />
        </div>

        {/* Asset Distribution */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Asset Distribution</h3>
          <Pie data={assetDistributionData} options={chartOptions} />
        </div>

        {/* Wallet Distribution */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Wallet Distribution</h3>
          <Doughnut data={walletDistributionData} options={chartOptions} />
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Total Volume</h4>
            <p className="text-2xl font-bold text-white">$2.4B</p>
            <p className="text-green-500 text-sm">+12.5%</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Active Wallets</h4>
            <p className="text-2xl font-bold text-white">45.2K</p>
            <p className="text-green-500 text-sm">+8.3%</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Transactions</h4>
            <p className="text-2xl font-bold text-white">1.2M</p>
            <p className="text-green-500 text-sm">+15.7%</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <h4 className="text-green-400 font-semibold">Gas Used</h4>
            <p className="text-2xl font-bold text-white">8.9K ETH</p>
            <p className="text-red-500 text-sm">-2.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenAnalytics; 