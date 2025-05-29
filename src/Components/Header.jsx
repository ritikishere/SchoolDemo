import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showAdmissions, setShowAdmissions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Top Header */}
      <div className="flex flex-wrap items-center gap-3 bg-[#001c39] p-3">
        <div className="w-16 flex items-center justify-center">
          <img src="/images/LogoSchool.png" alt="Logo" className="w-14" />
        </div>
        <div className="text-white">
          <h1 className="text-xl md:text-3xl font-bold">Brighton Education Academy</h1>
          <h3 className="text-sm md:text-base font-semibold">Mananpur, Bihar</h3>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#50013b] text-white px-4 py-2">
        {/* Desktop View */}
        {!isMobile && (
          <div className="flex justify-around items-center">
            <Link to="/" className="font-bold text-base md:text-lg">HOME</Link>
            <Link to="/about" className="font-bold text-base md:text-lg">ABOUT</Link>

            {/* ADMISSIONS Dropdown */}
            <div className="relative group">
              <button className="font-bold text-base md:text-lg focus:outline-none">
                ADMISSIONS
              </button>
              <div className="absolute  bg-[#9b0f75] border border-gray-300 rounded shadow-lg z-50  flex flex-col invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/admission/apply" className="p-2 text-sm hover:bg-blue-500 border-b border-gray-300">APPLY ONLINE</Link>
                <Link to="/admission/feestructure" className="p-2 text-sm hover:bg-green-500 border-b border-gray-300">FEE STRUCTURE</Link>
                <button className="p-2 text-sm hover:bg-amber-500 border-b border-gray-300 text-left">HOSTEL FEE</button>
                <button className="p-2 text-sm hover:bg-pink-500 text-left">APPLY FOR HOSTEL</button>
              </div>
            </div>
          </div>
        )}

{/* Mobile View */}
{isMobile && (
  <div className="flex flex-col items-center relative w-full">
    {/* Burger to Cross Button */}
    <button
      className="relative w-8 h-8 flex flex-col justify-between items-center z-50 mt-2"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span
        className={`block h-1 w-8 bg-white transform transition duration-300 ease-in-out ${
          menuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-8 bg-white transition duration-300 ease-in-out ${
          menuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-8 bg-white transform transition duration-300 ease-in-out ${
          menuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>

    {/* Slide Down Menu */}
    <div
      className={`absolute top-full left-0 w-full bg-[#50013b] shadow-lg z-40 flex flex-col items-center overflow-hidden transition-all duration-1200 ease-initial ${
        menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <Link
        to="/"
        className="w-full text-center p-2 text-sm font-semibold hover:bg-pink-500 border-b border-gray-300"
        onClick={() => setMenuOpen(false)}
      >
        HOME
      </Link>
      <Link
        to="/about"
        className="w-full text-center p-2 text-sm font-semibold hover:bg-pink-500 border-b border-gray-300"
        onClick={() => setMenuOpen(false)}
      >
        ABOUT
      </Link>

{/* ADMISSIONS Button with SVG Icon */}
<button
  onClick={() => setShowAdmissions(!showAdmissions)}
  className="w-full p-2 text-sm font-bold hover:bg-pink-500 border-b border-gray-300 text-center flex items-center justify-center gap-1"
>
  ADMISSIONS
  <svg
    className={`w-4 h-4 transition-transform duration-300 transform ${
      showAdmissions ? "rotate-180" : "rotate-0"
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>



      {/* ADMISSIONS Submenu */}
      {showAdmissions && (
        <div className="w-full bg-[#50013b] transition-all duration-1000 ease-in-out  ">
          <Link
            to="/admission/apply"
            className="block w-full p-2 text-sm text-center hover:bg-pink-500 border-b border-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            APPLY ONLINE
          </Link>
          <Link
            to="/admission/feestructure"
            className="block w-full p-2 text-sm text-center hover:bg-pink-500 border-b border-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            FEE STRUCTURE
          </Link>
          <button className="block w-full p-2 text-sm text-center hover:bg-pink-500 border-b border-gray-300">
            HOSTEL FEE
          </button>
          <button className="block w-full p-2 text-sm text-center hover:bg-pink-500">
            APPLY FOR HOSTEL
          </button>
        </div>
      )}
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default Header;
