import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar"; // 1. Import your new component
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floatingwhatsapp";
import { absoluteUrl, safeJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Adonai Ltd | Logistics & Customs Clearance in Rwanda",
    template: "%s | Adonai Ltd",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["logistics Rwanda", "customs clearance Rwanda", "freight forwarding Kigali", "cargo transport East Africa", "warehousing Rwanda"],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "/",
    siteName: siteConfig.name,
    title: "Adonai Ltd | Logistics & Customs Clearance in Rwanda",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Adonai Ltd logistics in Rwanda" }],
  },
  twitter: { card: "summary_large_image", title: "Adonai Ltd | Logistics & Customs Clearance in Rwanda", description: siteConfig.description, images: ["/opengraph-image"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "Logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            url: siteConfig.url,
            logo: absoluteUrl("/assets/LOGO.PNG"),
            image: absoluteUrl("/opengraph-image"),
            description: siteConfig.description,
            email: siteConfig.email,
            telephone: siteConfig.telephone,
            address: { "@type": "PostalAddress", ...siteConfig.address },
            areaServed: [{ "@type": "Country", name: "Rwanda" }, { "@type": "Place", name: "East Africa" }],
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            publisher: { "@id": `${siteConfig.url}/#organization` },
            inLanguage: "en",
          }) }}
        />
        <TopBar /> {/* 2. Place it here, above the Header */}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
