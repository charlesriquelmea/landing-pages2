"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Tv, Radio, Film, Globe, Search, MousePointer, Share2, ArrowRight, Sparkles } from "lucide-react"

const videoServices = [
  {
    icon: Building2,
    title: "Corporate Videos",
    description:
      "Executive messages, company culture, and internal communications that engage employees and stakeholders.",
  },
  {
    icon: Tv,
    title: "Commercial Production",
    description: "TV-quality ads for broadcast, streaming, and social platforms that drive conversions.",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    description: "Multi-camera event coverage with real-time engagement tools for maximum reach.",
  },
  {
    icon: Film,
    title: "Documentary Series",
    description: "Long-form storytelling for nonprofits and mission-driven brands that inspire action.",
  },
]

const marketingServices = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Conversion-optimized websites that showcase your brand story and generate leads 24/7.",
  },
  {
    icon: Search,
    title: "SEO Strategy",
    description: "Data-driven optimization to rank higher, drive organic traffic, and dominate your market.",
  },
  {
    icon: MousePointer,
    title: "PPC Campaigns",
    description: "Targeted advertising across Google, YouTube, and social platforms with proven ROI.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Strategic content creation and community management that builds loyal audiences.",
  },
]

function ServiceCard({ service, index }: { service: (typeof videoServices)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={shouldReduceMotion ? {} : { y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
      className="group"
    >
      <Card className="h-full border-2 border-transparent hover:border-[#E31E24]/20 transition-colors duration-300 bg-white">
        <CardContent className="p-6">
          <motion.div
            whileHover={shouldReduceMotion ? {} : { rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#E31E24]/10 mb-4 group-hover:bg-[#E31E24]/20 transition-colors"
          >
            <Icon className="w-7 h-7 text-[#E31E24]" />
          </motion.div>
          <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#E31E24] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("video")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#E31E24]/10 text-[#E31E24] px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Full-Service Agency
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6 text-balance">
            Strategic Media Solutions That <span className="text-[#E31E24]">Drive Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to conversion, we handle the entire production and marketing journey. Our integrated approach
            ensures your message reaches the right audience at the right time.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-100 p-1 rounded-xl h-14">
            <TabsTrigger
              value="video"
              className="rounded-lg data-[state=active]:bg-[#E31E24] data-[state=active]:text-white font-semibold py-3 transition-all"
            >
              Video Production
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="rounded-lg data-[state=active]:bg-[#E31E24] data-[state=active]:text-white font-semibold py-3 transition-all"
            >
              Digital Marketing
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="video" className="mt-0">
              <motion.div
                key="video"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {videoServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <motion.div
                key="marketing"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {marketingServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
