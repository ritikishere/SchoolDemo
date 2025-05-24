import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {



  
  return (
    <div className=''>

      

    
       

    <div className="flex items-center gap-5 bg-[#001c39] opacity-90  ">
  <div className="w-20 flex items-center justify-center">
    <img
      src="/images/LogoSchool.png"
      alt="Student"
      className="w-16"
    />
  </div>

  <div>
    <h1 className="text-3xl font-bold text-[#FFFFFF] text-shadow-lg shadow-black ">Brighton Education Academy</h1>
    <div>
      <h3 className="font-semibold text-[#FFFFFF] text-shadow-lg shadow-black ">Mananpur, Bihar</h3>
    </div>
  </div>
</div>      
      
      <div className='flex ml-5 gap-15 items-center bg-[#50013b] text-white border-b-white border-b-1 h-10 px-3'>
     <Link to="/" className="font-bold text-lg" >HOME</Link>   
     

 <div className="relative group inline-block">
  <button className="font-bold text-lg">ADMISSIONS</button>

  <div className="absolute left-0 mt-2 shadow-lg 
                  opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                  transition-opacity duration-300 z-10">
    <div className="flex flex-col gap-2 bg-[#325652] rounded overflow-hidden border text-white border-gray-300">
      <Link to="/admission/apply" 
      
      
      className="p-2 text-sm text-left border-b border-r border-gray-300 hover:underline hover:bg-blue-500">
        APPLY ONLINE
      </Link>
      <Link to="admission/feestructure" className="p-2 text-sm text-left border-b border-r border-gray-300 hover:underline hover:bg-green-500">
        FEE STRUCTURE
      </Link>
      <button className="p-2 text-sm text-left border-b border-r border-gray-300 hover:underline hover:bg-amber-500">
        HOSTEL FEE
      </button>
      <button className="p-2 text-sm text-left border-r border-gray-300 hover:underline hover:bg-pink-500">
        APPLY FOR HOSTEL
      </button>
    </div>
  </div>
</div>




  
      </div>


    </div>
  )
}

export default Header