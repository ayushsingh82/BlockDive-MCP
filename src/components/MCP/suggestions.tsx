import React from 'react';

// Ecosystem Tokens Data for MCP Server
export const ecosystemTokens = {
  tron: {
    name: "TRON Ecosystem",
    color: "🔷",
    description: "High-performance blockchain platform for decentralized applications",
    tokens: [
      {
        symbol: "TRX",
        name: "TRON",
        address: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb", // TRON mainnet address
        description: "Native token of the TRON network. Used for gas, staking, governance",
        category: "Native Token",
        ecosystem: "TRON"
      },
      {
        symbol: "USDT",
        name: "Tether USD (TRC20)",
        address: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", // USDT on TRON
        description: "Most popular stablecoin on TRON. Fast and cheap transactions",
        category: "Stablecoin",
        ecosystem: "TRON"
      },
      {
        symbol: "WIN",
        name: "WINkLink",
        address: "TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7", // WIN token address
        description: "Oracle protocol on TRON. Used in DeFi and gaming",
        category: "Oracle",
        ecosystem: "TRON"
      },
      {
        symbol: "JST",
        name: "Just",
        address: "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9", // JST token address
        description: "DeFi platform native to TRON. Enables stablecoin creation and lending",
        category: "DeFi",
        ecosystem: "TRON"
      },
      {
        symbol: "SUN",
        name: "SUN Token",
        address: "TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S", // SUN token address
        description: "Yield farming and governance for JustLend and other TRON-based DeFi",
        category: "Governance",
        ecosystem: "TRON"
      }
    ]
  },
  base: {
    name: "Base Ecosystem (Coinbase L2)",
    color: "🔵",
    description: "Ethereum L2 solution by Coinbase for scalable DeFi applications",
    tokens: [
      {
        symbol: "ETH",
        name: "Ethereum (Bridged)",
        address: "0x4200000000000000000000000000000000000006", // WETH on Base
        description: "Base is an Ethereum L2; bridged ETH is widely used for gas and DeFi",
        category: "Bridged Token",
        ecosystem: "Base"
      },
      {
        symbol: "cbETH",
        name: "Coinbase Wrapped ETH",
        address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22", // cbETH address
        description: "Liquid staking derivative by Coinbase. Frequently used in DeFi on Base",
        category: "Liquid Staking",
        ecosystem: "Base"
      },
      {
        symbol: "AERO",
        name: "Aerodrome",
        address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631", // AERO token address
        description: "Base-native DEX with heavy TVL and incentives. Similar to Velodrome on Optimism",
        category: "DEX",
        ecosystem: "Base"
      },
      {
        symbol: "SEAM",
        name: "Seamless Protocol",
        address: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token address
        description: "Lending protocol native to Base. Gaining TVL and ecosystem backing",
        category: "Lending",
        ecosystem: "Base"
      },
      {
        symbol: "MOCHI",
        name: "MOCHI",
        address: "0x0Dd740Db89B9fDA3Baadf7396DdAD702b6E8AE6f", // MOCHI token address
        description: "Meme + DeFi hybrid project native to Base. Popular in early community circles",
        category: "Meme",
        ecosystem: "Base"
      }
    ]
  },
  bnb: {
    name: "BNB Chain (BSC)",
    color: "🟡",
    description: "Binance Smart Chain - high-performance blockchain for DeFi and dApps",
    tokens: [
      {
        symbol: "BNB",
        name: "BNB",
        address: "0x0000000000000000000000000000000000000000", // Native BNB
        description: "Native token for gas, staking, and ecosystem use. Central to everything on BSC",
        category: "Native Token",
        ecosystem: "BNB Chain"
      },
      {
        symbol: "CAKE",
        name: "PancakeSwap",
        address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", // CAKE token address
        description: "Major DEX on BSC. Long-standing with cross-chain presence",
        category: "DEX",
        ecosystem: "BNB Chain"
      },
      {
        symbol: "XVS",
        name: "Venus",
        address: "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63", // XVS token address
        description: "Lending & borrowing protocol. DeFi core infrastructure",
        category: "Lending",
        ecosystem: "BNB Chain"
      },
      {
        symbol: "ALPACA",
        name: "Alpaca Finance",
        address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F", // ALPACA token address
        description: "Yield farming and leveraged yield protocol. Built with a strong DeFi user base",
        category: "Yield Farming",
        ecosystem: "BNB Chain"
      },
      {
        symbol: "BABYDOGE",
        name: "BabyDoge Coin",
        address: "0xc748673057861a797275CD8A068AbB95A902e8de", // BabyDoge address
        description: "Meme tokens with strong branding and community. Often top volume and trending on BSC",
        category: "Meme",
        ecosystem: "BNB Chain"
      },
      {
        symbol: "FLOKI",
        name: "Floki Inu",
        address: "0xfb5B838b6cfEEdC2873aB27866079AC55363D37E", // FLOKI address
        description: "Meme tokens with strong branding and community. Often top volume and trending on BSC",
        category: "Meme",
        ecosystem: "BNB Chain"
      }
    ]
  }
};

// MCP Server Integration Functions
export const mcpFunctions = {
  // Get all ecosystem tokens
  getAllEcosystemTokens: () => {
    return ecosystemTokens;
  },

  // Get tokens by ecosystem
  getTokensByEcosystem: (ecosystem: string) => {
    return ecosystemTokens[ecosystem.toLowerCase()] || null;
  },

  // Get token by symbol
  getTokenBySymbol: (symbol: string) => {
    const allTokens = [];
    Object.values(ecosystemTokens).forEach(ecosystem => {
      allTokens.push(...ecosystem.tokens);
    });
    return allTokens.find(token => token.symbol.toLowerCase() === symbol.toLowerCase());
  },

  // Get tokens by category
  getTokensByCategory: (category: string) => {
    const allTokens = [];
    Object.values(ecosystemTokens).forEach(ecosystem => {
      allTokens.push(...ecosystem.tokens);
    });
    return allTokens.filter(token => token.category.toLowerCase() === category.toLowerCase());
  },

  // Search tokens
  searchTokens: (query: string) => {
    const allTokens = [];
    Object.values(ecosystemTokens).forEach(ecosystem => {
      allTokens.push(...ecosystem.tokens);
    });
    return allTokens.filter(token => 
      token.name.toLowerCase().includes(query.toLowerCase()) ||
      token.symbol.toLowerCase().includes(query.toLowerCase()) ||
      token.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// React Component for displaying ecosystem tokens
const EcosystemTokensSuggestions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-8 text-center">
        Ecosystem Tokens for MCP Server
      </h1>
      
      <div className="max-w-6xl mx-auto space-y-8">
        {Object.entries(ecosystemTokens).map(([key, ecosystem]) => (
          <div key={key} className="bg-gray-900 rounded-lg p-6 border border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{ecosystem.color}</span>
              <h2 className="text-2xl font-bold text-green-400">{ecosystem.name}</h2>
            </div>
            <p className="text-gray-300 mb-6">{ecosystem.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystem.tokens.map((token, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{token.symbol}</h3>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      {token.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{token.name}</p>
                  <p className="text-xs text-gray-500 mb-3">{token.description}</p>
                  <div className="text-xs text-gray-600 font-mono break-all">
                    {token.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcosystemTokensSuggestions;
