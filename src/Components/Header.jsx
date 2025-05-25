import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showAdmissions, setShowAdmissions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track screen width to detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Run initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Top Header */}
      <div className="flex flex-wrap items-center gap-3 bg-[#001c39] p-3">
        <div className="w-16 flex items-center justify-center">
          <img src="/images/LogoSchool.png" alt="Student" className="w-14" />
        </div>
        <div className="text-white">
          <h1 className="text-xl md:text-3xl font-bold">Brighton Education Academy</h1>
          <h3 className="text-sm md:text-base font-semibold">Mananpur, Bihar</h3>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="flex flex-wrap items-center gap-4 bg-[#50013b] text-white px-4 py-2">
        <Link to="/" className="font-bold text-base md:text-lg">HOME</Link>
        <Link to="/about" className="font-bold text-base md:text-lg">ABOUT</Link>

        {/* ADMISSIONS dropdown */}
        <div
          className={`relative ${!isMobile ? "group" : ""}`}
          onClick={() => isMobile && setShowAdmissions(!showAdmissions)}
        >
          <button className="font-bold text-base md:text-lg focus:outline-none">
            ADMISSIONS
          </button>

          <div
            className={`
              absolute left-0 mt-2 bg-[#325652] border border-gray-300 rounded shadow-lg z-50 w-48 flex flex-col
              ${isMobile ? (showAdmissions ? 'block' : 'hidden') : 'invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300'}
            `}
          >
            <Link
              to="/admission/apply"
              className="p-2 text-sm hover:underline hover:bg-blue-500 border-b border-gray-300"
              onClick={() => setShowAdmissions(false)}
            >
              APPLY ONLINE
            </Link>
            <Link
              to="/admission/feestructure"
              className="p-2 text-sm hover:underline hover:bg-green-500 border-b border-gray-300"
              onClick={() => setShowAdmissions(false)}
            >
              FEE STRUCTURE
            </Link>
            <button
              className="p-2 text-sm hover:underline hover:bg-amber-500 border-b border-gray-300 text-left"
              onClick={() => setShowAdmissions(false)}
            >
              HOSTEL FEE
            </button>
            <button
              className="p-2 text-sm hover:underline hover:bg-pink-500 text-left"
              onClick={() => setShowAdmissions(false)}
            >
              APPLY FOR HOSTEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
