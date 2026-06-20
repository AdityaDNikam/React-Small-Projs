import React from 'react'
import FireBaselogo from "../assets/Photos/logos_firebase.svg"
import { useContext } from 'react'
import searchBarContext from '../assets/context/Search_barContaxt'

function Navbar() {
    const [search, setSearch] = useContext(searchBarContext)

    const ChamgeHandler = () => {
        console.log(setSearch)
    }
    return (
        <div className='flex flex-col justify-center'>
            <div className="Fb-logo bg-white flex flex-wrap justify-center items-center my-[10px] rounded-md min-w-[380px] ml-[20px] mr-[20px]" >
                <img src={FireBaselogo} alt="" />
                <h2>Fire-Base Contact App</h2>
            </div>
            <div className='search-bar flex justify-center items-center '>
                <input className='border-[1px] rounded-md border-gray-700 min-w-[420px] h-[30px] text-gray-500 placeholder:text-gray-500 p-[8px]' type="text" placeholder='search'
                    onChange={(e) => {
                        setSearch(e.target.value)
                        ChamgeHandler()
                    }} />
                <button className='rounded-[50%] h-[30px] w-[30px] bg-white ml-[5px]'> <p className='text-xl mb-[2px]'>+</p></button>
            </div>
        </div>
    )
}
export default Navbar