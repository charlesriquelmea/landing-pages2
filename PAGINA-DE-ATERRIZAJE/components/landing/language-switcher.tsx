"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// 1. Definimos los componentes de las banderas para que se vean en cualquier PC
const FlagES = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-5 h-3.5 rounded-[2px] shadow-sm object-cover">
    <rect width="750" height="500" fill="#c60b1e"/>
    <rect width="750" height="250" y="125" fill="#ffc400"/>
  </svg>
)

const FlagUS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1235 650" className="w-5 h-3.5 rounded-[2px] shadow-sm object-cover">
    <rect width="1235" height="650" fill="#b22234"/>
    <path d="M0,50H1235M0,150H1235M0,250H1235M0,350H1235M0,450H1235M0,550H1235" stroke="#fff" strokeWidth="50"/>
    <rect width="494" height="350" fill="#3c3b6e"/>
  </svg>
)

export function LanguageSwitcher() {
  return null
}