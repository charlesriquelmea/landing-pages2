"use client"

import { motion } from "framer-motion"
import { Youtube, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-[#00F0FF]">{'<'}</span>
                <span className="text-white">Buskode</span>
                <span className="text-[#00F0FF]">{'/>'}</span>
              </span>
            </motion.div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Cuando un latino aprende a construir y administrar sus propios sistemas, 
              cambia el código postal de su destino y blinda a su familia contra la irrelevancia económica.
            </p>
            <div className="flex gap-4">
              {[Youtube, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#00F0FF" }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#00F0FF]/10 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Plataforma</h4>
              <ul className="space-y-3">
                {["Programas", "Metodología", "Comunidad", "Recursos"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-[#00F0FF] transition-colors duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Compañía</h4>
              <ul className="space-y-3">
                {["Nosotros", "Blog", "Carreras", "Contacto"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-[#00F0FF] transition-colors duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter mini */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Mantente Conectado</h4>
            <p className="text-gray-500 text-sm mb-4">
              Recibe las últimas actualizaciones sobre Vibe Coding y el movimiento.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF]/50"
              />
              <button className="px-4 py-2 bg-[#00F0FF] text-[#050505] font-semibold rounded-r-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 text-sm">
                Unirme
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Buskode. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#00F0FF] transition-colors duration-300">
              Términos
            </a>
            <a href="#" className="text-gray-600 hover:text-[#00F0FF] transition-colors duration-300">
              Privacidad
            </a>
            <a href="#" className="text-gray-600 hover:text-[#00F0FF] transition-colors duration-300">
              Cookies
            </a>
          </div>
          <p className="text-gray-600 text-sm font-mono">
            Hecho con <span className="text-[#FFD60A]">♥</span> en LATAM
          </p>
        </div>
      </div>
    </footer>
  )
}
