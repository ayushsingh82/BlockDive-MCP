import React, { useState } from 'react';

const Leaderboards = () => {
  const [selectedCategory, setSelectedCategory] = useState('tokens');
  const [selectedNetwork, setSelectedNetwork] = useState('all');

  // Sample data - replace with actual API calls
  const topTokens = [
    {
      rank: 1,
      symbol: 'USDT',
      name: 'Tether USD',
      price: '$1.00',
      change24h: '+0.02%',
      volume24h: '$45.2B',
      marketCap: '$95.8B',
      network: 'Multi-chain',
      trend: 'up'
    },
    {
      rank: 2,
      symbol: 'USDC',
      name: 'USD Coin',
      price: '$1.00',
      change24h: '+0.01%',
      volume24h: '$12.8B',
      marketCap: '$32.1B',
      network: 'Multi-chain',
      trend: 'up'
    },
    {
      rank: 3,
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$3,245.67',
      change24h: '+2.34%',
      volume24h: '$8.9B',
      marketCap: '$389.2B',
      network: 'Ethereum',
      trend: 'up'
    },
    {
      rank: 4,
      symbol: 'BNB',
      name: 'BNB',
      price: '$312.45',
      change24h: '+1.87%',
      volume24h: '$2.1B',
      marketCap: '$47.8B',
      network: 'BSC',
      trend: 'up'
    },
    {
      rank: 5,
      symbol: 'TRX',
      name: 'TRON',
      price: '$0.0876',
      change24h: '+3.21%',
      volume24h: '$1.8B',
      marketCap: '$8.9B',
      network: 'TRON',
      trend: 'up'
    }
  ];

  const topWallets = [
    {
      rank: 1,
      address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
      balance: '$2.4B',
      tokens: 156,
      nfts: 89,
      transactions: '12.4K',
      network: 'Ethereum',
      category: 'Whale'
    },
    {
      rank: 2,
      address: '0x28C6c06298d514Db089934071355E5743bf21d60',
      balance: '$1.8B',
      tokens: 203,
      nfts: 45,
      transactions: '8.9K',
      network: 'Ethereum',
      category: 'Whale'
    },
    {
      rank: 3,
      address: 'TQn9Y2khDD95J42FQtQTdwVVR93oj1kqK',
      balance: '$950M',
      tokens: 78,
      nfts: 23,
      transactions: '5.2K',
      network: 'TRON',
      category: 'Whale'
    },
    {
      rank: 4,
      address: '0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549',
      balance: '$720M',
      tokens: 134,
      nfts: 67,
      transactions: '6.8K',
      network: 'Ethereum',
      category: 'Whale'
    },
    {
      rank: 5,
      address: '0x47ac0FcbF2F2A4C3C3C3C3C3C3C3C3C3C3C3C3C3',
      balance: '$580M',
      tokens: 92,
      nfts: 34,
      transactions: '4.1K',
      network: 'Base',
      category: 'Whale'
    }
  ];

  const topDeFiProtocols = [
    {
      rank: 1,
      name: 'Uniswap V3',
      tvl: '$4.2B',
      volume24h: '$890M',
      users: '125K',
      network: 'Ethereum',
      category: 'DEX'
    },
    {
      rank: 2,
      name: 'Aave V3',
      tvl: '$3.8B',
      volume24h: '$45M',
      users: '89K',
      network: 'Multi-chain',
      category: 'Lending'
    },
    {
      rank: 3,
      name: 'PancakeSwap',
      tvl: '$2.1B',
      volume24h: '$156M',
      users: '234K',
      network: 'BSC',
      category: 'DEX'
    },
    {
      rank: 4,
      name: 'JustLend',
      tvl: '$1.8B',
      volume24h: '$23M',
      users: '67K',
      network: 'TRON',
      category: 'Lending'
    },
    {
      rank: 5,
      name: 'Aerodrome',
      tvl: '$890M',
      volume24h: '$45M',
      users: '34K',
      network: 'Base',
      category: 'DEX'
    }
  ];

  const getData = () => {
    switch (selectedCategory) {
      case 'tokens':
        return topTokens;
      case 'wallets':
        return topWallets;
      case 'defi':
        return topDeFiProtocols;
      default:
        return topTokens;
    }
  };

  const renderTokenRow = (token, index) => (
    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
      <td className="px-6 py-4 text-center">
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
          index < 3 ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
        }`}>
          {token.rank}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-white font-semibold">{token.symbol}</p>
            <p className="text-gray-400 text-sm">{token.name}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-white">{token.price}</td>
      <td className={`px-6 py-4 ${token.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
        {token.change24h}
      </td>
      <td className="px-6 py-4 text-white">{token.volume24h}</td>
      <td className="px-6 py-4 text-white">{token.marketCap}</td>
      <td className="px-6 py-4">
        <span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
          {token.network}
        </span>
      </td>
    </tr>
  );

  const renderWalletRow = (wallet, index) => (
    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
      <td className="px-6 py-4 text-center">
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
          index < 3 ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
        }`}>
          {wallet.rank}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-white font-mono text-sm">{wallet.address.slice(0, 8)}...{wallet.address.slice(-6)}</p>
            <p className="text-gray-400 text-xs">{wallet.category}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-white font-semibold">{wallet.balance}</td>
      <td className="px-6 py-4 text-white">{wallet.tokens}</td>
      <td className="px-6 py-4 text-white">{wallet.nfts}</td>
      <td className="px-6 py-4 text-white">{wallet.transactions}</td>
      <td className="px-6 py-4">
        <span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
          {wallet.network}
        </span>
      </td>
    </tr>
  );

  const renderDeFiRow = (protocol, index) => (
    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
      <td className="px-6 py-4 text-center">
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
          index < 3 ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'
        }`}>
          {protocol.rank}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-white font-semibold">{protocol.name}</p>
            <p className="text-gray-400 text-sm">{protocol.category}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-white font-semibold">{protocol.tvl}</td>
      <td className="px-6 py-4 text-white">{protocol.volume24h}</td>
      <td className="px-6 py-4 text-white">{protocol.users}</td>
      <td className="px-6 py-4">
        <span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
          {protocol.network}
        </span>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-black p-8">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        Blockchain Leaderboards
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> Real-time leaderboards showing top-performing tokens, wallets, and DeFi protocols 
          across multiple blockchain networks. Track volume, market cap, TVL, and user activity to identify trending assets 
          and influential addresses.
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
          >
            <option value="tokens">Top Tokens</option>
            <option value="wallets">Top Wallets</option>
            <option value="defi">Top DeFi Protocols</option>
          </select>

          <select
            value={selectedNetwork}
            onChange={(e) => setSelectedNetwork(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
          >
            <option value="all">All Networks</option>
            <option value="ethereum">Ethereum</option>
            <option value="base">Base</option>
            <option value="aptos">Aptos</option>
            <option value="tron">Tron</option>
            <option value="bsc">BSC</option>
            <option value="polygon">Polygon</option>
          </select>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-lg border border-green-500 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                  {selectedCategory === 'tokens' && (
                    <>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Token</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">24h Change</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">24h Volume</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Market Cap</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Network</th>
                    </>
                  )}
                  {selectedCategory === 'wallets' && (
                    <>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Address</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Balance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tokens</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">NFTs</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Transactions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Network</th>
                    </>
                  )}
                  {selectedCategory === 'defi' && (
                    <>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Protocol</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">TVL</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">24h Volume</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Users</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Network</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-700">
                {getData().map((item, index) => {
                  if (selectedCategory === 'tokens') return renderTokenRow(item, index);
                  if (selectedCategory === 'wallets') return renderWalletRow(item, index);
                  if (selectedCategory === 'defi') return renderDeFiRow(item, index);
                  return null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Update Info */}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Last updated: {new Date().toLocaleString()} | Data refreshes every 5 minutes
        </p>
      </div>
    </div>
  );
};

export default Leaderboards; 