import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NoContacts from './components/NoContacts'
import Navbar from './components/Navbar'
import searchBarContaxt from './assets/context/Search_barContext'

function App() {
  const [search, setSearch] = useState(null)

  return (
    <searchBarContaxt.Provider value={[search, setSearch]}><div className="bg-black h-screen w-full flex justify-center">
      <div className='bg-gray-900 w-[500px] h-screen flex flex-col'>
        <Navbar />
        <NoContacts />
      </div>
    </div>
    </searchBarContaxt.Provider>
  )
}

export default App
