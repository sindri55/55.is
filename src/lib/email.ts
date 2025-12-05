import nodemailer from 'nodemailer';
import type { ContactPayload } from './types';

const {
  SMTP_HOST,
  SMTP_PORT = '587',
  SMTP_USER,
  SMTP_PASS,
  CONTACT_RECIPIENT,
  CONTACT_FROM,
} = process.env;

const smtpPortNumber = Number(SMTP_PORT);

const transporter = SMTP_HOST
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: smtpPortNumber,
      secure: smtpPortNumber === 465,
      auth: SMTP_USER
        ? {
            user: SMTP_USER,
            pass: SMTP_PASS,
          }
        : undefined,
    })
  : null;

export async function sendContactEmail(payload: ContactPayload) {
  if (!transporter || !CONTACT_RECIPIENT) {
    throw new Error('SMTP still needs SMTP_HOST/CONTACT_RECIPIENT env vars.');
  }

  const subject = `Ný fyrirspurn frá ${payload.name}${
    payload.company ? ` – ${payload.company}` : ''
  }`;
  const text = buildPlaintext(payload);

  const fromAddress = CONTACT_FROM || SMTP_USER;
  if (!fromAddress) {
    throw new Error('SMTP_FROM or SMTP_USER must be configured for the From header.');
  }

  await transporter.sendMail({
    from: fromAddress,
    to: CONTACT_RECIPIENT,
    replyTo: payload.email,
    subject,
    text,
  });
}

function buildPlaintext(payload: ContactPayload) {
  const services = payload.services.length ? payload.services.join(', ') : 'Ekki tilgreint';
  const budget = payload.budget ? translateBudget(payload.budget) : 'Ekki tilgreint';
  const company = payload.company || 'Ekki tilgreint';

  return [
    'NÝ FYRIRSPURN – 55.IS',
    '--------------------------',
    `Nafn             : ${payload.name}`,
    `Fyrirtæki        : ${company}`,
    `Netfang          : ${payload.email}`,
    `Símanúmer        : ${payload.phone}`,
    `Þjónustur        : ${services}`,
    `Fjárhagsrammi    : ${budget}`,
    `Uppruni          : ${payload.context}`,
    `Síða              : ${payload.pageUrl ?? 'Óþekkt'}`,
    '',
    'Skilaboð frá viðskiptavini:',
    payload.message?.trim() || 'Engin skilaboð fylgdu.',
  ].join('\n');
}

function translateBudget(budget: string) {
  switch (budget) {
    case 'under500':
      return '< 500.000 kr.';
    case '500-1m':
      return '500.000 – 1.000.000 kr.';
    case '1m-2m':
      return '1.000.000 – 2.000.000 kr.';
    case 'over2m':
      return '2.000.000+ kr.';
    case 'unsure':
      return 'Ekki viss';
    default:
      return budget;
  }
}
