import React from 'react';
import Logo from "../assets/Frame 2 1.png"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-6 px-[10%] bg-white font-['Poppins',sans-serif]">
            <div className="flex-shrink-0">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-[50px] object-contain"
                />
            </div>

            <ul className="flex gap-12 list-none m-0 p-0">
                <li>
                    <a
                        href="/"
                        className="text-[#2b2b2b] text-base font-semibold tracking-[0.5px] transition-opacity duration-200 ease-in-out hover:opacity-70"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/about"
                        className="text-[#2b2b2b] text-base font-semibold tracking-[0.5px] transition-opacity duration-200 ease-in-out hover:opacity-70"
                    >
                        ABOUT
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="text-[#2b2b2b] text-base font-semibold tracking-[0.5px] transition-opacity duration-200 ease-in-out hover:opacity-70"
                    >
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;