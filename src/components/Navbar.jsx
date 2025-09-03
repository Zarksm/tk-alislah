import React from "react";
import TopNavbar from "./TopNavbar";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { label: "Beranda", link: "/" },
    { label: "Profil Kami", link: "/profil" },
    { label: "Galeri", link: "/galeri" },
    { label: "Informasi", link: "/informasi" },
    { label: "Masukan & Saran", link: "/masukan" },
    { label: "Kontak", link: "kontak" },
  ];

  return (
    <div className="bg-white text-black">
      <div className="py-5 px-4 md:px-32">
        <TopNavbar />
      </div>

      {/* Bottom Navigation */}
      <div className="w-full border-y border-slate-300 bg-white">
        <nav className="flex flex-wrap justify-center md:justify-start px-4 md:px-32 gap-2 md:gap-6 py-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              scroll={true} // scroll halus ke section
              className="text-slate-700 text-sm md:text-base px-3 py-2 rounded-md hover:bg-sky-400 hover:text-white transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
