import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send via Web3Forms (free, no signup required for basic use)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        message,
        subject: `Portfolio Contact: ${name}`,
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
