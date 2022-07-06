import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <div className='pokeList'>
            {pokemon.map(p => (
                <div className='pokeItem' key={p}>
                    {p}
                </div>
            ))}
        </div>
    )
}
