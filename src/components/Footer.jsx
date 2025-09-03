import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#79BDEE] text-white">
      {/* Copyright */}
      <div className=" border-t border-white/40 py-5 text-center text-sm">
        © {new Date().getFullYear()} TK Al Ishlah. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
