import React from 'react';

// import images
import Image from '../assets/img/hero-img.png'

// import icons
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const Hero = () => {
  return <section>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row items-center'>

        {/* hero text */}
        <div className='flex-1'>
          
          {/* badge text */}
          <div
            data-aos='fade-down'
            data-aos-delay='400'
            className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px] '>
            <div className='flex items-center justify-between text-sm lg:text-base'>
              <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>75% Save</div>
              <div>For the Black Saturday weekend</div>
            </div>
          </div>

          {/* title */}
          <h1
            data-aos='fade-down'
            data-aos-delay='500'
            className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'> Fatest & secure platform to inveset in Crypto. </h1>
          <p
            data-aos='fade-down'
            data-aos-delay='600'
            className='max-w-[440px] leading-relaxed mb-8'>
            Buy and sel CryptoCurrencies, trusted by 10M wallets with over $30 Billion in transactions.
          </p>
          <button
            data-aos='fade-down'
            data-aos-delay='700'
            className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'>
            Try to free
            <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
          </button>
        </div>

        {/* hero image */}
        <div
          data-aos='fade-up'
          data-aos-delay='700'
          className='flex-1'>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  </section>
};

export default Hero;
