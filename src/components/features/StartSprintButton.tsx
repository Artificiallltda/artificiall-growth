'use client';

import { useState } from 'react';

export default function StartSprintButton() {
  const [loading, setLoading] = useState(false);

  const startSprint = async () => {
    setLoading(true);
    
    // Pega a URL da variável ou usa o fallback
    let backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://artificiall-aios-engine-production.up.railway.app';
    
    // BLINDAGEM: Garante que a URL comece com https:// para o navegador não achar que é relativa
    if (!backendUrl.startsWith('http')) {
      backendUrl = `https://${backendUrl}`;
    }

    // Remove barras duplicadas ou prefixos antigos se vierem na variável
    backendUrl = backendUrl.replace(/\/api\/v1\/?$/, '').replace(/\/$/, '');
    
    const endpoint = `${backendUrl}/trigger`;
    
    console.log("🚀 [DEBUG] Iniciando Sprint...");
    console.log("📡 [DEBUG] Backend URL Base:", backendUrl);
    console.log("🔗 [DEBUG] Endpoint Final:", endpoint);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: '@growth-sdr',
          command: 'Realize uma varredura por CEOs de imobiliárias de alto padrão em Balneário Camboriú agora.',
          user_id: 'dashboard_admin'
        }),
      });

      console.log("📥 [DEBUG] Resposta status:", response.status);

      if (response.ok) {
        alert('🚀 Sprint de Prospecção Iniciada com Sucesso!');
      } else {
        const errData = await response.json().catch(() => ({}));
        console.error("❌ [DEBUG] Erro no Backend:", errData);
        alert(`❌ Falha ao iniciar sprint (Status ${response.status}). Verifique o console.`);
      }
    } catch (error) {
      console.error('❌ [DEBUG] Erro de Conexão:', error);
      alert('❌ Erro de conexão com o Railway. Veja o console (F12).');
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
      {loading ? 'Iniciando...' : 'Start Sprint (@growth-sdr)'}
    </button>
  );
}
