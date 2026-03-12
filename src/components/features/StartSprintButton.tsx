'use client';

import { useState } from 'react';

export default function StartSprintButton() {
  const [loading, setLoading] = useState(false);

  const startSprint = async () => {
    setLoading(true);
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
      const response = await fetch(`${backendUrl}/api/v1/trigger`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: '@arth-sdr-agent',
          command: '*scan-mercado "empresas de tecnologia"',
          user_id: 'dashboard_admin'
        }),
      });

      if (response.ok) {
        alert('🚀 Sprint de Prospecção Iniciada com Sucesso!');
      } else {
        alert('❌ Falha ao iniciar sprint. Verifique o backend.');
      }
    } catch (error) {
      console.error('Error triggering agent:', error);
      alert('❌ Erro de conexão com o Railway.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={startSprint}
      disabled={loading}
      className={`px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all flex items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span className={`w-2 h-2 rounded-full bg-white mr-2 ${loading ? 'animate-ping' : 'animate-pulse'}`}></span>
      {loading ? 'Iniciando...' : 'Start Sprint (@arth-sdr)'}
    </button>
  );
}
