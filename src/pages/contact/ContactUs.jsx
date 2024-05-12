import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const ContactUs = () => {
  return (
    <div className=''>
      <div className="container max-w-screen-xl mx-auto xl:px-10 bg-gradient-to-r mb-[100px] pb-10 from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
        <div className="py-32 flex flex-col  justify-center items-center gap-8 ">
          {/* texts left side */}
          <div className="text-center space-y-7">
            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-[#252525]'>Contact <span className='text-gsecond'>Us</span></h2>

          </div>
        </div>



        {/* //contact form */}
        <div className=" flex  md:gap-8 justify-center items-center">
            {/* img */}
          <div className="w-1/2 ">
            <img src='https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='headset' className='rounded-md ' />
          </div>

          {/* info */}
          <div className="w-1/2 flex flex-col justify-center items-center ">
            <div className="flex items-center gap-4 mb-2">
              <BsTelephone className='text-4xl text-gsecond' />
              <h2 className='text-2xl font-bold text-[#252525]'>+234 123 456 7890</h2>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineEmail className='text-4xl text-gsecond' />
              <h2 className='text-2xl font-bold text-[#252525]'>test252@gmail.com</h2>
             </div>
            <div className="flex items-center gap-4 mt-2">
              <LuInstagram className='text-4xl text-gsecond' />
              <h2 className='text-2xl font-bold text-[#252525]'>@foodie</h2>
              </div>
            <div className="flex items-center gap-4 mt-2">
              <FaFacebookF className='text-4xl text-gsecond' />
              <h2 className='text-2xl font-bold text-[#252525]'>foodie1</h2>
              </div>
            <div className="flex items-center gap-4 mt-2">
              <AiFillTwitterCircle className='text-4xl text-gsecond' />
              <h2 className='text-2xl font-bold text-[#252525]'>foodie-store</h2>
              </div>



            
            </div>

        </div>





      </div>




    </div>
  )
}

export default ContactUs