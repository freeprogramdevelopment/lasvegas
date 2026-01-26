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
  title: "Las Vegas - Entertainment Capital of the World",
  description: "Experience the vibrant energy of Las Vegas with iconic casinos, neon lights, and world-famous landmarks. Discover the entertainment capital of the world.",
  keywords: "Las Vegas, casino, entertainment, nightlife, travel, Nevada, Strip, gambling, hotels, resorts",
  openGraph: {
    title: "Las Vegas - Entertainment Capital of the World",
    description: "Experience the vibrant energy of Las Vegas with iconic casinos, neon lights, and world-famous landmarks.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
