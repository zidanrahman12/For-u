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
        }, 2200)

        return () => clearInterval(interval)
    }, [currentLyric])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
            className="min-h-screen bg-gradient-to-tr from-pink-950/80 via-black to-purple-950/80 flex items-center justify-center p-8 relative overflow-hidden">

            {/* Animated Gradient Layer */}
            {/* <div className="absolute inset-0 animate-gradient bg-gradient-to-tr from-gray-950 via-black to-purple-950"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-pink-900/10 to-purple-900/10"></div> */}


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
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide will-change-transform"
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
                    className="absolute inset-0 flex items-center justify-center pointer-events-none "
                >
                    {/* <div className="text-9xl text-pink-500/80 animate-pulse">❤️</div> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                    >
                        <img src="/gifs/3.gif" className="w-60" alt="flower" />
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    )
}
