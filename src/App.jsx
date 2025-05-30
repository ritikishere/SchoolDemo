import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Apply from './Components/Admission/Apply'
import Header from './Components/Header'
import Home from './Components/Home'
import FeeStr from './Components/Admission/FeeStr';
import About from './Components/About'
import Result from './Components/Result';
import ScrollToTop from './Components/ScrollTop';


const App = () => {
  
  
  return (

    <div className=' w-full h-[100vh] bg-black' >



<ScrollToTop/>
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admission/apply" element={<Apply/>} />
      <Route path="/admission/feestructure" element={<FeeStr/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/result" element={<Result/>} />

    </Routes>

      

  
  

    
      

  

    
      
        
      
        
      
      


    </div>
  )
}

export default App