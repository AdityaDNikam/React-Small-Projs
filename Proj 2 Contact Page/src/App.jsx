import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Form from "./components/Form"

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Form />
    </div>
  )
}

export default App
