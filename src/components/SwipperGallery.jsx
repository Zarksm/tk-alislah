import React from "react";

const SwipperGallery = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Galeri Foto
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
        {/* Example images, replace with actual image paths */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/assets/images/gallery1.jpg"
            alt="Gallery Image 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Kegiatan 1</h3>
            <p className="text-gray-600">Deskripsi singkat kegiatan 1.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/assets/images/gallery2.jpg"
            alt="Gallery Image 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Kegiatan 2</h3>
            <p className="text-gray-600">Deskripsi singkat kegiatan 2.</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default SwipperGallery;
