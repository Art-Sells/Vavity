import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Rules of Vavity",
  description: "Learn how Vavity's autonomous financial system psychologically anchors asset prices before they fall. Discover autonomous protections, self-limiting mechanisms, and how it eliminates bear markets through technical autonomy.",
  keywords: "Vavity rules, autonomous financial system, bear markets, financial protections, price anchoring",
  authors: [{ name: "Vavity" }],
  creator: "Vavity",
  metadataBase: new URL("https://vavity.info"),
  alternates: {
    canonical: "/rules",
  },
  openGraph: {
    title: "The Rules of Vavity",
    description: "Learn how Vavity's autonomous financial system psychologically anchors asset prices before they fall. Discover autonomous protections and self-limiting mechanisms.",
    url: "https://vavity.info/rules",
    siteName: "Vavity",
    images: [
      {
        url: "https://vavity.s3.us-east-1.amazonaws.com/Banner.jpg",
        width: 1200,
        height: 630,
        alt: "The Rules of Vavity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rules of Vavity",
    description: "Learn how Vavity's autonomous financial system psychologically anchors asset prices before they fall.",
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

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Rules of Vavity",
    "description": "Learn how Vavity's autonomous financial system psychologically anchors asset prices before they fall",
    "url": "https://vavity.info/rules",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Vavity",
      "url": "https://vavity.info"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

