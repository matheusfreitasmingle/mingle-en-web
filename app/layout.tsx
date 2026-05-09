import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Mingle EN — Sharpen your English.',
  description: 'Train reflexive English fluency. Not courses. Not theory. Real-world communication patterns under pressure.',
  metadataBase: new URL('https://mingle-en.com'),
  openGraph: {
    title: 'Mingle EN — Sharpen your English.',
    description: 'Train reflexive English fluency. Not courses. Not theory. Real-world communication patterns under pressure.',
    url: 'https://mingle-en.com',
    siteName: 'Mingle EN',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mingle EN — Sharpen your English.',
    description: 'Train reflexive English fluency. Not courses. Not theory. Real-world communication patterns under pressure.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div style={{ paddingTop: '60px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}