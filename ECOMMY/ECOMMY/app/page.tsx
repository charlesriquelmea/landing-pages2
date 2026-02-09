"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Language } from "@/lib/i18n/context"


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // prefer saved language, else default to 'en'
    const saved = (typeof window !== "undefined" ? localStorage.getItem("language") : null) as Language | null
    const lang: Language = saved && ["en", "es", "pt"].includes(saved) ? saved : "en"
    router.replace(`/${lang}`)
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="text-gray-400">Loading…</span>
    </div>
  )
}

