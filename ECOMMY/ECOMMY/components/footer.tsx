"use client"

import Link from "next/link"
import { MessageSquare, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
            <div className="flex flex-col gap-4">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
               
              >
                <MessageSquare className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">AI eCommerce</span>
              </motion.div>
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                 
              >
                {t("footer.description")}
              </motion.p>
              {/* <motion.div
                className="flex gap-4 mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                
              >
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div> */}
            </div>
          
            <FooterColumn
              title={t("footer.product.title")}
              links={
                Array.isArray(t("footer.product.links"))
                  ? t("footer.product.links")
                  : Object.values(t("footer.product.links") as Record<string, string>)
              }
            />

          
            <FooterColumn
              title={t("footer.resources.title")}
              links={
                Array.isArray(t("footer.resources.links"))
                  ? t("footer.resources.links")
                  : Object.values(t("footer.resources.links") as Record<string, string>)
              }
            />
          

          
            <FooterColumn
              title={t("footer.company.title")}
              links={
                Array.isArray(t("footer.company.links"))
                  ? t("footer.company.links")
                  : Object.values(t("footer.company.links") as Record<string, string>)
              }
            />
          
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
           
        >
          {t("footer.copyright", { year: currentYear.toString() })}
        </motion.div>
      </div>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: string[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <motion.h3
        className="font-bold mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
         
      >
        {title}
      </motion.h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            
          >
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {link}
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
