import React from "react";

const CTASection = () => {
  return (
    <section className="bg-[#10206b] text-white rounded-2xl py-10 px-6 md:py-14 md:px-12 shadow-xl mb-10 sm:mb-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Ready to collaborate?
          </h3>
          <p className="text-sm sm:text-base text-white/90 mt-2">
            Partner with Shah International Agency for ethical, reliable manpower solutions.
          </p>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-white text-[#10206b] font-semibold text-sm sm:text-base shadow hover:bg-gray-100 transition"
          >
            Contact Sales
          </a>
          <a
            href="/apply"
            className="px-6 py-3 rounded-full border border-white text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition"
          >
            Apply for Jobs
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
