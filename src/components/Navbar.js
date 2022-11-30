import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import AnimatedButton from '../UI/AnimatedButton';

const Navbar = () => {

    const [nav, setNav] = useState(true);
    const navItems = [{ title: 'home' }, { title: 'company' }, { title: 'resources' }, { title: 'about' }, { title: 'contact' }];
    const handleNav = () => setNav(!nav);


    return (

        <div className='flex justify-between items-center max-w-[1240px] mx-auto text-white  px-4 '>

            <h1 className='md:text-[2.3rem] w-[80vh] text-2xl font-bold text-[#00df9a] '>ANIME~Io</h1>

            <ul className='hidden md:flex uppercase font-bold lg:text-[1.1rem] pt-2'>
                {navItems.map((item, index) => <AnimatedButton className='flex p-3 ease-linear' key={index}>{item.title}</AnimatedButton>)}
            </ul>


            <div onClick={handleNav} className='block md:hidden pt-2'>
                {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>


            {/* side nav bar */}
            <div className={!nav ?
                'fixed left-0 top-0 w-[40%] h-full pl-2 border-r border-r-gray-900 bg-[#000000e3] ease-in-out duration-300' : 'fixed left-[-100%]'}>

                <ul className='pt-[8vh] uppercase font-bold'>
                    {navItems.map((item, index) => <AnimatedButton className='flex p-3 ease-linear' key={index}>{item.title}</AnimatedButton>)}
                </ul>

            </div>


        </div>
    )
}

export default Navbar