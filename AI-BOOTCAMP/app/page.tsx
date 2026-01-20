"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { ForWhoSection } from "@/components/for-who-section"
import { ComparisonSection } from "@/components/comparison-section"
import { HowItWorks } from "@/components/how-it-works"
import { StackSection } from "@/components/stack-section"
import { IndustrySection } from "@/components/industry-section"
import { SprintSection } from "@/components/sprint-section"
import { ProductCards } from "@/components/product-cards"
import { CommunitySection } from "@/components/community-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <ForWhoSection />
      <ComparisonSection />
      <HowItWorks />
      <StackSection />
      <IndustrySection />
      <SprintSection />
      <ProductCards />
      <CommunitySection />
      <FAQSection />
      <Footer />
    </main>
  )
}
