"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ⬅️ icon burger & close

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", link: "/" },
    { label: "Profil Kami", link: "/profil" },
    { label: "Galeri", link: "/galeri" },
    { label: "Informasi", link: "/informasi" },
    { label: "Masukan & Saran", link: "/masukan" },
    { label: "Kontak", link: "/kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 w-full z-50 border-y border-slate-300 transition-all duration-500 bg-white ${
        isScrolled ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "px-6 md:px-24" : "px-6 md:px-32"
        }`}
      >
        {/* Logo kiri: muncul saat discroll */}
        {/* {isScrolled && (
          <div className="flex items-center font-bold text-xl animate-fade-in-slide">
            <Image
              src="/assets/images/logo.png"
              alt="al-islah"
              width={35}
              height={35}
              className="mr-2"
            />
            <p className="text-black">TK AL-ISLAH</p>
          </div>
        )} */}

        <div
          className={`flex items-center font-bold text-xl animate-fade-in-slide ${
            isScrolled ? "md:flex" : "md:hidden"
          }`}
        >
          <Image
            src="/assets/images/logo.png"
            alt="al-islah"
            width={35}
            height={35}
            className="mr-2"
          />
          <p className="text-black text-sm md:text-lg">TK AL-ISLAH</p>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              scroll={true}
              className="text-slate-700 text-sm md:text-base px-3 py-2 rounded-md hover:bg-sky-400 hover:text-white transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Burger Button (Mobile) */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-16 space-y-4 px-6">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700">
            <X size={28} />
          </button>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              scroll={true}
              onClick={() => setIsOpen(false)} // tutup setelah klik
              className="text-slate-700 text-base px-3 py-2 rounded-md hover:bg-sky-400 hover:text-white transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
