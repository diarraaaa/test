import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add the user as a contact in Resend
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // We proceed even if contact creation fails, as sending the notification is the priority
    try {
      if (process.env.RESEND_AUDIENCE_ID) {
        await resend.contacts.create({
          email: email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
          audienceId: process.env.RESEND_AUDIENCE_ID,
        });
      }
    } catch (contactError) {
      console.error('Contact creation error:', contactError);
    }

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Senoris <contact@senoris.net>', // Branded domain address
      to: ['diarradieng062004@gmail.com', 'Senoris2026@gmail.com'], // Professional inbox recipients
      subject: `Formulaire rempli ${subject} - de ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d4af37;">Nouveau message de contact - Senoris</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend email error:', emailError);
      return NextResponse.json({ error: emailError }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
