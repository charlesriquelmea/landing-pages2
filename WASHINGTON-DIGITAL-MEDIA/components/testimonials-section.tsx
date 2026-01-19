"use client"

import { useRef, useState } from "react"
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion"
import { Quote, Star, Play, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Isaiah Decruise",
    role: "CEO, TechStart DC",
    category: "Corporate",
    content:
      "Washington Digital Media transformed our brand story. Their video content helped us close our Series A funding round. The team's professionalism and creative vision exceeded our expectations.",
    avatar: "/professional-businessman-portrait-headshot.jpg",
    videoThumbnail: "/technology-startup-office-modern-workspace.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    company: "TechStart DC",
    results: "Closed $5M Series A",
  },
  {
    name: "Maria Gonzalez",
    role: "Director, DC Food Bank",
    category: "Nonprofit",
    content:
      "The documentary they produced for our annual campaign increased donations by 300%. They truly understand how to tell stories that move people to action.",
    avatar: "/professional-woman-nonprofit-director-portrait.jpg",
    videoThumbnail: "/charity-gala-event-elegant-venue.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    company: "DC Food Bank",
    results: "300% donation increase",
  },
  {
    name: "Catalina Talero",
    role: "Event Coordinator",
    category: "Personal Events",
    content:
      "Thrilled with our wedding video! The ceremony was officiated by Councilmember Robert White and 'Do It BIG!', with the video, and the price, Kathy, Edgar, Chris, Ricardo and team - you rocked it! Highly recommended.",
    avatar: "/happy-bride-wedding-portrait-elegant.jpg",
    videoThumbnail: "/wedding-ceremony-elegant-venue-celebration.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    company: "Private Client",
    results: "Featured in DC Weddings",
  },
]

function StarRating() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star, i) => (
        <motion.span
          key={i}
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </motion.span>
      ))}
    </div>
  )
}

function VideoPlayer({
  testimonial,
  isPlaying,
  onToggle,
}: {
  testimonial: (typeof testimonials)[0]
  isPlaying: boolean
  onToggle: () => void
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-2xl">
      {isPlaying ? (
        <iframe
          src={`${testimonial.videoUrl}?autoplay=1`}
          title={`${testimonial.name} testimonial video`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={testimonial.videoThumbnail || "/placeholder.svg"}
            alt={`${testimonial.name} video thumbnail`}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={onToggle}
              whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Animated ring */}
              <motion.div
                animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 w-24 h-24 rounded-full bg-[#E31E24]"
              />
              <div className="relative w-24 h-24 rounded-full bg-[#E31E24] flex items-center justify-center shadow-2xl">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </div>
            </motion.button>
          </div>

          {/* Video info overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-semibold">{testimonial.company}</p>
            <p className="text-white/70 text-sm">{testimonial.results}</p>
          </div>
        </>
      )}
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextTestimonial = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#E31E24] text-sm font-semibold uppercase tracking-wider mb-4 block"
          >
            Client Success Stories
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real results from real DC businesses</p>
        </motion.div>

        {/* Testimonial Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <VideoPlayer
                  testimonial={currentTestimonial}
                  isPlaying={isPlaying}
                  onToggle={() => setIsPlaying(!isPlaying)}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-[#E31E24]" />

                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl text-[#0a0a0a] font-medium leading-relaxed">
                  {`"${currentTestimonial.content}"`}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={currentTestimonial.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#E31E24]/20"
                  />
                  <div>
                    <p className="font-bold text-[#0a0a0a] text-lg">{currentTestimonial.name}</p>
                    <p className="text-gray-600">{currentTestimonial.role}</p>
                    <span className="inline-block mt-1 text-xs font-semibold px-3 py-1 bg-[#E31E24] text-white rounded-full">
                      {currentTestimonial.category}
                    </span>
                  </div>
                </div>

                {/* Results badge */}
                <div className="bg-slate-50 rounded-xl p-4 inline-block">
                  <p className="text-sm text-gray-500 mb-1">Results Achieved</p>
                  <p className="text-[#E31E24] font-bold text-lg">{currentTestimonial.results}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#E31E24] w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#E31E24] text-gray-600 hover:text-[#E31E24] flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-[#E31E24] text-white flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
