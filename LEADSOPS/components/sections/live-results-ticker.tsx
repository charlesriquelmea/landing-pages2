'use client'

import { motion } from 'framer-motion'

const results = [
  '⚡ Flash Electric agregó 15 trabajos esta semana',
  '🏆 Elite Roofing ahorró 20 horas de admin',
  '💰 Cactus HVAC generó $12,400 en nuevo revenue',
  '📞 Desert Plumbing: 94% answer rate',
  '🚀 Pro Tech Services: 40% más conversiones',
  '✨ Summit HVAC cerró 8 instalaciones este mes',
]

export default function LiveResultsTicker() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-900/50 border border-[#06B6D4]/30 rounded-2xl p-6 relative overflow-hidden">
          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 border-2 border-[#06B6D4] rounded-2xl opacity-50"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-3 h-3 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              <span className="text-red-500 font-bold text-sm uppercase tracking-wider">
                LIVE
              </span>
            </div>
            <span className="text-white font-semibold text-lg">Real-Time Results</span>
          </div>

          {/* Scrolling Results */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...results, ...results].map((result, index) => (
                <div
                  key={index}
                  className="text-slate-200 text-lg whitespace-nowrap font-medium"
                >
                  {result}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
