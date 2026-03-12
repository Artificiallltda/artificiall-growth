export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">Fábrica de Campanhas (HITL)</h1>
          <p className="text-slate-400">Human-In-The-Loop Approval Workflow</p>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">3 Pending Approvals</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Campaign Card 1 */}
        <div className="bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-xs">IN</span>
              <h3 className="font-semibold text-white">LinkedIn - Artificiall Growth Launch</h3>
            </div>
            <span className="text-xs text-slate-400">Generated 30m ago</span>
          </div>
          
          <div className="p-6 grid grid-cols-[1fr,200px] gap-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Copywriter: @growth-planner</span>
                <p className="text-sm text-slate-300 mt-2 bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed">
                  Para dominar o corporativo em 2026, você não precisa de mais ferramentas. Você precisa de um braço direito digital. Entenda por que 80% das lideranças de sucesso já adotaram Agentes Executivos. 🚀
                  <br/><br/>
                  Leia nosso artigo Answer-First sobre a Era Agentica no link.
                </p>
              </div>
            </div>
            
            <div>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2 block">Art: @growth-creative</span>
              <div className="aspect-square rounded-xl bg-gradient-to-tr from-indigo-900 to-purple-900 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                  <span className="text-white text-xs font-medium bg-white/20 px-3 py-1.5 rounded-full">View Asset</span>
                </div>
                <span className="text-4xl">🤖</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/5 bg-white/5 flex justify-end space-x-3">
            <button className="px-4 py-2 bg-transparent hover:bg-white/5 text-slate-300 text-sm font-medium rounded-lg transition-colors">
              Reject & Regenerate
            </button>
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 text-white text-sm font-bold rounded-lg transition-all">
              Approve & Publish
            </button>
          </div>
        </div>

        {/* Campaign Card 2 */}
        <div className="bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded bg-rose-500 flex items-center justify-center text-white font-bold text-xs">IG</span>
              <h3 className="font-semibold text-white">Instagram - ChefIA Demos</h3>
            </div>
            <span className="text-xs text-slate-400">Generated 1h ago</span>
          </div>
          
          <div className="p-6 grid grid-cols-[1fr,200px] gap-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Copywriter: @growth-planner</span>
                <p className="text-sm text-slate-300 mt-2 bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed">
                  Não perca horas criando receitas e cardápios. Deixe o ChefIA criar sua semana perfeita com base na sua dieta em 3 segundos. 🥗✨ #ChefIA #InteligenciaArtificial
                </p>
              </div>
            </div>
            
            <div>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2 block">Art: @growth-creative</span>
              <div className="aspect-square rounded-xl bg-gradient-to-tr from-rose-900 to-orange-900 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                  <span className="text-white text-xs font-medium bg-white/20 px-3 py-1.5 rounded-full">View Asset</span>
                </div>
                <span className="text-4xl">🍳</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/5 bg-white/5 flex justify-end space-x-3">
            <button className="px-4 py-2 bg-transparent hover:bg-white/5 text-slate-300 text-sm font-medium rounded-lg transition-colors">
              Reject & Regenerate
            </button>
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 text-white text-sm font-bold rounded-lg transition-all">
              Approve & Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
