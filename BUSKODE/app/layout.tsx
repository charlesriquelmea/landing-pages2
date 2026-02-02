import React from "react"
import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Space_Grotesk, Inter, JetBrains_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const _spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-heading'
});
const _inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body'
});
const _jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-code'
});

export const metadata: Metadata = {
  title: 'Buskode | No Es Código. Es Libertad.',
  description: 'Plataforma educativa de programación latinoamericana. Aprende Vibe Coding y construye el futuro sin permiso. De consumidor a creador en 6 meses.',
  generator: 'v0.app',
  keywords: ['programación', 'coding', 'LATAM', 'educación', 'vibe coding', 'IA', 'inteligencia artificial'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${_spaceGrotesk.variable} ${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased bg-[#050505] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
