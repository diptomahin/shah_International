import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#2d3190] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <img src="logo.png" alt="logo" className="bg-white mt-5 p-2 rounded-2xl" />
            <p className="text-gray-300 text-sm py-2">
              Manpower Solutions — Connecting Bangladesh workforce with global opportunities.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white text-sm">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white text-sm">About Us</Link>
              <Link to="/subsidiaries" className="block text-gray-300 hover:text-white text-sm">Subsidiaries</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white text-sm">Contact</Link>
            </div>
          </div>

          {/* Bangladesh Office */}
          <div>
            <h4 className="font-semibold mb-4">Bangladesh Office</h4>
            <div className="space-y-2 text-sm text-gray-300">

              <p className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 shrink-0" />
                <span>
                  528, Khan Bari, Block-C, Solmaid, Farajitola, Vatara  
                  Dhaka-1212, Bangladesh.
                </span>
              </p>

              <p className="flex items-center">
                <Phone size={16} className="mr-2 shrink-0" />
                <span>+8801855532666 (GM/WhatsApp)</span>
              </p>

              <p className="flex items-center">
                <Phone size={16} className="mr-2 shrink-0" />
                <span>+8801610606087 (WhatsApp)</span>
              </p>

              <p className="flex items-center">
                <Mail size={16} className="mr-2 shrink-0" />
                <span>shahinternationalagency@gmail.com</span>
              </p>

            </div>
          </div>

          {/* Mauritius Office */}
          <div>
            <h4 className="font-semibold mb-4">Mauritius Office</h4>
            <div className="space-y-2 text-sm text-gray-300">

              <p className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 shrink-0" />
                <span>
                  315, MORC Jhuboo  
                  Trou Aux Biches, Mauritius.
                </span>
              </p>

              <p className="flex items-center">
                <Phone size={16} className="mr-2 shrink-0" />
                <span>+(230) 5251-1106 (Proprietor/WhatsApp)</span>
              </p>

              <p className="flex items-center">
                <Phone size={16} className="mr-2 shrink-0" />
                <span>+(230) 5703-1830 (Office/WhatsApp)</span>
              </p>

              <p className="flex items-center">
                <Mail size={16} className="mr-2 shrink-0" />
                <span>shahalamkha@yahoo.com</span>
              </p>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p className="mt-3">&copy; 2024 Shah International Agency. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
