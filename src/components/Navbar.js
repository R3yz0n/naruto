import React from 'react'

const Navbar = () => {
    return (

        <div className='flex justify-between items-center mx-auto text-white border-2 border-green-900 '>
            <h1 className='w-screen text-3xl font-bold text-[#338333] border-2 border-red-900'>REACT.</h1>

            <ul className='flex'>
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contacts</li>
            </ul>

        </div>
    )
}

export default Navbar