export default function PipelinePage() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">Pipeline Agentico</h1>
          <p className="text-slate-400">Autonomous SDR & Closer Kanban Board</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/10 transition-colors">
            Configure ICP
          </button>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all flex items-center">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-2"></span>
            Start Sprint (@arth-sdr)
          </button>
        </div>
      </div>

      <div className="flex-1 flex space-x-6 overflow-hidden">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-slate-900/80">
            <h3 className="font-semibold text-slate-200">Scraping / Identified <span className="ml-2 px-2 py-0.5 rounded-full bg-white/10 text-xs">24</span></h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3 custom-scrollbar">
            {/* Card */}
            <div className="bg-[#0f172a] p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-white">TechVision Corp</h4>
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-medium">B2B SaaS</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">Identified by @arth-sdr via LinkedIn Sales Nav API.</p>
              <div className="flex justify-between items-center text-xs">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-[#0f172a] z-10"></div>
                </div>
                <span className="text-slate-500">2h ago</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-[#0f172a] p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-white">Global Retail Inc</h4>
                <span className="text-xs text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded font-medium">Retail</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">High ICP match based on Agentic Readiness parameters.</p>
              <div className="flex justify-between items-center text-xs">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-[#0f172a] z-10"></div>
                </div>
                <span className="text-slate-500">4h ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-slate-900/80">
            <h3 className="font-semibold text-slate-200">First Contact <span className="ml-2 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs">8</span></h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
             <div className="bg-[#0f172a] p-4 rounded-xl border border-indigo-500/30">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-white">NexGen Services</h4>
              </div>
              <p className="text-xs text-slate-400 mb-3">InMail sent. Highly personalized message focusing on AI constraints.</p>
              <div className="mt-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 p-2 rounded">
                &gt; Status: Awaiting Reply
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 flex flex-col bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-slate-900/80">
            <h3 className="font-semibold text-slate-200">Negotiation & Closing <span className="ml-2 px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs">2</span></h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
             <div className="bg-[#0f172a] p-4 rounded-xl border border-purple-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-10 h-10 bg-purple-500/20 rounded-bl-full blur-md"></div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-white">Alpha Finance</h4>
              </div>
              <p className="text-xs text-slate-400 mb-2">@arth-closer generated technical PDF proposal. Answering objections.</p>
              <button className="w-full mt-2 text-xs font-medium px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded transition-colors border border-white/10">
                Review Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
