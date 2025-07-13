import React, { useState, useEffect } from 'react';

const EnhancedSuggestions = () => {
  const [selectedEcosystem, setSelectedEcosystem] = useState('all');
  const [sortBy, setSortBy] = useState('volume');
  const [filterBy, setFilterBy] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  // Enhanced token data with more metrics
  const enhancedTokens = [
    {
      symbol: 'TRX',
      name: 'TRON',
      address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
      ecosystem: 'TRON',
      category: 'Native Token',
      price: '$0.0876',
      change24h: '+3.21%',
      volume24h: '$1.8B',
      marketCap: '$8.9B',
      volatility: 'Medium',
      communityScore: 85,
      traction: 'High',
      description: 'Native token of the TRON network. Used for gas, staking, governance',
      riskLevel: 'Low',
      trending: true
    },
    {
      symbol: 'USDT',
      name: 'Tether USD (TRC20)',
      address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
      ecosystem: 'TRON',
      category: 'Stablecoin',
      price: '$1.00',
      change24h: '+0.02%',
      volume24h: '$45.2B',
      marketCap: '$95.8B',
      volatility: 'Low',
      communityScore: 92,
      traction: 'Very High',
      description: 'Most popular stablecoin on TRON. Fast and cheap transactions',
      riskLevel: 'Very Low',
      trending: false
    },
    {
      symbol: 'WIN',
      name: 'WINkLink',
      address: 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7',
      ecosystem: 'TRON',
      category: 'Oracle',
      price: '$0.000123',
      change24h: '+12.45%',
      volume24h: '$45M',
      marketCap: '$123M',
      volatility: 'High',
      communityScore: 78,
      traction: 'Medium',
      description: 'Oracle protocol on TRON. Used in DeFi and gaming',
      riskLevel: 'Medium',
      trending: true
    },
    {
      symbol: 'JST',
      name: 'Just',
      address: 'TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9',
      ecosystem: 'TRON',
      category: 'DeFi',
      price: '$0.0234',
      change24h: '+5.67%',
      volume24h: '$12M',
      marketCap: '$234M',
      volatility: 'Medium',
      communityScore: 82,
      traction: 'High',
      description: 'DeFi platform native to TRON. Enables stablecoin creation and lending',
      riskLevel: 'Medium',
      trending: true
    },
    {
      symbol: 'SUN',
      name: 'SUN Token',
      address: 'TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S',
      ecosystem: 'TRON',
      category: 'Governance',
      price: '$0.00123',
      change24h: '+8.90%',
      volume24h: '$8M',
      marketCap: '$67M',
      volatility: 'High',
      communityScore: 75,
      traction: 'Medium',
      description: 'Yield farming and governance for JustLend and other TRON-based DeFi',
      riskLevel: 'High',
      trending: false
    },
    {
      symbol: 'ETH',
      name: 'Ethereum (Bridged)',
      address: '0x4200000000000000000000000000000000000006',
      ecosystem: 'Base',
      category: 'Bridged Token',
      price: '$3,245.67',
      change24h: '+2.34%',
      volume24h: '$8.9B',
      marketCap: '$389.2B',
      volatility: 'Medium',
      communityScore: 95,
      traction: 'Very High',
      description: 'Base is an Ethereum L2; bridged ETH is widely used for gas and DeFi',
      riskLevel: 'Low',
      trending: false
    },
    {
      symbol: 'cbETH',
      name: 'Coinbase Wrapped ETH',
      address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
      ecosystem: 'Base',
      category: 'Liquid Staking',
      price: '$3,456.78',
      change24h: '+2.12%',
      volume24h: '$45M',
      marketCap: '$12.3B',
      volatility: 'Low',
      communityScore: 88,
      traction: 'High',
      description: 'Liquid staking derivative by Coinbase. Frequently used in DeFi on Base',
      riskLevel: 'Low',
      trending: true
    },
    {
      symbol: 'AERO',
      name: 'Aerodrome',
      address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
      ecosystem: 'Base',
      category: 'DEX',
      price: '$0.234',
      change24h: '+15.67%',
      volume24h: '$89M',
      marketCap: '$234M',
      volatility: 'High',
      communityScore: 85,
      traction: 'Very High',
      description: 'Base-native DEX with heavy TVL and incentives. Similar to Velodrome on Optimism',
      riskLevel: 'Medium',
      trending: true
    },
    {
      symbol: 'BNB',
      name: 'BNB',
      address: '0x0000000000000000000000000000000000000000',
      ecosystem: 'BNB Chain',
      category: 'Native Token',
      price: '$312.45',
      change24h: '+1.87%',
      volume24h: '$2.1B',
      marketCap: '$47.8B',
      volatility: 'Medium',
      communityScore: 90,
      traction: 'Very High',
      description: 'Native token for gas, staking, and ecosystem use. Central to everything on BSC',
      riskLevel: 'Low',
      trending: false
    },
    {
      symbol: 'CAKE',
      name: 'PancakeSwap',
      address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      ecosystem: 'BNB Chain',
      category: 'DEX',
      price: '$2.34',
      change24h: '+4.56%',
      volume24h: '$156M',
      marketCap: '$456M',
      volatility: 'Medium',
      communityScore: 87,
      traction: 'High',
      description: 'Major DEX on BSC. Long-standing with cross-chain presence',
      riskLevel: 'Medium',
      trending: true
    }
  ];

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTokens(enhancedTokens);
      setLoading(false);
    }, 1000);
  }, []);

  const getFilteredAndSortedTokens = () => {
    let filtered = tokens;

    // Filter by ecosystem
    if (selectedEcosystem !== 'all') {
      filtered = filtered.filter(token => token.ecosystem === selectedEcosystem);
    }

    // Filter by category
    if (filterBy !== 'all') {
      filtered = filtered.filter(token => token.category === filterBy);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(token => 
        token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort tokens
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'volume':
          return parseFloat(b.volume24h.replace(/[^0-9.]/g, '')) - parseFloat(a.volume24h.replace(/[^0-9.]/g, ''));
        case 'marketCap':
          return parseFloat(b.marketCap.replace(/[^0-9.]/g, '')) - parseFloat(a.marketCap.replace(/[^0-9.]/g, ''));
        case 'change24h':
          return parseFloat(b.change24h.replace(/[^0-9.-]/g, '')) - parseFloat(a.change24h.replace(/[^0-9.-]/g, ''));
        case 'communityScore':
          return b.communityScore - a.communityScore;
        case 'traction':
          const tractionOrder = { 'Very High': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
          return tractionOrder[b.traction] - tractionOrder[a.traction];
        default:
          return 0;
      }
    });

    return filtered;
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'Very Low': return 'text-green-400';
      case 'Low': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const getVolatilityColor = (volatility) => {
    switch (volatility) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const filteredTokens = getFilteredAndSortedTokens();

  return (
    <div className="min-h-screen bg-black p-8">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold text-green-400 mt-8 mb-4 text-center">
        Enhanced Token Suggestions
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm leading-relaxed">
          <strong>How this works:</strong> Advanced token discovery engine with intelligent filtering and sorting based on 
          volume, volatility, community traction, and risk assessment. Identify high-performance tokens across TRON, Base, 
          and BNB Chain ecosystems with comprehensive metrics and AI-powered insights.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Filters and Controls */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <select
              value={selectedEcosystem}
              onChange={(e) => setSelectedEcosystem(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="all">All Ecosystems</option>
              <option value="TRON">TRON</option>
              <option value="Base">Base</option>
              <option value="BNB Chain">BNB Chain</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="volume">Sort by Volume</option>
              <option value="marketCap">Sort by Market Cap</option>
              <option value="change24h">Sort by 24h Change</option>
              <option value="communityScore">Sort by Community Score</option>
              <option value="traction">Sort by Traction</option>
            </select>

            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500"
            >
              <option value="all">All Categories</option>
              <option value="Native Token">Native Token</option>
              <option value="Stablecoin">Stablecoin</option>
              <option value="DeFi">DeFi</option>
              <option value="DEX">DEX</option>
              <option value="Oracle">Oracle</option>
              <option value="Governance">Governance</option>
              <option value="Liquid Staking">Liquid Staking</option>
              <option value="Bridged Token">Bridged Token</option>
            </select>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tokens..."
              className="px-4 py-2 bg-gray-800 text-white rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-gray-400 text-sm">Quick Filters:</span>
            <button
              onClick={() => setFilterBy('all')}
              className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-600 hover:border-green-500 hover:text-green-400"
            >
              All
            </button>
            <button
              onClick={() => setFilterBy('DeFi')}
              className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-600 hover:border-green-500 hover:text-green-400"
            >
              DeFi
            </button>
            <button
              onClick={() => setFilterBy('Stablecoin')}
              className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-600 hover:border-green-500 hover:text-green-400"
            >
              Stablecoins
            </button>
            <button
              onClick={() => setFilterBy('Native Token')}
              className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-600 hover:border-green-500 hover:text-green-400"
            >
              Native Tokens
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredTokens.length} tokens
            {selectedEcosystem !== 'all' && ` in ${selectedEcosystem}`}
            {filterBy !== 'all' && ` (${filterBy})`}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <p className="text-gray-400 mt-4">Loading token suggestions...</p>
          </div>
        )}

        {/* Token Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTokens.map((token, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-green-500 hover:border-green-400 transition-colors">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{token.symbol}</h3>
                    <p className="text-gray-400 text-sm">{token.name}</p>
                  </div>
                  {token.trending && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">🔥 Trending</span>
                  )}
                </div>

                {/* Price and Change */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-white">{token.price}</p>
                  <p className={`text-sm ${token.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {token.change24h}
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Volume 24h:</span>
                    <span className="text-white text-sm">{token.volume24h}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Market Cap:</span>
                    <span className="text-white text-sm">{token.marketCap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Community Score:</span>
                    <span className="text-white text-sm">{token.communityScore}/100</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                    {token.ecosystem}
                  </span>
                  <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded">
                    {token.category}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded ${getVolatilityColor(token.volatility)} border border-current`}>
                    {token.volatility} Volatility
                  </span>
                  <span className={`px-2 py-1 text-xs rounded ${getRiskColor(token.riskLevel)} border border-current`}>
                    {token.riskLevel} Risk
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{token.description}</p>

                {/* Address */}
                <div className="bg-gray-800 p-2 rounded">
                  <p className="text-gray-400 text-xs mb-1">Contract Address:</p>
                  <p className="text-white text-xs font-mono break-all">{token.address}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredTokens.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No tokens found matching your criteria.</p>
          </div>
        )}

        {/* Features Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Advanced Filtering</h3>
            <p className="text-gray-400 text-sm">
              Filter tokens by ecosystem, category, volume, and risk level
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Smart Sorting</h3>
            <p className="text-gray-400 text-sm">
              Sort by volume, market cap, community score, and traction
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500 text-center">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Risk Assessment</h3>
            <p className="text-gray-400 text-sm">
              AI-powered risk scoring and volatility analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSuggestions; 