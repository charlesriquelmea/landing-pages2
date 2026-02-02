"use client"

import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { DualBrandSection } from "@/components/dual-brand-section"
import { SocialImpactSection } from "@/components/social-impact-section"
import { FounderStorySection } from "@/components/founder-story-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { CountdownSection } from "@/components/countdown-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <DualBrandSection />
      <SocialImpactSection />
      <FounderStorySection />
      <EcosystemSection />
      <CountdownSection />
      <CTASection />
      <Footer />
    </main>
  )
}
