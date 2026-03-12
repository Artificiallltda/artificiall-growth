'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import TriggerAgentButton from '@/components/features/TriggerAgentButton';

export default function GeoDashboard() {
  const [kpis, setKpis] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchKpis() {
      if (!supabase) return;
      
      const { data, error } = await supabase
        .from('agent_kpis')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        setKpis(data);
      }
      setLoading(false);
    }

    fetchKpis();
    // Refresh a cada 30 segundos
    const interval = setInterval(fetchKpis, 30000);
    return () => clearInterval(interval);
  }, []);

  // Dados iniciais (fallback) se o banco estiver vazio
  const displayData = kpis || {
    citation_share: 68.4,
    sentiment_positivity: 94.2,
    identified_gaps: 14,
    model_coverage: { chatgpt: 82, claude: 76, gemini: 45, perplexity: 91 }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">Reputação GEO & AEO</h1>
          <p className="text-slate-400">Generative & Answer Engine Optimization Dashboard</p>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-slate-400">Last scanned:</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
            {kpis ? new Date(kpis.updated_at).toLocaleTimeString() : 'Just now'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* KPI Card 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Total Citation Share</h3>
          <p className="text-4xl font-bold text-white mb-2">{displayData.citation_share}%</p>
          <p className="text-xs text-slate-500">How often Artificiall is cited in AI responses</p>
        </div>

        {/* KPI Card 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/50 transition-colors">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Sentiment Positivity</h3>
          <p className="text-4xl font-bold text-white mb-2">{displayData.sentiment_positivity}%</p>
          <p className="text-xs text-slate-500">Positive context in model outputs</p>
        </div>

        {/* KPI Card 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-rose-500/50 transition-colors">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Identified Citation Gaps</h3>
          <p className="text-4xl font-bold text-white mb-2">{displayData.identified_gaps}</p>
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
              <p className="text-sm text-slate-400 mb-4">Gemini does not cite "Artificiall Growth" when comparing top AI executives.</p>
              <TriggerAgentButton 
                agentId="@growth-executor"
                command="Crie uma matriz de comparação Answer-first para o Gemini focando em Artificiall Growth vs Concorrentes."
                label="Delegate to @growth-executor"
                variant="primary"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col min-h-[400px]">
          <h3 className="text-lg font-semibold text-white mb-4">AI Model Coverage</h3>
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {/* ChatGPT */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">ChatGPT (GPT-4)</span>
                <span className="text-sm font-medium text-white">{displayData.model_coverage.chatgpt}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${displayData.model_coverage.chatgpt}%` }}></div>
              </div>
            </div>
            {/* Claude */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">Claude 3.5 Sonnet</span>
                <span className="text-sm font-medium text-white">{displayData.model_coverage.claude}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${displayData.model_coverage.claude}%` }}></div>
              </div>
            </div>
            {/* Gemini */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">Google Gemini Pro</span>
                <span className="text-sm font-medium text-white">{displayData.model_coverage.gemini}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-amber-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${displayData.model_coverage.gemini}%` }}></div>
              </div>
            </div>
            {/* Perplexity */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">Perplexity (Sonar)</span>
                <span className="text-sm font-medium text-white">{displayData.model_coverage.perplexity}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-indigo-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${displayData.model_coverage.perplexity}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
