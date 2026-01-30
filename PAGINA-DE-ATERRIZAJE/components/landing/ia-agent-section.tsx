"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Bot,
  MessageCircle,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  Check,
  X,
  Star,
  Database,
  Gauge,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface IAAgentSectionProps {
  onOpenContact: (source: string) => void
}

export function IAAgentSection({ onOpenContact }: IAAgentSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const processSteps = [
    {
      icon: MessageCircle,
      title: t("ia.how.step1.title"),
      description: t("ia.how.step1.desc"),
      features: [t("ia.how.step1.feature1"), t("ia.how.step1.feature2"), t("ia.how.step1.feature3")],
    },
    {
      icon: Bot,
      title: t("ia.how.step2.title"),
      description: t("ia.how.step2.desc"),
      features: [t("ia.how.step2.feature1"), t("ia.how.step2.feature2"), t("ia.how.step2.feature3")],
    },
    {
      icon: Database,
      title: t("ia.how.step3.title"),
      description: t("ia.how.step3.desc"),
      features: [t("ia.how.step3.feature1"), t("ia.how.step3.feature2"), t("ia.how.step3.feature3")],
    },
  ]

  const manualProblems = [
    { title: t("ia.compare.manual1"), desc: t("ia.compare.manual1.desc") },
    { title: t("ia.compare.manual2"), desc: t("ia.compare.manual2.desc") },
    { title: t("ia.compare.manual3"), desc: t("ia.compare.manual3.desc") },
    { title: t("ia.compare.manual4"), desc: t("ia.compare.manual4.desc") },
    { title: t("ia.compare.manual5"), desc: t("ia.compare.manual5.desc") },
    { title: t("ia.compare.manual6"), desc: t("ia.compare.manual6.desc") },
  ]

  const autoAdvantages = [
    { title: t("ia.compare.auto1"), desc: t("ia.compare.auto1.desc") },
    { title: t("ia.compare.auto2"), desc: t("ia.compare.auto2.desc") },
    { title: t("ia.compare.auto3"), desc: t("ia.compare.auto3.desc") },
    { title: t("ia.compare.auto4"), desc: t("ia.compare.auto4.desc") },
    { title: t("ia.compare.auto5"), desc: t("ia.compare.auto5.desc") },
    { title: t("ia.compare.auto6"), desc: t("ia.compare.auto6.desc") },
  ]

  const results = [
    { value: "90%", label: t("ia.results.stat1"), icon: Gauge },
    { value: "< 5 seg", label: t("ia.results.stat2"), icon: Clock },
    { value: "24/7", label: t("ia.results.stat3"), icon: Users },
    { value: "3x", label: t("ia.results.stat4"), icon: TrendingUp },
  ]

  return (
    <section ref={ref} className="overflow-hidden relative bg-white">
      
      {/* 1. HERO SECTION */}
      {/* CAMBIO: py-16 md:py-24 */}
      <div className="bg-gradient-to-br from-[#0d9488] via-[#14b8a6] to-[#2dd4bf] py-16 md:py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <Bot className="h-4 w-4" />
              {t("ia.badge")}
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              {t("ia.title")} <span className="text-yellow-300">{t("ia.title2")}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">{t("ia.subtitle")}</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl"
              onClick={() => onOpenContact("pricing-ia")}
            >
              {t("ia.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* 2. LEAD QUALIFICATION FLOW */}
      {/* CAMBIO: py-16 md:py-24 */}
      <div className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{t("ia.process.title")}</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("ia.process.subtitle")}</p>
          </motion.div>

          {/* Flow diagram */}
          <motion.div
            className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Step 1: New Lead */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t("ia.process.step1.title")}</h4>
                <p className="text-slate-600 text-sm">{t("ia.process.step1.desc")}</p>
                <div className="mt-4 p-4 bg-slate-50 rounded-xl text-left">
                  <p className="text-xs text-slate-500 mb-2 font-medium">Info recopilada:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Nombre y contacto</li>
                    <li>• Necesidad específica</li>
                    <li>• Urgencia</li>
                  </ul>
                </div>
              </div>

              {/* Step 2: Qualifying */}
              <div className="text-center relative">
                {/* Arrow left */}
                <div className="hidden md:block absolute left-0 top-8 -translate-x-full">
                  <ArrowRight className="h-6 w-6 text-slate-300" />
                </div>
                {/* Arrow right */}
                <div className="hidden md:block absolute right-0 top-8 translate-x-full">
                  <ArrowRight className="h-6 w-6 text-slate-300" />
                </div>

                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t("ia.process.step2.title")}</h4>
                <p className="text-slate-600 text-sm mb-4">{t("ia.process.step2.desc")}</p>
                <div className="p-4 bg-slate-50 rounded-xl text-left">
                  <p className="text-xs text-slate-500 mb-2 font-medium">{t("ia.process.criteria")}</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-emerald-500" />
                      {t("ia.process.criteria1")}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-emerald-500" />
                      {t("ia.process.criteria2")}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-emerald-500" />
                      {t("ia.process.criteria3")}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-emerald-500" />
                      {t("ia.process.criteria4")}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3: Results */}
              <div className="text-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-emerald-700 text-sm">{t("ia.process.result.qualified")}</p>
                      <p className="text-xs text-emerald-600">Alta prioridad</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-blue-700 text-sm">{t("ia.process.result.interested")}</p>
                      <p className="text-xs text-blue-600">Seguimiento moderado</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-orange-700 text-sm">{t("ia.process.result.notQualified")}</p>
                      <p className="text-xs text-orange-600">Descartado</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <XCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-red-700 text-sm">{t("ia.process.result.spam")}</p>
                      <p className="text-xs text-red-600">Bloqueado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time badge */}
            <div className="mt-8 flex justify-center">
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Zap className="h-5 w-5" />
                <span className="font-bold">{t("ia.process.time")}</span>
              </motion.div>
            </div>
            <p className="text-center text-slate-500 mt-3">{t("ia.process.timeDesc")}</p>
          </motion.div>
        </div>
      </div>

      {/* 3. HOW IT WORKS */}
      {/* CAMBIO: py-16 md:py-24 */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{t("ia.how.title")}</h3>
            <p className="text-lg text-slate-600">{t("ia.how.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    0{index + 1}
                  </div>
                </div>

                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 mt-2">
                  <step.icon className="h-7 w-7 text-teal-600" />
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 mb-6">{step.description}</p>

                <ul className="space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Time badge */}
          <motion.div
            className="mt-12 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-100 text-amber-700 rounded-full">
              <Zap className="h-5 w-5" />
              <span className="font-bold">{t("ia.how.time")}</span>
            </div>
            <p className="text-slate-500 mt-3">{t("ia.how.timeDesc")}</p>
          </motion.div>
        </div>
      </div>

      {/* 4. MANUAL VS AI COMPARISON */}
      {/* CAMBIO: py-16 md:py-24 */}
      <div className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{t("ia.compare.title")}</h3>
            <p className="text-lg text-slate-600">{t("ia.compare.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Manual process */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-slate-200"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-slate-100 rounded-full">
                  <span className="text-sm font-medium text-slate-500 line-through">{t("ia.compare.manual")}</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-6">{t("ia.compare.manual")}</h4>

              <ul className="space-y-4">
                {manualProblems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">{problem.title}</p>
                      <p className="text-sm text-slate-500">{problem.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                <p className="text-sm text-red-700 font-medium">{t("ia.compare.manual.cost")}</p>
              </div>
            </motion.div>

            {/* AI process */}
            <motion.div
              className="bg-white rounded-3xl p-8 border-2 border-teal-500 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Recommended badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  RECOMENDADO
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-teal-100 rounded-full">
                  <span className="text-sm font-medium text-teal-700">{t("ia.compare.auto")}</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-6">{t("ia.compare.auto")}</h4>

              <ul className="space-y-4">
                {autoAdvantages.map((advantage, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">{advantage.title}</p>
                      <p className="text-sm text-slate-500">{advantage.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-200">
                <p className="text-sm text-teal-700 font-medium">{t("ia.compare.auto.cost")}</p>
              </div> */}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg font-medium text-slate-700 mb-2">{t("ia.compare.cta")}</p>
            <p className="text-slate-500">{t("ia.compare.cta2")}</p>
          </motion.div>
        </div>
      </div>

      {/* 5. RESULTS SECTION */}
      {/* CAMBIO: py-16 md:py-24 */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{t("ia.results.title")}</h3>
            <p className="text-lg text-slate-600">{t("ia.results.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <result.icon className="h-8 w-8 text-teal-500 mx-auto mb-4" />
                <motion.div
                  className="text-4xl md:text-5xl font-black text-teal-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                >
                  {result.value}
                </motion.div>
                <p className="text-sm text-slate-600">{result.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA Banner */}
          <motion.div
            className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-2xl md:text-3xl font-bold mb-2">{t("ia.results.cta")}</h4>
            <p className="text-teal-100">{t("ia.results.cta2")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}