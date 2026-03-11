import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // The AIOS (e.g., GeanAIOS or Arth Executive) will send agent events here.
    // Example: { agent: "@arth-geo-strategist", action: "gap_found", data: {...} }

    console.log("[AIOS Webhook Received]", payload.agent, payload.action);

    // TODO: Connect to your Vector DB or Main Database (e.g., Pinecone/Postgres)
    // to store the event and reflect it on the Dashboard.

    return NextResponse.json({ success: true, message: "Webhook accepted by Control Room" }, { status: 200 });
  } catch (error) {
    console.error("AIOS Webhook Error:", error);
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "Agentic Command Center API is online." });
}
