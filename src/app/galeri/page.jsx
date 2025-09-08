import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const images = [
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    caption: "Kegiatan Belajar di Kelas",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    caption: "Anak-anak Bermain di Halaman",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    caption: "Kegiatan Mengaji Bersama",
  },
  {
    src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    caption: "Acara Perpisahan & Pentas Seni",
  },
];

const GaleriPage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 px-6 md:px-32 py-16">
      {/* Back Button */}
      <Link href="/" className="text-blue-600 mb-16 flex items-center gap-2">
        <span className="animate-wiggle">
          <FaLongArrowAltLeft size={20} />
        </span>
        <p>Kembali ke Beranda</p>
      </Link>

      {/* Title */}
      <div className="mb-10">
        <h1 className="font-black text-4xl text-sky-600 mb-4">Galeri</h1>
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-4 text-center">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriPage;
