import React from 'react';

// import image
import Image2 from '../assets/img/feature-2-img.png'

const FeaturesSection2 = () => {
  return <section className='py-[30px] lg:py-[120px] '>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row justify-end items-center'>

        {/* image */}
        <div
          data-aos='fade-right'
          data-aos-offset='400'
          className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1'>
          <img src={Image2} alt="" />
        </div>

        {/* text */}
        <div
          data-aos='fade-left'
          data-aos-offset='400'
          className='flex-1 max-w-[456px] mb-6 lg:mt-10'>
          <h3 className='h3 mb-6'> Detailed Statistics </h3>
          <p className='text-gray mb-8'>
            View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
          </p>
          <button className='btn px-8 mb-6 lg:mb-0'>Learn more</button>
        </div>

      </div>
    </div>
  </section>
};

export default FeaturesSection2;
