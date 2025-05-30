import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [showAdmissions, setShowAdmissions] = useState(false);
  const [showAcademic, setShowAcademic] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClass = (path) => `
    relative font-bold text-base md:text-lg px-2 py-1
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
    after:bg-white after:transition-all after:duration-500 after:ease-in-out
    ${isActive(path) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `;

  const mobileNavLinkClass = (path) => `
    relative w-full text-center p-2 text-sm font-semibold border-b border-gray-300
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
    after:bg-white after:transition-all after:duration-500 after:ease-in-out
    ${isActive(path) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `;

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
      <div className="bg-[#50013b] text-white px-4 py-2 sticky top-0 z-50">
        {/* Desktop View */}
        {!isMobile && (
          <div className="flex justify-around items-center">
            <Link to="/" className={navLinkClass('/')}>HOME</Link>
            <Link to="/about" className={navLinkClass('/about')}>ABOUT</Link>

            {/* ADMISSIONS Dropdown */}
            <div className="relative group">
              <button className="font-bold text-base md:text-lg focus:outline-none relative">
                ADMISSIONS
                <div
                  className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-500 ease-in-out ${
                    location.pathname.startsWith('/admission') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
              <div className="absolute bg-[#9b0f75] border border-gray-300 rounded shadow-lg z-50 flex flex-col invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/admission/apply" className="p-2 text-sm hover:bg-blue-500 border-b border-gray-300">APPLY ONLINE</Link>
                <Link to="/admission/feestructure" className="p-2 text-sm hover:bg-blue-500 border-b border-gray-300">FEE STRUCTURE</Link>
                <button className="p-2 text-sm hover:bg-blue-500 border-b border-gray-300 text-left">HOSTEL FEE</button>
                <button className="p-2 text-sm hover:bg-blue-500 text-left">APPLY FOR HOSTEL</button>
              </div>
            </div>

          {/*Academy*/}        
          <div className="relative group">
              <button className="font-bold text-base md:text-lg focus:outline-none relative">
                ACADEMIC
                <div
                  className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-500 ease-in-out ${
                    location.pathname.startsWith('/admission') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
              <div className="absolute bg-[#9b0f75] border border-gray-300 rounded shadow-lg z-50 flex flex-col invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/admission/apply" className="p-2 text-sm hover:bg-blue-500 border-b border-gray-300">CURRICULAM & SYLLABUS</Link>
                <Link to="/admission/feestructure" className="p-2 text-sm hover:bg-blue-500 border-b border-gray-300">ACADEMIC CALENDER</Link>
                <Link to="/" className="p-2 text-sm hover:bg-blue-500 border-b border-gray-300 text-left">FACULTY & STAFF</Link>
                <Link to="/" className="p-2 text-sm hover:bg-blue-500  border-gray-300 text-left">EXAMINATION</Link>

                <button className="p-2 text-sm hover:bg-blue-500  border-gray-300 border-b text-left">STUDENT ACHIVEMENTS</button>
                <button className="p-2 text-sm hover:bg-blue-500  border-gray-300  border-b text-left">FACICITIES</button>
                <button className="p-2 text-sm hover:bg-blue-500  border-gray-300 border-b  text-left">STUDY MATERIALS</button>
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
              <span className={`block h-1 w-8 bg-white transform transition duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-1 w-8 bg-white transition duration-300 ease-in-out ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-1 w-8 bg-white transform transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>

            {/* Slide Down Menu */}
            <div
              className={`absolute top-full left-0 w-full bg-[#50013b] shadow-lg z-40 flex flex-col items-center overflow-hidden transition-all duration-700 ease-in-out ${
                menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link to="/" className={mobileNavLinkClass('/')} onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
              <Link to="/about" className={mobileNavLinkClass('/about')} onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>

              {/* ADMISSIONS Button with Icon */}
              <button
                onClick={() => setShowAdmissions(!showAdmissions)}
                className="w-full p-2 text-sm font-bold hover:bg-pink-500 border-b border-gray-300 text-center flex items-center justify-center gap-1 relative"
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
                <div className="w-full bg-[#50013b] transition-all duration-1000 ease-in-out">
                  <Link to="/admission/apply" className="block w-full p-2 text-sm text-center hover:bg-pink-500 border-b border-gray-300" onClick={() => setMenuOpen(false)}>
                    APPLY ONLINE
                  </Link>
                  <Link to="/admission/feestructure" className="block w-full p-2 text-sm text-center hover:bg-pink-500 border-b border-gray-300" onClick={() => setMenuOpen(false)}>
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


              <button
                onClick={() => setShowAcademic(!showAcademic)}
                className="w-full p-2 text-sm font-bold hover:bg-pink-500 border-b border-gray-300 text-center flex items-center justify-center gap-1 relative"
              >
                ACADEMIC
                <svg
                  className={`w-4 h-4 transition-transform duration-300 transform ${
                    showAcademic ? "rotate-180" : "rotate-0"
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

              {showAcademic && (
                <div className="w-full bg-[#50013b] transition-all duration-1000 ease-in-out">
                  <Link to="/admission/apply" className="block w-full p-2 text-sm text-center hover:bg-pink-500 border-b border-gray-300" onClick={() => setMenuOpen(false)}>
                    APPLY ONLINE
                  </Link>
                  <Link to="/admission/feestructure" className="block w-full p-2 text-sm text-center hover:bg-pink-500 border-b border-gray-300" onClick={() => setMenuOpen(false)}>
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
