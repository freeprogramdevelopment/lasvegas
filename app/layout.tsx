import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Las Vegas",
  description: "Pronađi online casino s najboljim bonusima i promocijama: cashback, rakeback, free spinovi i VIP pogodnosti. Provjeri uvjete i igraj pametno.",
  keywords: "vegas.hr, online casino, casino hrvatska, casino igre, jackpot, bonus, kockanje, slotovi, rulet, blackjack, poker",
  openGraph: {
    title: "Las Vegas",
    description: "Pronađi online casino s najboljim bonusima i promocijama: cashback, rakeback, free spinovi i VIP pogodnosti. Provjeri uvjete i igraj pametno.",
    type: "website",
    url: "https://lasvegas.hr",
    siteName: "Las Vegas",
    images: [
      {
        url: "/vegas.jpeg",
        width: 1200,
        height: 630,
        alt: "Las Vegas",
      },
    ],
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas",
    description: "Pronađi online casino s najboljim bonusima i promocijama: cashback, rakeback, free spinovi i VIP pogodnosti. Provjeri uvjete i igraj pametno.",
    images: ["/vegas.jpeg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://lasvegas.hr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
