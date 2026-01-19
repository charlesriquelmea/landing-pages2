"use client"

import { motion } from "framer-motion"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  ChevronDown,
  ChevronRight,
  Star,
  Users,
  Calendar,
  Palmtree,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import FaqSection from "./FaqSection"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [showFaq, setShowFaq] = useState(false)

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ]

  const footerLinks = [
    {
      title: "Evento",
      links: [
        { label: "Agenda", href: "#agenda" },
        { label: "Mentores", href: "#mentores" },
        { label: "Patrocinadores", href: "#patrocinadores" },
        { label: "Ubicacion", href: "#ubicacion" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Blog", href: "#" },
        { label: "Comunidad", href: "#" },
        { label: "Proyectos anteriores", href: "#" },
        { label: "Galeria", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre nosotros", href: "#" },
        { label: "Contacto", href: "#" },
        { label: "Politica de privacidad", href: "#" },
        { label: "Terminos y condiciones", href: "#" },
      ],
    },
  ]

  return (
    <footer id="contacto" className="bg-slate-900 border-t border-slate-800">
      {/* Hero Section in Footer */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-purple-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Star className="h-4 w-4 text-orange-400 mr-2" />
                <span className="text-sm font-bold text-orange-400">Evento Exclusivo</span>
                <span className="ml-2 text-xl">🇺🇸</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Listo para Revolucionar tu
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
                  Idea de Negocio?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Unete a los emprendedores latinos que estan transformando sus ideas en productos reales en Orlando,
                Florida.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Users className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">25 Participantes</h3>
                <p className="text-gray-400 text-sm">Experiencia intima y personalizada</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Calendar className="h-8 w-8 text-pink-400 mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">54 Horas</h3>
                <p className="text-gray-400 text-sm">Inmersion completa de innovacion</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Palmtree className="h-8 w-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Landing Grupal</h3>
                <p className="text-gray-400 text-sm">Maquetada por nosotros + backend incluido</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-4 shadow-lg shadow-orange-500/25"
              >
                Reservar Mi Cupo Ahora
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">$90 USD</div>
                <div className="text-sm text-gray-500">30% descuento por tiempo limitado</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center justify-center text-sm text-gray-500"
            >
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-2 border-slate-900"
                  />
                ))}
              </div>
              <span>+150 emprendedores latinos ya confirmaron</span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* FAQ Section */}
          <div className="mb-16">
            <button onClick={() => setShowFaq(!showFaq)} className="flex items-center justify-center w-full mb-8">
              <motion.div
                animate={{ rotate: showFaq ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center text-white hover:text-orange-400 transition-colors"
              >
                <span className="text-lg font-medium mr-2">Preguntas Frecuentes</span>
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: showFaq ? "auto" : 0, opacity: showFaq ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {showFaq && <FaqSection />}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Logo and social links */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <Palmtree className="h-8 w-8 text-orange-500 mr-2" />
                <span className="font-bold text-xl text-white">Ship Fast Orlando</span>
                <span className="ml-2 text-xl">🇺🇸</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Un sprint intensivo de 54 horas donde emprendedores latinos se reunen para crear soluciones innovadoras
                que transformen sus ideas en productos reales.
              </p>
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer links */}
            {footerLinks.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>&copy; {new Date().getFullYear()} Ship Fast Orlando. Todos los derechos reservados.</div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:info@shipfastorlando.com" className="hover:text-orange-400">
                info@shipfastorlando.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
