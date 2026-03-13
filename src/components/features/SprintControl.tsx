'use client';

import { useState } from 'react';

export default function SprintControl() {
  const [loading, setLoading] = useState(false);
  const [nicho, setNicho] = useState('');
  const [cidade, setCidade] = useState('');
  const [fonte, setFonte] = useState('maps');

  const startSprint = async () => {
    if (!nicho || !cidade) {
      alert('⚠️ Por favor, preencha o nicho e a cidade.');
      return;
    }

    setLoading(true);
    
    let backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://artificiall-aios-engine-production.up.railway.app';
    if (!backendUrl.startsWith('http')) {
      backendUrl = `https://${backendUrl}`;
    }
    backendUrl = backendUrl.replace(/\/$/, '');
    const endpoint = `${backendUrl}/trigger`;
    
    console.log("🚀 [DEBUG] Iniciando Sprint Customizada...");

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: '@growth-sdr',
          command: `Inicie uma prospecção de elite para o nicho "${nicho}" na cidade de "${cidade}" usando a fonte "${fonte}".`,
          user_id: 'dashboard_admin'
        }),
      });

      if (response.ok) {
        alert(`🚀 Sprint para ${nicho} em ${cidade} iniciada com sucesso!`);
      } else {
        alert(`❌ Falha ao iniciar sprint (Status ${response.status}).`);
      }
    } catch (error) {
      console.error('❌ [DEBUG] Erro de Conexão:', error);
      alert('❌ Erro de conexão com o Railway.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
        Configurar Nova Sprint
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nicho / Alvo</label>
          <input 
            type="text" 
            placeholder="Ex: Clínicas de Estética"
            value={nicho}
            onChange={(e) => setNicho(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Cidade</label>
          <input 
            type="text" 
            placeholder="Ex: Balneário Camboriú"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Fonte de Dados</label>
          <select 
            value={fonte}
            onChange={(e) => setFonte(e.target.value)}
            className="w-full bg-[#0f172a] border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <option value="maps">Google Maps</option>
            <option value="linkedin">LinkedIn</option>
            <option value="apify">Apify Profissional</option>
          </select>
        </div>
      </div>

      <button
        onClick={startSprint}
        disabled={loading}
        className={`w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
            Acionando @growth-sdr...
          </>
        ) : (
          '🚀 Iniciar Captura de Leads'
        )}
      </button>
    </div>
  );
}
