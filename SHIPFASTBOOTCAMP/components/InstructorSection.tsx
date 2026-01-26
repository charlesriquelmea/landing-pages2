"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Users, Award, Lightbulb, Zap } from "lucide-react"
import Image from "next/image"

export default function InstructorSection() {
  const instructor = {
    name: "Carlos Riquelme",
    role: "Facilitador Principal",
    company: "Ship Fast Edicion Latina Orlando",
    image: "/placeholder.svg",
    bio: "Carlos es un especialista en Lean Startup con mas de 10 anos de experiencia ayudando a emprendedores a validar y escalar sus ideas de negocio. Ha trabajado con mas de 500 startups y es experto en metodologias de sprint de innovacion y desarrollo de MVP.",
    expertise: [
      "Metodologia Lean Startup aplicada a diferentes sectores",
      "Sprint de innovacion y design thinking",
      "Desarrollo y validacion de MVP",
      "Prototipado rapido de software y servicios",
    ],
  }

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "+500", label: "startups mentoreadas" },
    { icon: <Award className="h-6 w-6" />, value: "10+", label: "anos de experiencia" },
    { icon: <Lightbulb className="h-6 w-6" />, value: "MVP", label: "especialista" },
    { icon: <Zap className="h-6 w-6" />, value: "24/7", label: "AI Mentor disponible" },
  ]

  return (
    <section id="mentores" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-500 mb-4">
            Tu facilitador
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Aprende con un especialista en Lean Startup
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-300">
            Carlos Riquelme facilitara presencialmente, mientras que su conocimiento estara disponible 24/7 a traves de
            nuestro AI Mentor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-pink-500 shadow-xl">
              <Image src={instructor.image || "/placeholder.svg"} alt={instructor.name} fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{instructor.name}</h3>
            <p className="text-orange-500 font-bold text-lg mb-1">{instructor.role}</p>
            <p className="text-slate-500 dark:text-gray-400 mb-6">{instructor.company}</p>

            <p className="text-slate-700 dark:text-gray-300 text-lg mb-6">{instructor.bio}</p>

            <div className="mb-6">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-4">Especialidades:</h4>
              <ul className="space-y-3">
                {instructor.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mt-1 mr-4 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 dark:from-orange-500/20 dark:to-pink-500/20 rounded-xl p-6 mb-6 border border-orange-500/20">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-3">💡 Innovacion Unica</h4>
              <p className="text-slate-700 dark:text-gray-300">
                Todo el conocimiento de Carlos esta disponible 24/7 a traves de nuestro AI Mentor entrenado
                especificamente con su metodologia y experiencia.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 rounded-full text-slate-600 dark:text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full text-slate-600 dark:text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-500">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
