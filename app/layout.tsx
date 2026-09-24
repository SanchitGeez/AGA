import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted display serif — used once, on the hero headline, for institutional
// (financial-broadsheet) gravitas. Committed to the repo; no build-time fetch.
const fraunces = localFont({
  src: "./fonts/fraunces.woff2",
  variable: "--font-fraunces",
  weight: "400 600",
  display: "swap",
});
import { site } from "@/lib/site";
import { Masthead } from "@/components/site/masthead";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Company Secretaries, Mumbai`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "company secretary firm in Mumbai",
    "secretarial audit",
    "SEBI compliance",
    "FEMA RBI compliance",
    "IPO advisory",
    "ROC filings",
    "corporate compliance Mumbai",
  ],
  openGraph: {
    title: `${site.name} — Company Secretaries, Mumbai`,
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
};

// Applies a saved light-mode preference before paint (default is dark).
const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <Masthead />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
