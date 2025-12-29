interface PhaseProps {
  number: number;
  title: string;
  delay?: string;
}

function Phase({ number, title, delay = '0s' }: PhaseProps) {
  return (
    <div 
      className="bg-white rounded-xl p-6 md:p-8 border-4 border-black hand-drawn animate-slide-up hover:scale-105 transition-transform"
      style={{
        boxShadow: '8px 8px 0 rgba(229, 57, 53, 0.2)',
        animationDelay: delay,
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-whale-red text-white font-bold text-xl flex items-center justify-center border-2 border-black">
          {number}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-black">{title}</h3>
      </div>
    </div>
  )
}

export default function Roadmap() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 text-center hand-drawn animate-slide-up">
          The Whale Path
        </h2>
        
        <div className="space-y-6">
          <Phase number={1} title="Learn Whale Sounds" delay="0.1s" />
          <Phase number={2} title="Follow the Whale" delay="0.2s" />
          <Phase number={3} title="Become the Whale" delay="0.3s" />
          <Phase number={4} title="Teach WhaleNomics" delay="0.4s" />
        </div>
      </div>
    </section>
  )
}




