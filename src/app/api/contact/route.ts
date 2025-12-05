import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import type { ContactPayload } from '@/lib/types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Partial<ContactPayload & { pageUrl?: string }>;

  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: 'Ógild JSON gögn' }, { status: 400 });
  }

  const validationError = validateBody(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: body!.name!.trim(),
    company: body!.company?.trim() || undefined,
    email: body!.email!.trim(),
    phone: body!.phone!.trim(),
    services: Array.isArray(body!.services) ? body!.services : [],
    budget: body!.budget?.trim(),
    message: body!.message?.trim(),
    context: body!.context ?? 'general',
    pageUrl: body!.pageUrl,
  };

  try {
    await sendContactEmail(payload);
  } catch (error) {
    console.error('[contact] Failed to send email', error);
    return NextResponse.json(
      { error: 'Ekki tókst að senda tölvupóst. Vinsamlegast reynið aftur síðar.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function validateBody(body: Partial<ContactPayload> | undefined) {
  if (!body) return 'Engin gögn bárust.';
  if (!body.name || typeof body.name !== 'string') {
    return 'Vinsamlegast fylltu út nafnið.';
  }
  if (body.company && typeof body.company !== 'string') {
    return 'Ógildur texti í fyrirtækisreit.';
  }
  if (!body.email || typeof body.email !== 'string' || !EMAIL_REGEX.test(body.email)) {
    return 'Netfang vantar eða er ekki gilt.';
  }
  if (!body.phone || typeof body.phone !== 'string') {
    return 'Símanúmer vantar.';
  }
  if (body.services && !Array.isArray(body.services)) {
    return 'Þjónustu listi þarf að vera fylki.';
  }
  if (body.services && body.services.some((service) => typeof service !== 'string')) {
    return 'Ógild þjónustu gildi.';
  }
  return null;
}
