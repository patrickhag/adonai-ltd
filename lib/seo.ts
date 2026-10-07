const fallbackSiteUrl = "https://www.adonai-ltd.com";

export const siteConfig = {
  name: "Adonai Ltd",
  legalName: "Adonai Ltd",
  description:
    "Reliable freight forwarding, customs clearance, cargo transport, warehousing, procurement, and cross-border logistics in Rwanda and East Africa.",
  url: fallbackSiteUrl.replace(/\/$/, ""),
  email: "info@adonairwanda.com",
  telephone: "+250788302147",
  address: {
    streetAddress: "Magerwa Customs Facilities, Gikondo",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function safeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
