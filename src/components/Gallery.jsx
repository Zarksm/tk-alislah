import React from "react";
import Image from "next/image";

const teachers = [
  {
    name: "Bu Ani",
    role: "Kepala Sekolah",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Pak Budi",
    role: "Guru Kelas A",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Bu Citra",
    role: "Guru Kelas B",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Bu Dina",
    role: "Guru Pendamping",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

const Gallery = () => {
  return (
    <div className="w-full py-12 bg-[#79BDEE]">
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
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-300 shadow-md">
              <Image
                src={teacher.photo}
                alt={teacher.name}
                width={144}
                height={144}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Nama */}
            <h3 className="mt-4 text-lg font-bold text-[#79BDEE]">
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
