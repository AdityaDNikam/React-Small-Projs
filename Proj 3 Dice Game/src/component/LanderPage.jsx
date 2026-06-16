import React from 'react';
import { useNavigate } from 'react-router-dom';
import DiceLanderImg from "../assets/Pic Assects/dices 1.png";

const LanderPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Play");
    }

    return (
        <div className='w-screem h-screen flex justify-center items-center'>
            <div className="flex items-center justify-center w-full max-w-[1182px] h-[522px] mx-auto font-poppins max-md:flex-col max-md:h-auto max-md:py-10">

                {/* Left Column: Image */}
                <div className="flex-1 flex justify-center items-center h-full w-full">
                    <img
                        src={DiceLanderImg}
                        alt="Falling Dice"
                        className="max-w-full h-auto object-contain"
                    />
                </div>

                {/* Right Column: Content */}
                <div className="flex-1 flex flex-col items-end justify-center pr-5 max-md:items-center max-md:pr-0 max-md:mt-8">
                    <h1 className="text-[96px] font-black text-black leading-[1.1] mb-2.5 whitespace-nowrap max-lg:text-[72px] max-md:text-[64px] max-sm:text-[48px]">
                        DICE GAME
                    </h1>
                    <button className="bg-black text-white font-semibold text-base py-3.5 w-[220px] rounded-[4px] hover:bg-[#222222] active:scale-95 transition-all duration-200"
                        onClick={handleClick}
                    >
                        Play Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LanderPage;