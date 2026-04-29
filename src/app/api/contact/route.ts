import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message is required (min 10 chars)" },
        { status: 400 }
      );
    }

    // Send via Web3Forms (free, no signup required for basic use)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name: "Anonymous",
        email: "noreply@portfolio.local",
        message,
        subject: "Portfolio Contact: Anonymous Message",
      }),
    });

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Contact API Error:", errorMessage);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
