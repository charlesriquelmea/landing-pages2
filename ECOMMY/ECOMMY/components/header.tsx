"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"
import { Menu, X, Star, MessageSquare } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const { t } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b ${
       "border-transparent bg-transparent"
      } backdrop-blur-sm transition-all duration-300`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <MessageSquare className="h-6 w-6 text-blue-500" />
          <span  className="text-xl font-bold">AI eCommerce</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {[
           
            { name: t("header.caracteristicas"), href: "#caracteristicas" },
            { name: t("header.comoFunciona"), href: "#como-funciona" },
            { name: t("header.tecnologia"), href: "#tecnologia" },
            { name: t("header.capacidades"), href: "#capacidades" },
            { name: t("header.beneficios"), href: "#beneficios" },
            { name: t("header.precios"), href: "#precios" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
              <Link suppressHydrationWarning
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const targetElement = document.querySelector(item.href)
                  if (targetElement) {
                    const headerOffset = 80
                    const elementPosition = targetElement.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <LanguageSwitcher />

          <div className="hidden md:flex items-center gap-2 m-1">
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="hidden md:inline-flex">
                {t("header.iniciarSesion")}
              </Button>
            </motion.div> */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={"#contacto"}>
                <Button className="bg-blue-600 hover:bg-blue-700">{t("header.solicitarDemo")}</Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed inset-x-0 top-16 z-40 ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container py-4 bg-black/95 border-t border-gray-800 shadow-lg max-h-screen overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {[
              
              { name: t("header.caracteristicas"), href: "#caracteristicas" },
              { name: t("header.comoFunciona"), href: "#como-funciona" },
              { name: t("header.tecnologia"), href: "#tecnologia" },
              { name: t("header.capacidades"), href: "#capacidades" },
              { name: t("header.beneficios"), href: "#beneficios" },
              { name: t("header.precios"), href: "#precios" },
              { name: t("header.contacto"), href: "#contacto" },
            ].map((item) => (
              <Link
              suppressHydrationWarning
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
            {/* Product Card Preview al principio del menú */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-4">
              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 rounded-md bg-gray-800 flex items-center justify-center text-gray-500 text-xs border border-gray-700 flex-shrink-0">
                  <Image
                    src="/cam.webp"
                    alt="Product Image"
                    width={48}
                    height={48}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white">{t("ChatbotPreview.productCard.name")}</h4>
                    <span className="text-sm font-bold text-blue-400">{t("ChatbotPreview.productCard.price")}</span>
                  </div>
                  <p className="text-xs text-gray-400">{t("ChatbotPreview.productCard.specs")}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-gray-400">{t("ChatbotPreview.productCard.rating")}</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <Button size="sm" className="h-7 px-2 text-xs">{t("ChatbotPreview.productCard.addToCart")}</Button>
                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">{t("ChatbotPreview.productCard.viewDetails")}</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-800">
              {/* <Button variant="outline" className="w-full justify-center">
                {t("header.iniciarSesion")}
              </Button> */}
              <Link href={"#contacto"}>  
                <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700">
                  {t("header.solicitarDemo")}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  )
}
