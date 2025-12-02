// StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { Users, Globe, Award, TrendingUp, MapPin } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: <Users size={32} />, value: 18000, suffix: "+", label: "Workers Placed" },
    { icon: <Globe size={32} />, value: 7, suffix: "", label: "Subsidiaries Worldwide" },
    { icon: <MapPin size={32} />, value: 4, suffix: "+", label: "Countries Covered" },
    { icon: <Award size={32} />, value:21, suffix: "+", label: "Years Experience" },
    { icon: <TrendingUp size={32} />, value: 89, suffix: "%", label: "Success Rate" }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2d3190] text-white rounded-full mb-4">
                {stat.icon}
              </div>

              <h3 className="text-3xl font-bold text-[#2d3190] mb-1">
                <CountUp 
                  end={stat.value} 
                  duration={5} 
                  separator="," 
                />
                {stat.suffix}
              </h3>

              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
