import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
      <body className={`${soehne.variable} font-soehne antialiased`}>
        <div className="flex flex-col min-h-screen p-8 gap-8">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
