import React, { useState } from 'react';

// import data
import { currency } from '../data';

// import icons
import { IoIosArrowForward } from 'react-icons/io'

const Trade = () => {

  // item name state
  const [itemName, setItemName] = useState('Bitcoin')

  return <section className='section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]'>
    <div className="container mx-auto">
      <h2
        data-aos='fade-up'
        data-aos-offset='400'
        className='section-title text-center mb-16'>
        Trade securely and market the high growth CryptoCurrencies.
      </h2>

      {/* items */}
      <div
        data-aos='fade-up'
        data-aos-offset='450'
        className='flex flex-col gap-[45px] lg:flex-row'>
        {currency.map((item, index) => {
          // destrucute item
          const { image, name, abbr, description } = item;

          return (
            // item
            <div
              onClick={() => setItemName(name)}
              className={`${name === itemName ? 'bg-violet text-white' : 'bg-white'
                }  w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
              key={index}>
              <div className='flex flex-col justify-center items-center '>

                {/* item image */}
                <img className='mb-12' src={image} alt="" />

                {/* item Name */}
                <div className='mb-4 flex items-center gap-x-2'>
                  <div className='text-[32px] font-bold '> {name} </div>
                  <div className='text-lg text-gray-400 font-medium'> {abbr} </div>
                </div>

                {/* item description */}
                <p className='mb-6 text-center'> {description} </p>
                {/* btn */}
                <button
                  className={`${name === itemName ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6  gap-x-3' : "text-blue w-16"

                    } border-2 border-gray-300 rounded-full h-16 flex justify-center items-center `}>
                  {name === itemName && <div className='text-lg font-medium'>Start Mining </div>}
                  <IoIosArrowForward
                    className={`${name === itemName ? 'text-2xl' : 'text-3xl'
                      }`}
                  />
                </button>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
};

export default Trade;
