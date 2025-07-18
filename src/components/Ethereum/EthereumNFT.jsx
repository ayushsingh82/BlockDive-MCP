import React, { useState } from 'react';

const EthereumNFT = () => {
  const [option, setOption] = useState('account');
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState(null);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
    setInputValue(''); // Reset input value when switching options
    setResults(null);  // Clear previous results
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchNftsByAccount = async () => {
    const url = 'https://web3.nodit.io/v1/ethereum/mainnet/nft/getNftContractsByAccount';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'X-API-KEY': 'Vpr4FxPyIscI2DlzIwTSJ3JebtUf5_W1'
      },
      body: JSON.stringify({ accountAddress: inputValue, withCount: false })
    };
    const response = await fetch(url, options);
    const data = await response.json();
    setResults(data);
  };

  const fetchNftsByContract = async () => {
    const url = 'https://web3.nodit.io/v1/ethereum/mainnet/nft/getNftContractMetadataByContracts';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
         'X-API-KEY': 'Vpr4FxPyIscI2DlzIwTSJ3JebtUf5_W1'
      },
      body: JSON.stringify({
        contractAddresses: inputValue.split(','), // Support multiple contracts
      })
    };
    const response = await fetch(url, options);
    const data = await response.json();
    setResults(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (option === 'account') {
      fetchNftsByAccount();
    } else {
      fetchNftsByContract();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* H1 Header */}
      <h1 className="text-4xl font-bold mt-[70px] text-green-400 mt-8 mb-4 text-center absolute top-8 left-1/2 transform -translate-x-1/2">
        Ethereum NFT API Explorer
      </h1>
      
      {/* Flow Explanation */}
      <div className="text-gray-300 text-center max-w-2xl mx-auto px-4 mb-8 absolute top-24 left-1/2 transform -translate-x-1/2">
        <p className="text-sm leading-relaxed mt-[70px]">
          <strong>How this MCP works:</strong> Choose between fetching NFTs by account or contract. The API connects to Nodit's Web3 Data API 
          for Ethereum mainnet, queries NFT contracts and metadata, and returns comprehensive NFT data including contract information 
          and ownership details. <strong>Input needed:</strong> Selection of query type (account/contract) and corresponding address.
        </p>
      </div>
    
      <div className="p-8 bg-black rounded-lg border-4 border-transparent bg-clip-padding max-w-3xl w-full" style={{ borderImage: 'linear-gradient(90deg, #FF0080, #7928CA) 1' }}>
        <h2 className="text-white text-xl font-semibold mb-4 text-purple-500">Fetch Ethereum NFTs</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-white mr-4">
              <input
                type="radio"
                value="account"
                checked={option === 'account'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              By Account
            </label>
            <label className="text-white">
              <input
                type="radio"
                value="contract"
                checked={option === 'contract'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              By Contract
            </label>
          </div>

          {option === 'account' && (
            <div className="mb-4">
              <label className="text-white block mb-2">Account Address:</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="p-2 w-full border border-gray-300 rounded bg-black text-white"
                placeholder="Enter Ethereum account address"
                required
              />
            </div>
          )}

          {option === 'contract' && (
            <div className="mb-4">
              <label className="text-white block mb-2">Contract Addresses:</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="p-2 w-full border border-gray-300 rounded bg-black text-white"
                placeholder="Enter contract addresses"
                required
              />
            </div>
          )}

          <button type="submit" className="px-4 py-2 bg-gradient-to-r font-semibold from-pink-500 to-purple-500 text-white rounded hover:bg-pink-700">
            Fetch Data
          </button>
        </form>

        {results && (
          <div className="results mt-6 max-w-full">
            <h3 className="text-white mb-4">Results</h3>
            <div className="overflow-auto max-h-96 border border-gray-300 rounded p-4 bg-gray-900 text-white">
              <pre className="whitespace-pre-wrap">{JSON.stringify(results, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EthereumNFT;




// account - 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
// contract address - 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
