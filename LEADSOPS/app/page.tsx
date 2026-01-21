import HeroSection from '@/components/sections/hero-section'
import ComparisonSection from '@/components/sections/comparison-section'
import HowItWorksSection from '@/components/sections/how-it-works-section'
import PricingSection from '@/components/sections/pricing-section'
import WarningSection from '@/components/sections/warning-section'
import VerticalSelector from '@/components/sections/vertical-selector'
import ROICalculator from '@/components/sections/roi-calculator'
import FAQSection from '@/components/sections/faq-section'
import OrderForm from '@/components/sections/order-form'
import Footer from '@/components/sections/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      <HeroSection />
      <ComparisonSection />
      <HowItWorksSection />
      <PricingSection />
      <WarningSection />
      <VerticalSelector />
      <ROICalculator />
      <FAQSection />
      <OrderForm />
      <Footer />
    </main>
  )
}
