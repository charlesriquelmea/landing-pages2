"use client"



import { motion } from "framer-motion"

import { useInView } from "framer-motion"

import { useRef } from "react"

import { Check, Sparkles, Bot, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useLanguage } from "@/lib/language-context"



interface PricingSectionProps {

  onOpenContact: (source: string) => void

}



const comparison = [

  { feature: "pricing.compare.delivery", us: "pricing.compare.delivery.us", them: "pricing.compare.delivery.them" },

  { feature: "pricing.compare.setup", us: "pricing.compare.setup.us", them: "pricing.compare.setup.them" },

  {

    feature: "pricing.compare.maintenance",

    us: "pricing.compare.maintenance.us",

    them: "pricing.compare.maintenance.them",

  },

]



export function PricingSection({ onOpenContact }: PricingSectionProps) {

  const ref = useRef(null)

  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { t } = useLanguage()



  const coreFeatures = [

    t("pricing.core.feature1"),

    t("pricing.core.feature2"),

    t("pricing.core.feature3"),

    t("pricing.core.feature4"),

    t("pricing.core.feature5"),

    t("pricing.core.feature6"),

    t("pricing.core.feature7"),

    t("pricing.core.feature8"),

    t("pricing.core.feature9"),

    t("pricing.core.feature10"),

  ]



  const iaFeatures = [

    t("pricing.ia.feature1"),

    t("pricing.ia.feature2"),

    t("pricing.ia.feature3"),

    t("pricing.ia.feature4"),

    t("pricing.ia.feature5"),

    t("pricing.ia.feature6"),

    t("pricing.ia.feature7"),

    t("pricing.ia.feature8"),

    t("pricing.ia.feature9"),

    t("pricing.ia.feature10"),

  ]



  return (

    // ÚNICO CAMBIO: py-24 md:py-32  --->  py-16 md:py-24

    <section ref={ref} className="py-16 md:py-24 bg-white">

      <div className="container mx-auto px-4">

        {/* Header */}

        <motion.div

          className="text-center mb-16"

          initial={{ opacity: 0, y: 30 }}

          animate={isInView ? { opacity: 1, y: 0 } : {}}

          transition={{ duration: 0.6 }}

        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">

            {t("pricing.title")}

          </h2>

        </motion.div>



        {/* Pricing cards */}

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">

          {/* Core Package */}

          <motion.div

            className="relative bg-white rounded-3xl p-8 border-2 border-[#0066FF] shadow-xl"

            initial={{ opacity: 0, y: 30 }}

            animate={isInView ? { opacity: 1, y: 0 } : {}}

            transition={{ duration: 0.5, delay: 0.2 }}

            whileHover={{ scale: 1.02 }}

          >

            {/* Badge */}

            <div className="absolute -top-4 left-1/2 -translate-x-1/2">

              <motion.div

                className="px-4 py-1 bg-[#0066FF] text-white text-sm font-bold rounded-full flex items-center gap-2"

                animate={{ scale: [1, 1.05, 1] }}

                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}

              >

                <Sparkles className="h-4 w-4" />

                {t("pricing.popular")}

              </motion.div>

            </div>



            <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-4">
              {t("pricing.core.title")}
              <span className="text-sm font-normal text-slate-500 ml-4">SETUP</span>
            </h3>

            <p className="text-slate-500 mb-6">{t("pricing.core.subtitle")}</p>



            {/* Price */}

            <div className="mb-6">

              <span className="text-2xl text-slate-400 line-through">$5,000</span>

              <div className="flex items-end gap-2">

                <span className="text-5xl font-black text-slate-900">$3,497</span>

                <span className="text-slate-500 mb-2">{t("pricing.core.setup")}</span>
                <span className="mb-2 ml-2 inline-block px-2 py-0.5 bg-red-100 text-red-600 text-[10px] md:text-xs font-bold rounded-full border border-red-200 text-center leading-tight">
                  {t("pricing.discount")}
                </span>
              </div>

              <div className="mt-2 inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">

                {t("pricing.core.installments")}

              </div>

            </div>



            {/* Monthly */}

            <div className="p-4 bg-slate-50 rounded-xl mb-6">

              <div className="text-sm text-slate-500">{t("pricing.core.monthly")}</div>

              <div className="text-2xl font-bold text-slate-900">

                $297 USD<span className="text-base font-normal text-slate-500">/mes</span>

              </div>

              <div className="text-xs text-slate-400">{t("pricing.core.monthlyDesc")}</div>

            </div>



            {/* Features */}

            <ul className="space-y-3 mb-8">

              {coreFeatures.map((feature, i) => (

                <motion.li

                  key={i}

                  className="flex items-start gap-3"

                  initial={{ opacity: 0, x: -20 }}

                  animate={isInView ? { opacity: 1, x: 0 } : {}}

                  transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}

                >

                  <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />

                  <span className="text-slate-700 text-sm">{feature}</span>

                </motion.li>

              ))}

            </ul>



            <Button

              size="lg"

              className="w-full h-14 text-lg font-bold bg-[#0066FF] hover:bg-[#0055DD] text-white"

              onClick={() => onOpenContact("pricing-core")}

            >

              {t("pricing.core.cta")}

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>

          </motion.div>



          {/* IA Add-on */}

          <motion.div

            className="relative bg-gradient-to-br from-[#8B5CF6]/5 to-[#0066FF]/5 rounded-3xl p-8 border-2 border-[#8B5CF6]"

            initial={{ opacity: 0, y: 30 }}

            animate={isInView ? { opacity: 1, y: 0 } : {}}

            transition={{ duration: 0.5, delay: 0.3 }}

            whileHover={{ scale: 1.02 }}

          >

            {/* Badge */}

            <div className="absolute -top-4 left-1/2 -translate-x-1/2">

              <motion.div

                className="px-4 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#0066FF] text-white text-sm font-bold rounded-full flex items-center gap-2"

                animate={{

                  boxShadow: [

                    "0 0 20px rgba(139,92,246,0.3)",

                    "0 0 40px rgba(139,92,246,0.6)",

                    "0 0 20px rgba(139,92,246,0.3)",

                  ],

                }}

                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}

              >

                <Bot className="h-4 w-4" />

                {t("pricing.recommended")}

              </motion.div>

            </div>



            <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-4">
              {t("pricing.ia.title")}
              <span className="text-sm font-normal text-slate-500 ml-4">SETUP</span>
            </h3>

            <p className="text-slate-500 mb-2">{t("pricing.ia.subtitle")}</p>

            <p className="text-sm text-slate-600 mb-6">{t("pricing.ia.subtitle2")}</p>



            {/* Price */}

            <div className="mb-6">

              <div className="flex items-end gap-2">

                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0066FF]">

                  $2,997

                </span>

                <span className="text-slate-500 mb-2">{t("pricing.core.setup")}</span>
                <span className="mb-2 ml-2 inline-block px-2 py-0.5 bg-red-100 text-red-600 text-[10px] md:text-xs font-bold rounded-full border border-red-200 text-center leading-tight">
                  {t("pricing.discount")}
                </span>
              </div>

            </div>



            {/* Monthly */}

            <div className="p-4 bg-white/80 rounded-xl mb-6 border border-[#8B5CF6]/20">

              <div className="text-sm text-slate-500">{t("pricing.ia.additional")}</div>

              <div className="text-2xl font-bold text-slate-900">

                +$447 USD<span className="text-base font-normal text-slate-500">/mes</span>

              </div>

              <div className="text-xs text-slate-400">{t("pricing.ia.monthlyDesc")}</div>

            </div>



            {/* Features */}

            <ul className="space-y-3 mb-8">

              {iaFeatures.map((feature, i) => (

                <motion.li

                  key={i}

                  className="flex items-center gap-3"

                  initial={{ opacity: 0, x: -20 }}

                  animate={isInView ? { opacity: 1, x: 0 } : {}}

                  transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}

                >

                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#0066FF] flex items-center justify-center flex-shrink-0">

                    <Check className="h-3 w-3 text-white" />

                  </div>

                  <span className="text-slate-700 text-sm">{feature}</span>

                </motion.li>

              ))}

            </ul>



            <Button

              size="lg"

              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-[#8B5CF6] to-[#0066FF] hover:from-[#7C4DDB] hover:to-[#0055DD] text-white"

              onClick={() => onOpenContact("pricing-ia")}

            >

              {t("pricing.ia.cta")}

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>

          </motion.div>

        </div>



        {/* Comparison mini table */}

        <motion.div

          className="max-w-2xl mx-auto"

          initial={{ opacity: 0, y: 30 }}

          animate={isInView ? { opacity: 1, y: 0 } : {}}

          transition={{ duration: 0.6, delay: 0.5 }}

        >

          <h3 className="text-xl font-bold text-center text-slate-900 mb-6">{t("pricing.compare.title")}</h3>

          <div className="bg-slate-50 rounded-2xl overflow-hidden">

            {comparison.map((row, i) => (

              <div

                key={i}

                className={`grid grid-cols-3 py-4 px-6 ${i !== comparison.length - 1 ? "border-b border-slate-200" : ""}`}

              >

                <div className="font-medium text-slate-600">{t(row.feature)}</div>

                <div className="text-center font-bold text-[#0066FF]">{t(row.us)}</div>

                <div className="text-center text-slate-400">{t(row.them)}</div>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>

  )

}