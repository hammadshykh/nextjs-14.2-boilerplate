import AboutBanner from "@/components/about/about-banner";
import HowWeWorkSection from "@/components/about/HowWeWork";
import OfferComprehensive from "@/components/about/offer-comprehensive";
import ExploreOurServices from "@/components/ExploreOurServices";
import GetInTouchSection from "@/components/GetInTouchSection";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
 title: "About - Verbox",
 description: "This is a Verbox website creating by configLabs team",
};

export default function Home() {
 return (
  <div>
   <AboutBanner />
   <StrategicPartnerships />
   <OfferComprehensive />
   <ExploreOurServices />
   {/* <ServicesSection /> */}
   <HowWeWorkSection />
   <GetInTouchSection />
  </div>
 );
}
