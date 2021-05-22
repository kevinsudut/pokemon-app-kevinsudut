import React from 'react'
import style from '../../../style/index'
import Helper from '../../../Helper/index'
import ReleasePokemon from './ReleasePokemon'

function PokemonData({ name }) {
    let database = JSON.parse(localStorage.getItem('database'))
    if (!database) {
        window.location.assign("/my-pokemon");
        database = []
    }
    const pokemon = database.filter(pokemon => pokemon.nickname == name)[0]
    if (!pokemon) {
        window.location.assign("/my-pokemon");
    }

    return (
        <React.Fragment>
            <style.Main>
                <style.PageTitle>{ Helper.PokemonId(pokemon.id)} { pokemon.name } ({pokemon.nickname})</style.PageTitle>
                <hr></hr>
                <style.PokemonImageContainerDetail>
                    <style.PokemonImageDetail alt={pokemon.name} src={pokemon.image}></style.PokemonImageDetail>
                </style.PokemonImageContainerDetail>
                <style.PokemonDetailContainer>
                    <style.PokemonDetailTitle>Types</style.PokemonDetailTitle>
                    <div>
                        {pokemon.types.map(type => (
                            <style.PokemonDetailList key={type}>{type}</style.PokemonDetailList>
                        ))}
                    </div>
                </style.PokemonDetailContainer>
                <style.PokemonDetailContainer>
                    <style.PokemonDetailTitle>Moves</style.PokemonDetailTitle>
                    <div>
                        {pokemon.moves.map(move => (
                            <style.PokemonDetailList key={move}>{move}</style.PokemonDetailList>
                        ))}
                    </div>
                </style.PokemonDetailContainer>
                <ReleasePokemon pokemon={pokemon} />
            </style.Main>
        </React.Fragment>
    )
}

export default PokemonData
