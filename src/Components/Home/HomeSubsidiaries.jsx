import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HomeSubsidiaries = () => {
  const [subsidiariesData, setSubsidiariesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/subsidiaries.json")
      .then(res => res.json())
      .then(data => {
        // data = ARRAY → convert to grouped object
        const grouped = {
          bangladesh: data.filter(item => item.country === "Bangladesh"),
          mauritius: data.filter(item => item.country === "Mauritius"),
        };

        setSubsidiariesData(grouped);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load subsidiaries.json", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16 text-gray-500 text-lg">
        Loading subsidiaries...
      </div>
    );
  }

  if (!subsidiariesData) {
    return (
      <div className="text-center py-16 text-red-500 text-lg">
        Failed to load subsidiaries.
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3190] mb-4">
            Our Subsidiaries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A network of specialized companies serving diverse industries across
            Bangladesh and Mauritius
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* Bangladesh */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#2d3190]">
            <h3 className="text-2xl font-bold text-[#2d3190] mb-4">
              Bangladesh
            </h3>

            <div className="space-y-3">
              {subsidiariesData.bangladesh.map((sub) => (
                <Link
                  key={sub._id}
                  to={`/subsidiary/${sub._id}`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg
                  transition-all duration-300 transform hover:bg-[#eef0ff] hover:scale-[1.02]"
                >
                  <span className="font-medium">{sub.name}</span>
                  <ChevronRight className="text-[#2d3190]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mauritius */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#2d3190]">
            <h3 className="text-2xl font-bold text-[#2d3190] mb-4">
              Mauritius
            </h3>

            <div className="space-y-3">
              {subsidiariesData.mauritius.map((sub) => (
                <Link
                  key={sub._id}
                  to={`/subsidiary/${sub._id}`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg
                  transition-all duration-300 transform hover:bg-[#eef0ff] hover:scale-[1.02]"
                >
                  <span className="font-medium">{sub.name}</span>
                  <ChevronRight className="text-[#2d3190]" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* View all button */}
        <div className="text-center">
          <Link
            to="/subsidiaries"
            className="inline-block bg-[#2d3190] text-white px-8 py-3 rounded-lg font-semibold
            hover:bg-[#1f2368] transition-colors"
          >
            View All Subsidiaries
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeSubsidiaries;
