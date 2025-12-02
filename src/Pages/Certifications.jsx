import { Award } from "lucide-react";
import { useEffect, useState } from "react";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch("/certifications.json")
      .then((res) => res.json())
      .then((data) => setCertifications(data))
      .catch((err) => console.error("Error loading certifications:", err));
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3190] mb-4">
            Certifications & Accreditations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized and certified by leading national and international organizations
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert._id.$oid}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[#2d3190]"
            >
              {/* Image */}
              <img
                src={cert.image}
                alt={cert.label}
                className="w-full  object-cover rounded-lg mb-4 shadow"
              />

              {/* Icon */}
              <div className="w-16 h-16 bg-linear-to-br from-[#2d3190] to-[#4a4fb8] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="text-white" size={32} />
              </div>

              {/* Label */}
              <h3 className="text-center font-semibold text-gray-800">
                {cert.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Stats and Information Section */}
        <div className="bg-linear-to-br from-[#2d3190] to-[#4a4fb8] rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Commitment to Excellence
          </h2>

          <p className="text-center text-gray-200 max-w-3xl mx-auto mb-8">
            These certifications represent our unwavering commitment to ethical
            recruitment practices, quality service delivery, and compliance with
            international labor standards. We continuously update our practices
            to meet and exceed industry requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-gray-200">Compliance Rate</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{certifications.length}+</h3>
              <p className="text-gray-200">Certifications</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">20+</h3>
              <p className="text-gray-200">Years Certified</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certifications;
