import { HeroSection } from "@/components/sections/hero"
import { PortfolioSection } from "@/components/sections/portfolio"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ComparisonSection } from "@/components/sections/comparison"
import { SyllabusSection } from "@/components/sections/syllabus"
import { CtaSection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <HeroSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ComparisonSection />
      <SyllabusSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
