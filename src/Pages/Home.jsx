import { Award, ChevronRight, Globe, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router";
import HomeSubsidiaries from "../Components/Home/HomeSubsidiaries";
import HomePageClientsPreview from "../Components/Home/HomePageClientsPreview";
import StatsSection from "../Components/Sections/StatsSection";
import CountriesSection from "../Components/Sections/CountriesSection";
import CTASection from "../Components/Sections/CTASection";

// Home Page
const Home = () => {

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-fixed bg-cover bg-center text-white py-20 px-4"
        style={{
          backgroundImage: "url('parralex.jpg')", // <-- replace this
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connecting Bangladesh Talent with Global Opportunities
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Leading manpower supply company specializing in recruitment
                between Bangladesh and Mauritius
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
      <StatsSection/>

      {/* Subsidiaries Section */}
      <HomeSubsidiaries />
      {/* About Glimpse */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3190] mb-6">
                About Shah International
              </h2>
              <p className="text-gray-700 mb-4">
                Established with a vision to bridge the gap between skilled
                Bangladeshi workers and international opportunities, Shah
                International Agency has grown into a comprehensive manpower
                solutions provider.
              </p>
              <p className="text-gray-700 mb-6">
                With 7 subsidiary companies across Bangladesh and Mauritius, we
                offer end-to-end recruitment, training, and placement services.
                Our commitment to ethical practices and worker welfare sets us
                apart in the industry.
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
                    <p className="text-sm text-gray-200">
                      Transparent and ethical in all dealings
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Excellence</h4>
                    <p className="text-sm text-gray-200">
                      Committed to highest service standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Empowerment</h4>
                    <p className="text-sm text-gray-200">
                      Building careers and transforming lives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Additional sections can be added here */}
      <CountriesSection/>
      <HomePageClientsPreview />
      <CTASection/>
    </div>
  );
};

export default Home;
