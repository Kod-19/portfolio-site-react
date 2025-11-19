import React from 'react'
import react_icon from '../../src/assets/react_icon.png'
import javascript_icon from '../../src/assets/javascript_icon.png'
import tailwindcss_icon from '../../src/assets/tailwindcss_icon.png'
import html_icon from '../../src/assets/html5_icon.png'

const Skills = () => {
  return (
    <div id='skills' className='text-white flex flex-col items-center sm:gap-7 max-sm:pb-7 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30'>
      <h3 className='text-3xl sm:text-3xl'>How can I help?</h3>
      <p className='mb-5 text-center sm:text-lg max-w-4/5 sm:max-w-lg text-sm'>Get your affordable websites here, built with the best tools.</p>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 w-full pb-20 gap-6 items-center lg:max-w-lg '>
        
        <div className='flex flex-col items-center gap-2 rounded-[10px] p-3 hover:scale-120 duration-700'>
          <img className='w-16 h-16 object-contain' src={react_icon} alt="React" />
          <p className='text-center text-sm font-medium'>React</p>
        </div>

        <div className='flex flex-col items-center gap-2 rounded-[10px] p-3 hover:scale-120 duration-700'>
          <img className='w-16 h-16 object-contain' src={javascript_icon} alt="JavaScript" />
          <p className='text-center text-sm font-medium'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center gap-2 rounded-[10px] p-3 hover:scale-120 duration-700'>
          <img className='w-16 h-16 object-contain' src={html_icon} alt="HTML5" />
          <p className='text-center text-sm font-medium'>HTML5</p>
        </div>

        <div className='flex flex-col items-center gap-2 rounded-[10px] p-3 hover:scale-120 duration-700'>
          <img className='w-16 h-16 object-contain' src={tailwindcss_icon} alt="Tailwindcss" />
          <p className='text-center text-sm font-medium'>Tailwindcss</p>
        </div>

      </div>

    </div>

  )
}

export default Skills