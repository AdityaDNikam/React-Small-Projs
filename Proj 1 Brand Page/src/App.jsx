import { useState } from 'react'
import { Navbar, Hero } from './components/index'
import './App.css'

function App() {
  return (
    <div className="text-3xl font-bold">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
