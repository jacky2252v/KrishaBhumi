"use client"

import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import WhatWeDo from "../components/whatWeDo"


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <GetInTouch />
      <Footer />
    </main>
  )
}

