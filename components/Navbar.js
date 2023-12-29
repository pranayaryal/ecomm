import { useState } from 'react'

import React from 'react'

export default function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return (
        <div className='px-44 py-8'>
            <div className='flex justify-between'>
                {/* Left */}
                <div className='uppercase flex space-x-8 justify-center items-center'>
                    <p className='hover:underline underline-offset-4'>Coolframes</p>
                    <div className='relative'>
                        <p className='hover:underline underline-offset-4'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>EyeGlasses</p>
                        {isDropdownVisible ??
                            <div className='absolute x-0 y-15 w-15 h-15 bg-pink-500'>
                                <p>You are here</p>
                            </div>
                        }
                    </div>
                    <p className='hover:underline underline-offset-4'>Sunglasses</p>
                    <p className='hover:underline underline-offset-4'>Kids</p>
                    <p className='hover:underline underline-offset-4'>Sale</p>
                </div>
                {/* Right */}
                <div className='flex space-x-4 items-center'>
                    <input type="text" className='px-4 py-2 bg-pink-50 outline-none rounded-full' placeholder='Search' />
                    <p className='uppercase'>Cart</p>

                </div>
            </div>
        </div>
    )
}
