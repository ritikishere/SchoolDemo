import React, { useEffect, useState, useRef } from 'react';
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

  const [showContent, setShowContent] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const [typedPara, setTypedPara] = useState('');
  const welcomeRef = useRef(null);

  const titleText = 'W elcome to Our School ';
  const paraText  = `B righton Education Academy, situated in Mananpur, Bihar, is dedicated to providing quality education to students from diverse backgrounds. Our mission is to nurture young minds with values, knowledge, and practical skills to help them succeed in life. We offer a variety of academic and skill development courses taught by experienced faculty members.`;

  const images = [
    '/images/school1.jpg',
    '/images/school2.jpg',
    '/images/school3.jpg',
    '/images/school4.jpg',
  ];

  // 🔁 Slideshow
  useEffect(() => {
    addKeyframes();
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 👁️‍🗨️ Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.4 }
    );

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  // ⌨️ Typing animation for heading + paragraph
  useEffect(() => {
    if (!showContent) return;

    let titleIndex = 0;
    let paraIndex = 0;
    setTypedTitle('');
    setTypedPara('');

    const titleInterval = setInterval(() => {
      setTypedTitle((prev) => prev + titleText.charAt(titleIndex));
      titleIndex++;
      if (titleIndex === titleText.length) {
        clearInterval(titleInterval);

        // paragraph starts after heading finishes
        const paraInterval = setInterval(() => {
          setTypedPara((prev) => prev + paraText.charAt(paraIndex));
          paraIndex++;
          if (paraIndex === paraText.length) {
            clearInterval(paraInterval);
          }
        }, 10);
      }
    }, 100);

    return () => {
      clearInterval(titleInterval);
    };
  }, [showContent]);

  return (
    <div className="font-poppins bg-gradient-to-br from-amber-50 to-rose-100 min-h-screen flex flex-col">
      <Header />

      {/* 🔔 Marquee */}
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
          <Link to="/admission/apply" style={styles.link}>📢 Admission open for session 2025 </Link>
          <a href="#" style={styles.link}>📅 Annual function on 15th April </a>
          <a href="#" style={styles.link}>🏫 School timings updated for summer season</a>
          <Link to="/result" style={styles.link}>📢 Result out </Link>
        </div>
      </nav>

      {/* 🖼️ Slideshow */}
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-4xl h-[40vh] sm:h-[70vh] relative overflow-hidden flex justify-center items-center">
          <video src="/videos/schoolvideo.MP4" autoPlay muted loop className='rotate-[270deg]'>video</video>
        </div>
      </div>

      <div className='flex flex-col gap-18'>
        <div
        ref={welcomeRef}
        className="p-6 text-center flex flex-col gap-12 top-10 relative min-h-[60vh]"
      >
        <h1 className="text-[15vw] border-white border-2 sm:text-4xl flex justify-center items-center font-bold text-rose-600 ">
          {typedTitle}
        </h1>

        {showContent && (
          <div className="flex flex-col justify-center items-center gap-6 mt-4 transition-opacity duration-1000">
            <p className='text-[4.5vh] text-gray-800  max-w-4xl'>{typedPara}</p>
            
          </div>
        )}
      </div>

      {/* ⚡ Quick Links */}
      <div className="flex flex-wrap justify-center gap-6 px-4 mt-6">
        {[
          {
            to: "/admission/apply",
            icon: <FaFileAlt className="text-5xl text-rose-500 mb-2" />,
            label: "Apply Online",
          },
          {
            to: "/result",
            icon: <FaPoll className="text-5xl text-rose-500 mb-2" />,
            label: "Results",
          },
          {
            to: "/admission/feestructure",
            icon: <FaMoneyCheckAlt className="text-5xl text-rose-500 mb-2" />,
            label: "Fee Structure",
          },
          {
            to: "/gallery",
            icon: <FaImages className="text-5xl text-rose-500 mb-2" />,
            label: "Gallery",
          },
        ].map(({ to, icon, label }, index) => (
          <Link
            key={index}
            to={to}
            className="flex flex-col items-center justify-center gap-4 bg-white rounded-2xl shadow-lg p-6 cursor-pointer 
                    transform transition-transform duration-300
                    hover:scale-105 hover:shadow-xl 
                    active:scale-95 active:shadow-md
                    h-[20vh] w-[80vw] sm:w-[40vw] lg:w-[20vw]"
          >
            {icon}
            <h3 className="text-xl font-semibold text-gray-800 text-center">{label}</h3>
          </Link>
        ))}
      </div>
     
      <Footer />
     
      </div>

      

    </div>
  );
}
