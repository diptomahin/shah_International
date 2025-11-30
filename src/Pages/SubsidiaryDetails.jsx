import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

const SubsidiaryDetails = () => {
  const { id } = useParams();
  const [subsidiary, setSubsidiary] = useState(null);
  const [proprietorInfo, setProprietorInfo] = useState(null);

  useEffect(() => {
    // Load subsidiaries
    fetch("/subsidiaries.json")
      .then((res) => res.json())
      .then((data) => {
        // IDs are STRINGS — must compare as strings
        const found = data.find((item) => item._id === id);

        setSubsidiary(found);
      });

    // Load proprietors
    fetch("/proprietors.json")
      .then((res) => res.json())
      .then((data) => {
        const AFRAN_SUB_ID = "679fd2018f1bd001a1000002";

        if (id === AFRAN_SUB_ID) {
          // Show proprietor 2
          setProprietorInfo(data[1]);
        } else {
          // Show proprietor 1
          setProprietorInfo(data[0]);
        }
      });
  }, [id]);

  if (!subsidiary || !proprietorInfo) {
    return <p className="text-center py-20 text-xl">Loading...</p>;
  }

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <Link
        to="/subsidiaries"
        className="text-[#2d3190] underline mb-4 inline-block"
      >
        ← Back to Subsidiaries
      </Link>

      {/* Sub Info */}
      <div className="bg-white shadow rounded-xl p-8">
        <h1 className="text-4xl font-bold text-[#2d3190]">{subsidiary.name}</h1>
        <p className="text-gray-700 mt-3">{subsidiary.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
          <p>
            <strong>Established:</strong> {subsidiary.established}
          </p>
          <p>
            <strong>Employees:</strong> {subsidiary.employees}
          </p>
          <p>
            <strong>Phone:</strong> {subsidiary.phone}
          </p>
          <p>
            <strong>Email:</strong> {subsidiary.email}
          </p>
        </div>

        <h3 className="font-semibold mt-8">Services</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {subsidiary.services?.map((s, i) => (
            <span
              key={i}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-[#2d3190] mt-10">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
          {subsidiary.certifications?.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt="Certification"
              className="rounded shadow object-cover  w-full"
            />
          ))}
        </div>
      </div>

      {/* Proprietor Section */}
      <section className="mt-12 mb-10 bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-[#2d3190]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3190] mb-6">
          Proprietor Message & Commitments
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <img
            src={proprietorInfo.image}
            alt="Proprietor"
            className="rounded-xl shadow-md w-48 h-48 object-cover object-top"
          />

          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-700">
            "Dear valuable Partners, {proprietorInfo.name} has experience for
            <strong> {proprietorInfo.yearsExperience} years</strong> in sending
            skilled Bangladeshi workers abroad."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-[#10206b] flex items-center gap-2 text-base">
              <Award size={18} /> Licensed Agencies
            </h4>

            {proprietorInfo.licenses?.map((l, i) => (
              <p key={i} className="text-sm text-gray-700 mt-1">
                <strong>{l.name}</strong>: {l.rl}
              </p>
            ))}

            <p className="text-xs text-gray-600 mt-2">
              Affiliated with BAIRA Association. Membership No:
              <strong> {proprietorInfo.bairaMembership}</strong>.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-[#10206b] flex items-center gap-2 text-base">
              <CheckCircle size={18} /> Strict Rules & Pre-selection
            </h4>
            <p className="text-sm text-gray-700">
              We supply only <strong>skilled workers</strong> and conduct full
              pre-selection.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-[#10206b] flex items-center gap-2 text-base">
              <MapPin size={18} /> Facilities & Support
            </h4>
            <p className="text-sm text-gray-700">
              Training center, transport, and complete worker support included.
            </p>
          </div>
        </div>

        {/* Contact */}
        <h3 className="text-xl font-bold text-[#10206b] mb-3 mt-8">
          Contact Information
        </h3>

        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-[#2d3190]" />
            <strong>Mobile:</strong> {proprietorInfo.contact.mobile}
          </div>

          <div className="flex items-center gap-3">
            <Phone size={16} className="text-[#2d3190]" />
            <strong>Other:</strong> {proprietorInfo.contact.mobile2}
          </div>

          <div className="flex items-center gap-3 col-span-1 md:col-span-2">
            <Mail size={16} className="text-[#2d3190]" />
            <strong>Email:</strong>
            <a
              href={`mailto:${proprietorInfo.contact.email1}`}
              className="text-[#2d3190] ml-1 underline"
            >
              {proprietorInfo.contact.email1}
            </a>
            ,
            <a
              href={`mailto:${proprietorInfo.contact.email2}`}
              className="text-[#2d3190] ml-1 underline"
            >
              {proprietorInfo.contact.email2}
            </a>
          </div>

          <div className="flex items-center gap-3 col-span-1 md:col-span-2">
            <ExternalLink size={16} className="text-[#2d3190]" />
            <strong>Website:</strong>
            <a
              href={`http://${proprietorInfo.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d3190] ml-1 underline"
            >
              {proprietorInfo.contact.website}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubsidiaryDetails;
