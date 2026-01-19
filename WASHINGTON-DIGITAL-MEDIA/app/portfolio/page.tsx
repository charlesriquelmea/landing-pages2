"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Film, Award, TrendingUp, Play } from "lucide-react"

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E31E24]/5 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#E31E24]/10 border border-[#E31E24]/20 rounded-full px-4 py-2 mb-6"
          >
            <Film className="w-4 h-4 text-[#E31E24]" />
            <span className="text-[#E31E24] text-sm font-semibold">Our Portfolio</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Over <span className="text-[#E31E24]">2,000 Videos</span> Produced
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
          >
            From Fortune 500 companies to local nonprofits, explore our complete body of work and see how we bring
            stories to life.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E31E24]/10 flex items-center justify-center mb-3">
                <Play className="w-8 h-8 text-[#E31E24]" />
              </div>
              <p className="text-3xl font-bold text-white">2,000+</p>
              <p className="text-sm text-white/50">Videos Produced</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E31E24]/10 flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-[#E31E24]" />
              </div>
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-sm text-white/50">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E31E24]/10 flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-[#E31E24]" />
              </div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-white/50">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </section>

      <PortfolioGrid />

      <Footer />
    </main>
  )
}
