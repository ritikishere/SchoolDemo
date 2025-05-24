import React from 'react'
import { useState } from "react"; 
import { degrees, motion } from "motion/react"
import Header from '../Header';
import { Link } from 'react-router-dom';
const Apply = () => {

  const [showForm, setShowForm] = useState(false);
  return (
    
    <div className='h-screen'>

    <Header/>  



 <div className=' overflow-hidden bg-black relative  '>
  <img
        src="/images/student.jpg"
        alt="Student"
        className='opacity-70 '
      />

    <div 
    

    className='bg-gray-800 w-209 shadow-lg shadow-black rounded-3xl h-20 flex items-center justify-center absolute inset-0 top-5 left-5 '>
      <h1 className=' top-5 left-5 text-6xl text-white '>Admission Information</h1> 
</div>  
    <div className='bg-transparent shadow-lg shadow-black  w-209 h-140 flex flex-col items-center  text-white absolute inset-0 top-30 left-5 '>
    <h1 className='top-5 text-2xl text-bold underline left-5'>Brighton Education Academy welcomes all students to a bright future! 📚✨</h1> 
    <ul className='gap-8 top-5 relative text-xl flex flex-col'>
    <li>🔹 Admission Open for 2025 Session (LKG to Class 10th)</li>
    <li>🔹 Classes from LKG to 10th (CBSE Board)</li>
    <li>🔹 Foundation Preparation for Olympiads, NTSE, etc.</li>
    <li>🔹 Experienced Faculty with Smart Classrooms</li>
    <li>🔹 Affordable Fees with Scholarship Facility</li>
    <li>🔹 Free Demo Classes Available</li>
    <li>🔹 Hostel Facility Available for Boys and Girls</li>
</ul>

<div className=" top-22 relative text-white flex flex-col items-center justify-center px-4">
    {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#001c39] hover:bg-[#4c00ff8a] text-white cursor-pointer rounded-lg text-xl transition duration-300 shadow-lg"
        >
          <h1 className=' w-50 h-10 flex items-center justify-center  '>📝 Register Now</h1>
        </button>
      )}  </div>


</div>  



    
      </div> 

<div className=" bg-gray-900 text-white flex h-[60vh] items-center justify-center ">
      

      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl bg-gray-800 top-0 flex flex-col gap-4 rounded-2xl shadow-2xl space-y-6 "
        >
          <h2 className="text-xl top-2 relative font-semibold text-center ">Student Registration</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full h-8 p-3 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none "
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            required
            className="w-full p-3 h-8 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none "
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 h-8 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none "
          />
          <select
            name="class"
            required
            className="w-full p-3 h-8 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none "
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
            placeholder="Any specific query..."
            rows="3"
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none "
          ></textarea>

          <button
            type="submit"
            className="w-full h-8 bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-md text-lg font-medium cursor-pointer"
          >
            Submit
          </button>
        </motion.form>
      )}
    </div>      

    </div>
  );
}






export default Apply;