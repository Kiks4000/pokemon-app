import React from 'react'
import Pokeball from './img/pokeball.png'

export default function Title() {
    return (
        <>
        <h1 className='title'>CATCH EM ALL <img className='pokeball' src={Pokeball} alt="pokeball" /></h1>
        </>
    )
}
