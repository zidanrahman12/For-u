"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function LyricsScreen() {
    const lyrics = [
        "Tu haseen tera naam haseen ae",
        "Tere ishq da jaam haseen ae",
        "Eh be-matlabi zindagi",
        "Jado di tere naam haseen ae",
    ]

    const [currentLyric, setCurrentLyric] = useState(0)
    const [showLyric, setShowLyric] = useState(true)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        if (currentLyric >= lyrics.length) {
            setFinished(true)
            return
        }

        const interval = setInterval(() => {
            setShowLyric(false)
            setTimeout(() => {
                setCurrentLyric((prev) => prev + 1)
                setShowLyric(true)
            }, 500)
        }, 3000)

        return () => clearInterval(interval)
    }, [currentLyric])

    // Floating particles
    const particles = Array.from({ length: 20 }, (_, i) => (
        <motion.div
            key={i}
            className="absolute text-pink-300 text-xl"
            initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0,
            }}
            animate={{
                y: -50,
                opacity: [0, 1, 0],
                x: Math.random() * window.innerWidth,
            }}
            transition={{
                duration: Math.random() * 3 + 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
            }}
        >
            {Math.random() > 0.5 ? "💖" : "✨"}
        </motion.div>
    ))

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0">{particles}</div>

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl"></div>

            {/* Lyrics container */}
            <div className="text-center z-10 max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    {showLyric && currentLyric < lyrics.length && (
                        <motion.h1
                            key={currentLyric}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.8 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide"
                            style={{
                                textShadow:
                                    "0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 192, 203, 0.3)",
                            }}
                        >
                            {lyrics[currentLyric]}
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>

            {/* Ending Heartbeat Overlay */}
            {finished && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black"
                >
                    {/* <div className="text-9xl text-pink-500/80 animate-pulse">❤️</div> */}
                </motion.div>
            )}
        </div>
    )
}
