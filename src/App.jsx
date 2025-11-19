import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'

const App = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <Hero />
        <Skills />
        <Work />
    </div>
  )
}

export default App