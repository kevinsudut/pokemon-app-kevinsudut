import React from 'react'
import style from '../../style/index'
import query from '../../GraphQL/Query'
import { useQuery } from '@apollo/client'
import Loading from '../../components/Loading'
import Helper from '../../Helper/index'
import CatchPokemon from './CatchPokemon'

function PokemonData({ name }) {
    const { loading, error, data } = useQuery(query.byName, {
        variables: {
            name: name,
        },
    })

    if (loading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return 'Error...'
    }

    let pokemon = {
        'id': null,
        'name': null,
        'image': null,
        'types': [],
        'moves': [],
    }

    if (data) {
        if (data.pokemon.id == null) {
            window.location.assign("/");
        }

        pokemon.id = data.pokemon.id
        pokemon.name = Helper.UppercaseByDelimeter(data.pokemon.name, ' ')
        pokemon.image = data.pokemon.sprites.front_default
        pokemon.types = data.pokemon.types.map(v => Helper.UppercaseByDelimeter(v.type.name, ' '))
        pokemon.moves = data.pokemon.moves.map(v => Helper.UppercaseByDelimeter(v.move.name, '-'))
        pokemon.moves = pokemon.moves.sort(() => Math.random() - Math.random()).slice(0, 4)
    }

    return (
        <React.Fragment>
            <style.Main>
                <style.PageTitle>{ Helper.PokemonId(pokemon.id)} { pokemon.name }</style.PageTitle>
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
                <CatchPokemon pokemon={pokemon} />
            </style.Main>
        </React.Fragment>
    )
}

export default PokemonData
