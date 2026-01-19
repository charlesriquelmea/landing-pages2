"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion"
import { Play, ExternalLink, Filter } from "lucide-react"

const allPortfolioItems = [
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
  {
    id: "healthcare-campaign",
    title: "Healthcare Awareness",
    category: "Documentary",
    thumbnail: "/healthcare-medical-facility-modern.jpg",
    client: "La Clinica del Pueblo",
    results: "85% awareness",
  },
  {
    id: "political-ad",
    title: "Political Campaign",
    category: "Commercial",
    thumbnail: "/political-campaign-rally-crowd.jpg",
    client: "DC Council",
    results: "Won election",
  },
  {
    id: "nonprofit-gala",
    title: "Annual Charity Gala",
    category: "Event",
    thumbnail: "/nonprofit-fundraiser-elegant-event.jpg",
    client: "Youth Center",
    results: "$250K raised",
  },
]

const categories = ["All", "Documentary", "Commercial", "Event", "Corporate"]

function PortfolioCard({ item, index }: { item: (typeof allPortfolioItems)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <Link href={`/portfolio/${item.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
      >
        <img
          src={item.thumbnail || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

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

        <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-xs font-medium">{item.category}</span>
        </div>
      </motion.div>
    </Link>
  )
}

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const shouldReduceMotion = useReducedMotion()

  const filteredItems =
    activeCategory === "All" ? allPortfolioItems : allPortfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <Filter className="w-5 h-5 text-white/40 mr-2" />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#E31E24] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent border-2 border-white/20 text-white hover:border-[#E31E24] hover:text-[#E31E24] font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
