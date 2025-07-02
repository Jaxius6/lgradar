import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, council, message, captcha, captchaAnswer } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate captcha
    if (!captcha || !captchaAnswer || parseInt(captchaAnswer) !== captcha.answer) {
      return NextResponse.json(
        { error: 'Invalid captcha answer' },
        { status: 400 }
      );
    }

    // Prepare webhook payload
    const webhookPayload = {
      timestamp: new Date().toISOString(),
      form_data: {
        name,
        email,
        council: council || '',
        message
      },
      source: 'LG Radar Contact Form',
      ip_address: request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'unknown'
    };

    // Send to webhook
    const webhookUrl = 'https://n8n.jaxius.net/webhook-test/9b5def4e-cbd1-4512-8fdd-b8f10f300d74';
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook failed:', webhookResponse.status, webhookResponse.statusText);
      return NextResponse.json(
        { error: 'Failed to process form submission' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}