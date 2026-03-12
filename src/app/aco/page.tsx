import TriggerAgentButton from '@/components/features/TriggerAgentButton';

export default function AcoMonitorPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">Monitor ACO</h1>
          <p className="text-slate-400">Agentic Commerce Optimization Diagnostics</p>
        </div>
        <div>
          <TriggerAgentButton 
            agentId="@growth-commerce"
            command="Realize um Scan completo de ACO no site e verifique a compatibilidade de agentes e dados estruturados."
            label="Run Full Scan"
            variant="secondary"
            successMessage="Scan ACO iniciado! O @growth-commerce está auditando o ecossistema."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-slate-400 text-sm font-medium mb-1">Agent Visibility Score</h3>
          <p className="text-3xl font-bold text-white">92/100</p>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3">
            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-slate-400 text-sm font-medium mb-1">Machine Readable Checkouts</h3>
          <p className="text-3xl font-bold text-white">100%</p>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3">
            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-slate-400 text-sm font-medium mb-1">Agent Success Rate</h3>
          <p className="text-3xl font-bold text-white">18.4%</p>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3">
            <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '18.4%' }}></div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-slate-400 text-sm font-medium mb-1">JSON-LD Schemas</h3>
          <p className="text-3xl font-bold text-white">Valid</p>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 flex">
            <div className="bg-emerald-500 h-1.5 rounded-full w-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-white/5 bg-slate-900">
          <h3 className="text-lg font-semibold text-white">Trust & Actionability Log (@growth-commerce)</h3>
        </div>

        <div className="divide-y divide-white/5">
          <div className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Artificiall Growth Product Schema</h4>
                <p className="text-sm text-slate-400 mt-1">Computable constraints and pricing rules verified by Operator Agents.</p>
              </div>
            </div>
            <span className="text-xs text-slate-500 font-mono">2 mins ago</span>
          </div>

          <div className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
             <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">UCP Interoperability</h4>
                <p className="text-sm text-slate-400 mt-1">Universal Checkout Protocol endpoints responding in under 120ms.</p>
              </div>
            </div>
            <span className="text-xs text-slate-500 font-mono">1 hr ago</span>
          </div>

          <div className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors bg-amber-500/5">
             <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 font-bold">
                !
              </div>
              <div>
                <h4 className="font-semibold text-white">ChefIA Policy Graph</h4>
                <p className="text-sm text-slate-400 mt-1">Missing machine-readable refund policy in knowledge graph. Might cause trust issues for agents.</p>
              </div>
            </div>
            <TriggerAgentButton 
              agentId="@growth-commerce"
              command="Corrija o Schema de Policy Graph para o ChefIA, garantindo que as políticas de reembolso sejam legíveis por máquinas (JSON-LD)."
              label="Fix Schema"
              variant="amber"
              successMessage="Solicitação de correção de Schema enviada!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
