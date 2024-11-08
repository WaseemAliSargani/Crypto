import React from 'react';

// import icon
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi"

const Stats = () => {
  return <section>
    <div
      data-aos='fade-up'
      data-aos-delay='1200'
      className="container mx-auto pt-24">
      <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8'>

        {/* item 1 */}
        <div className='flex items-center gap-x-6'>
          <div className='flex justify-center items-center w-20 h-20 bg-white/15 rounded-full text-2xl lg:text-4xl text-blue'>
            <HiChartBar />
          </div>
          {/* item text */}
          <div className=''>
            <div className='text-2xl lg:text-[40px] lg:mb-2 font-bold'> $300B </div>
            <div className='text-gray'> Digital Currency Exchange </div>
          </div>
        </div>

        {/* item 2 */}
        <div className='flex items-center gap-x-6'>
          <div className='flex justify-center items-center w-20 h-20 bg-white/15 rounded-full text-2xl lg:text-4xl text-blue'>
            <HiUser />
          </div>
          {/* item text */}
          <div className=''>
            <div className='text-2xl lg:text-[40px] lg:mb-2 font-bold'> 10M + </div>
            <div className='text-gray'> Trusted wallet investor </div>
          </div>
        </div>

        {/* item 3 */}
        <div className='flex items-center gap-x-6'>
          <div className='flex justify-center items-center w-20 h-20 bg-white/15 rounded-full text-2xl lg:text-4xl text-blue'>
            <HiGlobe />
          </div>
          {/* item text */}
          <div className=''>
            <div className='text-2xl lg:text-[40px] lg:mb-2 font-bold'> 195 </div>
            <div className='text-gray'> Countries Supported </div>
          </div>
        </div>


      </div>
    </div>
  </section>
};

export default Stats;
