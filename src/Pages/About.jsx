// About.jsx
import React from "react";
import {
  Award,
  Globe,
  Users,
  CheckCircle,
  Clock,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import Proprietor from "../Components/About/Proprietor";

// --- Data extracted from the image and current component ---
const milestones = [
  {
    year: "2010",
    event: "Shah International Agency founded in Dhaka, Bangladesh",
  },
  {
    year: "2012",
    event: "Launched Khan Builders subsidiary for the construction sector",
  },
  {
    year: "20 year",
    event:
      "Experience in sending Skilled Bangladeshi Workers abroad as per company's requirements",
  },
  { year: "2015", event: "Expanded to Mauritius with BMK International" },
  {
    year: "2018",
    event: "Opened dedicated Training Center for skill development",
  },
  { year: "2020", event: "Reached milestone of 10,000+ successful placements" },
  { year: "2024", event: "Operating 7 subsidiaries across 2 countries" },
];

const coreValues = [
  "Integrity & Transparency",
  "Candidate-centered Support",
  "Ethical Recruitment",
  "Continuous Training",
];

const stats = [
  { label: "Experience (Years)", value: "20+" },
  { label: "Placements", value: "10k+" },
  { label: "Countries", value: "2" },
  { label: "Subsidiaries", value: "7" },
];

const proprietorInfo = {
  name: "MOHAMMAD SHAH ALAM KHA",
  title: "PROPRIETOR",
  licenses: [
    { name: "Shah International Agency", rl: "RL 1404" },
    { name: "Afran Khan International Ltd.", rl: "RL 1542" },
  ],
  bairaMembership: "No. 848",
  contact: {
    mobile: "(+230) 5251-1106 / 5703-1830",
    mobile2: "+8801655532666 / +8801910606087",
    email1: "shahinternationalagency@gmail.com",
    email2: "shahalamkha@yahoo.com",
    website: "www.shahinternationalagency.com",
  },
};

const About = () => {
  return (
    <div className="py-10 sm:py-16 px-4 bg-[linear-gradient(180deg,#eaf1ff,white)] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* HERO / ABOVE THE FOLD */}
        <section className="relative rounded-2xl overflow-hidden mb-10 sm:mb-16">
          <div
            className="absolute inset-0 bg-[url('/assets/blue-pattern.png')] bg-cover bg-center opacity-20"
            aria-hidden="true"
          />
          <div className="relative z-10 p-6 md:p-12 bg-white/60 backdrop-blur-sm rounded-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10206b] mb-4">
                  About Us
                </h1>
                <p className="text-base sm:text-lg text-gray-700 max-w-2xl">
                  Shah International Agency connects skilled Bangladeshi workers
                  with reputable employers overseas. We combine ethical
                  recruitment, targeted training and a wide international
                  network to create reliable career pathways.
                </p>

                <div className="mt-6 flex gap-4">
                  <button className="px-5 py-2 sm:px-6 sm:py-2 rounded-full bg-[#2d3190] text-white font-semibold text-sm sm:text-base shadow hover:scale-[1.01] transition">
                    Learn more
                  </button>
                  <button className="px-5 py-2 sm:px-6 sm:py-2 rounded-full border border-[#2d3190] text-[#2d3190] bg-white font-semibold text-sm sm:text-base">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Stylized outline word inspired by the vision page */}
              <div className="w-full md:w-1/3 text-center mt-6 md:mt-0">
                <div
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none"
                  style={{
                    WebkitTextStroke: "1px sm:2px rgba(45,49,144,0.9)",
                    color: "transparent",
                    textTransform: "uppercase",
                  }}
                >
                  Agency
                </div>
                <div className="mt-2 text-base sm:text-xl text-gray-600">
                  Vision • Mission • Impact
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW Proprietor Message Section --- */}
        <Proprietor/>
        {/* --- END NEW Proprietor Message Section --- */}

        {/* MISSION / VISION CARDS */}
        <section className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3190] mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4 text-base">
              Founded with a simple mission — to create meaningful international
              job opportunities for Bangladeshi workers — we've grown into a
              multi-subsidiary organization that places talent responsibly and
              ethically across sectors.
            </p>

            <p className="text-gray-700 mb-4 text-base">
              We focus on three pillars: comprehensive training programs,
              ethical recruitment practices, and long-term support for both
              workers and employers. Our experience spans construction,
              hospitality, manufacturing, healthcare and other specialized
              domains.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <Award size={28} className="text-[#2d3190] shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Licensed</div>
                  <div className="font-semibold text-base">Certified Agency</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={28} className="text-[#2d3190] shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Team</div>
                  <div className="font-semibold text-base">Experienced & Local</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#2d3190] to-[#4a4fb8] text-white rounded-2xl p-6 md:p-8 shadow w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Mission & Vision</h3>

            <div className="mb-4">
              <h4 className="font-semibold text-lg">Mission</h4>
              <p className="text-sm text-white/90">
                Provide world-class manpower solutions that create opportunity,
                build careers and ensure safety, dignity and fair treatment for
                workers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Vision</h4>
              <p className="text-sm text-white/90">
                Be the most trusted international recruitment agency recognized
                for ethics, service quality and positive worker impact.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE / STATS */}
        <section className="mb-10 sm:mb-16 grid md:grid-cols-4 gap-6">
          <div className="md:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#10206b] mb-6">
              Why Choose Shah International?
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 flex items-center justify-center mb-3">
                  <Award size={20} />
                </div>
                <h4 className="font-semibold text-base">Licensed & Certified</h4>
                <p className="text-sm text-gray-600">
                  Ethical recruitment and full compliance.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 flex items-center justify-center mb-3">
                  <Users size={20} />
                </div>
                <h4 className="font-semibold text-base">Experienced Team</h4>
                <p className="text-sm text-gray-600">
                  Local expertise and global partnerships.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 flex items-center justify-center mb-3">
                  <Globe size={20} />
                </div>
                <h4 className="font-semibold text-base">Global Network</h4>
                <p className="text-sm text-gray-600">
                  Trusted partners across multiple countries.
                </p>
              </div>
            </div>
          </div>

          {/* Stats column */}
          <aside className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4 justify-center md:col-span-1">
            <h4 className="text-sm text-gray-500">Quick Facts</h4>
            <div className="flex flex-col gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                  <CheckCircle size={20} className="text-green-500 shrink-0" />
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* JOURNEY TIMELINE (UPDATED) */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3190] mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-full sm:w-24 shrink-0">
                  <span className="inline-block bg-[#2d3190] text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base">
                    {m.year}
                  </span>
                </div>
                <div className="flex-1 w-full bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                  <p className="text-gray-700 text-base">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE VALUES + TEAM */}
        <section className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div className="col-span-1 md:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#10206b] mb-4">
              Core Values
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {coreValues.map((v, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50"
                >
                  <CheckCircle size={20} className="mt-1 text-[#2d3190] shrink-0" />
                  <div>
                    <div className="font-semibold text-base">{v}</div>
                    <div className="text-sm text-gray-600">
                      Committed across every placement.
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Proprietor</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#2d3190] to-[#4a4fb8] flex items-center justify-center text-white font-bold shrink-0">
                {proprietorInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="font-semibold">{proprietorInfo.name}</div>
                <div className="text-sm text-gray-500">
                  {proprietorInfo.title}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600">
                Local offices in Dhaka and partners in Mauritius. Reach out to
                grow with us.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="bg-[#10206b] text-white rounded-2xl p-6 md:p-8 shadow-md mb-10 sm:mb-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">Ready to collaborate?</h3>
              <p className="text-sm text-white/90">
                Partner with Shah International Agency for ethical, reliable
                manpower solutions.
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <a
                href="/contact"
                className="px-5 py-2 rounded-full bg-white text-[#10206b] font-semibold text-sm sm:text-base whitespace-nowrap"
              >
                Contact Sales
              </a>
              <a
                href="/apply"
                className="px-5 py-2 rounded-full border border-white text-white font-semibold text-sm sm:text-base whitespace-nowrap"
              >
                Apply for Jobs
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;