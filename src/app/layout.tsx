import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Keom Logistics – Reliable Freight & Shipping Solutions",
    template: "%s | Keom Logistics",
  },
  description:
    "Keom Logistics offers fast, reliable road, air, and ocean freight services. Get a quote today for secure global shipping and supply-chain solutions.",
  keywords: [
    "logistics",
    "freight",
    "shipping",
    "road freight",
    "air freight",
    "ocean freight",
    "supply chain",
    "cargo",
    "transportation",
    "Keom Logistics",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Keom Logistics",
    title: "Keom Logistics – Reliable Freight & Shipping Solutions",
    description:
      "Fast, secure freight services across road, air, and ocean. Trusted by businesses worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keom Logistics – Reliable Freight & Shipping Solutions",
    description:
      "Fast, secure freight services across road, air, and ocean. Trusted by businesses worldwide.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TransportationBusiness",
  name: "Keom Logistics",
  description:
    "Reliable road, air, and ocean freight services for businesses worldwide.",
  url: "https://keom.netlify.app",
  serviceType: ["Road Freight", "Air Freight", "Ocean Freight"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>);
}