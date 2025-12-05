import React from "react";

const VideoSection = () => {
  // 👉 Add your YouTube video links here
  const videoLinks = [
    "https://www.youtube.com/embed/u-JT0f3Cx2o?si=Sa3JEkzI52dJTNBj",
    "https://www.youtube.com/embed/lem-ob0UCwY?si=WcoM9_i8xbyPsvZd",
    "https://www.youtube.com/embed/lem-ob0UCwY?si=PteQuCiI1l9QW6Dd",
    "https://www.youtube.com/embed/lem-ob0UCwY?si=4v7-ReveacxssJ2l",
  ];
  return (
    <div className="mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
        <span className="inline-block bg-[#2d3190] px-6 py-2 rounded-full shadow-lg">
          🎬 Videos
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {videoLinks.map((url, index) => (
          <div
            key={index}
            className="w-full aspect-video rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src={url}
              className="w-full h-full"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
