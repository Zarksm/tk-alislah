"use client";
import Image from "next/image";
import React, { useState } from "react";

const SambutanCard = () => {
  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => {
    setShowFull(!showFull);
  };

  const fullText = `
    Assalamu’alaikum warahmatullahi wabarakatuh,
    Puji syukur kami panjatkan ke hadirat Allah Subhanahu wa Ta’ala atas limpahan rahmat dan karunia-Nya.
    Dengan bangga, kami menyambut kehadiran Bapak/Ibu di website resmi TK Al Ishlah. 
    Sebagai lembaga pendidikan anak usia dini berbasis nilai-nilai Islam, TK Al Ishlah berkomitmen untuk memberikan layanan pendidikan yang terbaik,
    dalam suasana belajar yang aman, menyenangkan, dan penuh kasih sayang.
    
    Kami percaya bahwa masa kanak-kanak adalah fase emas yang harus dibimbing dengan hati, ilmu, dan keteladanan. 
    Website ini kami hadirkan sebagai sarana informasi, komunikasi, dan dokumentasi kegiatan sekolah. 
    Semoga dapat memberikan gambaran menyeluruh tentang visi, program, serta aktivitas TK Al Ishlah 
    dalam mendidik generasi penerus yang berakhlak mulia dan berwawasan luas.
    
    Wassalamu’alaikum warahmatullahi wabarakatuh.
    Kepala TK Al Ishlah
  `;

  const croppedText = `
    Assalamu’alaikum warahmatullahi wabarakatuh,
    Puji syukur kami panjatkan ke hadirat Allah Subhanahu wa Ta’ala atas limpahan rahmat dan karunia-Nya.
    Dengan bangga, kami menyambut kehadiran Bapak/Ibu di website resmi TK Al Ishlah...
  `;

  return (
    <div className="">
      <div className="w-[70rem] max-h-max bg-white rounded-lg overflow-hidden p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sambutan + Foto */}
          <div className="flex-1 flex gap-4">
            {/* Foto Kepala Sekolah */}
            <div className="w-[200px] h-[300px] rounded-md shrink-0 overflow-hidden shadow-lg">
              <Image
                src="/assets/images/sambutan.jpeg" // ganti dengan path gambar aslinya
                alt="Foto Kepala Sekolah TK Al Ishlah"
                width={200}
                height={300}
                className="object-cover"
              />
            </div>

            {/* Teks Sambutan */}
            <div className="w-full">
              <h2 className="text-xl font-bold mb-1">Sambutan</h2>
              <p className="text-justify leading-relaxed whitespace-pre-line">
                {showFull ? fullText : croppedText}
              </p>
              <button
                onClick={handleToggle}
                className="mt-2 text-blue-600 hover:underline focus:outline-none cursor-pointer"
              >
                {showFull ? "Tampilkan lebih sedikit" : "Selengkapnya"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SambutanCard;
