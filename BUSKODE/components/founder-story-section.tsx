"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MapPin, Briefcase, Lightbulb, Rocket, Heart, Quote, Building2, Layers } from "lucide-react"

export function FounderStorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])

  const milestones = [
    {
      icon: MapPin,
      year: "Inicio",
      title: "El MBA de la Calle",
      description: "A los 3 años, vendiendo junto a mi padre en Santiago de Chile. Mi primer aprendizaje: el valor del trabajo duro y el arte de vender para sobrevivir."
    },
    {
      icon: Lightbulb,
      year: "La Revelación",
      title: "Filosofía Kiyosaki",
      description: "Entendí temprano que el sistema no estaba diseñado para hacernos libres, sino útiles. Mentalidad autodidacta activada."
    },
    {
      icon: Briefcase,
      year: "2011",
      title: "El Primer Fracaso",
      description: "Mi primera franquicia fracasó. La Franquicia se llamaba Ganancias Locales de diseño web en WordPress y los primeros Community Manager en Facebook. Dolió, pero enseñó. Esas cicatrices se convirtieron en los cimientos de todo lo que vendría después."
    },
    {
      icon: Building2,
      year: "2011 - Presente",
      title: "2 Empresas de Tecnología",
      description: "Desde 2011 construyendo empresas de tecnología con recursos propios. Sin inversores, sin permiso. Pura recursividad y determinación latinoamericana."
    },
    {
      icon: Layers,
      year: "La Construcción",
      title: "El Ecosistema (+9 Incubaciones)",
      description: "Pixelbile, Developbile, Protolylab, Perceivo AI Agency, y como CEO de Kulko App. Mi propio máster en emprendimiento dinámico 'en la cancha'. Más de 9 incubaciones siempre siendo bootstrapping (recursos propios y siendo recursivo)."
    },
    {
      icon: Rocket,
      year: "Hoy",
      title: "Buskode & Buskero",
      description: "Las herramientas que yo hubiera deseado tener cuando empecé. El gran igualador para LATAM."
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 bg-[#050505] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD60A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#00F0FF] font-mono text-sm tracking-wider mb-4 px-4 py-2 bg-[#00F0FF]/10 rounded-full border border-[#00F0FF]/20">
            EL DNA DE NUESTRA MISIÓN
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            De Vendedor Ambulante a{" "}
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#FFD60A] bg-clip-text text-transparent">
              Arquitecto de Ecosistemas
            </span>
          </h2>
        </motion.div>

        {/* Opening quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 max-w-3xl mx-auto"
        >
          <div className="absolute -left-4 -top-4 text-[#FFD60A]/20">
            <Quote className="w-16 h-16" />
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Nací en <span className="text-[#00F0FF] font-semibold">Santiago de Chile</span>, lejos de Silicon Valley. 
              Mi primer &quot;MBA&quot; no fue en una universidad prestigiosa, sino en la calle, a los 3 años, vendiendo junto a mi padre. 
              Ahí aprendí la lección más importante que ninguna IA puede enseñar:{" "}
              <span className="text-[#FFD60A] font-semibold">el valor del trabajo duro, la resiliencia y el arte de vender para sobrevivir.</span>
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#00F0FF] via-[#FFD60A] to-[#00F0FF]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-4 md:gap-8`}
              >
                {/* Icon - Mobile left, Desktop center */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-[#0a0a0a] border-2 border-[#00F0FF]/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                  >
                    <milestone.icon className="w-5 h-5 text-[#00F0FF]" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-0 md:text-right' : 'md:pl-0 md:text-left'} pl-16 md:pl-0`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300"
                  >
                    <span className="inline-block text-xs font-mono text-[#FFD60A] tracking-wider mb-2 px-2 py-1 bg-[#FFD60A]/10 rounded">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-400 leading-relaxed mb-6">
            Mi vida ha sido un constante desafío al status quo. Impulsado por una mentalidad autodidacta y la filosofía de Kiyosaki, 
            entendí temprano que <span className="text-white font-semibold">el sistema no estaba diseñado para hacernos libres, sino útiles</span>.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Hoy, combino ese <span className="text-[#FFD60A]">liderazgo evolutivo</span> con un{" "}
            <span className="text-[#FFD60A]">pensamiento holográfico</span> para ver el sistema completo.
          </p>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative bg-gradient-to-r from-[#00F0FF]/10 via-[#0a0a0a] to-[#FFD60A]/10 rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <p className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8">
            La IA y el Internet son el <span className="text-[#00F0FF]">gran igualador</span>. 
            No importa si vienes de la calle o de la academia;{" "}
            <span className="text-[#FFD60A]">si tienes el ingenio, ahora tienes el poder</span>.
          </p>
          
          <div className="text-center">
            <p 
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#FFD60A] bg-clip-text text-transparent mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              &quot;El futuro no se espera. Se construye y se administra.&quot;
            </p>
            <p className="text-gray-500 font-mono text-sm">— Tu Fundador</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
