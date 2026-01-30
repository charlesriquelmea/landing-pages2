"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const projects = [
    {
      title: "Salida Fiscal",
      category: t("portfolio.item1.type"),
      result: t("portfolio.item1.result"),
      image: "/images/saidafiscal.png",
      url: "https://saidafiscal.pro",
    },
    // {
    //   title: "Perceivo AI",
    //   category: t("portfolio.item3.type"),
    //   result: t("portfolio.item3.result"),
    //   image: "/images/perceivoAI.png",
    //   url: "https://perceivoai.agency",
    // },
    // {
    //   title: "Perceivo AI Franquias",
    //   category: t("portfolio.item4.type"),
    //   result: t("portfolio.item4.result"),
    //   image: "/images/perceivoAIFranquias.png",
    //   url: "https://franchise.perceivoai.agency",
    // },
    // {
    //   title: "Roberta Torquetti",
    //   category: t("portfolio.item11.type"),
    //   result: t("portfolio.item11.result"),
    //   image: "/images/TorquettiFisioterapia.png",
    //   url: "https://fisioterapia.protoly.lat/",
    // },
    {
      title: "Planificación Patrimonial",
      category: t("portfolio.item12.type"),
      result: t("portfolio.item12.result"),
      image: "/images/PlanejamientoPatrimonial.png",
      url: "http://planejamentopatrimonial.pro",
    },
    {
      title: "IusChain",
      category: t("portfolio.item13.type"),
      result: t("portfolio.item13.result"),
      image: "/images/iuschain.png",
      url: "https://www.iuschain.xyz/",
    },
    {
      title: "Hearth",
      category: t("portfolio.item14.type"),
      result: t("portfolio.item14.result"),
      image: "/images/hearth.png",
      url: "https://hearth.protolylat.com/",
    },
    {
      title: "Biodescodificación",
      category: t("portfolio.item15.type"),
      result: t("portfolio.item15.result"),
      image: "/images/biodecodificacion.png",
      url: "https://biodescodificacion.protolylat.com/",
    },
    {
      title: "Booking Pro",
      category: t("portfolio.item16.type"),
      result: t("portfolio.item16.result"),
      image: "/images/bookingpro.png",
      url: "https://bookingpro.protoly.lat/",
    },
    {
      title: "System 10x",
      category: t("portfolio.item17.type"),
      result: t("portfolio.item17.result"),
      image: "/images/system10x.png",
      url: "https://system10x.protolylat.com/",
    },
    {
      title: "Victor Mane",
      category: t("portfolio.item18.type"),
      result: t("portfolio.item18.result"),
      image: "/images/victorMane.png",
      url: "https://www.victormanetattoo.protolylat.com/",
    },
    {
      title: "Inkstinct NYC",
      category: t("portfolio.item19.type"),
      result: t("portfolio.item19.result"),
      image: "/images/inkstinct.png",
      url: "https://inkstinctnyc.com/",
      position: "object-top"
    },
  ]

  return (
    // ÚNICO CAMBIO: py-24 md:py-32  --->  py-16 md:py-24
    <section ref={ref} className="py-16 md:py-24 bg-white" id="portafolio">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t("portfolio.title").split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#8B5CF6]">
              {t("portfolio.title").split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0066FF]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Image & Link Wrapper */}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${(project as any).position || ""}`}
                />
                
                {/* Overlay oscuro al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Botón flotante al hover */}
                <motion.div
                  className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="h-4 w-4 text-slate-900" />
                </motion.div>
              </a>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-medium text-[#0066FF] mb-2 line-clamp-1">{project.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{project.title}</h3>

                {/* Tags / Result */}
                <div className="flex flex-wrap gap-2">
                  {project.result && (
                    <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
                      {project.result}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}