"use client"

import { useState } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/landing/language-switcher"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { CMSPowerSection } from "@/components/landing/cms-power-section"
import { IAAgentSection } from "@/components/landing/ia-agent-section"
import { PortfolioSection } from "@/components/landing/portfolio-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { GuaranteesSection } from "@/components/landing/guarantees-section"
import { FinalCTASection } from "@/components/landing/final-cta-section"
import { FAQSection } from "@/components/landing/faq-section"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { TypeformContact } from "@/components/landing/typeform-contact"

function LandingContent() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [contactSource, setContactSource] = useState("general")

  const openContact = (source = "general") => {
    setContactSource(source)
    setIsContactOpen(true)
  }

  return (
    <main className="relative overflow-hidden">
      <LanguageSwitcher />
      <HeroSection onOpenContact={openContact} />
      <ProblemSection />
      <SolutionSection />
      <CMSPowerSection />
      <IAAgentSection onOpenContact={openContact} />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection onOpenContact={openContact} />
      <GuaranteesSection />
      <FAQSection />
      <FinalCTASection onOpenContact={openContact} />
      <WhatsAppButton />
      <TypeformContact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} source={contactSource} />
    </main>
  )
}

export default function LandingPage() {
  return (
    <LanguageProvider>
      <LandingContent />
    </LanguageProvider>
  )
}
