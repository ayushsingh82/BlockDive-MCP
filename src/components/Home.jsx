import React from 'react';
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { BackgroundBeams } from "./ui/background-beams";

const chainLogos = [
  {
    name: 'Ethereum',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg',
  },
  {
    name: 'Solana',
    url: 'https://solana.com/src/img/branding/solanaLogoMark.svg',
  },
  {
    name: 'Polygon',
    url: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
  },
  {
    name: 'Aptos',
    url: 'https://aptoslabs.com/images/aptos-logo.svg',
  },
  {
    name: 'Optimism',
    url: 'https://assets-global.website-files.com/611dbb3c82f69d2ae6cdc7f3/611dbb3c82f69d2ae6cdc7f3_Optimism%20Logo.svg',
  },
  {
    name: 'Base',
    url: 'https://cryptologos.cc/logos/base-logo.svg',
  },
  {
    name: 'Avalanche',
    url: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg',
  },
  {
    name: 'BNB',
    url: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg',
  },
  {
    name: 'Tron',
    url: 'https://cryptologos.cc/logos/tron-trx-logo.svg',
  },
  {
    name: 'Arbitrum',
    url: 'https://cryptologos.cc/logos/arbitrum-arb-logo.svg',
  },
];

const features = [
  {
    title: 'Multi-chain Support',
    desc: 'Track token and NFT activities on Ethereum, Solana, Polygon, Aptos, Optimism, Base, and more.',
    icon: '🌐',
  },
  {
    title: 'Token/NFT Transfer Tracking',
    desc: 'Easily view token transfer activities for any address across supported chains.',
    icon: '🔄',
  },
  {
    title: 'Transaction Details',
    desc: 'Retrieve transaction hashes, block numbers, and estimated gas fees for specific transactions.',
    icon: '🔎',
  },
  {
    title: 'NODIT Integration',
    desc: 'Powered by NODIT, enabling real-time and accurate blockchain data aggregation.',
    icon: '⚡',
  },
  {
    title: 'AI-Ready APIs',
    desc: 'APIs designed for seamless integration with AI agents and developer tools.',
    icon: '🤖',
  },
];

const AboutNodit = () => (
  <section className="max-w-3xl mx-auto my-16 p-8 bg-black/80 rounded-xl shadow-lg border border-green-700">
    <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">What is Nodit MCP?</h2>
    <p className="text-gray-200 mb-2 text-center">
      <b>Nodit MCP (Model Context Protocol)</b> is a standard protocol that enables AI and applications to securely communicate with external systems, retrieve real-time blockchain data, and dynamically expand their context. It powers BlockDive's multi-chain, real-time, AI-ready blockchain explorer.
    </p>
    <p className="text-gray-400 text-center">
      MCP allows LLMs and agents to directly access Nodit's RPC Nodes, Web3 Data APIs, and Indexer APIs, making multi-chain data accessible and actionable for everyone.
    </p>
    <div className="flex justify-center mt-4">
      <a href="https://docs.nodit.io/" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-300">Read the Docs</a>
    </div>
  </section>
);

const FlowDiagram = () => (
  <div className="flex flex-col items-center my-16">
    <h2 className="text-2xl font-bold text-green-400 mb-4">How Everything Connects</h2>
    <div className="w-full flex justify-center">
      <svg width="500" height="220" viewBox="0 0 500 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="90" width="120" height="40" rx="12" fill="#111" stroke="#22c55e" strokeWidth="2"/>
        <text x="90" y="115" textAnchor="middle" fill="#fff" fontSize="16">User / AI Agent</text>
        <rect x="190" y="90" width="120" height="40" rx="12" fill="#111" stroke="#22c55e" strokeWidth="2"/>
        <text x="250" y="115" textAnchor="middle" fill="#fff" fontSize="16">Nodit MCP Server</text>
        <rect x="350" y="30" width="120" height="40" rx="12" fill="#111" stroke="#22c55e" strokeWidth="2"/>
        <text x="410" y="55" textAnchor="middle" fill="#fff" fontSize="14">Ethereum</text>
        <rect x="350" y="90" width="120" height="40" rx="12" fill="#111" stroke="#22c55e" strokeWidth="2"/>
        <text x="410" y="115" textAnchor="middle" fill="#fff" fontSize="14">Solana</text>
        <rect x="350" y="150" width="120" height="40" rx="12" fill="#111" stroke="#22c55e" strokeWidth="2"/>
        <text x="410" y="175" textAnchor="middle" fill="#fff" fontSize="14">Polygon, Aptos, ...</text>
        <polygon points="150,110 190,110" fill="#22c55e" />
        <polygon points="310,110 350,50" fill="#22c55e" />
        <polygon points="310,110 350,110" fill="#22c55e" />
        <polygon points="310,110 350,170" fill="#22c55e" />
        <line x1="150" y1="110" x2="190" y2="110" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="310" y1="110" x2="350" y2="50" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="310" y1="110" x2="350" y2="110" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="310" y1="110" x2="350" y2="170" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
          </marker>
        </defs>
      </svg>
    </div>
    <div className="text-gray-400 text-center mt-4 max-w-xl">
      <b>Flow:</b> User or AI Agent sends a request → Nodit MCP Server routes and processes the request → Data is fetched from multiple blockchains and returned in real time.
    </div>
  </div>
);

