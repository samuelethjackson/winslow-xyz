import Avatar from "@/components/avatar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavigationBubbles from "@/components/navigation-bubbles";
import AboutPanel from "@/components/panels/about";
import Panel from "@/components/elements/panel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-dvh w-screen">
      <Header />
      <div className="grid grid-cols-9 grid-rows-5 px-5 md:px-8 py-12 h-full w-full">
        <div className="col-start-1 col-end-10 row-end-4 md:row-end-6 flex flex-col gap-4 center self-end">
          <NavigationBubbles />
          <h2>Accelarating <br/>humanity through growth.</h2>
        </div>
        <Avatar />
      </div>
      <Footer />
    </main>
  );
}
