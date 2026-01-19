"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CaseStudy {
  title: string
  category: string
  client: string
  duration: string
  year: string
  heroImage: string
  videoUrl: string
  results: Record<string, string>
  challenge: string
  solution: string
  testimonial: {
    quote: string
    author: string
    role: string
    avatar: string
  }
  services: string[]
  gallery: string[]
}

export function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudy }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={caseStudy.heroImage || "/placeholder.svg"}
          alt={caseStudy.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link href="/#portfolio">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </motion.div>
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#E31E24] font-semibold mb-2"
          >
            {caseStudy.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {caseStudy.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-white/80"
          >
            <span>
              Client: <strong className="text-white">{caseStudy.client}</strong>
            </span>
            <span>
              Duration: <strong className="text-white">{caseStudy.duration}</strong>
            </span>
            <span>
              Year: <strong className="text-white">{caseStudy.year}</strong>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="bg-[#0a0a0a] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(caseStudy.results).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#E31E24] mb-2">{value}</div>
                <div className="text-white/60 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={caseStudy.videoUrl}
              title={caseStudy.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8 text-center">Services Provided</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-[#E31E24]" />
                <span className="font-medium text-[#0a0a0a]">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-[#E31E24] mx-auto mb-6" />
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-medium text-white mb-8 leading-relaxed"
          >
            {`"${caseStudy.testimonial.quote}"`}
          </motion.blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src={caseStudy.testimonial.avatar || "/placeholder.svg"}
              alt={caseStudy.testimonial.author}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold text-white">{caseStudy.testimonial.author}</p>
              <p className="text-white/60">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-gray-600 mb-8">
            {"Let's discuss how we can help achieve similar results for your brand."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" className="bg-[#E31E24] hover:bg-[#c41920] text-white font-semibold px-8">
                Start Your Project
              </Button>
            </Link>
            <Link href="/#portfolio">
              <Button size="lg" variant="outline" className="font-semibold px-8 bg-transparent">
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
