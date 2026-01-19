"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Play, ExternalLink, ArrowRight, Film, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: "nbc-washington-feature",
    title: "NBC Washington Feature",
    category: "Documentary",
    thumbnail: "/news-broadcast-studio-professional-lighting.jpg",
    client: "NBC4 Washington",
    results: "2.3M views",
  },
  {
    id: "capital-one-campaign",
    title: "Capital One Campaign",
    category: "Commercial",
    thumbnail: "/corporate-office-modern-business-professional.jpg",
    client: "Capital One",
    results: "150% ROI",
  },
  {
    id: "dc-food-bank-gala",
    title: "DC Food Bank Gala",
    category: "Event",
    thumbnail: "/charity-gala-event-elegant-venue.jpg",
    client: "DC Food Bank",
    results: "$500K raised",
  },
  {
    id: "tech-startup-launch",
    title: "Tech Startup Launch",
    category: "Corporate",
    thumbnail: "/technology-startup-office-modern-workspace.jpg",
    client: "TechStart DC",
    results: "Series A funded",
  },
  {
    id: "restaurant-promo",
    title: "Restaurant Promo",
    category: "Commercial",
    thumbnail: "/upscale-restaurant-interior-fine-dining.jpg",
    client: "El Tamarindo",
    results: "40% foot traffic",
  },
  {
    id: "government-agency",
    title: "Government Agency",
    category: "Documentary",
    thumbnail: "/government-building-washington-dc-capitol.jpg",
    client: "DC Latino Affairs",
    results: "500K reach",
  },
]

function PortfolioCard({ item, index }: { item: (typeof portfolioItems)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <Link href={`/portfolio/${item.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
      >
        <img
          src={item.thumbnail || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent flex flex-col justify-end p-6"
        >
          <span className="text-[#E31E24] text-sm font-medium mb-1">{item.category}</span>
          <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-white/60 text-sm mb-3">{item.client}</p>
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm font-semibold">{item.results}</span>
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-[#E31E24] flex items-center justify-center"
              >
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Always visible category badge */}
        <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-xs font-medium">{item.category}</span>
        </div>
      </motion.div>
    </Link>
  )
}

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#E31E24]/10 border border-[#E31E24]/20 rounded-full px-4 py-2 mb-6"
          >
            <Film className="w-4 h-4 text-[#E31E24]" />
            <span className="text-[#E31E24] text-sm font-semibold">Our Work</span>
          </motion.div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            {"We've"} Produced Over{" "}
            <span className="relative">
              <span className="text-[#E31E24]">2,000 Videos</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 10"
                fill="none"
              >
                <motion.path
                  d="M0 8 Q100 0 200 8"
                  stroke="#E31E24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.svg>
            </span>
          </h2>

          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-10">
            From Fortune 500 companies to local nonprofits, see how we bring stories to life
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-[#E31E24]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="text-sm text-white/50">Awards Won</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#E31E24]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-white/50">Happy Clients</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center">
                <Film className="w-6 h-6 text-[#E31E24]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-sm text-white/50">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-[#E31E24] hover:bg-[#c91a1f] text-white font-semibold px-8 py-6 rounded-full"
              >
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
