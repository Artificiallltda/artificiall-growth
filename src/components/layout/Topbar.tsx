export default function Topbar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-background/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 z-10 transition-all">
      <div className="flex items-center flex-1">
        <div className="relative w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            🔍
          </span>
          <input 
            type="text" 
            placeholder="Search AI reputations, logs or leads..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
          <span className="text-xs font-medium text-emerald-400 tracking-wide">AIOS ONLINE</span>
        </div>
        
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-500 border border-background"></span>
        </button>
      </div>
    </header>
  );
}
