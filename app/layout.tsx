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
  // Define la URL base para que las imágenes se carguen correctamente en redes
  metadataBase: new URL('https://washingtondigitalmedia.protolylat.com'),

  title: "Washington Digital Media | Video Production & Digital Marketing Agency in DC",
  description:
    "Award-winning video production and digital marketing agency in Washington DC. Over 2,000 videos produced for Fortune 500s, nonprofits, and startups.",
  
  // Configuración para Redes Sociales (Open Graph)
  openGraph: {
    title: "WASHINGTON DIGITAL LLC",
    description: "We are an award-winning digital media and video production company with over 9+ years of experience serving the DMV",
    type: "website",
    // Recuerda que debes guardar tu imagen como 'wdm-og.png' en la carpeta 'public'
    images: ['/wdm-og.png'], 
  },

  generator: "v0.app",
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon-light-32x32.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/icon-dark-32x32.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //     {
  //       url: "/icon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  //   apple: "/apple-icon.png",
  // },
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