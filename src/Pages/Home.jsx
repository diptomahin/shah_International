import { Award, ChevronRight, Globe, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router";
import HomeSubsidiaries from "../Components/Home/HomeSubsidiaries";

// Home Page
const Home = () => {
  const stats = [
    { icon: <Users size={32} />, value: '10,000+', label: 'Workers Placed' },
    { icon: <Globe size={32} />, value: '7', label: 'Subsidiaries' },
    { icon: <Award size={32} />, value: '15+', label: 'Years Experience' },
    { icon: <TrendingUp size={32} />, value: '98%', label: 'Success Rate' }
  ];
  // Data
const teamMembers = [
  { name: 'Mohammed Shah', position: 'Founder & CEO', image: '👨‍💼' },
  { name: 'Fatima Khan', position: 'Director of Operations', image: '👩‍💼' },
  { name: 'Abdul Rahman', position: 'Head of Recruitment', image: '👨‍💼' },
  { name: 'Aisha Begum', position: 'Training Director', image: '👩‍💼' }
];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#2d3190] to-[#4a4fb8] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connecting Bangladesh Talent with Global Opportunities
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Leading manpower supply company specializing in recruitment between Bangladesh and Mauritius
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-[#2d3190] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2d3190] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 shrink-0" />
                    <span>Licensed by Ministry of Expatriates' Welfare</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 shrink-0" />
                    <span>7 Subsidiary Companies across 2 countries</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 shrink-0" />
                    <span>Comprehensive training programs</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 shrink-0" />
                    <span>Ethical recruitment practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2d3190] text-white rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#2d3190] mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <HomeSubsidiaries/>
      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3190] mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the experts behind our success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-[#2d3190] to-[#4a4fb8] rounded-full flex items-center justify-center text-4xl">
                  {member.image}
                </div>
                <h4 className="font-bold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Glimpse */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3190] mb-6">About Shah International</h2>
              <p className="text-gray-700 mb-4">
                Established with a vision to bridge the gap between skilled Bangladeshi workers and international opportunities, Shah International Agency has grown into a comprehensive manpower solutions provider.
              </p>
              <p className="text-gray-700 mb-6">
                With 7 subsidiary companies across Bangladesh and Mauritius, we offer end-to-end recruitment, training, and placement services. Our commitment to ethical practices and worker welfare sets us apart in the industry.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#2d3190] font-semibold hover:underline"
              >
                Read Full Story <ChevronRight size={20} />
              </Link>
            </div>
            <div className="bg-linear-to-br from-[#2d3190] to-[#4a4fb8] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Integrity</h4>
                    <p className="text-sm text-gray-200">Transparent and ethical in all dealings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Excellence</h4>
                    <p className="text-sm text-gray-200">Committed to highest service standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Empowerment</h4>
                    <p className="text-sm text-gray-200">Building careers and transforming lives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;