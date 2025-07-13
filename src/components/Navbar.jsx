import React, { useState } from 'react';

const gradientStyle = {
  background: 'linear-gradient(to right, #45E1E5, #0052FF, #B82EA4, #FF9533, #7FD057, #45E1E5)',
  height: '4px',
  width: '100%',
  border: 'none',
};

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [analyticsDropdownOpen, setAnalyticsDropdownOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setAnalyticsDropdownOpen(false);
    setAiDropdownOpen(false);
  };

  const toggleAnalyticsDropdown = () => {
    setAnalyticsDropdownOpen(!analyticsDropdownOpen);
    setDropdownOpen(false);
    setAiDropdownOpen(false);
  };

  const toggleAiDropdown = () => {
    setAiDropdownOpen(!aiDropdownOpen);
    setDropdownOpen(false);
    setAnalyticsDropdownOpen(false);
  };

  return (
    <nav>
      <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
        <div className='font-semibold text-2xl text-green-500'>
          <a href='/'>BlockDive-MCP</a>
        </div>
     
        <div className='flex gap-4'>
          {/* Analytics Dropdown */}
          <div className='relative'>
            <button
              onClick={toggleAnalyticsDropdown}
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
              Analytics
            </button>
            {analyticsDropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50'>
                <a href='/analytics' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Token Analytics
                </a>
                <a href='/leaderboards' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Leaderboards
                </a>
              </div>
            )}
          </div>

          {/* AI Dropdown */}
          <div className='relative'>
            <button
              onClick={toggleAiDropdown}
              className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600'
            >
              AI Insights
            </button>
            {aiDropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50'>
                <a href='/ai-insights' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  AI Analysis
                </a>
                <a href='/enhanced-suggestions' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Token Suggestions
                </a>
              </div>
            )}
          </div>

          {/* Original Dropdown */}
          <div className='relative justify-end'>
            <button
              onClick={toggleDropdown}
              className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
            >
              Get Started
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50'>
                <a href='/token' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Tokens
                </a>
                <a href='/nft' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  NFTs
                </a>
                <a href='/aptosaccounts' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Aptos Account
                </a>
                <a href='/aptostxns' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Aptos Transactions
                </a>
                <a href='/ethnft' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Ethereum NFT
                </a>
                <a href='/ethtoken' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Ethereum Token
                </a>
                <a href='/base' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Base
                </a>
                <a href='/arbitrum' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Arbitrum
                </a>
                <a href='/explorer' className='block px-4 py-2 text-black hover:bg-gray-200'>
                  Multichain
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={gradientStyle} />
    </nav>
  );
}

export default Navbar;
