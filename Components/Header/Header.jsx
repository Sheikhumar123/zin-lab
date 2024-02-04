import Image from 'next/image'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
function Header() {
  return (
    <>
      <div className='w-[100%] flex justify-center items-center'>
        <div className='w-[100%] max-w-[1550px]'>
          <div className='flex justify-between gap-1 w-[100%] items-center pt-4 p-2 py-3'>
            <div className='flex items-center gap-1'>
              <div className='w-[30px] h-[30px] bg-slate-500 flex justify-center items-center rounded-[6px] cursor-pointer'>
                <IoMdSettings size={22} className='text-[#fff]' />
                {/* <Image alt='Image' src={""} width={1000} height={1000} style={{width:"100%",height:"100%"}} /> */}
              </div>
              <p className='font-bold'>ZinTools</p>
            </div>
            <div className='w-[100%] max-w-[500px] relative'>
              <input placeholder='Search for Movies, TV Shows, Themes & Cast' type="text" id="username" name="username" class="p-2 border bg-[#f2f2f2] rounded-[30px] w-[100%] max-w-[500px] " />
              <button>

                <FaSearch className='absolute right-5 top-3 cursor-pointer' />
              </button>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <button>   <p className='font-[500] cursor-pointer'>
                  Log in
                </p>
                </button>
              </div>
              <div className='bg-[blue] w-[90px] h-[40px] p-1  rounded-[20px] flex justify-center items-center cursor-pointer' >
                <button>    <p className='text-[#fff]'>
                  Sign up
                </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header