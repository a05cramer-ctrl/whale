import { useEffect, useState } from 'react'

function MoneyIcon({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <div
      className="absolute text-4xl animate-float opacity-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
    >
      💵
    </div>
  )
}

export default function About() {
  const [moneyIcons, setMoneyIcons] = useState<Array<{ x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random positions for money icons
    const icons = Array.from({ length: 12 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setMoneyIcons(icons)
  }, [])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-2xl p-8 md:p-12 border-4 border-black hand-drawn animate-slide-up"
          style={{
            boxShadow: '12px 12px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 hand-drawn">
            About WhaleNomics
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-gray-800 leading-relaxed">
            <p className="font-semibold">
              WhaleNomics is the study of how whales move markets.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-whale-red">
              We don't fight the whales. We learn from them.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating money icons */}
      <div className="absolute inset-0 pointer-events-none">
        {moneyIcons.map((icon, index) => (
          <MoneyIcon key={index} x={icon.x} y={icon.y} delay={icon.delay} />
        ))}
      </div>
    </section>
  )
}

