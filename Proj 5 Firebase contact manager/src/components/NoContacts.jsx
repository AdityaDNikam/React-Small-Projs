import React from 'react'
import noContactsImg from '../assets/Photos/noContactImg.png'

function NoContacts() {
    return (
        <div className='flex flex-wrap flex-row justify-center items-center'>
            <div className='Image-No-Contacts flex'>
                <img src={noContactsImg} alt="" />
            </div>
            <div className='Info-No-Contacts flex'>
                <h3>No Contact Found</h3>
            </div>
        </div>
    )
}

export default NoContacts