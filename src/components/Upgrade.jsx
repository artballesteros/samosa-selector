import React from 'react'
import { useState } from 'react'

const Upgrade = (prop) => {
    const updateMultiplier = () => {
        if (prop.count >= prop.cost) {
            prop.setMultiplier(prop.multiplier * prop.up)
            prop.setCount(prop.count - prop.cost)
        }
    }

    return (
        <div className='upgrade'>
            <h3>{prop.title}</h3>
            <p>{prop.description}</p>
            <button onClick={updateMultiplier}>{prop.cost} Somosas</button>
        </div>
    )
}

export default Upgrade