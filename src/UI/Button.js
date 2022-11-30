import React from 'react'

const Button = (p) => {
    return (
        <button className={` px-5 py-1  mx-auto  rounded-md bg-[#00df9a] hover:bg-[#3bffc1]
         text-black ${p.className}`} onClick={p.onClick}>{p.children}</button>
    )
}

export default Button