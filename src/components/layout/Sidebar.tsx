export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar/80 backdrop-blur-xl border-r border-white/5 flex flex-col z-20">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Agentic Command
        </h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Artificiall Growth</p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <a href="/" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)] transition-all">
          <span className="mr-3">🌐</span> Reputação GEO
        </a>
        <a href="/pipeline" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all">
          <span className="mr-3">🤝</span> Pipeline Agentico
        </a>
        <a href="/campaigns" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all">
          <span className="mr-3">🎨</span> Campanhas (HITL)
        </a>
        <a href="/aco" className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all">
          <span className="mr-3">⚙️</span> Monitor ACO
        </a>
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center space-x-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-indigo-500/20">
            AG
          </div>
          <div>
            <p className="text-sm font-medium text-white">Administrator</p>
            <p className="text-xs text-slate-400">Control Room</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
