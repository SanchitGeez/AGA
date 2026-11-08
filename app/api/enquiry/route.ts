import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 4 * 1024 * 1024;
const ALLOWED_RESUME = /\.(pdf|docx?|rtf)$/i;
const bad = (error: string, status = 400) => Response.json({ ok: false, error }, { status });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return bad("Please submit this form from our website.", 403);
  if (Number(request.headers.get("content-length")) > 5 * 1024 * 1024) return bad("Submission is too large.", 413);

  let form: FormData;
  try { form = await request.formData(); } catch { return bad("Invalid submission."); }
  const text = (key: string) => typeof form.get(key) === "string" ? (form.get(key) as string).trim() : "";

  // The spam trap must stay separate from the real company-name field.
  if (text("website")) return Response.json({ ok: true });
  const kind = text("kind") === "career" ? "career" : "enquiry";
  const name = text("name");
  const email = text("email");
  const phone = text("phone");
  const company = text("company");
  const message = text("message");
  const serviceName = text("service");
  if (!name || name.length > 120) return bad("Please enter a name of up to 120 characters.");
  if (!email && !phone) return bad("Please add an email or phone so we can reply.");
  if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return bad("Please enter a valid email address.");
  if (phone.length > 40 || company.length > 160 || serviceName.length > 200 || message.length > 6000) return bad("Please shorten the details and try again.");
  if (text("consent") !== "yes") return bad("Please agree to the use of your details before submitting.");
  if (kind === "career" && !email) return bad("Please add an email address for your application.");

  const resume = form.get("resume");
  const attachments: { filename: string; content: Buffer }[] = [];
  if (kind === "career" && !(resume instanceof File && resume.size > 0)) return bad("Please attach your résumé.");
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_FILE_BYTES) return bad("Résumé must be under 4 MB.");
    if (!ALLOWED_RESUME.test(resume.name)) return bad("Résumé must be a PDF, DOC, DOCX, or RTF file.");
    attachments.push({ filename: resume.name, content: Buffer.from(await resume.arrayBuffer()) });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return bad("Email is not configured yet. Please use WhatsApp or call us.", 503);
  const subject = kind === "career" ? `Career — ${name}` : `Enquiry — ${serviceName || "General"} — ${name}`;
  const lines = [
    `Type: ${kind === "career" ? "Career / résumé" : "Enquiry"}`, `Name: ${name}`,
    email && `Email: ${email}`, phone && `Phone: ${phone}`, company && `Company: ${company}`,
    serviceName && `Service: ${serviceName}`, "Consent: agreed to enquiry/application processing",
    "", message || "(no message)", "", `Sent from ${site.url}`,
  ].filter(Boolean);
  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.ENQUIRY_FROM || `${site.shortName} <onboarding@resend.dev>`,
      to: [process.env.ENQUIRY_TO || site.emails[0]], replyTo: email || undefined,
      subject, text: lines.join("\n"), attachments: attachments.length ? attachments : undefined,
    });
    if (error) return bad("Could not send right now. Please use WhatsApp or call us.", 502);
  } catch { return bad("Could not send right now. Please use WhatsApp or call us.", 502); }
  return Response.json({ ok: true });
}
