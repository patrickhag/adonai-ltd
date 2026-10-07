import type { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: { absolute: "Adonai Ltd | Logistics & Customs Clearance in Rwanda" },
  description:
    "Freight forwarding, customs clearance, cargo transport, warehousing, procurement, and cross-border logistics from Kigali, Rwanda.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
