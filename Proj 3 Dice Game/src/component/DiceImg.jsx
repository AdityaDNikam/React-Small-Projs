import React, { useState } from 'react'
import Dice1 from "../assets/Pic Assects/dice_1.png";
import Dice2 from "../assets/Pic Assects/dice_2.png";
import Dice3 from "../assets/Pic Assects/dice_3.png";
import Dice4 from "../assets/Pic Assects/dice_4.png";
import Dice5 from "../assets/Pic Assects/dice_5.png";
import Dice6 from "../assets/Pic Assects/dice_6.png";

// Map the imported image files to an object
const diceImages = {
    1: Dice1,
    2: Dice2,
    3: Dice3,
    4: Dice4,
    5: Dice5,
    6: Dice6
};

// DiceImg component
function DiceImg({ DiceImg, rollDice }) {
    return (
        <div onClick={rollDice} className="flex flex-col items-center justify-center cursor-pointer select-none">
            <img src={diceImages[DiceImg] || Dice1} alt={`Dice ${DiceImg}`} className="w-[250px] h-[250px] object-contain active:scale-95 transition-all duration-150" />
            <h3 className="text-2xl font-bold mt-4 text-gray-800">Click on Dice to Roll</h3>
        </div>
    )
}

export default DiceImg