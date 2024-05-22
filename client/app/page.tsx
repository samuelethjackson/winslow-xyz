import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/sections/intro";
import About from "@/components/sections/about";
import Investing from "@/components/sections/investing";
import Philantropy from "@/components/sections/philantropy";
import Contact from "@/components/sections/contact";
import Statement from "@/components/sections/about-statement";

export default function Home() {
  return (
    <main className="min-h-svh w-screen text-black dark:text-background no-scrollbar">
      <Header />
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
