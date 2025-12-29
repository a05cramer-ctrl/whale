import { useState } from 'react'
import whaleImage from '../5688d371-b786-4682-b447-ba5c4159bc99.png'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '5sMmjBoKVGDmD5iiuKDqZe1ERkkeb3mJidnqi7Epump'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white relative overflow-hidden">
      {/* Whale watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src={whaleImage} 
          alt="Whale watermark" 
          className="w-96 h-96 object-contain"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a 
              href="https://x.com/WhaleNomicss" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:scale-110 transition-transform hover:text-whale-red"
              aria-label="X (Twitter)"
              title="X (Twitter)"
            >
              𝕏
            </a>
          </div>
          <button
            onClick={handleCopy}
            className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer font-mono"
            title="Click to copy contract address"
          >
            CA: {contractAddress}
            {copied && <span className="ml-2 text-whale-red">✓ Copied!</span>}
          </button>
        </div>
      </div>
    </footer>
  )
}

