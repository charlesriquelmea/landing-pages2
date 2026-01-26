"use client" 

import { useState } from "react"
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
import InstructorSecondSection from "@/components/InstructorSecondsection"
// 2. IMPORTA EL FORMULARIO (ajusta la ruta si es necesario)
// import { OnboardingForm } from "@/components/form/onboarding-form" 

export default function Home() {
  // En page.tsx
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        
        <HeroSection />
        <InstructorSection />
        <InstructorSecondSection />
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