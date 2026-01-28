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

const baseURL = "https://abumalink-v2.vercel.app"; 

export const metadata: Metadata = {
  metadataBase: new URL(baseURL), 
  
  title: {
    default: "AbumaLink Real Estate",
    template: "%s | AbumaLink",
  },
  
  description:
    "AbumaLink is Asaba's leading real estate company specializing in verified property sales, land acquisition, and property investment. Over 10 years helping clients secure prime GRA plots, residential land, and commercial properties with complete transparency.",

  keywords: [
    "Real Estate",
    "Property Investment",
    "Land for Sale",
    "Building Investment",
    "Property Rental",
    "Real Estate Delta",
    "Land Purchase",
    "Commercial Property",
    "Residential Property",
    "Property Development",
    "Real Estate Nigeria",
    "Investment Property",
    "Estate Management",
    "Property Sales",
    "Real Estate Investment",
    "Land Development",
    "Property Portfolio",
    "AbumaLink",
    "Abuma Link"
  ],

  authors: [{ name: "AbumaLink Team" }],
  creator: "AbumaLink",
  publisher: "AbumaLink Team",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseURL,
    siteName: "AbumaLink",
    title: "AbumaLink - Premium Property Investment Solutions",
    description:
      "Premier property investment solutions in lands, buildings, and rentals. Building wealth through real estate excellence in Delta and beyond.",
    images: [
      {
        url: "/assets/AL2Bg.png", 
        width: 1200,
        height: 630,
        alt: "AbumaLink - Real Estate Investment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AbumaLink - Premium Property Investment Solutions",
    description:
      "Premier property investment solutions in lands, buildings, and rentals. Building wealth through real estate excellence.",
    images: ["/assets/AL2Bg.png"], // Relative URL - metadataBase makes it absolute
    creator: "@AbumaLink",
    site: "@AbumaLink",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/AL2Bg.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/assets/AL2Bg.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="i40g15crXdmDeE-cIEVaKuQFBPzOM58NH4XtsupkIIA" />
        <meta name="theme-color" content="#000000" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "AbumaLink",
              "description": "AbumaLink is Asaba's leading real estate company specializing in verified property sales, land acquisition, and property investment.",
              "url": baseURL,
              "logo": `${baseURL}/assets/AL2Bg.png`, // Added leading slash
              "image": `${baseURL}/assets/AL2Bg.png`, // Added leading slash
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Asaba",
                "addressRegion": "Delta State",
                "addressCountry": "NG"
              },
              "areaServed": {
                "@type": "State",
                "name": "Delta State"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AbumaLink",
              "url": baseURL,
              "logo": `${baseURL}/assets/AL2Bg.png`, 
              "description": "AbumaLink is Asaba's leading real estate company specializing in verified property sales, land acquisition, and property investment."
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}