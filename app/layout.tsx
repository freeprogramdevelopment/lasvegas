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
  description: "Otkrijte uzbuđenje najboljih online casino igara na Vegas.hr! Ekskluzivni bonus za nove igrače, najveći jackpoti i tisuće zadovoljnih igrača. Pridružite se već danas!",
  keywords: "vegas.hr, online casino, casino hrvatska, casino igre, jackpot, bonus, kockanje, slotovi, rulet, blackjack, poker",
  openGraph: {
    title: "Las Vegas",
    description: "Otkrijte uzbuđenje najboljih online casino igara na Vegas.hr! Ekskluzivni bonus za nove igrače, najveći jackpoti i tisuće zadovoljnih igrača.",
    type: "website",
    url: "https://vegas.hr",
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
    description: "Otkrijte uzbuđenje najboljih online casino igara na Vegas.hr!",
    images: ["/vegas.jpeg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://vegas.hr",
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
