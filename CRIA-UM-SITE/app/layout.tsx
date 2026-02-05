import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vibe Coding: Da Ideia à Produção | Construa Tecnologia Enterprise com IA',
  description: 'Aprenda a metodologia interna de uma Software Factory premium para criar sites Next.js & Framer Motion com IA. Tecnologia de R$ 25.000 nas suas mãos.',
  keywords: 'vibe coding, next.js, framer motion, ia, curso programação, software factory',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>{children}</body>
    </html>
  )
}
