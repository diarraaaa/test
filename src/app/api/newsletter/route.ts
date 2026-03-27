import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!process.env.RESEND_NEWSLETTER_AUDIENCE_ID) {
      console.warn('RESEND_NEWSLETTER_AUDIENCE_ID is not configured');
      // For demo/dev purposes, we might still send a notification if they want, but here we exclusively add to contact
    }

    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_NEWSLETTER_AUDIENCE_ID || '', // Fallback to empty if not set
    });

    if (error) {
      console.error('Newsletter Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // Optional: Send a confirmation email to the user?
    // Not explicitly requested yet.

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Newsletter server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
