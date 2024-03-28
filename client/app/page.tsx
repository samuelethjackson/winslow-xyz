import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-9 grid-rows-4 px-8 py-4 h-screen flex-col center">
      <p className="col-start-1 row-start-1 self-start">opportunities@winslow.xyz</p>
      <p className="col-start-4 col-span-2 row-start-1 self-start">Investor & Philantropist</p>
      <div className="col-start-9 size-8 bg-black rounded-full self-start place-self-end overflow-hidden border border-black relative"><div className="bg-background size-8 absolute top-0 left-4"></div></div>
      <div className="col-start-1 col-end-10 row-start-3 flex flex-col center gap-0">
        <h2>Accelarating humanity through growth.</h2>
      </div>
    </main>
  );
}
