import React, { useState } from 'react'
import style from '../../../style/index'

function ReleasePokemon({ pokemon }) {
    const [state, setstate] = useState(false)

    return (
        <React.Fragment>
            { !state ? 
                <style.ButtonRelease onClick={() => {
                    let database = JSON.parse(localStorage.getItem('database'))
                    if (!database) {
                        database = []
                    }
                    database = database.filter(v => v.nickname != pokemon.nickname)
                    localStorage.setItem('database', JSON.stringify(database))
                    setstate(true)
                }}>Release Pokemon</style.ButtonRelease>
            : null }
            { state ? <style.AlertSuccess>Successfully release pokemon</style.AlertSuccess> : null }
        </React.Fragment>
    )
}

export default ReleasePokemon
