import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { FaFileAlt, FaPoll, FaMoneyCheckAlt, FaImages } from "react-icons/fa";
import Footer from './Footer';

const styles = {
  wrapper: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    backgroundColor: 'aqua',
    padding: '10px',
    marginBottom: '20px',
  },
  marquee: {
    display: 'inline-block',
    animation: 'scroll-left 10s linear infinite',
  },
  marqueePaused: {
    animationPlayState: 'paused',
  },
  link: {
    display: 'inline-block',
    margin: '0 30px',
    fontSize: '18px',
    color: 'black',
    textDecoration: 'none',
  },
};

function addKeyframes() {
  const styleSheet = document.styleSheets[0];
  const keyframes =
    `@keyframes scroll-left {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }`;

  const alreadyAdded = Array.from(styleSheet.cssRules).some(rule =>
    rule.name === 'scroll-left'
  );

  if (!alreadyAdded) {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }
}

export default function Home() {
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/images/school1.jpg',
    '/images/school2.jpg',
    '/images/school3.jpg',
    '/images/school4.jpg',
  ];

  useEffect(() => {
    addKeyframes();

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-poppins bg-gradient-to-br from-amber-50 to-rose-100 min-h-screen">

      <Header />

      {/* 🔔 Marquee Notification */}
      <nav
        style={styles.wrapper}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            ...styles.marquee,
            ...(paused ? styles.marqueePaused : {}),
          }}
        >
          <Link to="/admission/apply">📢 Admission open for session 2025 </Link>
          <a href="#" style={styles.link}>📅 Annual function on 15th April </a>
          <a href="#" style={styles.link}>🏫 School timings updated for summer season</a>
        </div>
      </nav>

      {/* 🖼️ Image Slideshow Section */}
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-4xl h-[40vh] sm:h-[50vh] relative overflow-hidden rounded-xl shadow-xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* 🔘 Dots */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎉 Welcome Message */}
      <div className="p-6 text-center mt-10 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-rose-600">Welcome to Our School</h1>
      <div className='flex flex-col justify-center items-center gap-4 '>
        <p className='text-xl '>
          Brighton Education Academy, situated in Mananpur, Bihar, is dedicated to providing quality education to students from diverse backgrounds. Our mission is to nurture young minds with values, knowledge, and practical skills to help them succeed in life. We offer a variety of academic and skill development courses taught by experienced faculty members.
        </p>
        <Link to="/about" className='bg-rose-600 rounded-lg w-25 h-10 flex items-center justify-center text-white'>View More</Link>
        </div>  

      </div>

      {/* 👇 Cards Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <a
          href="/admission/apply"
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <FaFileAlt className="text-4xl text-rose-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 text-center">Online Admission Form</h3>
        </a>

        <a
          href="/results"
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <FaPoll className="text-4xl text-rose-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 text-center">Results</h3>
        </a>

        <a
          href="/admission/feestructure"
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <FaMoneyCheckAlt className="text-4xl text-rose-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 text-center">Fee Structure</h3>
        </a>

        <a
          href="/gallery"
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-transform duration-300 h-[20vh] hover:scale-105 hover:shadow-xl"
        >
          <FaImages className="text-4xl text-rose-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 text-center">Gallery</h3>
        </a>
      </div>

      <Footer/>
    </div>
  );
}
