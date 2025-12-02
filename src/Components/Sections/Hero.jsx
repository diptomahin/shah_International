import React from "react";

const Hero = ({ imageUrl, title, subtitle }) => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6" data-aos="zoom-in" data-aos-duration="1200">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;