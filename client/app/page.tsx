import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/sections/intro";
import About from "@/components/sections/about";
import Navbar from "@/components/ui/navbar";
import Investing from "@/components/sections/investing";
import Philantropy from "@/components/sections/philantropy";

export default function Home() {
  return (
    <main className="min-h-svh w-screen text-black dark:text-background no-scrollbar">
      <Navbar />
      <Header />
      <Intro />
      <About />
      <Investing />
      <Philantropy />
      <Footer />
    </main>
  );
}
