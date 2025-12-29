import whaleImage from '../5688d371-b786-4682-b447-ba5c4159bc99.png'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 animate-fade-in">
      <div className="mb-8 animate-slide-up">
        <img 
          src={whaleImage} 
          alt="Armored Whale Mascot" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-black hand-drawn object-cover"
          style={{
            boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.2), 16px 16px 0 rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-bold text-black mb-4 hand-drawn animate-slide-up" style={{ animationDelay: '0.2s' }}>
        WhaleNomics
      </h1>
      
      <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-medium animate-slide-up" style={{ animationDelay: '0.4s' }}>
        Study the whales. Become the whale.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
        <button 
          className="px-8 py-4 bg-whale-red text-white font-bold text-lg rounded-lg border-4 border-black transform transition-transform hover:scale-105 active:scale-95 hand-drawn"
          style={{
            boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          Buy $WHALE
        </button>
        <button 
          className="px-8 py-4 bg-black text-white font-bold text-lg rounded-lg border-4 border-black transform transition-transform hover:scale-105 active:scale-95 hand-drawn"
          style={{
            boxShadow: '6px 6px 0 rgba(229, 57, 53, 0.3)',
          }}
        >
          Read the Whale Paper
        </button>
      </div>
    </section>
  )
}

