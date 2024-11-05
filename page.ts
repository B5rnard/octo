// app/page.tsx
export default function Home() {
  const games = [
    {
      id: 'numberquest',
      name: 'NUMBER/QUEST',
      color: 'bg-[#034694]', // Navy blue
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2"/>
          <rect x="6" y="6" width="4" height="4" fill="currentColor"/>
          <rect x="14" y="6" width="4" height="4" fill="currentColor"/>
          <rect x="6" y="14" width="4" height="4" fill="currentColor"/>
          <rect x="14" y="14" width="4" height="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'wordcraft',
      name: 'WORD/CRAFT',
      color: 'bg-[#CE0037]', // Power red
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <path d="M4 4L12 12L20 4M4 20L12 12L20 20" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'patternquest',
      name: 'PATTERN/QUEST',
      color: 'bg-[#00A94F]', // Green
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <circle cx="6" cy="6" r="2" strokeWidth="2"/>
          <circle cx="18" cy="6" r="2" strokeWidth="2"/>
          <circle cx="6" cy="18" r="2" strokeWidth="2"/>
          <circle cx="18" cy="18" r="2" strokeWidth="2"/>
          <path d="M6 8v8M8 6h8M16 18h-8M18 8v8" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'colorflow',
      name: 'COLOR/FLOW',
      color: 'bg-[#C6A455]', // Gold
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <path d="M12 3v18M8 6v12M4 8v8M16 6v12M20 8v8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'mindmaze',
      name: 'MIND/MAZE',
      color: 'bg-[#0B1216]', // Core black
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" strokeWidth="2"/>
          <path d="M4 12h16M12 4v16" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'logicleap',
      name: 'LOGIC/LEAP',
      color: 'bg-[#767B7E]', // Grey
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Timer Banner */}
      <div className="bg-black text-white py-2 text-center text-sm font-bold tracking-wider">
        DAILY CHALLENGES REFRESH IN 12:34:56
      </div>

      {/* Main Header */}
      <header className="border-b border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-black tracking-tighter">MICROGAMES</div>
            <nav className="hidden md:flex space-x-8">
              <a href="/games" className="text-sm font-bold">GAMES</a>
              <a href="/archive" className="text-sm font-bold">ARCHIVE</a>
              <a href="/stats" className="text-sm font-bold">STATS</a>
            </nav>
            <button className="bg-black text-white px-6 py-2 text-sm font-bold">
              PLAY NOW
            </button>
          </div>
        </div>
      </header>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="group">
              <div className={`${game.color} p-8 text-white hover:bg-black transition-all`}>
                <div className="flex flex-col h-full">
                  <div className="text-2xl font-black tracking-tighter mb-auto">
                    {game.name}
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <div>{game.icon}</div>
                    <button className="bg-white text-black px-6 py-2 text-sm font-bold group-hover:bg-white group-hover:text-black">
                      PLAY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}