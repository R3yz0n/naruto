import React from 'react'
import classes from './AnimatedButton.module.css'

const AnimatedButton = (p) => {
    return (

        <li className={`${classes.li} ${p.className}`}><a href={`#${p.children}`}>{p.children}</a></li>
    )
}

export default AnimatedButton