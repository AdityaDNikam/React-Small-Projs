import React, { useState } from 'react';

const ScoreBoard = ({ error, selectedNumber, tosetSelectedNum, totalScore = 0 }) => {
    // Array to map through to generate the buttons cleanly
    const diceNumbers = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex items-end justify-between w-full max-w-[1280px] mx-auto p-4 font-sans max-md:flex-col max-md:items-center max-md:gap-10">

            {/* Left Column: Total Score Display */}
            <div className="flex flex-col items-center">
                <h1 className="text-[100px] leading-[0.9] font-medium text-black m-0">
                    {totalScore}
                </h1>
                <p className="text-2xl font-medium text-black m-0 mt-2">
                    Total Score
                </p>
            </div>

            {/* Right Column: Number Selector */}
            <div className="flex flex-col items-end max-md:items-center">

                {/* Buttons Row */}
                <div className="flex gap-4 mb-4 max-sm:gap-2">
                    {diceNumbers.map((num) => (
                        <button
                            key={num}
                            onClick={() => tosetSelectedNum(num)}
                            className={`
                w-[72px] h-[72px] flex justify-center items-center text-2xl font-bold border-2 border-black 
                transition-all duration-200 cursor-pointer max-sm:w-[50px] max-sm:h-[50px]
                ${selectedNumber === num
                                    ? 'bg-black text-white'
                                    : 'bg-white text-black hover:bg-gray-100'
                                }
              `}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                {/* Subtext */}
                <div className="text-2xl font-bold m-0 h-10">
                    {error ? (
                        <p className="text-red-600 text-xl font-bold transition-all duration-200">
                            {error}
                        </p>
                    ) : (
                        <p className="text-black transition-all duration-200">
                            Select Number
                        </p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ScoreBoard;