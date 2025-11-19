import React, { useState } from 'react'
import menu_icon from '../../src/assets/menu_icon.png'
import close_icon from '../../src/assets/close_icon.png'
const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='bg-gray-900/70 sm:px-12 lg:px-24 xl:px-40 flex items-center justify-between px-4 py-4
    sticky top-0 z-20 backdrop-blur-xl font-medium'>

      <h3 className='text-white text-xl'>KOD</h3>
       
      <div className={`text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex 
        sm:items-center gap-5 transition-all`}>

        <img src={close_icon} className='w-5 absolute right-4 top-7 sm:hidden' onClick={() => setSidebarOpen(false)} alt="" />
        
        <a href="#" onClick={() => setSidebarOpen(false)} className='sm:hover:border-b'>Home</a>
        <a href="#skills" onClick={() => setSidebarOpen(false)} className='sm:hover:border-b'>Skills</a>
        <a href="#work" onClick={() => setSidebarOpen(false)} className='sm:hover:border-b'>Work</a>
        <a href="#contact" onClick={() => setSidebarOpen(false)} className='sm:hover:border-b'>Contact</a>


      </div>
      <div className='flex items-center gap-2 sm:gap-4'>

        <img className='sm:hidden w-8 justify-end' src={menu_icon} alt="" onClick={() => setSidebarOpen(true)}/>

        <a href="#contact" className='max-sm:hidden'>
          <button className='bg-primary rounded-full text-white px-4 py-2 hover:scale-103 cursor-pointer
          hover:bg-linear-to-r from-[#447cb0] to-[#1c43ae]'>
            Get in touch
          </button>
        </a>

      </div>

    </div>
  )
}

export default Navbar