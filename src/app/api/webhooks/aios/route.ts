import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Log the received payload for debugging in Vercel
    console.log("[AIOS Webhook Received]", payload.agent, payload.action);

    if (!supabase) {
        return NextResponse.json({ success: false, error: "Supabase client not initialized" }, { status: 500 });
    }

    // Insert the agent event into Supabase
    const { error } = await supabase
      .from('agent_logs')
      .insert([
        {
          agent: payload.agent || 'Unknown Agent',
          action: payload.action || 'No Action',
          content: payload.content || '',
          user_id: payload.user_id || 'system',
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error("Supabase Insert Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Webhook accepted and logged to Supabase" }, { status: 200 });
  } catch (error) {
    console.error("AIOS Webhook Error:", error);
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "Agentic Command Center API is online." });
}
