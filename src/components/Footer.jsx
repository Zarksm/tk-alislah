import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    // bg-[#79BDEE]
    <footer className="bg-[#3396D3] text-white">
      {/* Copyright */}
      <div className=" border-t border-white/40 py-5 text-center text-sm md:text-lg">
        © {new Date().getFullYear()}{" "}
        <span className="font-black">TK Al Ishlah</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
