import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../../components/GoogleAnalytics";
import { Suspense } from 'react'
import Script from 'next/script'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChaToken",
  description: "The World’s First Meme Fund for Everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cn">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <GoogleAnalytics />
          {children}
          <Script
          src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"
          strategy="afterInteractive"
        />
        
        </Suspense>
      </body>
    </html>
  );
}
