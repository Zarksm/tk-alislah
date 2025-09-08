import Link from "next/link";
import React from "react";
import {
  FaLongArrowAltLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const KontakPage = () => {
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
        <h1 className="font-black text-4xl text-sky-600 mb-4">Kontak</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Hubungi kami untuk informasi lebih lanjut mengenai pendaftaran,
          kegiatan, atau kerja sama.
        </p>
      </div>

      {/* Kontak Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg">
          <FaPhone className="text-sky-600 mb-3" size={28} />
          <h3 className="font-semibold text-lg text-slate-400">Telepon</h3>
          <p className="text-slate-600">0812-3456-789</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg">
          <FaEnvelope className="text-sky-600 mb-3" size={28} />
          <h3 className="font-semibold text-lg text-slate-400">Email</h3>
          <p className="text-slate-600">info@tkalishlah.sch.id</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg">
          <FaMapMarkerAlt className="text-sky-600 mb-3" size={28} />
          <h3 className="font-semibold text-lg text-slate-400">Alamat</h3>
          <p className="text-slate-600 text-center">
            Jl. Pendidikan No. 123, Bandung, Jawa Barat
          </p>
        </div>
      </div>

      {/* Form Kontak */}
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-sky-600 mb-6">Kirim Pesan</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none placeholder-slate-400 text-slate-600"
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none placeholder-slate-400 text-slate-600"
          />
          <textarea
            placeholder="Tulis pesan Anda..."
            rows="4"
            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none placeholder-slate-400 text-slate-600"
          ></textarea>
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default KontakPage;
