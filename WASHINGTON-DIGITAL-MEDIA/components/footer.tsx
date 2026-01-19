"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react"

const footerColumns = [
  {
    title: "Services",
    links: ["Video Production", "Live Streaming", "Digital Marketing", "Web Design", "Documentary Films"],
  },
  {
    title: "Industries",
    links: ["Political Campaigns", "Food & Restaurants", "Education & Non-Profit", "Government", "Healthcare"],
  },
  {
    title: "Company",
    links: ["About Us", "Portfolio", "How We Work", "Blog", "Careers"],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#0a0a0a] text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#E31E24] rounded-lg flex items-center justify-center font-bold text-xl">
                W
              </div>
              <span className="font-bold text-xl">Washington Digital Media</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              A video production agency in Washington DC helping businesses produce amazing visual media that
              effectively communicates their brand values.
            </p>

            {/* Contact Info - Updated hover colors to red */}
            <div className="space-y-3 text-white/70">
              <a href="tel:+12023019644" className="flex items-center gap-3 hover:text-[#E31E24] transition-colors">
                <Phone className="w-4 h-4" />
                (202) 301-9644
              </a>
              <a
                href="mailto:info@washdm.com"
                className="flex items-center gap-3 hover:text-[#E31E24] transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@washdm.com
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                7050 Blair Rd NW Suite 101,
                <br />
                Washington DC, 20012
              </p>
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerColumns.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1, duration: 0.5 }}
            >
              <h3 className="font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-[#E31E24] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links - Updated hover to red */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5, color: "#E31E24" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} Washington Digital Media. All rights reserved.
          </p>

          {/* 10 Years Badge */}
          <div className="flex items-center gap-2 text-white/60">
            <div className="text-[#E31E24] font-bold text-2xl">10</div>
            <div className="text-xs leading-tight">
              YEARS OF
              <br />
              VISUAL STORYTELLING
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
