import React from "react";

const VisiMisiCard = () => {
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

  const Section = ({ title, items, color }) => (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-8"
      style={{ borderColor: color }}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-800">
        {title}
      </h2>
      <ul className="space-y-3 list-disc pl-6 text-slate-600 leading-relaxed">
        {items.map((item, idx) => (
          <li key={idx} className="hover:text-sky-600 transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-b from-sky-50 to-white py-12 px-6 md:px-20 lg:px-32 flex flex-col gap-10">
      <Section title="Visi" items={visiList} color="#0ea5e9" />
      <Section title="Misi" items={misiList} color="#22c55e" />
      <Section title="Tujuan" items={tujuanList} color="#f59e0b" />
    </div>
  );
};

export default VisiMisiCard;
