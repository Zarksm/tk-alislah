"use client";

import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Versidua = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true, // animasi hanya jalan sekali
    });
  }, []);

  const visiList = [
    "Membentuk Kepribadian Islam.",
    "Berilmu Pengetahuan Agama Secara Holistik.",
    "Berakhlakul Karimah Dan Dapat Menjadi Contoh Teladan Ditengah-tengah Keluarga, Teman-teman, Dan Masyarakat.",
  ];

  const misiList = [
    "Melakukan pembiasaan yang di tauladani Nabi Muhammad Shollallahu 'alaihi wa sallam Untuk Membentuk Karakter Islam.",
    "Melaksanakan Pembelajaran yang aktif, kreatif, inovatif, efektif, dan menyenangkan.",
    "Menciptakan suasana belajar dan mengajar yang kondusif bagi peserta didik maupun pendidik.",
    "Mengajar dengan menyesuaikan gaya belajar anak.",
  ];

  const tujuanList = [
    "Menciptakan lingkungan sekolah yang berkarakter islami melalui sikap amanah, fatonah, tabligh, dan siddiq.",
    "Menumbuhkan karakter saling menyayangi, menghargai, dan menghormati terhadap orang lain asah, asih, asuh.",
    "Membentuk anak-anak yang cerdas, berkualitas dan berkembang sesuai dengan usianya.",
  ];

  const Section = ({ title, items }) => (
    <div
      className="pt-10 md:pt-16"
      data-aos="fade-up" // <-- animasi disini
    >
      <h2 className="text-left md:text-center text-4xl md:text-6xl">{title}</h2>
      <div className="pt-5">
        {/* mobile → list-disc, desktop → custom FaCircle */}
        <ul className="space-y-3 text-slate-600 leading-relaxed list-disc md:list-none pl-5 md:pl-0">
          {items.map((item, idx) => (
            <li
              key={idx}
              data-aos="fade-up" // <-- item juga bisa animasi
              data-aos-delay={idx * 100} // delay biar muncul bertahap
              className="md:flex md:items-center md:gap-3 md:justify-center md:text-center text-left"
            >
              <FaCircle className="hidden md:block" size={5} />
              <span>{item}</span>
              <FaCircle className="hidden md:block" size={5} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="text-black px-6 md:px-32 w-full">
      <Section title="Visi" items={visiList} />
      <Section title="Misi" items={misiList} />
      <Section title="Tujuan" items={tujuanList} />
    </div>
  );
};

export default Versidua;
