import React from 'react'

function AddContact() {
    return (
        <div className='absolute top-0 left-0 w-[500px] h-screen bg-black/40 backdrop-blur-md flex justify-center items-center z-[100]'>
            <div className="flex flex-col w-[460px] bg-white rounded-xl p-[24px] my-[10px] mx-[20px] shadow-md">
                <div className="flex flex-col gap-[6px] mb-[16px] w-full">
                    <label className="text-[20px] font-medium text-black text-left">Name</label>
                    <input
                        type="text"
                        className="w-full border-black border-[1px] rounded-md h-[44px] px-[12px] text-[18px] text-black bg-white focus:outline-none"
                    />
                </div>

                <div className="flex flex-col gap-[6px] mb-[24px] w-full">
                    <label className="text-[20px] font-medium text-black text-left">Email</label>
                    <input
                        type="text"
                        className="w-full border-black border-[1px] rounded-md h-[44px] px-[12px] text-[18px] text-black bg-white focus:outline-none"
                    />
                </div>

                <div className="flex justify-end w-full">
                    <button className="bg-[#FCCA3F] border-black border-[1px] rounded-md px-[18px] py-[8px] text-[18px] font-medium text-black hover:bg-[#ebd04e] transition-colors cursor-pointer">
                        Add Contact
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddContact
