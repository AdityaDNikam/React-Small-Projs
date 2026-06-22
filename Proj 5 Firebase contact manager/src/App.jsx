import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NoContacts from './components/NoContacts'
import Navbar from './components/Navbar'
import searchBarContaxt from './assets/context/Search_barContext'
import ContactDet from './components/ContactDet'
import AddContact from './components/AddContact'
import { collection, getDocs } from "firebase/firestore"
import { db } from "./Config/firebase"

function App() {
  const [search, setSearch] = useState(null)
  const [contact, setContact] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "Contacts")
        const contactData = await getDocs(contactRef);
        const contact_list = contactData.docs.map((docs) => {
          return {
            id: docs.id,
            ...docs.data(),
          };
        })
        setContact(contact_list);
      }
      catch (error) {
        console.log(error)
      }
    }
    getContacts();

  }, [])

  return (
    <searchBarContaxt.Provider value={[search, setSearch]}><div className="bg-black h-screen w-full flex justify-center">
      <div className='bg-gray-900 w-[500px] h-screen flex flex-col relative'>
        <Navbar />
        {/* Conditionally rendering ContactDet and AddContacts*/}
        {contact.length === 0 ? (
          <NoContacts />
        ) : (
          contact.map((contacts) => (
            <ContactDet
              key={contacts.id}
              name={contacts.Name}
              email={contacts.Email}
            />
          ))
        )}

        {/* <NoContacts /> */}
        {/* <AddContact /> */}
      </div>
    </div>
    </searchBarContaxt.Provider>
  )
}

export default App
