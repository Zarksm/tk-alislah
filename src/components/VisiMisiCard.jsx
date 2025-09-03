import Image from "next/image";
import React from "react";

const VisiMisiCard = () => {
  const misiList = [
    "Melakukan pembiasaan yang di tauladani Nabi Muhammad Shollallahu 'alaihi wa sallam Untuk Membentuk Karakter Islam.",
    "Melaksanakan Pembelajaran yang aktif, kreatif, inovatif, efektif, dan menyenangkan.",
    "Menciptakan suasana belajar dan mengajar yang kondusif bagi peserta didik maupun pendidik.",
    "Mengajar dengan menyesuaikan gaya belajar anak.",
  ];

  const visiList = [
    "Membentuk Kepribadian Islam.",
    "Berilmu Pengetahuan Agama Secara Holistik.",
    "Berakhlakul Karimah Dan Dapat Menjadi Contoh Teladan Ditengah-tengah Keluarga, Teman-teman, Dan Masyarakat.",
  ];

  const tujuanList = [
    "Menciptakan lingkungan sekolah yang berkarakter islami melalui sikap amanah, fatonah, tabligh, dan siddiq.",
    "Menumbuhkan karakter saling menyayangi, menghargai, dan menghormati terhadap orang lain asah, asih, asuh.",
    "Membentuk anak-anak yang cerdas, berkualitas dan berkembang sesuai dengan usianya.",
  ];

  return (
    <div>
      <div className="w-full h-auto bg-white rounded-md py-12 px-16">
        {/* Visi */}
        <div className="mb-16 relative flex gap-10">
          <h1 className="font-black text-3xl mb-2 relative z-10 inline-block text-white">
            Visi
          </h1>
          <img
            src="/assets/svg/blob.svg"
            alt="blob background"
            className="absolute -top-18 -left-10 w-40 h-40 -z-0"
          />
          <ul className="list-decimal pl-6 text-lg leading-relaxed tracking-wide text-slate-700 relative z-10">
            {visiList.map((visi, index) => (
              <li
                key={index}
                className="text-lg tracking-wide text-slate-700 ml-5"
              >
                {visi}
              </li>
            ))}
          </ul>
        </div>

        {/* Misi */}
        <div className="relative flex gap-10">
          <h1 className="font-black text-3xl mb-2 relative z-10 inline-block text-white">
            Misi
          </h1>
          <img
            src="/assets/svg/blob.svg"
            alt="blob background"
            className="absolute -top-18 -left-10 w-40 h-40 -z-0"
          />
          <ul className="list-decimal pl-6 text-lg leading-relaxed tracking-wide text-slate-700 relative z-10">
            {misiList.map((misi, index) => (
              <li
                key={index}
                className="text-lg tracking-wide text-slate-700 ml-5"
              >
                {misi}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 relative w-full h-[500px] flex items-center justify-center mb-40">
        {/* Blob Image */}
        <Image
          src="/assets/images/blob2.svg"
          alt="Blob Background"
          width={900} // atur sesuai kebutuhan
          height={600}
          className="object-contain"
        />

        {/* Konten di atas blob */}
        <div className="absolute inset-0 flex flex-col justify-center items-center py-10 text-white -top-20 px-20">
          <h1 className="font-black text-4xl mb-6">Tujuan</h1>
          <ul className="list-decimal text-lg leading-relaxed tracking-wide space-y-3 max-w-[400px]">
            {tujuanList.map((tujuan, index) => (
              <li key={index}>{tujuan}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiCard;
