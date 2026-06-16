import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LanderPage from './component/LanderPage'
import DiceImg from './component/DiceImg'
import PlayBoard from './component/PlayBoard'
import GamePage from './component/GamePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LanderPage />} />
        <Route path='/Play' element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
