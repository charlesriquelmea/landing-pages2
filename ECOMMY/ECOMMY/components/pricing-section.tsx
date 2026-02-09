"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

export function PricingSection() {
  const { t } = useI18n()
  const plans = t("pricing_section.plans", { returnObjects: true }) as any[]

  return (
    <section id="precios" className="pt-20 pb-32 md:pb-40 bg-gray-950 relative ">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <AnimatedText text={t("pricing_section.title")} className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t("pricing_section.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start mb-16 md:mb-24">
          {Array.isArray(plans) &&
            plans.map((plan, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="relative h-full">
                  {plan.isAddon && (
                    <motion.div
                      className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 blur-lg"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />
                  )}
                  <PricingCard
                    title={plan.title}
                    price={plan.price}
                    priceNote={plan.priceNote}
                    description={plan.description}
                    features={plan.features}
                    buttonText={plan.buttonText}
                    buttonVariant={plan.buttonVariant || "default"}
                    highlighted={plan.highlighted}
                    showRecommended={plan.showRecommended}
                    validationNote={plan.validationNote}
                    isAddon={plan.isAddon}
                    isBlue={plan.isBlue}
                  />
                </div>
              </AnimatedCard>
            ))}
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  title: string
  price: string
  priceNote: string
  description: string
  features: string[]
  buttonText?: string
  buttonVariant?: "default" | "outline"
  highlighted?: boolean
  showRecommended?: boolean
  validationNote?: string
  isAddon?: boolean
  isBlue?: boolean
}

function PricingCard({
  title,
  price,
  priceNote,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  showRecommended = false,
  validationNote,
  isAddon = false,
  isBlue = false,
}: PricingCardProps) {
  const { t } = useI18n()
  return (
    <motion.div
      className={`relative h-full flex flex-col bg-gray-900 border rounded-xl p-8 ${
        isBlue
          ? "border-blue-500/60"
          : isAddon
          ? "border-purple-500/60"
          : highlighted
          ? "border-blue-500"
          : "border-gray-800"
      }`}
      whileHover={{
        y: -10,
        boxShadow: isBlue
          ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
          : isAddon
          ? "0 25px 50px -12px rgba(168, 85, 247, 0.3)"
          : highlighted
          ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
          : "0 25px 50px -12px rgba(59, 130, 246, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      {isAddon && (
        <div
          className={`absolute -top-3 inset-x-0 mx-auto w-fit text-white text-xs font-bold px-4 py-2 rounded-full z-10 shadow-lg flex items-center gap-2 ${
            isBlue
              ? "bg-gradient-to-r from-blue-600 to-cyan-600"
              : "bg-gradient-to-r from-purple-600 to-fuchsia-600"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          <span>{isBlue ? "Add-on" : "Add-on"}</span>
        </div>
      )}
      {showRecommended && (
        <motion.div
          className="absolute -top-3 inset-x-0 mx-auto w-fit bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full z-10 shadow-lg whitespace-nowrap"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          {t("pricing_section.recommendedBadge")}
        </motion.div>
      )}
      <div className={`text-center flex-grow ${showRecommended || isAddon ? "mt-4" : ""}`}>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="text-lg font-bold mb-2 whitespace-pre-line">
            {price} {priceNote && <span className="text-sm text-gray-400 font-normal">{priceNote}</span>}
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div
                  className={`${isBlue
                    ? "bg-blue-500/20"
                    : isAddon
                    ? "bg-purple-500/20"
                    : highlighted
                    ? "bg-blue-500/20"
                    : "bg-gray-800"
                  } p-1 rounded-full`}
                >
                  <Check
                    className={`h-3 w-3 ${isBlue
                      ? "text-blue-400"
                      : isAddon
                      ? "text-purple-400"
                      : highlighted
                      ? "text-blue-500"
                      : "text-gray-400"
                    }`}
                  />
                </div>
              </div>
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        {buttonText && buttonVariant && (
          <Button
            variant={buttonVariant}
            className={`w-full text-sm sm:text-base px-4 py-2 mb-4 ${
              isBlue
                ? "bg-blue-600 hover:bg-blue-700"
                : isAddon
                ? "bg-purple-600 hover:bg-purple-700"
                : highlighted && buttonVariant === "default"
                ? "bg-blue-600 hover:bg-blue-700"
                : ""
            }`}
          >
            {buttonText}
          </Button>
        )}
        {validationNote && (
          <div className="text-xs text-gray-500 text-center italic mt-2">
            {validationNote}
          </div>
        )}
      </div>
    </motion.div>
  )
}
