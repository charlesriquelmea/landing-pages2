"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const brands = [
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
  { name: "Twitch", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg" },
  { name: "Hulu", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Loom", logo: "https://asset.brandfetch.io/idyHFPMNEF/idcSKqXC_G.svg" },
  { name: "HashiCorp", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" },
  { name: "Scale AI", logo: "https://asset.brandfetch.io/idOgAFV4Lw/idG5tqFP4d.svg" },
]

export function BrandsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E31E24] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Join 500+ businesses that trust us with their story
          </h2>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative mb-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          <motion.div
            animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center"
          >
            {[...brands.slice(0, 6), ...brands.slice(0, 6)].map((brand, index) => (
              <motion.div
                key={`row1-${brand.name}-${index}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="h-8 sm:h-10 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 - Reverse */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          <motion.div
            animate={shouldReduceMotion ? {} : { x: ["-50%", "0%"] }}
            transition={{
              x: {
                duration: 45,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center"
          >
            {[...brands.slice(6), ...brands.slice(6)].map((brand, index) => (
              <motion.div
                key={`row2-${brand.name}-${index}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="h-8 sm:h-10 w-auto object-contain filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
