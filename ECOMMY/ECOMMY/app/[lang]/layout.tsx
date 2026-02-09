import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider, type Language } from "@/lib/i18n/context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI eCommerce - Agentes Inteligentes para tu Tienda Online",
  description:
    "Transforme su tienda online con asistentes inteligentes que aumentan conversiones y mejoran la experiencia del cliente",
  generator: 'v0.dev',
  icons: { icon: "/apple-icon.png" }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  const safeLang: Language = ["en", "es", "pt"].includes(lang) ? (lang as Language) : "en"

  return (
    <html lang={safeLang} suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <I18nProvider initialLanguage={safeLang}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
