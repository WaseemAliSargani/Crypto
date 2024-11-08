import React from 'react';

// import image
import Image3 from '../assets/img/feature-3-img.png'

const FeaturesSection3 = () => {
  return <section className='py-[30px] lg:py-[120px] '>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row '>

        {/* text */}
        <div
          data-aos='fade-right'
          data-aos-offset='400'
          className='max-w-[460px] mb-6 lg:mt-10'>
          <h3 className='h3 mb-6'>
            Grow your profit and track your investments
          </h3>
          <p className='text-gray mb-8 max-w-[408px]'>
            Use advanced analytical tools. clear TradingView charts let you track current and historical profit investments.
          </p>
          <button className='btn px-8'>Learn more</button>
        </div>

        {/* image */}
        <div
          data-aos='fade-left'
          data-aos-offset='400'
          className=' flex-1 flex justify-end'>
          <img src={Image3} alt="" />
        </div>

      </div>
    </div>
  </section>
};

export default FeaturesSection3;
