import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const facultyData = [
  {
    name: "Dr. Ramesh Verma",
    title: "Professor, Physics",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "ramesh.verma@school.edu.in",
    phone: "+91 9876543210",
  },
  {
    name: "Ms. Shalini Kumari",
    title: "Assistant Professor, Mathematics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "shalini.kumari@school.edu.in",
    phone: "+91 9876512345",
  },
  {
    name: "Mr. Anil Singh",
    title: "Lecturer, Chemistry",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    email: "anil.singh@school.edu.in",
    phone: "+91 9876509876",
  },
];

const toppersData = [
  {
    name: "Priya Singh",
    class: "Class 12 - Science",
    score: "95.6%",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rahul Kumar",
    class: "Class 10 - Mathematics",
    score: "93.4%",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Neha Sharma",
    class: "Class 11 - Commerce",
    score: "92.8%",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const FacultyPage = () => {
  return (
    <>
    <Header/>

    <div className="bg-gradient-to-b from-blue-950 via-[#0a197a] to-blue-950 text-white flex flex-col justify-center items-center min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-15">
        
        {/* About Us Section */}
        <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 top-5 relative  shadow-md text-center  ">
          <h1 className="text-3xl font-bold text-white underline mb-4">About Us</h1>
          <p className="text-white text-xl leading-relaxed ">
            Brighton Education Academy, situated in Mananpur, Bihar, is dedicated to providing quality education to students from diverse backgrounds. Our mission is to nurture young minds with values, knowledge, and practical skills to help them succeed in life. We offer a variety of academic and skill development courses taught by experienced faculty members.
            With a focus on discipline, innovation, and holistic development, Brighton ensures that every student receives the attention and support they need. Our facilities include modern classrooms, digital learning tools, and regular workshops that keep students engaged and industry-ready. Whether you’re preparing for competitive exams, pursuing foundational education, or enhancing your career, we are here to support you at every step.
          </p>
        </section>

        {/* Director */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 mt-8 transition hover:scale-[1.01] duration-300">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="Director"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Dr. Rajeev Prasad</h2>
              <p className="text-blue-300">Director, Green Valley Public School</p>
              <p className="text-blue-300 text-sm mt-2">
                Visionary leader with 25+ years of experience in academic excellence and school administration.
              </p>
              <p className="mt-3 text-blue-400 text-sm">
                <a href="mailto:rajeev.prasad@school.edu.in" className="underline hover:text-blue-200">
                  rajeev.prasad@school.edu.in
                </a>{" "}
                |{" "}
                <a href="tel:+919876543210" className="underline hover:text-blue-200">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Members */}
        <h3 className="text-2xl font-semibold text-blue-200 mb-6 border-b border-blue-600 pb-2">
          Faculty Members
        </h3>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {facultyData.map((faculty, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-md transition-transform hover:scale-105 duration-300 flex flex-col items-center text-center"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 shadow mb-4"
              />
              <h4 className="text-xl font-semibold text-blue-100">{faculty.name}</h4>
              <p className="text-blue-300 text-sm">{faculty.title}</p>
              <div className="mt-2 text-sm text-blue-400">
                <a href={`mailto:${faculty.email}`} className="block underline hover:text-blue-200">
                  {faculty.email}
                </a>
                <a href={`tel:${faculty.phone}`} className="block underline hover:text-blue-200">
                  {faculty.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Toppers Section */}
        <h3 className="text-2xl font-semibold text-blue-200 mt-16 mb-6 border-b border-blue-600 pb-2">
          Our Toppers
        </h3>

        <div className="grid gap-8 grid-cols-1 relative bottom-5 sm:grid-cols-2 md:grid-cols-3">
          {toppersData.map((topper, i) => (
            <div
              key={i}
              className="bg-blue-800/30 backdrop-blur-md border border-blue-500 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
            >
              <img
                src={topper.image}
                alt={topper.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 shadow mb-4"
              />
              <h4 className="text-xl font-semibold text-blue-100">{topper.name}</h4>
              <p className="text-blue-300 text-sm">{topper.class}</p>
              <p className="mt-1 text-blue-200 font-semibold">{topper.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer/>
        </>

    
  );
};

export default FacultyPage;
