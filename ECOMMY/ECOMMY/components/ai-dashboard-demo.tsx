"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  ShoppingCart,
  Brain,
  TrendingUp,
  Target,
  Bot,
  Calendar,
  Sparkles,
  ArrowRight,
  Users,
  Eye,
  CheckCircle,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"

export function AIDashboardDemo() {
  // Datos simulados para los gráficos
  const { t } = useI18n();
  const salesData = [
    { month: "Ene", withAI: 89, withoutAI: 67 },
    { month: "Feb", withAI: 95, withoutAI: 71 },
    { month: "Mar", withAI: 108, withoutAI: 78 },
    { month: "Abr", withAI: 118, withoutAI: 82 },
    { month: "May", withAI: 125, withoutAI: 85 },
    { month: "Jun", withAI: 127, withoutAI: 87 },
  ]

const conversionSources = [
  { name: t("AiDashboardContent.data.conversionSources[0].name"), value: 45, color: "#3B82F6" },
  { name: t("AiDashboardContent.data.conversionSources[1].name"), value: 28, color: "#10B981" },
  { name: t("AiDashboardContent.data.conversionSources[2].name"), value: 18, color: "#F59E0B" },
  { name: t("AiDashboardContent.data.conversionSources[3].name"), value: 9, color: "#8B5CF6" },
]

const funnelData = [
  { name: t("AiDashboardContent.data.funnelData[0].name"), value: 12450, icon: Users, color: "#E5E7EB" },
  { name: t("AiDashboardContent.data.funnelData[1].name"), value: 8920, percentage: 72, icon: Eye, color: "#D1D5DB" },
  { name: t("AiDashboardContent.data.funnelData[2].name"), value: 5680, percentage: 64, icon: Brain, color: "#9CA3AF" },
  { name: t("AiDashboardContent.data.funnelData[3].name"), value: 2840, percentage: 50, icon: ShoppingCart, color: "#6B7280" },
  { name: t("AiDashboardContent.data.funnelData[4].name"), value: 1562, percentage: 55, icon: CheckCircle, color: "#3B82F6" },
]

const productPerformance = [
  { name: "Smartphone Pro", before: 15, after: 28 },
  { name: "Laptop Gaming", before: 12, after: 22 },
  { name: "Auriculares BT", before: 10, after: 19 },
  { name: "Tablet 10''", before: 8, after: 16 },
  { name: "Smartwatch", before: 6, after: 13 },
]

  const [selectedTimeframe, setSelectedTimeframe] = useState("6M")

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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{t("AiDashboardContent.sectionTitle")}</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4 px-4">{t("AiDashboardContent.sectionDescription")}</p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>{t("AiDashboardContent.sectionRealtime")}</span>
          </div>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 text-white">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{t("AiDashboardContent.dashboardTitle")}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{t("AiDashboardContent.dashboardSubtitle")}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2 w-full sm:w-auto">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <select
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="bg-transparent text-white text-sm border-none outline-none flex-1 sm:flex-none"
                  >
                    <option value="1M">{t("AiDashboardContent.timeframeOptions.1M")}</option>
                    <option value="3M">{t("AiDashboardContent.timeframeOptions.3M")}</option>
                    <option value="6M">{t("AiDashboardContent.timeframeOptions.6M")}</option>
                    <option value="1Y">{t("AiDashboardContent.timeframeOptions.1Y")}</option>
                  </select>
                </div>
                <Link href="#contacto" className="w-full sm:w-auto">  
                  <Button onClick={scrollToContact} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                    <Target className="h-4 w-4 mr-2" />
                    <span className="text-xs sm:text-sm">{t("AiDashboardContent.integrateButton")}</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* KPIs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  title: t("AiDashboardContent.kpis[0].title"),
                  value: "$127,450",
                  change: "+12.5%",
                  icon: ShoppingCart,
                  color: "blue",
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600",
                  changeColor: "text-green-600",
                },
                {
                  title: t("AiDashboardContent.kpis[1].title"),
                  value: "+18.3%",
                  change: t("AiDashboardContent.kpis[1].change"),
                  icon: Brain,
                  color: "green",
                  bgColor: "bg-green-50",
                  iconColor: "text-green-600",
                  changeColor: "text-gray-500",
                },
                {
                  title: t("AiDashboardContent.kpis[2].title"),
                  value: "1,247",
                  change: "+34.2%",
                  icon: TrendingUp,
                  color: "orange",
                  bgColor: "bg-orange-50",
                  iconColor: "text-orange-600",
                  changeColor: "text-green-600",
                },
                {
                  title: t("AiDashboardContent.kpis[3].title"),
                  value: "+245%",
                  change: t("AiDashboardContent.kpis[3].change"),
                  icon: Target,
                  color: "purple",
                  bgColor: "bg-purple-50",
                  iconColor: "text-purple-600",
                  changeColor: "text-green-600",
                },
              ].map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</p>
                        <p className="text-3xl font-bold text-gray-900 mb-1">{kpi.value}</p>
                        <p className={`text-sm ${kpi.changeColor}`}>{kpi.change}</p>
                      </div>
                      <div className={`${kpi.bgColor} p-3 rounded-xl`}>
                        <kpi.icon className={`h-6 w-6 ${kpi.iconColor}`} />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Sales Line Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{t("AiDashboardContent.charts.sales.title")}</h3>
                      <p className="text-sm text-gray-600">{t("AiDashboardContent.charts.sales.subtitle")}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <span className="text-gray-600">{t("AiDashboardContent.charts.sales.withAI")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full" />
                        <span className="text-gray-600">{t("AiDashboardContent.charts.sales.withoutAI")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" tickFormatter={(value) => `$${value}K`} />
                        <Tooltip
                          formatter={(value: number, name: string) => [
                            `$${value}K`,
                            name === "withAI" ? "Con IA" : "Sin IA",
                          ]}
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="withAI"
                          stroke="#3b82f6"
                          strokeWidth={3}
                          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 6 }}
                          activeDot={{ r: 8, stroke: "#3b82f6", strokeWidth: 2 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="withoutAI"
                          stroke="#9ca3af"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ fill: "#9ca3af", strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </motion.div>

              {/* Conversion Sources Donut */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{t("AiDashboardContent.charts.conversionSources.title")}</h3>
                    <p className="text-sm text-gray-600">{t("AiDashboardContent.charts.conversionSources.subtitle")}</p>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={conversionSources}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {conversionSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => [`${value}%`, t("AiDashboardContent.charts.conversionSources.label")]} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {conversionSources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                          <span className="text-gray-600">{source.name}</span>
                        </div>
                        <span className="font-medium text-gray-900">{source.value}%</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Conversion Funnel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t("AiDashboardContent.charts.funnel.title")}</h3>
                  <p className="text-sm text-gray-600">{t("AiDashboardContent.charts.funnel.subtitle")}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {funnelData.map((stage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="bg-white rounded-full p-3 w-fit mx-auto mb-3 shadow-sm">
                            <stage.icon className="h-6 w-6 text-gray-700" />
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">{stage.name}</h4>
                          <p className="text-2xl font-bold text-gray-900 mb-1">{stage.value.toLocaleString()}</p>
                          {stage.percentage && (
                            <p className="text-sm text-green-600 font-medium">{stage.percentage}{t("AiDashboardContent.charts.funnel.percentageSuffix")}</p>
                          )}
                        </div>
                        {index < funnelData.length - 1 && (
                          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20">
                            <ArrowRight className="h-5 w-5 text-blue-500" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Product Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{t("AiDashboardContent.charts.products.title")}</h3>
                    <p className="text-sm text-gray-600">{t("AiDashboardContent.charts.products.subtitle")}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full" />
                      <span className="text-gray-600">{t("AiDashboardContent.charts.products.before")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                      <span className="text-gray-600">{t("AiDashboardContent.charts.products.after")}</span>
                    </div>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={productPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" tickFormatter={(value) => `$${value}K`} />
                      <Tooltip
                        formatter={(value: number, name: string) => [
                          `$${value}K`,
                          name === "before" ? "Antes" : "Con IA",
                        ]}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="before" fill="#9ca3af" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="after" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Bot className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{t("AiDashboardContent.cta.title")}</h3>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                {t("AiDashboardContent.cta.p")}
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
              >
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="truncate">{t("AiDashboardContent.cta.btn")}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
