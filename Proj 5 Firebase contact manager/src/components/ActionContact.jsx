import React, { useContext, useState } from 'react'
import AddForm_Context from '../assets/context/AddForm_Context'
import { db } from '../Config/firebase'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'

function AddContact({ }) {
    const [open, setOpen] = useContext(AddForm_Context)
    const [name, setName] = useState(open.contact ? open.contact.name : '')
    const [email, setEmail] = useState(open.contact ? open.contact.email : '')

    const handleSubmit = async () => {
        try {
            if (open.contact) {
                const contactRef = doc(db, "Contacts", open.contact.id);
                await updateDoc(contactRef, {
                    Name: name,
                    Email: email
                });
            } else {
                const contactRef = collection(db, "Contacts");
                await addDoc(contactRef, {
                    Name: name,
                    Email: email
                });
            }
            setOpen({ isOpen: false, contact: null });
        } catch (error) {
            console.error("Error saving contact: ", error);
        }
    }

    return (
        <div className='absolute top-0 left-0 w-[500px] h-screen bg-black/40 backdrop-blur-md flex justify-center items-center z-[100]'>
            <div className="flex flex-col relative w-[460px] bg-white rounded-xl p-[24px] my-[10px] mx-[20px] shadow-md">
                <button
                    onClick={() => setOpen({ isOpen: false, contact: null })}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer transition-colors"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col gap-[6px] mb-[16px] w-full">
                    <label className="text-[20px] font-medium text-black text-left">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-black border-[1px] rounded-md h-[44px] px-[12px] text-[18px] text-black bg-white focus:outline-none"
                    />
                </div>

                <div className="flex flex-col gap-[6px] mb-[24px] w-full">
                    <label className="text-[20px] font-medium text-black text-left">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-black border-[1px] rounded-md h-[44px] px-[12px] text-[18px] text-black bg-white focus:outline-none"
                    />
                </div>

                <div className="flex justify-end w-full">
                    <button onClick={handleSubmit}
                        className="bg-[#FCCA3F] border-black border-[1px] rounded-md px-[18px] py-[8px] text-[18px] font-medium text-black hover:bg-[#ebd04e] transition-colors cursor-pointer">
                        {open.contact ? "Update Contact" : "Add Contact"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddContact
