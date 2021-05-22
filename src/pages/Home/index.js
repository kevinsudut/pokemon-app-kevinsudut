import React from 'react'
import style from '../../style/index'
import PokemonData from './PokemonData'

function Home() {
    return (
        <React.Fragment>
            <style.Main>
                <style.PageTitle>Pokemon List</style.PageTitle>
            </style.Main>
            <PokemonData />
        </React.Fragment>
    )
}

export default Home
