import React from 'react'

const Button = (p) => {
    return (
        <button className={`bg-blue-500 text-white font-medium  border-black hover:bg-blue-400 hover:border-1 hover:border-black 
    px-2 mt-1 rounded mx-auto shadow-gray-900 shadow-md  cursor-pointer ${p.className} `}>{p.children}</button>
    )
}

export default Button