
import React from 'react';

import "./HeroBanner.css"
const HeroBanner = () => {
  return (
    <>
      <div className='banner min-h-[calc(100vh-130px)] flex justify-center items-center py-5 text-center'>
        <div className=" text-white">
          <h2 className='lg:text-[50px] text-[18px]  font-[600]'>Mosharraf Hossain School & College</h2>
          <button className='bg-[#40282C] px-6 py-3 rounded-lg lg:text-[24px] text-[16px] mt-5'>About us</button>
        </div>
      </div>

    </>

  );
};

export default HeroBanner;