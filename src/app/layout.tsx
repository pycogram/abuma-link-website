import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import configDetail from "config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbumaLink Real Estate - Your Trusted Property Partner in Asaba | Verified Land & Properties",
  description: "AbumaLink is Asaba's leading real estate company specializing in verified property sales, land acquisition, and property investment. Over 10 years helping clients secure prime GRA plots, residential land, and commercial properties with complete transparency.",
  keywords: "AbumaLink, AbumaLink real estate, Asaba property company, land for sale Asaba, GRA Asaba plots, Delta State real estate, verified properties Asaba, property investment Asaba, real estate agent Asaba, land acquisition Nigeria",
  authors: [{ name: "AbumaLink Real Estate" }],
  creator: "AbumaLink Real Estate",
  publisher: "AbumaLink Real Estate",
  openGraph: {
    title: "AbumaLink Real Estate - Your Trusted Property Partner in Asaba",
    description: "Leading real estate company in Asaba. 100% verified properties, 10+ years experience, transparent processes, and dedicated after-sale support for all your property investment needs.",
    url: "https://www.abumalink.com",
    siteName: "AbumaLink Real Estate",
    images: [
      {
        url: "assets/AL2Bg.png",
        width: 1200,
        height: 630,
        alt: "AbumaLink Real Estate - Premium Properties in Asaba",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.abumalink.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Real Estate",
  other: {
    'contact:whatsapp': configDetail.whatsappNumber, 
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
