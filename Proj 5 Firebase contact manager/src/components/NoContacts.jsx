import React from 'react'
import noContactsImg from '../assets/Photos/noContactImg.png'

function NoContacts() {
    return (
        <div className='w-[500px] h-screen flex justify-center items-center'>
            <div className='flex flex-wrap flex-row justify-center items-center'>
                <div className='Image-No-Contacts flex'>
                    <img src={noContactsImg} alt="" />
                </div>
                <div className='Info-No-Contacts flex text-white m-[5px]'>
                    <h3>No Contact Found</h3>
                </div>
            </div>
        </div>
    )
}

export default NoContacts