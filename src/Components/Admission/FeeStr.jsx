import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const FeeStr = () => {
  const feeData = [
    { class: "LKG", annual: "₹12,000", devFee: "₹2,000", monthly: "₹1,000" },
    { class: "UKG", annual: "₹12,500", devFee: "₹2,000", monthly: "₹1,050" },
    { class: "1st", annual: "₹13,000", devFee: "₹2,500", monthly: "₹1,100" },
    { class: "2nd", annual: "₹13,500", devFee: "₹2,500", monthly: "₹1,150" },
    { class: "3rd", annual: "₹14,000", devFee: "₹3,000", monthly: "₹1,200" },
    { class: "4th", annual: "₹14,500", devFee: "₹3,000", monthly: "₹1,250" },
    { class: "5th", annual: "₹15,000", devFee: "₹3,500", monthly: "₹1,300" },
    { class: "6th", annual: "₹15,500", devFee: "₹3,500", monthly: "₹1,350" },
    { class: "7th", annual: "₹16,000", devFee: "₹4,000", monthly: "₹1,400" },
    { class: "8th", annual: "₹16,500", devFee: "₹4,000", monthly: "₹1,450" },
    { class: "9th", annual: "₹17,000", devFee: "₹4,500", monthly: "₹1,500" },
    { class: "10th", annual: "₹17,500", devFee: "₹4,500", monthly: "₹1,550" },
  ];

  return (
   
<> <Header/>
<div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-100 flex items-center justify-center px-4 py-10 font-poppins">
        
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-6xl p-6 md:p-10 border border-gray-100">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
          🏫 School Fee Structure (LKG - 10th)
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base text-gray-700 border-separate border-spacing-y-4">
            <thead className="bg-gradient-to-r from-rose-100 to-orange-100 text-gray-900">
              <tr>
                <th className="text-left py-3 px-4 sm:px-6 rounded-l-lg">Class</th>
                <th className="text-left py-3 px-4 sm:px-6">Annual Fee</th>
                <th className="text-left py-3 px-4 sm:px-6">Development Fee</th>
                <th className="text-left py-3 px-4 sm:px-6 rounded-r-lg">Monthly Fee</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white shadow-sm rounded-lg hover:bg-rose-50 transition duration-200"
                >
                  <td className="py-4 px-4 sm:px-6 rounded-l-lg">{item.class}</td>
                  <td className="py-4 px-4 sm:px-6">{item.annual}</td>
                  <td className="py-4 px-4 sm:px-6">{item.devFee}</td>
                  <td className="py-4 px-4 sm:px-6 rounded-r-lg">{item.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          * Monthly Fee applies for 12 months. Development Fee is annual.
        </p>
      </div>
    
      
    </div>

    <Footer/>


    </>
    
  );
};

export default FeeStr;
