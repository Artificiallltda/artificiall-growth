import { supabase } from '@/lib/supabase';

export default async function PipelinePage() {
  if (!supabase) {
    return (
      <div className="p-8 text-center bg-red-500/10 border border-red-500/20 rounded-xl">
        <h2 className="text-xl font-bold text-red-400 mb-2">Conexão com Banco de Dados Perdida</h2>
        <p className="text-slate-400">Verifique as variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY na Vercel.</p>
      </div>
    );
  }

  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  const scrapingLeads = leads?.filter((l: any) => l.status === 'Scraping / Identified') || [];
  const firstContactLeads = leads?.filter((l: any) => l.status === 'First Contact') || [];
  const closingLeads = leads?.filter((l: any) => l.status === 'Negotiation & Closing') || [];

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
            <h3 className="font-semibold text-slate-200">Scraping / Identified <span className="ml-2 px-2 py-0.5 rounded-full bg-white/10 text-xs">{scrapingLeads.length}</span></h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3 custom-scrollbar">
            {scrapingLeads.map((lead: any) => (
              <div key={lead.id} className="bg-[#0f172a] p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-white">{lead.company_name}</h4>
                  {lead.rating && (
                    <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-medium">{lead.rating} ★</span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                  {lead.address || lead.website || 'No details available'}
                </p>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-[#0f172a] z-10 flex items-center justify-center text-[10px] text-white">
                      {lead.source?.[0] || 'L'}
                    </div>
                  </div>
                  <span className="text-slate-500">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-slate-900/80">
            <h3 className="font-semibold text-slate-200">First Contact <span className="ml-2 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs">{firstContactLeads.length}</span></h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {firstContactLeads.map((lead: any) => (
              <div key={lead.id} className="bg-[#0f172a] p-4 rounded-xl border border-indigo-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-white">{lead.company_name}</h4>
                </div>
                <p className="text-xs text-slate-400 mb-3">Initiated contact via {lead.source}.</p>
                <div className="mt-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 p-2 rounded">
                  &gt; Status: Awaiting Reply
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 flex flex-col bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-slate-900/80">
            <h3 className="font-semibold text-slate-200">Negotiation & Closing <span className="ml-2 px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs">{closingLeads.length}</span></h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {closingLeads.map((lead: any) => (
              <div key={lead.id} className="bg-[#0f172a] p-4 rounded-xl border border-purple-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-10 h-10 bg-purple-500/20 rounded-bl-full blur-md"></div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-white">{lead.company_name}</h4>
                </div>
                <p className="text-xs text-slate-400 mb-2">Lead in final negotiation phase.</p>
                <button className="w-full mt-2 text-xs font-medium px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded transition-colors border border-white/10">
                  Review Proposal
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

