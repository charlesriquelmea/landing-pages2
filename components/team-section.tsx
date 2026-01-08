"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="team" className="py-24 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 bg-[#E31E24] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              Washington Digital Media
            </div>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border-4 border-[#E31E24]/20"
            >
              <img
                src="/diverse-professional-video-production-team-group-p.jpg"
                alt="Washington Digital Media Team"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              A <span className="text-[#E31E24]">Video Production Agency</span> in Washington DC
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed mb-8">
              <p>
                <span className="text-[#E31E24] font-semibold">Washington Digital Media</span> is a video production
                agency that helps businesses produce amazing videos with clear, concise messaging that better
                communicates their brand values and expands their reach to a larger audience.
              </p>
              <p>
                We strive to lead every project with creativity and clean execution to help our clients make a real
                difference in their field. Our team brings together diverse talents in cinematography, editing, motion
                graphics, and digital marketing.
              </p>
              <p>
                With over 10 years of experience and 2,000+ videos produced, we understand what it takes to create
                content that not only looks stunning but drives real business results.
              </p>
            </div>

            <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="bg-[#E31E24] hover:bg-[#c41920] text-white font-semibold gap-2">
                See More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
