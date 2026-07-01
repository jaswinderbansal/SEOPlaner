import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const siteUrl = "https://www.seoplaner.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SEOPlaner | SEO, AI Search, GEO & AEO Agency",
    template: "%s | SEOPlaner",
  },

  description:
    "SEOPlaner helps businesses grow through SEO, AI Search Optimization, GEO, AEO, Local SEO, Web Development, and Digital Marketing services.",

  keywords: [
    "SEO Agency",
    "AI Search Optimization",
    "SEO",
    "GEO",
    "AEO",
    "Technical SEO",
    "Local SEO",
    "Digital Marketing",
    "Web Development",
    "Software Development",
    "Cloud Services",
    "Cybersecurity",
  ],

  authors: [
    {
      name: "SEOPlaner",
      url: siteUrl,
    },
  ],

  creator: "SEOPlaner",

  publisher: "SEOPlaner",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SEOPlaner",
    title: "SEOPlaner | SEO, AI Search, GEO & AEO Agency",
    description:
      "Increase your visibility across Google, AI Search, GEO, AEO, and Local SEO with SEOPlaner.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SEOPlaner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEOPlaner | SEO, AI Search, GEO & AEO",
    description:
      "SEO, GEO, AEO, AI Search Optimization and Digital Marketing Services.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "SEOPlaner",

    url: siteUrl,

    logo: `${siteUrl}/logo.png`,

    image: `${siteUrl}/og-image.png`,

    description:
      "SEOPlaner provides SEO, AI Search Optimization, GEO, AEO, Web Development, Digital Marketing and IT Solutions worldwide.",

    email: "hello@seoplaner.com",

    telephone: "+91-9876543210",

    areaServed: "Worldwide",

    sameAs: [
      "https://www.linkedin.com/company/seoplaner",
      "https://twitter.com/seoplaner",
      "https://www.facebook.com/seoplaner",
      "https://www.instagram.com/seoplaner",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      email: "hello@seoplaner.com",
      contactType: "Customer Support",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-white text-slate-900 antialiased">
        <JsonLd data={organizationSchema} />

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}