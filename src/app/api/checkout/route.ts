import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        await fetch(googleScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          redirect: "follow",
        });
      } catch (err) {
        console.error("Google Script Sync Error:", err);
      }
    } else {
      console.warn("GOOGLE_SCRIPT_URL is not configured in environment variables");
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
