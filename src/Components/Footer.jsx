import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 sm:px-12 lg:px-20 pt-20 pb-14 mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">

        {/* School Info */}
        <motion.div variants={fadeInUp} custom={1}>
          <h2 className="text-3xl font-extrabold text-rose-400 mb-6">Brighton Academy</h2>
          <p className="text-base text-gray-400 mb-6 leading-7">
            Empowering students with knowledge, values, and confidence for a brighter tomorrow.
          </p>
          <div className="flex gap-6 mt-4 text-3xl">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.3, rotate: 10, color: "#fb7185" }}
                className="text-gray-400 transition-all"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} custom={2}>
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-base font-medium">
            {[
              { name: "🏠 Home", link: "/" },
              { name: "📖 About Us", link: "/about" },
              { name: "🎓 Admissions", link: "/admission/apply" },
              { name: "📞 Contact", link: "/contact" },
            ].map(({ name, link }, i) => (
              <li key={i}>
                <motion.a
                  href={link}
                  whileHover={{
                    x: 8,
                    color: "#fb7185",
                    transition: { duration: 0.3 },
                  }}
                  className="inline-block text-gray-300"
                >
                  {name}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp} custom={3}>
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>
          <p className="text-base text-gray-400 leading-8">
            <a href="">📍 Mananpur, Jamui, Bihar</a><br />
            <a href="">📞 +91 98765 43210</a><br />
            <a href="">📧 info@brightoneducation.in</a>
          </p>
        </motion.div>

        {/* Embedded Map */}
        <motion.div variants={fadeInUp} custom={4}>
          <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-48 rounded-xl overflow-hidden border border-gray-700 shadow-md"
          >
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
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        variants={fadeInUp}
        custom={5}
        className="mt-16 border-t border-gray-800 pt-6 text-center text-base text-gray-500"
      >
        © {new Date().getFullYear()} Brighton Education Academy. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
