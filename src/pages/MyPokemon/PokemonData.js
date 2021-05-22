import React, { useState } from 'react'
import style from '../../style/index'
import Helper from '../../Helper/index'
import { Link } from 'react-router-dom'

function PokemonData() {
    const [index, setIndex] = useState(1)

    const item = 20

    let database = JSON.parse(localStorage.getItem('database'))
    if (!database) {
        database = []
    }
    let show = database.slice((index - 1) * item, index * item)

    const [pokemon, setPokemon] = useState(show)

    return (
        <React.Fragment>
            <style.CenterContent>
                { pokemon.length == 0 ? <style.AlertInfo>You have not caught any pokemon</style.AlertInfo> : 
                    pokemon && (
                        <>
                            <style.CenterContent>
                                {pokemon.map((data) => (
                                    <style.PokemonList key={data.id + data.nickname}>
                                        <Link to={`/my-detail/${data.nickname}`}>
                                            <style.PokemonImageContainer>
                                                <style.PokemonImage alt={data.name} src={data.image}></style.PokemonImage>
                                            </style.PokemonImageContainer>
                                        </Link>
                                        <style.PokemonInformation>
                                            <div>{Helper.PokemonId(data.id)} {Helper.UppercaseByDelimeter(data.name, ' ')}</div>
                                            <h4>{Helper.UppercaseByDelimeter(data.nickname, ' ')}</h4>
                                        </style.PokemonInformation>
                                        <style.ButtonRelease onClick={() => {
                                            database = database.filter(v => v.nickname != data.nickname)
                                            localStorage.setItem('database', JSON.stringify(database))
                                            setIndex(index)
                                            setPokemon(database.slice((index - 1) * item, (index) * item))
                                        }}>Release Pokemon</style.ButtonRelease>
                                    </style.PokemonList>
                                ))}
                            </style.CenterContent>
                            {item < database.length ?
                                <style.CenterContent>
                                    <style.Pagination>
                                        <style.PaginationItem onClick={() => {
                                            if (index > 1) {
                                                setIndex(index - 1)
                                                setPokemon(database.slice((index - 1 - 1) * item, (index - 1) * item))
                                            }
                                        }}>&lt; Previous</style.PaginationItem>
                                        <style.PaginationItem onClick={() => {
                                            if ((index) * item < database.length) {
                                                setIndex(index + 1)
                                                setPokemon(database.slice((index + 1 - 1) * item, (index + 1) * item))
                                            }
                                        }}>Next &gt;</style.PaginationItem>
                                    </style.Pagination>
                                </style.CenterContent> : null }
                        </>
                )}
            </style.CenterContent>
        </React.Fragment>
    )
}

export default PokemonData
