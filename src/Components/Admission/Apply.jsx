import React, { useState,useRef,useEffect } from "react";
import Header from "../Header";
import { motion } from "framer-motion";


const Apply = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
    message: '',
    date: '',
    time: '',
  });

  // ⏰ Step 2: useEffect se date & time set karo
  useEffect(() => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    setFormData((prev) => ({ ...prev, date, time }));
  }, []);

  // 📤 Step 3: Yeh hai tumhara handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyvNd4oxHpxbESPzrFtwPro6hO3OnIJzm6q9WWbUH8DP6Zo9YFfwi4NCuY5iKJC0d2H/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.result === "success") {
        alert("✅ Form submitted successfully!");
        setFormData({
          name: '',
          phone: '',
          email: '',
          class: '',
          message: '',
          date: '',
          time: ''
        });
      } else {
        alert("❌ Submission failed!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("🚫 Something went wrong!");
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};


  

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/student.jpg"
          alt="Student"
          className="w-full h-[50vh] md:h-[70vh] object-cover  opacity-70"
        />

        {/* Admission Heading */}
        <div className="absolute top-4 left-4 right-4 md:left-8 md:right-auto md:w-[50%] bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            Admission Information
          </h1>
        </div>

        {/* Info Box */}
        <div className="absolute top-32 left-4 right-4 md:left-8 md:w-[52%] bg-gray-800 text-white shadow-lg rounded-2xl p-8 mt-4">
          <h2 className="text-sm md:text-xl font-semibold text-center underline mb-4">
            Brighton Education Academy welcomes all students to a bright future! 📚✨
          </h2>
          <ul className="text-xs md:text-lg space-y-2 pl-2">
            <li>🔹 Admission Open for 2025 Session (LKG to Class 10th)</li>
            <li>🔹 Classes from LKG to 10th (CBSE Board)</li>
            <li>🔹 Foundation Preparation for Olympiads, NTSE, etc.</li>
            <li>🔹 Experienced Faculty with Smart Classrooms</li>
            <li>🔹 Affordable Fees with Scholarship Facility</li>
            <li>🔹 Free Demo Classes Available</li>
            <li>🔹 Hostel Facility Available for Boys and Girls</li>
          </ul>

          {!showForm && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#001c39] hover:bg-[#4c00ff8a] px-6 py-3 md:px-10 md:py-4 rounded-lg text-white text-sm md:text-lg transition relative top-10  duration-300  shadow-lg"
              >
                📝 Register Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Registration Form Section */}
      {showForm && (
        <div className="bg-gray-900 h-[50vh] flex items-center justify-center px-4  py-10">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            action="https://formsubmit.co/sumitkjmu09@gmail.com"
            method="POST"
            // onSubmit={handleSubmit}
            
            className="w-full max-w-xl  bg-gray-800 p-8 flex gap-2 relative  flex-col rounded-2xl shadow-2xl space-y-6"
          >
            <h2 className="text-lg md:text-2xl font-semibold text-center mb-2">
              Student Registration
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-4 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none text-sm md:text-base"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
  onChange={handleChange}
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              required
              className="w-full p-4 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none text-sm md:text-base"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
  onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-4 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none text-sm md:text-base"
            />
            <select
              name="class"
              value={formData.class}
  onChange={handleChange}
              required
              className="w-full p-4 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none text-sm md:text-base"
            >
              <option value="">Select Class</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
              <option>9th</option>
              <option>10th</option>
              <option>Foundation / Olympiads</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
  onChange={handleChange}
              placeholder="Any specific query..."
              rows="3"
              className="w-full p-4 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none text-sm md:text-base"
            ></textarea>


           <input type="hidden" name="date" value={formData.date} id="date"></input>
            <input type="hidden" name="time" value={formData.time} id="time"></input> 

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-md text-base font-medium cursor-pointer"
            >
              Submit
            </button>
          </motion.form>
        </div>
      )}
    </div>
  );
};

export default Apply;
