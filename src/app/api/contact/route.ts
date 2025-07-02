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

    // Prepare webhook URL with query parameters
    const webhookBaseUrl = 'https://n8n.jaxius.net/webhook/9b5def4e-cbd1-4512-8fdd-b8f10f300d74';
    const webhookParams = new URLSearchParams({
      timestamp: new Date().toISOString(),
      name: name,
      email: email,
      council: council || '',
      message: message,
      source: 'LG Radar Contact Form',
      ip_address: request.headers.get('x-forwarded-for') ||
                  request.headers.get('x-real-ip') ||
                  'unknown'
    });

    const webhookUrl = `${webhookBaseUrl}?${webhookParams.toString()}`;
    
    // Log the webhook URL for debugging
    console.log('Webhook URL:', webhookUrl);
    
    // Send to webhook using GET request
    const webhookResponse = await fetch(webhookUrl, {
      method: 'GET',
    });

    console.log('Webhook response status:', webhookResponse.status);
    console.log('Webhook response text:', await webhookResponse.text());

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