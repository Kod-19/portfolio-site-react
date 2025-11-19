import React from 'react'
import profile_pic from '../../src/assets/profile.jpeg'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 sm:gap-15 sm:py-40 py-20 max-sm:py-25 max-sm:pt-45 max-sm:pb-20 px-4 sm:px-12
    lg:px-24 xl:px-40 text-center w-full overflow-hidden text-white'>

        <img src={profile_pic} alt="" className='rounded-full w-35 hover:scale-140 duration-900' />

            <h3 className='text-2xl sm:text-2xl md:text-3xl xl:text-[30px] font-medium max-w-5xl'>I'm Kwame Dawson</h3>
            
            <p className='text-sm sm:text-lg font-medium text-white max-w-4/5 sm:max-w-lg pb-3'>
              I create clean, fast <span className='bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent'>
              React websites </span> and enjoy turning ideas into delightful user experiences.
            </p>
        
    </div>
  )
}

export default Hero