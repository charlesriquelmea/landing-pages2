"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Play, ArrowLeft, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getDemos } from "@/lib/portfolio-data"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PortfolioModalProps {
    isOpen: boolean
    onClose: () => void
}

export function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
    const { t } = useLanguage()
    const projects = getDemos(t)
    const [playingIndex, setPlayingIndex] = useState<number | null>(null)

    // Handle closing via props or resetting player
    const handleClose = () => {
        if (playingIndex !== null) {
            setPlayingIndex(null)
        } else {
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="w-full max-w-[85vw] sm:max-w-[85vw] h-[90vh] flex flex-col bg-slate-950 border-slate-800 p-0 overflow-hidden">

                {/* Header (Only show if not playing to maximize video space, or keep slim) */}
                <div className={`sticky top-0 z-20 bg-slate-950/90 backdrop-blur-xl p-4 border-b border-slate-800 flex items-center justify-between transition-all duration-300 ${playingIndex !== null ? 'py-2' : 'py-6'}`}>
                    {playingIndex !== null ? (
                        <Button
                            variant="ghost"
                            onClick={() => setPlayingIndex(null)}
                            className="text-slate-400 hover:text-white hover:bg-white/10 flex items-center gap-2"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="hidden sm:inline">Volver a Demos</span>
                        </Button>
                    ) : (
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="text-slate-400 hover:text-white hover:bg-white/10 flex items-center gap-2"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="hidden sm:inline">Volver</span>
                        </Button>
                    )}

                    <DialogTitle className={`text-center tracking-tight transition-all duration-300 ${playingIndex !== null ? 'text-lg' : 'text-3xl md:text-4xl font-black'}`}>
                        {playingIndex === null && <span className="block text-white mb-1 leading-none">{t("portfolio.title")}</span>}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#2dd4bf] truncate max-w-[50vw]">
                            {playingIndex !== null ? projects[playingIndex].title : "Demos Interactivas"}
                        </span>
                    </DialogTitle>

                    {/* Close triggers the modal close, but we overrode onOpenChange to handle back nav */}
                    <div className="w-10 h-10 flex items-center justify-end">
                        {/* Default close button is absolute, this is just for balance if needed */}
                    </div>
                </div>

                <div className={`flex-1 overflow-y-auto transition-all duration-300 ${playingIndex !== null ? 'p-2 flex items-center justify-center' : 'p-8 pb-20'}`}>
                    <AnimatePresence mode="wait">
                        {playingIndex !== null ? (
                            <motion.div
                                key="player"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-full flex flex-col items-center justify-center"
                            >
                                <div className="relative w-auto max-w-full h-auto max-h-[75vh] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800 mx-auto">
                                    <video
                                        src={projects[playingIndex].video}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain"
                                    // Optional: onEnded={() => setPlayingIndex(null)}
                                    />
                                </div>
                                <p className="text-slate-500 mt-4 text-sm text-center">
                                    Reproduciendo demo de <span className="text-white font-bold">{projects[playingIndex].title}</span>
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        className="group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-[#0d9488] transition-all duration-300 hover:shadow-2xl hover:shadow-[#0d9488]/20 cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        onClick={() => project.video ? setPlayingIndex(index) : window.open(project.url, '_blank')}
                                    >
                                        {/* Image */}
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 ${project.position || ""}`}
                                        />

                                        {/* Video Overlay Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                                        {/* Play Button Center (Standard Size for Thumbnail) */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0d9488] group-hover:border-[#0d9488] transition-all duration-300 shadow-xl">
                                                {project.video ? (
                                                    <Play className="h-6 w-6 fill-white text-white ml-1" />
                                                ) : (
                                                    <ExternalLink className="h-6 w-6 text-white" />
                                                )}
                                            </div>
                                        </div>

                                        {/* LIVE Indicator */}
                                        <div className="absolute top-4 left-4 px-2 py-1 bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-bold rounded flex items-center gap-1.5 animate-pulse">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                            {project.video ? "VIDEO DEMO" : "LIVE DEMO"}
                                        </div>

                                        {/* Bottom Metadata */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2 py-0.5 bg-[#0d9488]/20 border border-[#0d9488]/30 text-[#0d9488] text-[10px] font-bold rounded uppercase tracking-wider">
                                                    {project.category}
                                                </span>
                                                {project.result && (
                                                    <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold rounded uppercase tracking-wider">
                                                        {project.result}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-[#0d9488] transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    )
}
