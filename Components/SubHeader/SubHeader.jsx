import React from 'react'

function SubHeader() {
  return (
    <>
      <div className='w-[100%] flex justify-center items-center p-4 shadow-md'>
        <div className='w-[100%] max-w-[1450px] pt-2'>
          <div className='flex gap-2 justify-between'>
            <p className='font-[500] cursor-pointer'>Stock Video</p>
            <p className='font-[500] cursor-pointer'>Video Templetes</p>
            <p className='font-[500] cursor-pointer'>Music</p>
            <p className='font-[500] cursor-pointer'>Sound Effect</p>
            <p className='font-[500] cursor-pointer'>Graphic Templetes</p>
            <p className='font-[500] cursor-pointer'>Graphics</p>
            <p className='font-[500] cursor-pointer'>Presentation Templetes</p>
            <p className='font-[500] cursor-pointer'>Photos</p>
            <p className='font-[500] cursor-pointer'>Fonts</p>
            <p className='font-[500] cursor-pointer'>Add-ons</p>
            <p className='font-[500] cursor-pointer'>More</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubHeader