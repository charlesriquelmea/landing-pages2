import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { IndustriesSection } from "@/components/industries-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TeamSection } from "@/components/team-section"
import { BrandsSection } from "@/components/brands-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ChatButton } from "@/components/chat-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <IndustriesSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ChatButton />
    </main>
  )
}
