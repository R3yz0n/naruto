import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(true);
    const [navItems, setNavItems] = useState(['home', 'company', 'resources', 'about', 'contact']);
    const handleNav = () => setNav(!nav);


    return (

        <div className='flex justify-between items-center max-w-[1240px] mx-auto text-white  px-4'>

            <h1 className='md:text-3xl w-screen text-2xl font-bold text-[#338333] '>REACT.</h1>

            <ul className='hidden md:flex uppercase font-bold'>
                {navItems.map(item => <li className='p-4' key={Math.random()}>{item}</li>)}
            </ul>


            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>



            <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 ease-in-out duration-300' : 'fixed left-[-100%]'}>

                <ul className='pt-[8vh] uppercase font-bold'>
                    {navItems.map(item => <li className='p-4' key={Math.random()}>{item}</li>)}
                </ul>

            </div>


        </div>
    )
}

export default Navbar