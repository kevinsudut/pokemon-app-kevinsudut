import React, { useState } from 'react'
import style from '../../style/index'
import { Link } from 'react-router-dom'
import query from '../../GraphQL/Query'
import { useQuery } from '@apollo/client'
import Loading from '../../components/Loading'
import Helper from '../../Helper/index'

function PokemonData() {
    const offset = localStorage.getItem('offset')

    const [state, setstate] = useState(offset ? offset : 0)

    const { loading, error, data } = useQuery(query.pokemons, {
        variables: {
            limit: 20,
            offset: parseInt(state),
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

    return (
        <React.Fragment>
            {data && (
                <>
                    <style.CenterContent>
                        {data.pokemons.results.map((data) => (
                            <style.PokemonList key={data.id}>
                                <Link to={`/detail/${data.name}`}>
                                    <style.PokemonImageContainer>
                                        <style.PokemonImage alt={data.name} src={data.image}></style.PokemonImage>
                                        <style.Badge>{Helper.CountCatch(data.id)}</style.Badge>
                                    </style.PokemonImageContainer>
                                </Link>
                                <style.PokemonInformation>
                                    <div>{Helper.PokemonId(data.id)}</div>
                                    <h4>{Helper.UppercaseByDelimeter(data.name, ' ')}</h4>
                                </style.PokemonInformation>
                            </style.PokemonList>
                        ))}
                    </style.CenterContent>

                    <style.CenterContent>
                        <style.Pagination>
                            <style.PaginationItem onClick={() => {
                                if (state > 0) {
                                    setstate(parseInt(state) - 20)
                                    localStorage.setItem('offset', parseInt(state) - 20)
                                }
                            }}>&lt; Previous</style.PaginationItem>
                            <style.PaginationItem onClick={() => {
                                setstate(parseInt(state) + 20)
                                localStorage.setItem('offset', parseInt(state) + 20)
                            }}>Next &gt;</style.PaginationItem>
                        </style.Pagination>
                    </style.CenterContent>
                </>
            )}
        </React.Fragment>
    )
}

export default PokemonData
