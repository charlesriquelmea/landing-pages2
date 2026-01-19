"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useCountUp } from "@/hooks/use-count-up"
import { Video, Users, Clock, ThumbsUp } from "lucide-react"

const stats = [
  { icon: Video, value: 2000, suffix: "+", label: "Videos Produced" },
  { icon: Users, value: 500, suffix: "+", label: "Clients Served" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
  { icon: ThumbsUp, value: 95, suffix: "%", label: "Client Satisfaction" },
]

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const { count, ref, isInView } = useCountUp({ end: stat.value })
  const shouldReduceMotion = useReducedMotion()
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <motion.div
        animate={shouldReduceMotion || !isInView ? {} : { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E31E24]/10 mb-4"
      >
        <Icon className="w-8 h-8 text-[#E31E24]" />
      </motion.div>
      <div className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] mb-2">
        {count}
        {stat.suffix}
      </div>
      <p className="text-gray-600 font-medium">{stat.label}</p>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
