"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { AlertTriangle, Lock, TrendingDown, DollarSign } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = target / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const problems = [
    {
      icon: AlertTriangle,
      title: t("problem.pain1.title"),
      description: t("problem.pain1.desc"),
    },
    {
      icon: Lock,
      title: t("problem.pain2.title"),
      description: t("problem.pain2.desc"),
    },
    {
      icon: TrendingDown,
      title: t("problem.pain3.title"),
      description: t("problem.pain3.desc"),
    },
    {
      icon: DollarSign,
      title: t("problem.pain4.title"),
      description: t("problem.pain4.desc"),
    },
  ]

  return (
    // ÚNICO CAMBIO: py-24 md:py-32  --->  py-16 md:py-24
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-slate-900 mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t("problem.title")}
        </motion.h2>

        {/* Hero stat */}
        <motion.div
          className="relative bg-gradient-to-r from-[#0066FF]/10 to-[#8B5CF6]/10 rounded-3xl p-8 md:p-12 mb-16 text-center max-w-4xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-7xl md:text-9xl font-black text-[#0066FF] mb-4">
            <AnimatedCounter target={53} />%
          </div>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
            {t("problem.subtitle")} <span className="font-bold text-[#FF6B35]">más de 3 segundos</span> en cargar
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#0066FF]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-[#8B5CF6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <problem.icon className="h-10 w-10 text-[#FF6B35] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}