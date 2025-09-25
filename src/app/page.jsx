"use client"

import LyricsScreen from "@/components/LyricsScreen"
import Music from "@/components/Music"
import Screen1 from "@/components/Screen1"
import Screen2 from "@/components/Screen2"
import { useState } from "react"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [musicStarted, setMusicStarted] = useState(false)

  return (
    <div className="min-h-screen">
      {currentScreen === 1 && <Screen1 onNext={() => setCurrentScreen(2)} />}
      {currentScreen === 2 && <Screen2 onNext={() => {
        setCurrentScreen(3)
        setMusicStarted(true)
      }} />}
      {currentScreen === 3 && <LyricsScreen />}

      <Music shouldPlay={musicStarted} />
    </div>
  )
}
