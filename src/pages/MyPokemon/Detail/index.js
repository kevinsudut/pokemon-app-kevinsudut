import React from 'react'
import { useParams } from 'react-router'
import PokemonData from './PokemonData'

function MyPokemonDetail() {
    const { name } = useParams()

    return (
        <React.Fragment>
            <PokemonData name={name} />
        </React.Fragment>
    )
}

export default MyPokemonDetail;
