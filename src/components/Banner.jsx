import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='container max-w-screen-2xl mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>

      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* texts left side */}
        <div className="md:w-1/2 space-y-7">
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-[#252525]'>Dive into Delights of Delectable <span className='text-gsecond'>Food</span></h2>
          <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <Link to='/menu'>
            <button className='bg-gsecond bg-green px-8 py-3 font-semibold text-white rounded-full' >Explore</button>
          </Link>
      </div>

      {/* image right side */}
      <div className="w-3/4 md:w-1/2">
        <img src="/images/home/bannernew.png" alt='chef image' className='' />

        <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">

          <div className="md:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
            <img src='/images/home/b-food1.png' className='rounded-2xl' alt='food' />
            <div className="space-y-1">
              <h5 className='font-medium mb-1'>Spicy noodles</h5>
              <div className="rating rating-sm">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
              </div>
              <p className='text-red-600'>$18.00</p>
            </div>
          </div>

          <div className="md:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
            <img src='/images/home/b-food1.png' className='rounded-2xl' alt='food' />
            <div className="space-y-1">
              <h5 className='font-medium mb-1'>Spicy noodles</h5>
              <div className="rating rating-sm">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
              </div>
              <p className='text-red-600'>$18.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div >
  )
}

export default Banner