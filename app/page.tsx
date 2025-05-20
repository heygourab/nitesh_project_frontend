"use client";

import FAQSection from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWork } from "@/components/how_it_work";
import { PrivacyPolicy } from "@/components/privacy";

export default function Page() {
  return (
    <div className="flex flex-col mx-8">
      <Hero />
      <HowItWork />
      <PrivacyPolicy />
      <FAQSection />
    </div>
  );
}
