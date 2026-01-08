"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "57%", label: "of donors who watch nonprofit videos go on to make a donation" },
  { value: "4x", label: "more likely to share video content than other formats" },
  { value: "300%", label: "average increase in donations from video campaigns" },
]

const services = [
  {
    title: "Impact Documentary",
    description: "Tell powerful stories of the lives you've changed and the communities you serve.",
    price: "From $5,000",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Fundraising Appeal",
    description: "Emotional video appeals that inspire donors to take action and support your cause.",
    price: "From $3,000",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Event Coverage",
    description: "Professional documentation of galas, volunteer events, and community programs.",
    price: "From $2,500",
    image: "/placeholder.svg?height=300&width=400",
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

export default function NonProfitPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/nonprofit-fundraiser-elegant-event.jpg"
            alt="Nonprofit Video Production"
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
              Video Production for <span className="text-[#E31E24]">Non-Profits:</span> Amplify Your Impact.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-6">
              Tell Stories That Move People to Action
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {
                "Your mission deserves to be heard. We specialize in creating emotional, authentic video content that connects donors with your cause and inspires them to become champions of your work."
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E31E24] mb-4">Nonprofit Video Services</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Amplify Your Mission?</h2>
            <p className="text-white/80 text-lg mb-8">
              {"Let's create video content that inspires action and drives donations."}
            </p>
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
