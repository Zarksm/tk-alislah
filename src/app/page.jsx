import Footer from "@/components/Footer";
import Gallery from "@/components/GalleryHome";
import SwipperHero from "@/components/SwipperHero";
import Versidua from "@/components/Versidua";
import VisiMisiCard from "@/components/VisiMisiCard";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <SwipperHero />
      <div className="h-auto py-10 md:pt-10 md:pb-20 bg-white">
        {/* <VisiMisiCard /> */}
        <Versidua />
      </div>
      <div className="h-auto">
        <Gallery />
      </div>
    </div>
  );
}
