"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Mail, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  programa: [
    { label: "Vibe Coding", href: "#programas" },
    { label: "AI Productivity Studio", href: "#programas" },
    { label: "Bundle Completo", href: "#programas" },
    { label: "Community Membership", href: "#community" },
  ],
  recursos: [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Industrias", href: "#industrias" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Términos de servicio", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de reembolso", href: "#" },
  ],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="bg-[#0A0E1A]">
      {/* Hero CTA Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0A0E1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4" />
              Solo 18-20 lugares por cohorte
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              ¿Listo para transformar{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                tu negocio?
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Aplica hoy y empieza a construir lo que te costaría{" "}
              <span className="text-white font-semibold">$30,000</span> contratar.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-12 py-8 rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 text-lg group"
              >
                Aplicar a la próxima cohorte
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Llamada de 15 min
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                100% en español
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-12"
          >
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 text-xl font-bold mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  VibeCoding
                </span>
              </a>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                Bootcamp híbrido para dueños de small business latinos en USA. Construye, automatiza y vende más con IA.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white">Suscríbete al newsletter</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Programa</h4>
              <ul className="space-y-3">
                {footerLinks.programa.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-gray-500">
              © 2026 VibeCoding. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">Próximas cohortes:</span>
              <span className="text-sm text-cyan-400">Los Angeles • Houston • Miami • Chicago • New York</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
