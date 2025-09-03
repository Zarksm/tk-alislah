import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-50 px-6 md:px-32 py-16">
        <Link href="/" className="text-blue-600 mb-4 inline-block">
          &larr; Kembali ke Beranda
        </Link>
        <div className="mb-10">
          <h1 className="font-black text-4xl text-sky-600 mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            TK Al Ishlah adalah lembaga pendidikan anak usia dini yang
            berdedikasi untuk membentuk generasi yang berakhlak mulia, kreatif,
            dan cerdas melalui pembelajaran yang menyenangkan dan berbasis
            nilai-nilai keislaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"></div>

        {/* Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Profil Singkat
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Sejak berdiri, TK Al Ishlah berkomitmen menyediakan lingkungan
            belajar yang aman, nyaman, dan penuh kasih sayang. Kami memadukan
            metode pembelajaran kreatif dengan penanaman nilai-nilai keislaman
            agar anak-anak siap menghadapi tantangan masa depan.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Kami percaya setiap anak adalah unik dan memiliki potensi besar yang
            perlu dikembangkan secara optimal. Dengan dukungan tenaga pendidik
            profesional, kami menghadirkan pengalaman belajar yang menyenangkan,
            interaktif, dan penuh makna.
          </p>
          <p className="text-slate-700 leading-relaxed">
            TK Al Ishlah juga menjalin kerjasama erat dengan orang tua dan
            masyarakat untuk memastikan perkembangan anak berlangsung secara
            menyeluruh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
