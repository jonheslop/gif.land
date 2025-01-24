import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";
import { Suspense } from "react";

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
  title: "Jon’s bukk.it faves",
  description: "My favourite gifs from bukk.it",
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
            <Suspense
              fallback={
                <p className="mt-8 text-3xl text-neutral-500 animate-pulse tracking-tight leading-relaxed">
                  ᕙ( ~ . ~ )ᕗ
                  <br />
                  Fetching the images&hellip;
                </p>
              }
            >
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
