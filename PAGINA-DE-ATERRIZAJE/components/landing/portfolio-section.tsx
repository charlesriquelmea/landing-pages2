"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

import { getProjects } from "@/lib/portfolio-data"

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const projects = getProjects(t)

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