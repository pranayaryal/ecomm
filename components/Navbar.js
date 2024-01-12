import { useState } from 'react'
import Logo from './logo';
import DropdownPage from './DropdownPage';
import { DropdownAll } from './DropdownAll';

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
                <Logo />
                <div className='flex justify-between items-center space-x-8'>
                    <DropdownPage />
                    {/* <DropdownAll /> */}
                    <div className='p-[0.2px] border-b-1 border-transparent hover:border-b hover:border-dark-slate-grey'>Pricing</div>
                    <div className='p-[0.2px] border-b-1 border-transparent hover:border-b hover:border-dark-slate-grey'>Company</div>
                    <div className='p-[0.2px] border-b-1 transition duration-100 ease-in-out border-transparent hover:border-b hover:border-dark-slate-grey'>Learn more</div>
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
