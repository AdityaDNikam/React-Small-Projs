import React from 'react'
import brandLogo from '../assets/brand_logo.png'

function Navbar() {
    return (
        <header className="max-h-[72px] site-header flex justify-between items-center p-[10px]">

            {/* 1. Logo Block */}
            <div className="logo-container">
                <a href="/">
                    {/* Replace this placeholder URL with your actual logo asset path */}
                    <img
                        src={brandLogo}
                        alt="Nike Logo"
                        className="logo"
                    />
                </a>
            </div>

            {/* 2. Navigation Block */}
            <nav className="nav-container ">
                <ul className="nav-links flex justify-between text-[12px] hover:underline">
                    <li className='pr-5 hover:underline' href="#">MENU</li>
                    <li className='pr-5 hover:underline' href="#">LOCATION</li>
                    <li className='pr-5 hover:underline' href="#">ABOUT</li>
                    <li className='pr-5 hover:underline' href="#">CONTACT</li>
                </ul>
            </nav>

            {/* 3. Button Block */}
            <div className="button-container ">
                <button className="login-btn bg-red-500 text-white text-[14px] font-medium m-[5px] py-[6px] px-[16px] border-gray-solid">Login</button>
            </div>

        </header>
    );
}

export default Navbar