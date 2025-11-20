import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'


const App = () => {
  return (
    <div className='bg-black'>
      <Toaster />
        <Navbar />
        <Hero />
        <Skills />
        <Work />
        <Contact />
        <Footer />
    </div>
  )
}

export default App