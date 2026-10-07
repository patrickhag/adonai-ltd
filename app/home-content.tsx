"use client";

import WelcomeHome from "@/components/Welcome-home";
import Services from "@/components/services";
import WhyUs from "@/components/whyus";
import Network from "@/components/network";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import CompanyOverview from "@/components/companyOverview";
import Testimonials from "@/components/Testimonials";

export default function HomeContent() {
  const handleViewChange = (viewName: string) => {
    document.getElementById(viewName)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#fdfdfd]">
      <Hero />
      <WelcomeHome onViewChange={handleViewChange} />
      <CompanyOverview />
      <div id="services"><Services /></div>
      <div id="why-us"><WhyUs /></div>
      <div id="network"><Network /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}
