import React, { useState } from 'react'
import style from '../../style/index'

function CatchPokemon({ pokemon }) {
    const [state, setstate] = useState(0)
    const [show, setShow] = useState(true)
    const [nickname, setNickname] = useState('')
    const [exists, setExists] = useState(true)
    const [submit, setSubmit] = useState(false)

    if (show) {
        return (
            <React.Fragment>
                <>
                    <style.Button onClick={() => {
                        setstate(Math.random())
                        setShow(false)
                    }}>Catch This Pokemon</style.Button>
                </>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <>
                { state >= 0.5 ?
                    <>
                            {!submit ? <style.AlertSuccess>Successfully catch this pokemon</style.AlertSuccess> : null }
                            { exists ?
                                <>
                                    <style.Input placeholder="Input pokemon nickname" required maxLength="20" onChange={(e) => {
                                        if (e.target.value != '') {
                                            setNickname(e.target.value)
                                        }
                                    }}></style.Input>
                                    <style.Button onClick={() => {
                                        if (nickname != '') {
                                            let database = JSON.parse(localStorage.getItem('database'))
                                            if (!database) {
                                                database = []
                                            }
                                            setSubmit(true)
                                            let found = database.filter(pokemon => pokemon.nickname.toLowerCase() == nickname.toLowerCase()).length > 0
                                            setExists(found)
                                            if (!found) {
                                                pokemon.nickname = nickname
                                                database.push(pokemon)
                                                localStorage.setItem('database', JSON.stringify(database))
                                            }
                                        }
                                    }}>Save Pokemon Data</style.Button>
                                </>
                            : null }
                        { nickname != '' && exists && submit ? <style.AlertDanger>Pokemon nickname already exists</style.AlertDanger> : null }
                        { nickname != '' && !exists && submit ? <style.AlertSuccess>Successfully save pokemon data</style.AlertSuccess> : null }
                    </>
                    : <style.AlertDanger>Failed to catch this pokemon</style.AlertDanger> }
            </>
        </React.Fragment>
    )
}

export default CatchPokemon
