interface TokenCardProps {
  icon: string;
  label: string;
  value: string;
  delay?: string;
}

function TokenCard({ icon, label, value, delay = '0s' }: TokenCardProps) {
  return (
    <div 
      className="bg-white rounded-xl p-6 border-4 border-black hand-drawn animate-slide-up hover:scale-105 transition-transform"
      style={{
        boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.15)',
        animationDelay: delay,
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-bold text-black">{value}</div>
    </div>
  )
}

export default function Tokenomics() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 text-center hand-drawn animate-slide-up">
          WhaleNomics 101
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TokenCard 
            icon="📚" 
            label="Supply" 
            value="1,000,000,000 $WHALE"
            delay="0.1s"
          />
          <TokenCard 
            icon="🧠" 
            label="Tax" 
            value="0%"
            delay="0.2s"
          />
          <TokenCard 
            icon="🐋" 
            label="Liquidity" 
            value="Burned"
            delay="0.3s"
          />
          <TokenCard 
            icon="📖" 
            label="Ownership" 
            value="Renounced"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  )
}


