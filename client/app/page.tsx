"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/sections/intro";
import About from "@/components/sections/about";
import Investing from "@/components/sections/investing";
import Philantropy from "@/components/sections/philantropy";
import Contact from "@/components/sections/contact";
import Statement from "@/components/sections/statement";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time:any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  
  return (
    <main className="min-h-svh w-screen text-black dark:text-background no-scrollbar">
      <Intro />
      <About />
      <Statement />
      <Investing />
      <Philantropy />
      <Contact />
      <Footer />
    </main>
  );
}
