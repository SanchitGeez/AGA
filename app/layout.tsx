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
  openGraph: {
    title: `${site.name} — Company Secretaries, Mumbai`,
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
};

// Local daytime is 06:00–18:00; an explicit saved choice takes precedence.
const themeScript = `(()=>{let theme;try{theme=localStorage.getItem('theme')}catch(e){}const hour=new Date().getHours();document.documentElement.setAttribute('data-theme',theme==='light'||theme==='dark'?theme:hour>=6&&hour<18?'light':'dark')})()`;

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
