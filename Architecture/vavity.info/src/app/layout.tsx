import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vavity - Virtual Autonomous Volatility Immunizing Tethering Yielder",
  description: "An autonomous pricing system that anchors asset prices before they fall.",
  keywords: "Vavity, autonomous financial system, bear markets, asset prices, financial technology, DeFi, cryptocurrency, blockchain, price anchoring",
  authors: [{ name: "Vavity" }],
  creator: "Vavity",
  metadataBase: new URL("https://vavity.info"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: "Vavity - Virtual Autonomous Volatility Immunizing Tethering Yielder",
    description: "An autonomous pricing system that anchors asset prices before they fall.",
    url: "https://vavity.info",
    siteName: "Vavity",
    images: [
      {
        url: "https://vavity.s3.us-east-1.amazonaws.com/Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Vavity - An autonomous pricing system that anchors asset prices before they fall.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vavity - Virtual Autonomous Volatility Immunizing Tethering Yielder",
    description: "An autonomous pricing system that anchors asset prices before they fall.",
    images: ["https://vavity.s3.us-east-1.amazonaws.com/Banner.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vavity",
    "description": "An autonomous pricing system that anchors asset prices before they fall.",
    "url": "https://vavity.info",
    "logo": "https://vavity.info/images/Vavity-Icon-Ivory.png",
    "sameAs": [
      "https://github.com/Art-Sells/Vavity"
    ]
  };

  return (
    <html lang="en">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
