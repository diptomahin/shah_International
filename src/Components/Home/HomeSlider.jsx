import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`);
        const data = await response.json();
        setSlides(data.slice(0, 5)); // FIRST 5 ONLY
      } catch (error) {
        console.error("Failed to load gallery:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#2d3190] mb-6">
        Highlights From Our Activities
      </h2>

      {/* SLIDER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 600 }}
        loop
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-lg font-semibold">
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BUTTON */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/gallery")}
          className="px-6 py-3 bg-[#2d3190] hover:bg-[#20246c] text-white rounded-lg shadow-md transition"
        >
          View Full Gallery
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
