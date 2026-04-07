import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Symm Studios <hello@symm.studio>",
      to: "contact@symm.studio",
      replyTo: email,
      subject: `New inquiry from ${name}${service ? `: ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1a1a1a;">
          <div style="background: #faf8f5; padding: 24px 32px; margin-bottom: 24px;">
            <h1 style="color: #ecf0ff; font-size: 20px; margin: 0; letter-spacing: -0.02em;">
              New Project Inquiry
            </h1>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 12px 0; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; font-size: 14px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">Service</td>
              <td style="padding: 12px 0; font-size: 14px;">${service || "Not specified"}</td>
            </tr>
          </table>
          <div style="background: #f9fafb; border-left: 3px solid #4361ee; padding: 16px 20px; border-radius: 0 4px 4px 0;">
            <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 32px; font-size: 11px; color: #9ca3af;">
            Sent via symm.studio contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact route]", err);
    return NextResponse.json({ error: "Failed to send. Please email us directly." }, { status: 500 });
  }
}
