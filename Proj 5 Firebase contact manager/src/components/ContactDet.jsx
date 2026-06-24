import React, { useContext } from 'react'
import ProfileHolder from "../assets/Photos/ph_user-circle-thin.png"
import EditIcon from "../assets/Photos/mdi_circle-edit-outline.png"
import DeleteIcon from "../assets/Photos/mdi_trash-can-empty.png"
import AddForm_Context from '../assets/context/AddForm_Context'
import { db } from '../Config/firebase'
import { doc, deleteDoc } from 'firebase/firestore'

function ContactDet({ id, name, email }) {
    const [open, setOpen] = useContext(AddForm_Context)

    const deleteContact = async (id) => {
        try {
            const contactRef = doc(db, "Contacts", id);
            await deleteDoc(contactRef);
        } catch (error) {
            console.error("Error deleting contact: ", error);
        }
    }

    return (
        <div className="Contact-Det-Main max-h-[53px] flex justify-between items-center row p-[10px] w-[460px] bg-white rounded-md my-[10px] mx-[20px]">
            <div className='Profile icon flex row jsutify-start '>
                <img src={ProfileHolder} alt="Profile Placeholder" className='mr-[5px]' />
                <div className='Contact Info'>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='Edit-Box m-[5px] cursor-pointer' onClick={() => setOpen({ isOpen: true, contact: { id, name, email } })}>
                    <img src={EditIcon} alt="Edit Icon" />
                </div>
                <div className='Delete-Box m-[5px] cursor-pointer' onClick={() => deleteContact(id)}>
                    <img src={DeleteIcon} alt="Delete Icon" />
                </div>
            </div>
        </div>
    )
}

export default ContactDet