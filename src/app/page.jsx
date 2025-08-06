import Navbar from "@/components/Navbar";
import SwipperHero from "@/components/SwipperHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SwipperHero />
      <div className="w-full h-screen bg-gray-600">tess</div>
    </div>
  );
}
