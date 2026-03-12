export default function GeoDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">Reputação GEO & AEO</h1>
          <p className="text-slate-400">Generative & Answer Engine Optimization Dashboard</p>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-slate-400">Last scanned:</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">Just now</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* KPi Card 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
          <h3 className="text-sm font-medium text-slate-400 mb-2">Total Citation Share</h3>
          <p className="text-4xl justify-center font-bold text-white mb-2">68.4% <span className="text-sm font-medium text-emerald-400 align-middle">↑ 12%</span></p>
          <p className="text-xs text-slate-500">How often Artificiall is cited in AI responses</p>
        </div>

        {/* KPi Card 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
          <h3 className="text-sm font-medium text-slate-400 mb-2">Sentiment Positivity</h3>
          <p className="text-4xl justify-center font-bold text-white mb-2">94.2% <span className="text-sm font-medium text-emerald-400 align-middle">↑ 3%</span></p>
          <p className="text-xs text-slate-500">Positive context in model outputs</p>
        </div>

        {/* KPi Card 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-rose-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
          <h3 className="text-sm font-medium text-slate-400 mb-2">Identified Citation Gaps</h3>
          <p className="text-4xl justify-center font-bold text-white mb-2">14 <span className="text-sm font-medium text-rose-400 align-middle">Action Required</span></p>
          <p className="text-xs text-slate-500">Definition and context gaps found by @growth-researcher</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col min-h-[400px]">
          <h3 className="text-lg font-semibold text-white mb-4">Content Gaps Alarms (<span className="text-indigo-400">@growth-researcher</span>)</h3>
          <div className="space-y-4 flex-1">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-slate-200">Comparison Gap: Executive AIs</h4>
                <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider bg-rose-500/20 text-rose-400 uppercase">High Priority</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Gemini does not cite "Artificiall Growth" when comparing top AI executives. We need to create an Answer-first comparison matrix.</p>
              <button className="text-xs font-semibold px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                Delegate to @growth-executor
              </button>
            </div>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-slate-200">Recency Gap: Pricing 2026</h4>
                <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider bg-amber-500/20 text-amber-400 uppercase">Medium</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">ChatGPT is referencing our old pricing structure. Needs Knowledge Block update.</p>
              <button className="text-xs font-semibold px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                Delegate to @growth-executor
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col min-h-[400px]">
          <h3 className="text-lg font-semibold text-white mb-4">AI Model Coverage</h3>
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {/* Model Progress Bars */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">ChatGPT (GPT-4)</span>
                <span className="text-sm font-medium text-white">82%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">Claude 3.5 Sonnet</span>
                <span className="text-sm font-medium text-white">76%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">Google Gemini Pro</span>
                <span className="text-sm font-medium text-white">45%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-amber-400 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">Perplexity (Sonar)</span>
                <span className="text-sm font-medium text-white">91%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
