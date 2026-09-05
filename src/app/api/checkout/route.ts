import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (googleScriptUrl) {
      // Async background dispatch to Google Apps Script (non-blocking for zero latency)
      fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).catch((err) => console.error("Google Script Sync Error:", err));
    } else {
      console.warn("GOOGLE_SCRIPT_URL is not configured in .env.local");
    }

    return NextResponse.json({
      success: true,
      message: "Order submitted successfully",
    });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process order" },
      { status: 500 }
    );
  }
}
