import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

// Contact Page
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3190] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#2d3190] mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d3190]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d3190]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d3190]"
                  placeholder="+880 123 456 789"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d3190]"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d3190]"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2d3190] text-white py-3 rounded-lg font-semibold hover:bg-[#1f2368] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2d3190] mb-6">
              Contact Information
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-[#2d3190] mb-4">
                Bangladesh Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-[#2d3190] mr-3 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-gray-600">
                      123 Motijheel C/A, Dhaka 1000, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[#2d3190] mr-3 shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+880 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#2d3190] mr-3 shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@shahinternational.bd</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#2d3190] mb-4">
                Mauritius Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-[#2d3190] mr-3 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Regional Office</p>
                    <p className="text-gray-600">Port Louis, Mauritius</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[#2d3190] mr-3 shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+230 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#2d3190] mr-3 shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@shahinternational.mu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-linear-to-br from-[#2d3190] to-[#4a4fb8] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-200">
                <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                <p>Friday: Closed</p>
                <p>Emergency Contact: Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;