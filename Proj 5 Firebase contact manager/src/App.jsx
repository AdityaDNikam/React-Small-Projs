import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NoContacts from './components/NoContacts'
import Navbar from './components/Navbar'
import searchBarContaxt from './assets/context/Search_barContext'
import AddForm_Context from './assets/context/AddForm_Context'
import ContactDet from './components/ContactDet'
import AddContact from './components/ActionContact'
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "./Config/firebase"

function App() {
  const [search, setSearch] = useState(null)
  const [contact, setContact] = useState([])
  const [clicked, setClicked] = useState(false)
  const [open, setOpen] = useState({ isOpen: false, contact: null })

  useEffect(() => {
    const contactRef = collection(db, "Contacts")
    const unsubscribe = onSnapshot(contactRef, (snapshot) => {
      const contact_list = snapshot.docs.map((docs) => {
        return {
          id: docs.id,
          ...docs.data(),
        };
      })
      setContact(contact_list);
    }, (error) => {
      console.log(error);
    });

    return () => unsubscribe();
  }, [])

  const filteredContacts = contact.filter((c) => {
    if (!search) return true;
    return c.Name?.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <AddForm_Context.Provider value={[open, setOpen]}>
      <searchBarContaxt.Provider value={[search, setSearch]}>
        <div className="bg-black h-screen w-full flex justify-center">
          <div className='bg-gray-900 w-[500px] h-screen flex flex-col relative'>
            <Navbar />
            {/* Conditionally rendering ContactDet and AddContacts*/}
            {filteredContacts.length === 0 ? (
              <NoContacts />
            ) : (
              filteredContacts.map((contacts) => (
                <ContactDet
                  key={contacts.id}
                  id={contacts.id}
                  name={contacts.Name}
                  email={contacts.Email}
                />
              ))
            )}
            {open.isOpen ? (
              <AddContact />
            ) : null}
          </div>
        </div>
      </searchBarContaxt.Provider>
    </AddForm_Context.Provider>
  )
}

export default App
