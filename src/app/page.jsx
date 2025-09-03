import Gallery from "@/components/Gallery";
import Kontak from "@/components/Kontak";
import Navbar from "@/components/Navbar";
import SambutanCard from "@/components/SambutanCard";
import SwipperHero from "@/components/SwipperHero";
import VisiMisiCard from "@/components/VisiMisiCard";
import Footer from "@/components/Footer"; // ⬅️ Import Footer
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwipperHero />
      <div className="w-full h-auto relative z-40 flex bg-slate-300 p-6 gap-5">
        {/* Wave Image di atas, absolute */}
        <Image
          src="/assets/images/wave1.svg"
          alt="Wave"
          fill
          className="absolute top-0 left-0 w-full h-32 object-cover rotate-180 -z-0 opacity-40"
        />

        {/* Konten */}
        <div className="relative z-10 flex gap-5 w-full">
          <SambutanCard />
          <Kontak />
        </div>
      </div>

      <div className="w-full h-auto relative z-40 flex justify-center bg-slate-300 py-5 px-36">
        {/* Konten */}
        <VisiMisiCard />

        {/* Wave Image di bawah */}
        <Image
          src="/assets/images/wave2.svg"
          alt="Wave"
          width={1920}
          height={100}
          className="absolute bottom-0 left-0 w-full h-[20rem] object-cover rotate-0 -z-10 opacity-40"
        />
      </div>

      <div className="w-full min-h-screen bg-[#79BDEE]">
        <Gallery />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
