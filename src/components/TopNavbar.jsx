import React from "react";

import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <div className="w-full flex justify-between">
      {" "}
      <div className="font-bold text-3xl flex items-center">
        <Image
          src="/assets/images/logo.png"
          alt="al-islah"
          width={150}
          height={150}
        />
        <h2>TK AL-ISLAH</h2>
      </div>
      <div className="flex items-center">
        <div className="p-2 text-xl text-white bg-blue-600 rounded-full">
          <MdEmail />
        </div>
        <div className="border-r border-slate-700 px-5">
          <p className="font-light">Alamat Email</p>
          <p className="font-bold tracking-wide">tkalislah@gmail.com</p>
        </div>
        <div className="flex gap-5 text-2xl pl-5">
          <FaWhatsapp fill="green" className="cursor-pointer" />
          <FaFacebookF fill="blue" className="cursor-pointer" />
          <FaInstagram fill="red" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
