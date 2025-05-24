import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Apply from './Components/Admission/Apply'
import Header from './Components/Header'
import Home from './Components/Home'
import FeeStr from './Components/Admission/FeeStr';
import About from './Components/About'


const App = () => {
  
  
  return (

    




    <div className=' w-full h-[100vh] bg-black' >
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admission/apply" element={<Apply/>} />
      <Route path="/admission/feestructure" element={<FeeStr/>} />
      <Route path="/about" element={<About/>} />


    </Routes>


    </div>
  )
}

export default App