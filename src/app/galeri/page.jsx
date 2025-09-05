import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const galeriPage = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 px-6 md:px-32 py-16">
      <Link href="/" className="text-blue-600 mb-16 flex items-center gap-2">
        <span className="animate-wiggle">
          <FaLongArrowAltLeft size={20} />
        </span>
        <p>Kembali ke Beranda</p>
      </Link>
      <div className="mb-10">
        <h1 className="font-black text-4xl text-sky-600 mb-4">Galeri</h1>
      </div>
    </div>
  );
};

export default galeriPage;
