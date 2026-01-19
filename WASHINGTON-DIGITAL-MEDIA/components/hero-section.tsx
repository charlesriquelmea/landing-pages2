"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Star } from "lucide-react"
import { heroStaggerDelays } from "@/lib/animation-variants"

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: shouldReduceMotion ? 0 : y }}>
        <img
          src="/professional-video-production-studio-dark-cinemati.jpg"
          alt="Professional video production studio"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: heroStaggerDelays.trustPill }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Star className="w-4 h-4 text-[#E31E24] fill-[#E31E24]" />
          <span className="text-sm font-medium">Trusted by 500+ DC Businesses Since 2015</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: heroStaggerDelays.headline, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto mb-6 text-balance"
        >
          We Turn Ideas Into <span className="text-[#E31E24]">Revenue-Driving</span> Video Content
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: heroStaggerDelays.subheadline }}
          className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Over 2,000 videos produced for Fortune 500s, nonprofits, and DC{"'"}s fastest-growing startups. Featured on
          NBC Washington & The Washington Post.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: heroStaggerDelays.ctas }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA with pulse animation */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    boxShadow: [
                      "0 0 0 0 rgba(227, 30, 36, 0.4)",
                      "0 0 0 20px rgba(227, 30, 36, 0)",
                      "0 0 0 0 rgba(227, 30, 36, 0)",
                    ],
                  }
            }
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            className="rounded-lg"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, boxShadow: "0 20px 40px rgba(227, 30, 36, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-[#E31E24] hover:bg-[#c41920] text-white font-semibold px-8 py-6 text-lg gap-2"
              >
                <Play className="w-5 h-5" />
                View Our Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0a0a0a] font-semibold px-8 py-6 text-lg gap-2 bg-transparent"
            >
              <Calendar className="w-5 h-5" />
              Free Strategy Call
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: heroStaggerDelays.trustBar }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-wider text-white/60 mb-4">As Seen On</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["NBC Washington", "Washington Post", "DCist"].map((logo) => (
              <motion.div
                key={logo}
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-white/70 hover:text-white font-semibold text-sm transition-all cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
