"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "85%", label: "of consumers say they trust a brand more after watching a video." },
  { value: "54%", label: "of consumers want to see more video content from brands they like." },
  { value: "87%", label: "of marketers use video for their content marketing." },
]

const services = [
  {
    title: "Product Video",
    description: "Showcase your brand's newest product and emphasize its distinctive features.",
    price: "From $3,000",
    image: "/product-showcase-professional-studio-colorful.jpg",
  },
  {
    title: "Video Ad",
    description:
      "Captivate your target audience with video content strategically crafted to boost conversions and drive engagement.",
    price: "From $3,000",
    image: "/open-shop-sign-storefront-business.jpg",
  },
  {
    title: "Testimonial Video",
    description: "Share powerful customer success stories to earn and share social proof.",
    price: "From $3,000",
    image: "/professional-video-interview-setup-camera-equipmen.jpg",
  },
]

const features = [
  "High-quality 4K video production",
  "Professional lighting and sound",
  "Experienced creative team",
  "Fast turnaround times",
  "Multiple revisions included",
  "Optimized for all platforms",
]

function CountUpStat({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-5xl sm:text-6xl font-bold text-[#E31E24] block mb-3"
      >
        {stat.value}
      </motion.span>
      <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">{stat.label}</p>
    </motion.div>
  )
}

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

export default function EcommercePage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/ecommerce-food-truck-puerto-rican-restaurant-store.jpg"
            alt="E-commerce Video Production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Video Production for <span className="text-[#E31E24]">E-commerce:</span> Revolutionizing the Digital
              Marketplace.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-6">
              Leverage the Power of Conversion-Focused Video
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {
                "In today's hyper-competitive retail and e-commerce landscape, simply having an online presence isn't enough. To truly thrive, you must captivate your audience, inspire action, and stand out. And that's where conversion-focused video comes in."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <CountUpStat key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E31E24] mb-4">Start your video project today.</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Elevate your brand above the competition in the increasingly crowded retail and ecommerce arena. Harness
              the power of video to drive conversions, foster lead generation, amplify web traffic, and streamline
              customer support while minimizing returns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">{"What's Included"}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-[#E31E24] flex-shrink-0" />
                <span className="text-[#0a0a0a] font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#E31E24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your E-commerce Brand?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {"Let's create video content that converts viewers into customers."}
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
