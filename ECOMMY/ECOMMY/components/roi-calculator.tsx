"use client"


import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, TrendingUp, DollarSign, Users, Zap, ArrowRight, Target, BarChart3 } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"

interface CalculatorInputs {
  traffic: number
  conversionRate: number
  aov: number
  numAgents: number
  costPerAgent: number
}

interface CalculationResults {
  conversionBase: number
  conversionAI: number
  gainConversion: number
  gainAOV: number
  supportSavings: number
  totalMonthlyGain: number
  totalAnnualROI: number
}

export function ROICalculator() {
  const { t } = useI18n()
  const [inputs, setInputs] = useState<CalculatorInputs>({
    traffic: 50000,
    conversionRate: 1.5,
    aov: 80,
    numAgents: 4,
    costPerAgent: 2500,
  })

  const [results, setResults] = useState<CalculationResults | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Constantes actualizadas del AI Agent basadas en datos reales de la industria
  const AI_CONVERSION_UPLIFT = 0.12 // 12% mejora en conversión (actualizado)
  const AI_TICKET_RESOLUTION_RATE = 0.66 // 66% de tickets resueltos automáticamente (actualizado)
  const AI_AOV_INCREASE = 0.05 // 5% aumento en AOV (sin cambios)

  // Formatear números como moneda
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Formatear números con comas
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  // Calcular resultados
  const calculateROI = () => {
    const { traffic, conversionRate, aov, numAgents, costPerAgent } = inputs

    // Ingresos actuales y con AI
    const conversionBase = traffic * (conversionRate / 100) * aov
    const conversionAI = traffic * (conversionRate / 100) * (1 + AI_CONVERSION_UPLIFT) * aov
    const gainConversion = conversionAI - conversionBase

    // Aumento por AOV
    const gainAOV = traffic * (conversionRate / 100) * (aov * AI_AOV_INCREASE)

    // Ahorro en soporte
    const supportSavings = numAgents * costPerAgent * AI_TICKET_RESOLUTION_RATE

    // Totales
    const totalMonthlyGain = gainConversion + gainAOV + supportSavings
    const totalAnnualROI = totalMonthlyGain * 12

    const calculatedResults: CalculationResults = {
      conversionBase,
      conversionAI,
      gainConversion,
      gainAOV,
      supportSavings,
      totalMonthlyGain,
      totalAnnualROI,
    }

    setResults(calculatedResults)
    setShowResults(true)
  }

  // Auto-calcular cuando cambien los inputs
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateROI()
    }, 500)

    return () => clearTimeout(timer)
  }, [inputs])

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const scrollToContact = () => {
    const contactElement = document.querySelector("#contacto")
    if (contactElement) {
      const headerOffset = 80
      const elementPosition = contactElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Datos para gráficos
  const chartData = results
    ? [
        {
          name: t("calculator.chartData.ingresosExtra"),
          value: results.gainConversion + results.gainAOV,
          color: "#3b82f6",
        },
        {
          name: t("calculator.chartData.ahorroSoporte"),
          value: results.supportSavings,
          color: "#10b981",
        },
      ]
    : []

  const pieData = results
    ? [
        {
          name: t("calculator.chartData.mejoraConversion"),
          value: results.gainConversion,
          color: "#3b82f6",
        },
        {
          name: t("calculator.chartData.aumentoAOV"),
          value: results.gainAOV,
          color: "#8b5cf6",
        },
        {
          name: t("calculator.chartData.ahorroSoporte"),
          value: results.supportSavings,
          color: "#10b981",
        },
      ]
    : []

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-green-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t("calculator.header.title")}
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">{t("calculator.header.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1">
              <span className="text-blue-400 font-medium">+12%</span> {t("calculator.header.tags[0].label")}
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
              <span className="text-green-400 font-medium">66%</span> {t("calculator.header.tags[1].label")}
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-full px-3 py-1">
              <span className="text-purple-400 font-medium">+5%</span> {t("calculator.header.tags[2].label")}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Target className="h-6 w-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-white">{t("calculator.form.title")}</h3>
              </div>

              <div className="space-y-8">
                {/* Tráfico Mensual */}
                <div className="space-y-4">
                  <Label className="text-gray-300 text-lg font-medium">
                   {t("calculator.form.traffic.label")}
                    <span className="text-blue-400 ml-2">{formatNumber(inputs.traffic)} {t("calculator.form.traffic.unit")}</span>
                  </Label>
                  <Slider
                    value={[inputs.traffic]}
                    onValueChange={([value]) => handleInputChange("traffic", value)}
                    max={500000}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1K</span>
                    <span>500K</span>
                  </div>
                </div>

                {/* Tasa de Conversión */}
                <div className="space-y-3">
                  <Label htmlFor="conversion" className="text-gray-300 text-lg font-medium">
                    {t("calculator.form.conversionRate.label")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="conversion"
                      type="number"
                      value={inputs.conversionRate}
                      onChange={(e) => handleInputChange("conversionRate", Number.parseFloat(e.target.value) || 0)}
                      className="bg-gray-800 border-gray-700 text-white text-lg pr-8"
                      step="0.1"
                      min="0"
                      max="10"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">%</span>
                  </div>
                </div>

                {/* AOV */}
                <div className="space-y-3">
                  <Label htmlFor="aov" className="text-gray-300 text-lg font-medium">
                    {t("calculator.form.aov.label")}
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                    <Input
                      id="aov"
                      type="number"
                      value={inputs.aov}
                      onChange={(e) => handleInputChange("aov", Number.parseFloat(e.target.value) || 0)}
                      className="bg-gray-800 border-gray-700 text-white text-lg pl-8"
                      min="1"
                    />
                  </div>
                </div>

                {/* Número de Agentes */}
                <div className="space-y-3">
                  <Label htmlFor="agents" className="text-gray-300 text-lg font-medium">
                    {t("calculator.form.numAgents.label")}
                  </Label>
                  <Input
                    id="agents"
                    type="number"
                    value={inputs.numAgents}
                    onChange={(e) => handleInputChange("numAgents", Number.parseInt(e.target.value) || 0)}
                    className="bg-gray-800 border-gray-700 text-white text-lg"
                    min="1"
                  />
                </div>

                {/* Costo por Agente */}
                <div className="space-y-3">
                  <Label htmlFor="cost" className="text-gray-300 text-lg font-medium">
                    {t("calculator.form.costPerAgent.label")}
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                    <Input
                      id="cost"
                      type="number"
                      value={inputs.costPerAgent}
                      onChange={(e) => handleInputChange("costPerAgent", Number.parseFloat(e.target.value) || 0)}
                      className="bg-gray-800 border-gray-700 text-white text-lg pl-8"
                      min="100"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <AnimatePresence>
              {showResults && results && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Main ROI Card */}
                  <Card className="bg-gradient-to-br from-blue-900/50 to-green-900/50 backdrop-blur-xl border-blue-500/30 p-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="mb-4"
                    >
                      <TrendingUp className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t("calculator.results.annualImpact.title")}</h3>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4"
                    >
                      {formatCurrency(results.totalAnnualROI)}
                    </motion.div>
                    <p className="text-gray-300 text-lg">{t("calculator.results.annualImpact.subtitle")}</p>
                  </Card>

                  {/* Monthly Breakdown */}
                  <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-800 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <BarChart3 className="h-6 w-6 text-blue-500" />
                      <h4 className="text-xl font-bold text-white">{t("calculator.results.monthlyBreakdown.title")}</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-blue-500/20 rounded-lg p-4 text-center"
                      >
                        <DollarSign className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">
                          {formatCurrency(results.gainConversion + results.gainAOV)}
                        </div>
                        <div className="text-sm text-gray-400">{t("calculator.results.monthlyBreakdown.title")}</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-green-500/20 rounded-lg p-4 text-center"
                      >
                        <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{formatCurrency(results.supportSavings)}</div>
                        <div className="text-sm text-gray-400">{t("calculator.results.monthlyBreakdown.supportSavings")}</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-purple-500/20 rounded-lg p-4 text-center"
                      >
                        <Zap className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{formatCurrency(results.totalMonthlyGain)}</div>
                        <div className="text-sm text-gray-400">{t("calculator.results.monthlyBreakdown.totalMonthly")}</div>
                      </motion.div>
                    </div>

                    {/* Bar Chart */}
                    <div className="h-64 mb-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" tickFormatter={(value) => formatCurrency(value)} />
                          <Tooltip
                            formatter={(value: number) => [formatCurrency(value), "Valor"]}
                            contentStyle={{
                              backgroundColor: "#1f2937",
                              border: "1px solid #374151",
                              borderRadius: "8px",
                              color: "#fff",
                            }}
                          />
                          <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Pie Chart */}
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value: number) => [formatCurrency(value), "Valor"]}
                            contentStyle={{
                              backgroundColor: "#1f2937",
                              border: "1px solid #374151",
                              borderRadius: "8px",
                              color: "#fff",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>

                  {/* Detailed Breakdown */}
                  <Card className="bg-gray-900/80 backdrop-blur-xl border-gray-800 p-6">
                    <h4 className="text-xl font-bold text-white mb-4">{t("calculator.results.detailedBreakdown.title")}</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("calculator.results.detailedBreakdown.currentRevenue")}</span>
                        <span className="text-white font-medium">{formatCurrency(results.conversionBase)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("calculator.results.detailedBreakdown.aiRevenue")}</span>
                        <span className="text-green-400 font-medium">{formatCurrency(results.conversionAI)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("calculator.results.detailedBreakdown.conversionGain")}</span>
                        <span className="text-blue-400 font-medium">{formatCurrency(results.gainConversion)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("calculator.results.detailedBreakdown.aovGain")}</span>
                        <span className="text-purple-400 font-medium">{formatCurrency(results.gainAOV)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("calculator.results.detailedBreakdown.supportAutomation")}</span>
                        <span className="text-green-400 font-medium">{formatCurrency(results.supportSavings)}</span>
                      </div>
                    </div>
                  </Card>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center">
                      <Link href="#contacto" className="w-full max-w-xs sm:max-w-none sm:w-auto">
                        <Button
                          onClick={scrollToContact}
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white w-full px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold relative overflow-hidden group h-auto whitespace-normal"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2 text-center">
                            {t("calculator.cta.button")}
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform hidden sm:inline-block" />
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
                            initial={{ x: "100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </Link>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">
                      {t("calculator.cta.disclaimer")}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
