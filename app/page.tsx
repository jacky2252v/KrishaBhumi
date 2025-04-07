"use client"

import Footer from "@/components/Footer"
import GetInTouch from "@/components/GetInTouch"
import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"



export default function Home() {
  return (
    <main className="min-h-screen  text-gray-900 dark:text-gray-100">
      <Hero />
      <WhatWeDo />
      <GetInTouch />
    </main>
  )
}

