"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Video } from "lucide-react"

const industries = [
  {
    id: "political-campaign",
    title: "Political Campaign",
    image: "/political-campaign-rally-crowd.jpg",
    href: "/industries/political-campaign",
  },
  {
    id: "food-restaurant",
    title: "Food & Restaurant",
    image: "/chef-plating-gourmet-food-restaurant.jpg",
    href: "/industries/food-restaurant",
  },
  {
    id: "non-profit",
    title: "Non-Profit",
    image: "/hands-giving-helping-nonprofit-charity.jpg",
    href: "/industries/non-profit",
  },
  {
    id: "ecommerce-business",
    title: "E-commerce & Business",
    image: "/ecommerce-business-owner-packaging-products-wareho.jpg",
    href: "/industries/ecommerce",
  },
  {
    id: "education",
    title: "Education",
    image: "/student-studying-education-classroom-learning.jpg",
    href: "/industries/education",
  },
]

function IndustryCard({ industry, index }: { industry: (typeof industries)[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Link href={industry.href}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={shouldReduceMotion ? {} : { y: -10 }}
        className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
      >
        <img
          src={industry.image || "/placeholder.svg"}
          alt={industry.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Title label */}
        <div className="absolute top-4 left-4 right-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-[#E31E24] text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block"
          >
            {industry.title}
          </motion.div>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-[#E31E24]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-white text-[#0a0a0a] font-semibold px-6 py-3 rounded-lg">View Services</span>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-[#E31E24] rounded-2xl mb-6"
          >
            <Video className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 text-balance max-w-4xl mx-auto">
            We provide an extensive array of media services tailored to meet the diverse production needs of our
            clients.
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
