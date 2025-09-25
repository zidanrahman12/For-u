"use client"

import { motion } from "framer-motion"

export default function Screen1({ onNext }) {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-purple-950/80 via-black to-pink-950/70 flex flex-col items-center justify-center p-8 relative overflow-hidden gap-8">

            {/* GIF */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center justify-center"
            >
                <div className="">
                    <div className="text-6xl">🐼</div>
                </div>
            </motion.div>

            {/* Center text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-center space-y-4 flex flex-col justify-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">I want to tell you something…</h1>
                <p className="text-xl md:text-2xl text-purple-200 font-light">But only you deserve to see this ✨</p>
            </motion.div>

            {/* Bottom button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="pb-8"
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
                >
                    Next →
                </button>
            </motion.div>
        </div>
    )
}
