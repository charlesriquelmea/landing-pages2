import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import InstructorSection from "@/components/InstructorSection"
import CourseOverview from "@/components/CourseOverview"
import WhatYouWillLearn from "@/components/WhatYouWillLearn"
import AIMentorSection from "@/components/AIMentorSection"
import ValidationSprintSection from "@/components/ValidationSprintSection"
import Timeline from "@/components/Timeline"
import PricingSection from "@/components/PricingSection"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Ship Fast Orlando | Sprint de Innovacion para Emprendedores Latinos",
  description:
    "Sprint intensivo de 54 horas en Orlando, Florida para emprendedores latinos que quieren transformar sus ideas en productos reales con metodologia Silicon Valley.",
  keywords:
    "ship fast, innovacion, emprendimiento, Orlando, Florida, latinos, sprint, startup, MVP, lean startup, Silicon Valley",
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <HeroSection />
        <InstructorSection />
        <CourseOverview />
        <WhatYouWillLearn />
        <ValidationSprintSection />
        <AIMentorSection />
        <Timeline />
        <PricingSection />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
