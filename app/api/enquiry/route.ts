import { Resend } from "resend";
import { site } from "@/lib/site";

// Single endpoint for both the enquiry form and career résumé submissions.
// Sends an email to the firm; the résumé rides along as an attachment and is
// never stored (passes through this function). No database, no bucket.
//
// Env (set in .env.local / your host's dashboard):
//   RESEND_API_KEY  — required; from resend.com
//   ENQUIRY_TO      — optional; recipient inbox (defaults to the firm's first email)
//   ENQUIRY_FROM    — optional; verified sender (defaults to Resend's shared onboarding address)

export const runtime = "nodejs";

const MAX_FILE_BYTES = 4 * 1024 * 1024; // 4 MB — under Vercel's request body cap
const ALLOWED_RESUME = /\.(pdf|docx?|rtf)$/i;

function bad(message: string, status = 400) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return bad("Email is not configured yet. Please use WhatsApp or call us.", 503);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return bad("Invalid submission.");
  }

  // Honeypot — real users never fill this hidden field. Pretend success for bots.
  if ((form.get("company") as string)?.trim()) {
    return Response.json({ ok: true });
  }

  const kind = (form.get("kind") as string) === "career" ? "career" : "enquiry";
  const name = (form.get("name") as string)?.trim() || "";
  const email = (form.get("email") as string)?.trim() || "";
  const phone = (form.get("phone") as string)?.trim() || "";
  const message = (form.get("message") as string)?.trim() || "";
  const serviceName = (form.get("service") as string)?.trim() || "";

  if (!name) return bad("Please enter your name.");
  if (!email && !phone) return bad("Please add an email or phone so we can reply.");

  // Optional résumé attachment (career form).
  const resume = form.get("resume");
  const attachments: { filename: string; content: Buffer }[] = [];
  if (resume && resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_FILE_BYTES) return bad("Résumé must be under 4 MB.");
    if (!ALLOWED_RESUME.test(resume.name))
      return bad("Résumé must be a PDF, DOC, DOCX, or RTF file.");
    attachments.push({
      filename: resume.name,
      content: Buffer.from(await resume.arrayBuffer()),
    });
  }

  const subject =
    kind === "career"
      ? `Career — ${name}`
      : `Enquiry — ${serviceName || "General"} — ${name}`;

  const lines = [
    `Type:    ${kind === "career" ? "Career / résumé" : "Enquiry"}`,
    `Name:    ${name}`,
    email && `Email:   ${email}`,
    phone && `Phone:   ${phone}`,
    serviceName && `Service: ${serviceName}`,
    "",
    message || "(no message)",
    "",
    "—",
    `Sent from ${site.url}`,
  ].filter(Boolean);

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.ENQUIRY_FROM || `${site.shortName} <onboarding@resend.dev>`,
    to: [process.env.ENQUIRY_TO || site.emails[0]],
    replyTo: email || undefined,
    subject,
    text: lines.join("\n"),
    attachments: attachments.length ? attachments : undefined,
  });

  if (error) {
    return bad("Could not send right now. Please use WhatsApp or call us.", 502);
  }
  return Response.json({ ok: true });
}
