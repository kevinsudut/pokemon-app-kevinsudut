import React from 'react'
import style from '../../style/index'
import PokemonData from './PokemonData'

function MyPokemon() {
    let database = JSON.parse(localStorage.getItem('database'))
    if (!database) {
        database = []
    }

    return (
        <React.Fragment>
            <style.Main>
                <style.PageTitle>My Pokemon</style.PageTitle>
            </style.Main>
            <PokemonData />
        </React.Fragment>
    )
}

export default MyPokemon
