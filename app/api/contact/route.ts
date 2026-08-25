import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/contact-schema';
import { isRateLimited } from '@/lib/rate-limit';

/**
 * Contact endpoint: Zod re-validation (never trust the client), rate limit,
 * Resend notification. No data is stored anywhere in this prototype — the
 * enquiry exists only in the notification email.
 */
export async function POST(request: NextRequest) {
  const ip = (request.headers.get('x-forwarded-for') ?? 'unknown')
    .split(',')[0]
    .trim();

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'validation',
        issues: parsed.error.issues.map((issue) => ({
          field: String(issue.path[0] ?? ''),
          messageKey: issue.message,
        })),
      },
      { status: 400 },
    );
  }

  const { name, organisation, enquiryType, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  // TODO — CONTACT_TO_EMAIL pending from client. Until secrets are set, the
  // endpoint validates and rate-limits but cannot deliver; it says so
  // honestly instead of pretending the enquiry went somewhere.
  if (!apiKey || !to || to === 'TODO') {
    console.warn(
      '[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not configured — enquiry not delivered.',
    );
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? 'Website <onboarding@resend.dev>',
    to,
    subject: `Website enquiry (${enquiryType}) — ${name}`,
    text: [
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Enquiry type: ${enquiryType}`,
      '',
      message,
    ].join('\n'),
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
