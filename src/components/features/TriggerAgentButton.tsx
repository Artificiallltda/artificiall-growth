'use client';

import { useState } from 'react';

interface TriggerAgentButtonProps {
  agentId: string;
  command: string;
  label: string;
  successMessage?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'amber';
}

export default function TriggerAgentButton({ 
  agentId, 
  command, 
  label, 
  successMessage = 'Ação iniciada com sucesso!',
  variant = 'primary'
}: TriggerAgentButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    
    let backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://artificiall-aios-engine-production.up.railway.app';
    if (!backendUrl.startsWith('http')) {
      backendUrl = `https://${backendUrl}`;
    }
    backendUrl = backendUrl.replace(/\/$/, '');
    const endpoint = `${backendUrl}/trigger`;
    
    console.log(`🚀 [ACTION] Disparando comando para ${agentId}...`);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: agentId,
          command: command,
          user_id: 'dashboard_admin'
        }),
      });

      if (response.ok) {
        alert(`✅ ${successMessage}`);
      } else {
        const errData = await response.json().catch(() => ({}));
        console.error("❌ [ERROR] Falha no disparo:", errData);
        alert(`❌ Erro ao disparar agente (Status ${response.status}).`);
      }
    } catch (error) {
      console.error('❌ [CONNECTION] Erro de rede:', error);
      alert('❌ Falha de conexão com o servidor AIOS.');
    } finally {
      setLoading(false);
    }
  };

  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700',
    outline: 'bg-transparent hover:bg-white/5 text-slate-300 border-white/10 border',
    amber: 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/20 border'
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center ${variantStyles[variant]} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading && <span className="w-3 h-3 rounded-full bg-current mr-2 animate-ping"></span>}
      {loading ? 'Processando...' : label}
    </button>
  );
}
