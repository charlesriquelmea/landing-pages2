'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Shield, Lock, CheckCircle } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Case Studies', href: '#' },
  ],
  resources: [
    { name: 'Help Center', href: '#' },
    { name: 'API Docs', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contractors Academy', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'CCPA Compliance', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const trustBadges = [
  { icon: Lock, text: '256-bit SSL' },
  { icon: Shield, text: 'SOC 2 Certified' },
  { icon: CheckCircle, text: 'GDPR Compliant' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] border-t border-slate-800 relative overflow-hidden">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                LeadOps OS
              </h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                Growth OS para Home Service Pros
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-slate-400 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#2563EB] transition-colors duration-200 text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#2563EB] transition-colors duration-200 text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#2563EB] transition-colors duration-200 text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 py-8 border-t border-slate-800"
        >
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-400">
              <badge.icon className="w-5 h-5 text-[#22C55E]" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center pt-8 border-t border-slate-800"
        >
          <p className="text-slate-400 text-sm">
            © 2026 LeadOps OS.{' '}
            <span className="text-[#2563EB]">Made for Pros by Pros.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
