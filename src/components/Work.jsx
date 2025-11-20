import React from 'react'
import web_shot1 from '../../src/assets/web_screenshot1.jpg'
import web_shot2 from '../../src/assets/web_screenshot2.jpg'
import web_shot3 from '../../src/assets/web_screenshot3.jpg'

const Work = () => {
  return (
    <div id='work' className='text-white text-center gap-5 flex flex-col py-10 max-sm:pt-30 lg:pt-30 max-sm:py-15 md:m-5'>
        <h3 className='text-3xl lg:text-5xl'>My Latest Work</h3>
        <p className='mb-5 font-medium text-lg text-center max-sm:text-sm'>Check out on what I've been working on. Get your awesome, fast and responsive websites here!</p>

        <div className='flex max-sm:flex-col lg:p-2 gap-10 lg:m-20 max-sm:m-7 transition-all'>
          <div className='bg-gray-300 p-5 duration-500 hover:scale-110 rounded-[10px]'>
            <img src={web_shot1} alt="" />
          </div>
          <div className='bg-gray-300 p-5 duration-500 hover:scale-110 rounded-[10px]'>
            <img src={web_shot2} alt="" />
          </div>
          <div className='bg-gray-300 p-5 duration-500 hover:scale-110 rounded-[10px]'>
            <img src={web_shot3} alt="" />
          </div>
        </div>

    </div>
  )
}

export default Work