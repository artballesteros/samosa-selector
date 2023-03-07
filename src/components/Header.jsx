import React from 'react'
import { useState } from 'react'
import samosa from '../assets/samosa.png'

const Header = (prop) => {
    const updateCount = () => prop.setCount(prop.count + prop.multiplier)

    return (
        <div className='header'>
            <h1>Samosa Selector</h1>
            <h2>count: {prop.count}</h2>
            <img className='samosa' src={samosa} onClick={updateCount}/>
        </div>
    )
}

export default Header