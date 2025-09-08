"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ProfilePage = () => {
  // 📍 Koordinat TK Al Ishlah
  const latitude = -7.330441;
  const longitude = 107.755047;

  useEffect(() => {
    const map = L.map("map").setView([latitude, longitude], 16);

    // Tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Custom icon (public/leaflet)
    const customIcon = L.icon({
      iconUrl: "/leaflet/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: "/leaflet/marker-shadow.png",
      shadowSize: [41, 41],
    });

    // Marker
    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup("📍 TK Al Ishlah")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 px-6 md:px-32 py-16">
      <Link href="/" className="text-blue-600 mb-16 flex items-center gap-2">
        <span className="animate-wiggle">
          <FaLongArrowAltLeft size={20} />
        </span>
        <p>Kembali ke Beranda</p>
      </Link>

      <div className="mb-10">
        <h1 className="font-black text-4xl text-sky-600 mb-4">Tentang Kami</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          TK Al Ishlah adalah lembaga pendidikan anak usia dini yang berdedikasi
          untuk membentuk generasi yang berakhlak mulia, kreatif, dan cerdas
          melalui pembelajaran yang menyenangkan dan berbasis nilai-nilai
          keislaman.
        </p>
      </div>

      <div>
        <section>
          <h2 className="text-2xl font-bold text-sky-500 mb-2">
            Program Unggulan
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Pembelajaran tematik berbasis permainan</li>
            <li>Pengajaran doa & hafalan surat pendek</li>
            <li>Kegiatan seni & kreativitas (melukis, menari, bernyanyi)</li>
            <li>Manasik haji mini dan outbound islami</li>
            <li>Kegiatan parenting bersama orang tua</li>
          </ul>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-bold text-sky-500 mb-2">Fasilitas</h2>
          <p className="text-slate-700 leading-relaxed">
            TK Al Ishlah dilengkapi dengan ruang kelas yang nyaman, area bermain
            luar, mushola, perpustakaan mini, serta lingkungan yang aman dan
            asri.
          </p>
        </section>
      </div>

      {/* Alamat + Map */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-sky-500 mb-4">Alamat</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Jl. Kawah Papandayan KM 03, Kp Janggol 02/04, Karamatwangi, Cisurupan,
          Garut
        </p>

        {/* Map Container */}
        <div id="map" className="w-full h-72 rounded-lg mb-4"></div>

        {/* Button Open Google Maps */}
        <button
          onClick={openGoogleMaps}
          className="px-5 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
        >
          Lihat di Google Maps
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
