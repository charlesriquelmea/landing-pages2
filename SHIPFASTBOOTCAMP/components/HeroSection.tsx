"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowDown, Calendar, ChevronRight, MapPin, Palmtree } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScrollTo } from "@/lib/smoothScroll"

const EVENT_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

interface HeroSectionProps {
  onOpenForm?: () => void;
}
export default function HeroSection({ onOpenForm }: HeroSectionProps) {
  const { theme } = useTheme()
  const [days, setDays] = useState(30)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      const now = new Date()
      const difference = EVENT_DATE.getTime() - now.getTime()
      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const scrollToForm = () => {
    smoothScrollTo('order-form', 2000)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-pink-500/10 to-purple-500/20"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        {/* Palm trees silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            {/* Early bird badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="inline-flex items-center self-start rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-lg"
            >
              <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse" />
              30% OFF - Solo 5 cupos disponibles
            </motion.div>

            {/* Location badge */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-4 w-4 text-orange-400 mr-2" />
                <span className="text-white font-medium">Orlando, Florida</span>
              </div>
              {/* USA Flag */}
              <div className="flex items-center space-x-1">
                <div className="w-8 h-5 rounded-sm overflow-hidden shadow-md">
                  <div className="h-full flex flex-col">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-red-600" : "bg-white"}`} />
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 w-3 h-3 bg-blue-800 flex items-center justify-center">
                    <span className="text-white text-[4px]">★</span>
                  </div>
                </div>
                <span className="text-2xl">🇺🇸</span>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-lg md:text-xl font-medium text-orange-400"
              >
                Importamos el Mindset de innovacion de Silicon Valley a USA
              </motion.p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="block"
                >
                  Ship Fast
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
                >
                  Edicion Latina Orlando
                </motion.span>
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-300 max-w-lg"
            >
              Sprint intensivo de 54 horas donde emprendedores latinos transforman ideas en productos reales con
              metodologia Silicon Valley.
            </motion.p>

            {/* Key info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Ubicacion</span>
                <span className="font-bold text-white">Orlando, FL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Formato</span>
                <span className="font-bold text-white">100% Espanol</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Duracion</span>
                <span className="font-bold text-white">54 horas</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Cupos</span>
                <span className="font-bold text-orange-400">Solo 25</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold shadow-lg shadow-orange-500/25"
              >
                Reservar Mi Cupo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white bg-white/5 hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4" />
                Agregar al calendario
              </Button>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-sm text-gray-400 mb-3">El evento comienza en:</p>
              <div className="grid grid-cols-4 gap-3 max-w-sm">
                <CountdownItem value={days} label="Dias" />
                <CountdownItem value={hours} label="Horas" />
                <CountdownItem value={minutes} label="Min" />
                <CountdownItem value={seconds} label="Seg" />
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center text-sm text-gray-400"
            >
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-2 border-slate-900"
                  />
                ))}
              </div>
              <span>+150 emprendedores latinos ya confirmaron</span>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative h-[450px] md:h-[550px] flex items-center justify-center"
          >
            {/* Glowing orbs */}
            <div className="absolute w-72 h-72 rounded-full bg-orange-500/30 blur-3xl animate-pulse" />
            <div
              className="absolute w-56 h-56 rounded-full bg-pink-500/30 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute w-48 h-48 rounded-full bg-purple-500/30 blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />

            {/* Central content */}
            <div className="relative z-10 text-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex justify-center mb-4">
                <Palmtree className="h-16 w-16 text-orange-400" />
              </div>
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">Latino Power</h3>
              <p className="text-gray-300 mb-4">Innovacion sin fronteras</p>
              <div className="flex justify-center items-center space-x-2">
                <span className="text-3xl">🇺🇸</span>
                <span className="text-xl text-gray-400">x</span>
                <span className="text-3xl">🌎</span>
              </div>
              <p className="text-sm text-orange-400 mt-4 font-medium">100% en Espanol</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Descubre mas</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown className="h-6 w-6 text-orange-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span
        className="text-2xl md:text-3xl font-bold text-orange-400"
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.span>
      <span className="text-xs text-gray-400">{label}</span>
    </motion.div>
  )
}
