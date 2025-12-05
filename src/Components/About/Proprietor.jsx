import React, { useEffect, useState } from "react";
import { Award, CheckCircle, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Proprietor = () => {
  const [proprietorInfo, setProprietorInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch proprietor data
 useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/proprietor`)
    .then((res) => res.json())
    .then((data) => {
      setProprietorInfo(data[0]); // SHOW FIRST OWNER
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error loading proprietor.json", err);
      setLoading(false);
    });
}, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  if (!proprietorInfo) {
    return <div className="text-center py-10 text-red-500">Failed to load proprietor info.</div>;
  }

  return (
    <section className="mb-10 sm:mb-16 bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-[#2d3190]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3190] mb-6">
        Proprietor Message & Commitments
      </h2>

      {/* Image + Message Row */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        {/* Proprietor Image */}
        <div className="w-full md:w-48 flex justify-center md:justify-start">
          <img
            src={proprietorInfo.image}
            alt={proprietorInfo.name}
            className="rounded-xl shadow-md w-48 h-48 object-cover object-top"
          />
        </div>

        {/* Message */}
        <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-700 w-full md:w-2/3">
          "Dear valuable partners, <strong>{proprietorInfo.name}</strong> has
          <strong> {proprietorInfo.yearsExperience} years </strong>
          of experience in sending skilled Bangladeshi workers abroad as per company requirements."
        </blockquote>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {/* Licenses */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-[#10206b] flex items-center gap-2 text-base">
            <Award size={18} /> Licensed Agencies
          </h4>

          {proprietorInfo.licenses.map((l, i) => (
            <p key={i} className="text-sm text-gray-700 mt-1">
              <strong>{l.name}</strong>: {l.rl}
            </p>
          ))}

          <p className="text-xs text-gray-600 mt-2">
            Affiliated with BAIRA (Bangladesh Association of International Recruiting Agencies), membership No.
            <strong> {proprietorInfo.bairaMembership}</strong>.
          </p>
        </div>

        {/* Rules */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-[#10206b] flex items-center gap-2 text-base">
            <CheckCircle size={18} /> Strict Rules & Pre-selection
          </h4>
          <p className="text-sm text-gray-700">
            We supply only <strong>skilled workers</strong> in all sectors and perform a strict pre-selection process.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            All candidates <strong>must contact our agency directly</strong>—no intermediaries required.
          </p>
        </div>

        {/* Facilities */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-[#10206b] flex items-center gap-2 text-base">
            <MapPin size={18} /> Facilities & Support
          </h4>
          <p className="text-sm text-gray-700">
            We provide facilities such as our <strong>training center</strong> and <strong>transport</strong> to support workers.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Our agency ensures your company receives fully prepared workers.
          </p>
        </div>
      </div>

      {/* Contact */}
      <h3 className="text-xl font-bold text-[#10206b] mb-3 mt-8">
        Contact Information (As per Proprietor Message)
      </h3>

      <div className="grid md:grid-cols-2 gap-3 text-sm">

        {/* Mobile */}
        <div className="flex items-center gap-3">
          <Phone size={16} className="text-[#2d3190]" />
          <strong>Mobile & WhatsApp:</strong>
          <span className="break-all">{proprietorInfo.contact.mobile}</span>
        </div>

        {/* Mobile 2 */}
        <div className="flex items-center gap-3">
          <Phone size={16} className="text-[#2d3190]" />
          <strong>Other Mobile:</strong>
          <span className="break-all">{proprietorInfo.contact.mobile2}</span>
        </div>

        {/* Emails */}
        <div className="flex items-center gap-3 col-span-1 md:col-span-2 flex-wrap">
          <Mail size={16} className="text-[#2d3190]" />
          <strong>Email:</strong>

          <div className="flex flex-col sm:flex-row sm:gap-1 break-all">
            <a href={`mailto:${proprietorInfo.contact.email1}`} className="text-[#2d3190] hover:underline">
              {proprietorInfo.contact.email1}
            </a>
            <span>,</span>
            <a href={`mailto:${proprietorInfo.contact.email2}`} className="text-[#2d3190] hover:underline">
              {proprietorInfo.contact.email2}
            </a>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center gap-3 col-span-1 md:col-span-2">
          <ExternalLink size={16} className="text-[#2d3190]" />
          <strong>Website:</strong>
          <a
            href={`http://${proprietorInfo.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d3190] hover:underline break-all"
          >
            {proprietorInfo.contact.website}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proprietor;
