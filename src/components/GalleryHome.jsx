import React from "react";
import Image from "next/image";

const teachers = [
  {
    name: "Bu Ani",
    role: "Kepala Sekolah",
    photo: "/assets/images/avatar.jpg",
  },
  {
    name: "Pak Budi",
    role: "Guru Kelas A",
    photo: "/assets/images/avatar.jpg",
  },
  {
    name: "Bu Citra",
    role: "Guru Kelas B",
    photo: "/assets/images/avatar.jpg",
  },
  {
    name: "Bu Dina",
    role: "Guru Pendamping",
    photo: "/assets/images/avatar.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="w-full py-12 bg-[#3396D3] md:px-20">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-lg mb-10">
        Guru TK Al Ishlah
      </h2>

      {/* Grid Guru */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            {/* Foto Guru */}
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-md">
              <Image
                src={teacher.photo}
                alt={teacher.name}
                width={144}
                height={144}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Nama */}
            <h3 className="mt-4 text-lg font-bold text-[#3396D3]">
              {teacher.name}
            </h3>

            {/* Jabatan */}
            <p className="text-sm text-gray-600 italic">{teacher.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
