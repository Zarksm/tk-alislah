"use client";
import React, { useState } from "react";

const Kontak = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "6283137197411"; // format internasional
    const text = `Halo, saya *${nama}*.\n\n${pesan}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // Lebih aman pakai location.href biar langsung redirect
    window.location.href = url;
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl p-6">
      <h3 className="text-2xl font-bold text-sky-600 mb-4">Kontak Kami</h3>

      {/* Info */}
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Alamat:</span> Jl. Kawah Papandayan KM
        03 Kp Janggol 02/04 Karamatwangi Cisurupan Garut
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Telepon:</span> 0852 2230 2898
      </p>
      <p className="text-gray-700 mb-6">
        <span className="font-semibold">Email:</span> tkalishlah@email.com
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Anda"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-400"
        />
        <textarea
          placeholder="Tulis pesan..."
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder-gray-400 h-28"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
        >
          Kirim via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Kontak;
