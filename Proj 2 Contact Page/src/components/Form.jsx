import React, { useState } from 'react';
import ServiceWoman from "../assets/ServiceWom.svg"

// Custom SVG Icon Components to match the image precisely
// These icons are designed to take 'currentColor' so their color can be controlled by Tailwind

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, text });
    };

    const clickMail = (e) => {
        e.preventDefault();
        console.log("Contact via Mail was chosen")
    }

    const clickCall = (e) => {
        e.preventDefault();
        console.log("Contact via Call was chosen")
    }
    return (
        <div className="flex justify-center mt-12">
            <div className="p-8 min-w-[457px] min-h-[472px] mx-auto font-['Poppins',sans-serif]">
                {/* Top Buttons (Support Chat and Call) */}
                <div className="flex gap-4 mb-6">
                    <button className="flex items-center justify-center gap-3 px-6 py-4 rounded bg-black text-white font-semibold uppercase text-sm tracking-wide flex-1 hover:opacity-90"
                        onClick={clickMail}>
                        Via Support Chat
                    </button>
                    <button className="flex items-center justify-center gap-3 px-6 py-4 rounded bg-black text-white font-semibold uppercase text-sm tracking-wide flex-1 hover:opacity-90"
                        onClick={clickCall}>
                        Via Call
                    </button>
                </div>

                {/* Middle Button (Email Form) */}
                <div className="mb-6">
                    <button className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded border border-black bg-white text-black font-semibold uppercase text-sm tracking-wide hover:bg-gray-100">
                        Via Email Form
                    </button>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                    {/* Name Input with Inset Label */}
                    <div className="relative mb-6 border border-gray-400 rounded">
                        <label htmlFor="name" className="absolute text-xs font-semibold text-black uppercase px-1 -top-2.5 left-4 bg-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-4 rounded text-black font-medium text-base focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* E-Mail Input with Inset Label */}
                    <div className="relative mb-6 border border-gray-400 rounded">
                        <label htmlFor="email" className="absolute text-xs font-semibold text-black uppercase px-1 -top-2.5 left-4 bg-white">
                            E-Mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-4 rounded text-black font-medium text-base focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* TEXT Textarea with Inset Label */}
                    <div className="relative mb-6 border border-gray-400 rounded">
                        <label htmlFor="text" className="absolute text-xs font-semibold text-black uppercase px-1 -top-2.5 left-4 bg-white">
                            TEXT
                        </label>
                        <textarea
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows={6}
                            className="w-full px-4 py-4 rounded text-black font-medium text-base focus:outline-none focus:ring-2 focus:ring-black h-48"
                        />
                    </div>

                    {/* Submit Button (Right Aligned) */}
                    <div className="flex justify-end mt-8">
                        <button type="submit" className="px-10 py-3.5 rounded bg-black text-white font-semibold uppercase text-sm tracking-wide hover:opacity-90">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <img src={ServiceWoman} alt="" />
            </div>
        </div>
    );
};

export default ContactForm;