import React from 'react'
import { useState } from 'react'
import Upgrade from './Upgrade.jsx'

const Container = (prop) => {
    return (
        <div className='container'>
            <Upgrade title={"Double Stuffed 👯‍♀"} 
                description={"2x per click"} 
                up={2}
                cost={10} 
                multiplier={prop.multiplier}
                setMultiplier={prop.setMultiplier}
                count={prop.count}
                setCount={prop.setCount}/>

            <Upgrade title={"Party Pack 🎉"} 
                description={"5x per click"} 
                up={5}
                cost={100} 
                multiplier={prop.multiplier}
                setMultiplier={prop.setMultiplier}
                count={prop.count}
                setCount={prop.setCount}/>

            <Upgrade title={"Full Feast 👩🏽‍🍳"} 
                description={"10x per click"} 
                up={10}
                cost={1000} 
                multiplier={prop.multiplier}
                setMultiplier={prop.setMultiplier}
                count={prop.count}
                setCount={prop.setCount}/>
        </div>
    )
}

export default Container