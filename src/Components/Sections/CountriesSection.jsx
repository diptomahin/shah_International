import React from "react";

const countries = [
  {
    name: "Bangladesh",
    flag: "https://flagcdn.com/w80/bd.png",
    description: "Head office and primary recruitment center.",
  },
  {
    name: "Mauritius",
    flag: "https://flagcdn.com/w80/mu.png",
    description: "Active workforce operations and global placements.",
  },
  {
    name: "Nepal",
    flag: "https://flagcdn.com/w80/np.png",
    description: "Skilled worker recruitment and training collaboration.",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w80/in.png",
    description: "Technical manpower sourcing and coordination hub.",
  },
];

const CountriesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2d3190] mb-10">
          Our Operational Countries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-16 h-12 object-cover rounded"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {country.name}
              </h3>

              <p className="text-gray-600 mt-2">{country.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
