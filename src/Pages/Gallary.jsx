import { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  // Fetch gallery.json
  useEffect(() => {
    fetch("/gallary.json")
      .then((res) => res.json())
      .then((data) => setGalleryItems(data))
      .catch((err) => console.error("Failed to load gallery:", err));
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3190] mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600">Moments that define our journey</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Category Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="text-sm">{item.category}</span>
              </div>

              {/* Title Overlay (on hover optional) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition">
                <h3 className="text-white text-lg font-semibold text-center px-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Show loading skeleton if empty */}
        {galleryItems.length === 0 && (
          <p className="text-center text-gray-500 mt-6">Loading gallery...</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
