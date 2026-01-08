"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "92%", label: "of political ads now include video content" },
  { value: "64%", label: "higher engagement on video campaign ads" },
  { value: "3x", label: "more donations from video appeals" },
]

const services = [
  {
    title: "Campaign Ad",
    description:
      "Compelling political advertisements that resonate with voters and communicate your message effectively.",
    price: "From $5,000",
    image: "/political-campaign-rally-american-flags-podium.jpg",
  },
  {
    title: "Town Hall Coverage",
    description: "Professional live streaming and documentation of town halls, debates, and community events.",
    price: "From $3,500",
    image: "/town-hall-meeting-community-gathering-political.jpg",
  },
  {
    title: "Biographical Documentary",
    description: "Share your candidate's story with authentic documentary-style content that builds trust.",
    price: "From $7,500",
    image: "/politician-speaking-interview-documentary-style.jpg",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="bg-white border-none shadow-lg overflow-hidden h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{service.title}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
          <p className="text-[#0a0a0a] font-semibold mb-4">{service.price}</p>
          <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-[#E31E24] hover:bg-[#c91a1f] text-white rounded-full px-6">Get Started</Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function PoliticalCampaignPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/political-campaign-rally-crowd.jpg"
            alt="Political Campaign Video Production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Video Production for <span className="text-[#E31E24]">Political Campaigns:</span> Win Hearts, Win Votes.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-6">Craft Your Winning Campaign Message</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {
                "In today's digital-first political landscape, video is the most powerful tool to connect with voters. Our team specializes in creating compelling campaign content that builds trust, communicates your vision, and mobilizes supporters."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl sm:text-6xl font-bold text-[#E31E24] block mb-3">{stat.value}</span>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E31E24] mb-4">Campaign Video Services</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E31E24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Launch Your Campaign?</h2>
            <p className="text-white/80 text-lg mb-8">{"Let's create video content that wins elections."}</p>
            <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-white text-[#E31E24] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
