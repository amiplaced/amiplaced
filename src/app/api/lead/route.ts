import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsapp } = body;

    console.log("Lead checklist request received:", { name, email, whatsapp });

    return NextResponse.json({
      success: true,
      message: "Lead checklist request saved successfully",
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { success: false, message: "Error processing lead request" },
      { status: 500 }
    );
  }
}