const FeaturesSection = () => (
  <section className="max-w-5xl mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
    {features.map((f, i) => (
      <div key={i} className="bg-black/80 border border-green-700 rounded-xl p-6 flex items-start gap-4 shadow-lg">
        <span className="text-3xl">{f.icon}</span>
        <div>
          <h3 className="text-xl font-bold text-green-300 mb-1">{f.title}</h3>
          <p className="text-gray-200">{f.desc}</p>
        </div>
      </div>
    ))}
  </section>
);

const moreChainsList = [
  { name: 'Fantom', url: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg' },
  { name: 'Celo', url: 'https://cryptologos.cc/logos/celo-celo-logo.svg' },
  { name: 'Harmony', url: 'https://cryptologos.cc/logos/harmony-one-logo.svg' },
  { name: 'Moonbeam', url: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.svg' },
  { name: 'Near', url: 'https://cryptologos.cc/logos/near-protocol-near-logo.svg' },
  { name: 'Gnosis', url: 'https://cryptologos.cc/logos/gnosis-gno-logo.svg' },
  { name: 'Aurora', url: 'https://cryptologos.cc/logos/aurora-aurora-logo.svg' },
  { name: 'Klaytn', url: 'https://cryptologos.cc/logos/klaytn-klay-logo.svg' },
  { name: 'OKC', url: 'https://cryptologos.cc/logos/okb-okb-logo.svg' },
  { name: 'Cronos', url: 'https://cryptologos.cc/logos/cronos-cro-logo.svg' },
];

function MoreChains() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mt-6 flex flex-col items-center">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-green-400 underline hover:text-green-300 text-base font-semibold focus:outline-none"
      >
        {open ? 'Hide More Chains' : 'Show More Chains'}
      </button>
      {open && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 bg-black/80 p-6 rounded-xl border border-green-900 shadow-lg">
          {moreChainsList.map((chain) => (
            <div key={chain.name} className="flex flex-col items-center">
              <img
                src={chain.url}
                alt={chain.name + ' Logo'}
                className="h-10 w-auto mb-2 bg-white/10 rounded-lg p-1 border border-green-700 shadow"
                onError={e => { e.target.onerror = null; e.target.style.display = 'none'; }}
              />
              <span className="text-gray-200 text-sm font-medium">{chain.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
        <BackgroundBeams />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-600 mb-4">
            Building the Future of Multi-Chain AI with <span className="text-green-400">Nodit MCP Server</span>
          </h1>
          <div className="flex justify-center mb-4">
            <span className="inline-block bg-green-900/80 text-green-300 px-4 py-1 rounded-full text-sm font-semibold border border-green-500">Powered by Nodit MCP</span>
          </div>
          <p className="text-lg text-gray-200 mb-6">
            Seamlessly connect AI, blockchain, and real-time data across Ethereum, Solana, Polygon, Aptos, and more.
          </p>
          <a href="#features" className="inline-block px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition">Explore Now</a>

          {/* More Chains Option */}
          <MoreChains />
        </div>
        {/* Animated Chain Logos */}
        <motion.div
          className="flex gap-8 mt-16 relative z-10"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 18,
            ease: 'linear',
          }}
        >
          {chainLogos.map((chain, idx) => (
            <img
              key={chain.name}
              src={chain.url}
              alt={chain.name + ' Logo'}
              className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300 bg-white/10 rounded-lg p-2 border border-green-700 shadow"
              style={{ marginLeft: idx === 0 ? 0 : 24 }}
              onError={e => { e.target.onerror = null; e.target.style.display = 'none'; }}
            />
          ))}
        </motion.div>
      </div>

      {/* Flow Diagram */}
      <FlowDiagram />

      {/* Features Section */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* About Nodit MCP */}
      <AboutNodit />

      {/* Community CTA */}
      <div className="my-16 flex flex-col items-center">
        <a href="https://discord.gg/nodit" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transition">Join the Community</a>
        <p className="text-gray-400 mt-2">Connect with other builders and get support on Discord.</p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-green-900 pt-12 pb-10 mt-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400/30 via-green-700/10 to-green-400/30" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="text-green-400 font-extrabold text-2xl mb-2">BlockDive</div>
            <div className="text-gray-300 text-base mb-2">Powered by Nodit MCP &mdash; Multi-chain AI-Ready Blockchain Explorer</div>
            <div className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} BlockDive. All rights reserved.</div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="flex gap-8 text-lg">
              <a href="https://docs.nodit.io/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-gray-300 font-semibold">Docs</a>
              <a href="https://github.com/noditlabs/nodit-mcp-server" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-gray-300 font-semibold flex items-center gap-1">
                <svg width="22" height="22" fill="currentColor" className="inline-block"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
                GitHub
              </a>
              <a href="https://discord.gg/nodit" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-gray-300 font-semibold flex items-center gap-1">
                <svg width="22" height="22" fill="currentColor" className="inline-block"><path d="M19.377 4.486A18.89 18.89 0 0 0 14.885 3.1a.07.07 0 0 0-.073.035c-.32.566-.677 1.304-.927 1.89a17.19 17.19 0 0 0-5.77 0 12.6 12.6 0 0 0-.938-1.89A.07.07 0 0 0 7.1 3.1a18.896 18.896 0 0 0 4.492 1.386.07.07 0 0 0 .073-.035c.32-.566.677-1.304.927-1.89a17.19 17.19 0 0 0 5.77 0c.26.586.617 1.324.927 1.89a.07.07 0 0 0 .073.035A18.89 18.89 0 0 0 19.377 4.486ZM8.5 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/></svg>
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;


