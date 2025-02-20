import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { VercelAnalytics } from "@/components/analytics";
import { AuthProvider } from "@/components/auth-provider";
import "./globals.css";

const soehne = localFont({
  src: [
    {
      path: "../fonts/soehne-web-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/soehne-web-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-soehne",
});

export const metadata: Metadata = {
  title: "gif.land",
  description: "My online memory bank of my favourite gifs",
  openGraph: {
    siteName: "gif.land",
    url: "https://gif.land",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soehne.variable} font-soehne antialiased
         dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 relative`}
      >
        <div className="flex flex-col min-h-screen !pt-0 p-2 sm:px-4 lg:p-8 gap-8">
          <Header />
          <main className="flex-1">
            <AuthProvider>{children}</AuthProvider>
          </main>
          <Footer />
        </div>
        <Script
          async
          src="https://cursor-party.jonheslop.partykit.dev/cursors.js"
        />
        <VercelAnalytics />
      </body>
    </html>
  );
}
