import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PlayBoard from './PlayBoard';
import DiceImg from './DiceImg';

function GamePage() {
    const navigate = useNavigate();
    const [userSelectedNumber, setUserSelectedNumber] = useState(null);
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");


    const handleClick = () => {
        navigate("/");
    }
    // Function to decide the random dice number (1-6)
    const RandomDiceNum = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Function to handle selected number changes and reset errors
    const handleSelectNumber = (num) => {
        setUserSelectedNumber(num);
        setError("");
    };

    // Update the number of dices and run calculations
    const rollDice = () => {
        if (userSelectedNumber === null) {
            setError("You have not selected any number");
            return;
        }

        const newRoll = RandomDiceNum();
        setCurrentDice(newRoll);

        // Run calculation directly with newRoll to avoid reading stale currentDice state
        if (userSelectedNumber === newRoll) {
            setScore((prev) => prev + newRoll);
        } else {
            setScore((prev) => prev - 2);
        }
    };

    return (
        <div className='w-full'>
            <PlayBoard
                selectedNumber={userSelectedNumber}
                tosetSelectedNum={handleSelectNumber}
                totalScore={score}
                error={error}
            />
            <div className='flex flex-col items-center justify-center w-full mt-16 gap-4'>
                <DiceImg DiceImg={currentDice} rollDice={rollDice} />
                <button
                    className='bg-gray-400 hover:bg-gray-800 active:scale-95 transition-all duration-200 rounded-md h-[45px] px-6 font-bold text-black flex justify-center items-center text-center mt-5 shadow-sm'
                    onClick={handleClick}
                >
                    Exit Game, As You Couldn't Handle Losing So Much
                </button>
            </div>
        </div>
    )
}

export default GamePage;