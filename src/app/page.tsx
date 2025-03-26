'use client'

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatWeDo from "../components/whatWeDo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
