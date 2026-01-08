import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist, Geist_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  // 1. Base URL para asegurar que las imágenes se vean en redes sociales
  metadataBase: new URL('https://washingtondigitalmedia.protolylat.com'),

  title: "Washington Digital Media | Video Production & Digital Marketing Agency in DC",
  description:
    "Award-winning video production and digital marketing agency in Washington DC. Over 2,000 videos produced for Fortune 500s, nonprofits, and startups.",
  
  // 2. Configuración Open Graph (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "WASHINGTON DIGITAL LLC",
    description: "We are an award-winning digital media and video production company with over 9+ years of experience serving the DMV",
    type: "website",
    // Esta es la imagen que guardaste en la carpeta 'public'
    images: ['/wdm-og.jpg'], 
  },

  generator: "v0.app",

  // NOTA: Se eliminó el bloque 'icons' manual para que Next.js detecte
  // automáticamente tu favicon nuevo (icon.png) y no use los viejos de v0.
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}