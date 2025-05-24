import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 pt-14 pb-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* School Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Brighton Education Academy</h2>
          <p className="text-sm text-gray-400 mb-4">
            Empowering students for a brighter future.
          </p>
          <div className="flex space-x-4 text-gray-400 mt-2">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white text-gray-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-white text-gray-300 transition">About Us</a></li>
            <li><a href="/admission/apply" className="hover:text-white text-gray-300 transition">Admissions</a></li>
            <li><a href="/contact" className="hover:text-white text-gray-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400 leading-6">
            📍 Jamui, Bihar<br />
            📞 +91 98765 43210<br />
            📧 contact@greenvalleyschool.edu.in
          </p>
        </div>

        {/* Embedded Map */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4">Find Us</h3>
          <div className="w-full h-32 rounded overflow-hidden border border-gray-700 shadow-lg">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24507.330486154784!2d86.166328!3d25.068524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f225d7d58f0cf9%3A0x8c1391ca63bce073!2sBrighton%20Education%20Academy%20Mananpur!5e1!3m2!1sen!2sin!4v1748081447009!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} Green Valley Public School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
