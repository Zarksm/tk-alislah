import SwipperHero from "@/components/SwipperHero";
import Versidua from "@/components/Versidua";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <SwipperHero />
      <div className="h-screen bg-white">
        {/* <VisiMisiCard /> */}
        <Versidua />
      </div>
      <div className="h-screen bg-blue-600"></div>
    </div>
  );
}
