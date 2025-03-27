'use client'

import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatWeDo from "../components/whatWeDo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <GetInTouch />
      <Footer />
    </div>
  );
}
