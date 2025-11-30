import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Subsidiaries = () => {
  const [subsidiaries, setSubsidiaries] = useState({
    bangladesh: [],
    mauritius: []
  });

  useEffect(() => {
    fetch("/subsidiaries.json")
      .then(res => res.json())
      .then(data => {
        // data is ARRAY → convert it into grouped structure
        const grouped = {
          bangladesh: data.filter(item => item.country === "Bangladesh"),
          mauritius: data.filter(item => item.country === "Mauritius"),
        };

        setSubsidiaries(grouped);
      })
      .catch(err => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3190] mb-4">
            Our Subsidiaries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A network of specialized companies delivering excellence across industries
          </p>
        </div>

        {/* Bangladesh Section */}
        <h2 className="text-3xl font-bold text-[#2d3190] mb-8">
          Bangladesh Operations
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {subsidiaries.bangladesh.map(sub => (
            <div
              key={sub._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-[#2d3190]"
            >
              <h3 className="text-2xl font-bold text-[#2d3190] mb-3">
                {sub.name}
              </h3>

              <p className="text-gray-700 mb-4">{sub.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {sub.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <Link
                to={`/subsidiary/${sub._id}`}
                className="text-[#2d3190] font-semibold underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

        {/* Mauritius Section */}
        <h2 className="text-3xl font-bold text-[#2d3190] mb-8">
          Mauritius Operations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {subsidiaries.mauritius.map(sub => (
            <div
              key={sub._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-[#2d3190]"
            >
              <h3 className="text-2xl font-bold text-[#2d3190] mb-3">
                {sub.name}
              </h3>

              <p className="text-gray-700 mb-4">{sub.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {sub.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <Link
                to={`/subsidiary/${sub._id}`}
                className="text-[#2d3190] font-semibold underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Subsidiaries;
