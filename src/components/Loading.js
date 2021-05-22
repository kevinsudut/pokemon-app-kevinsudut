import React from 'react'
import style from '../style/index'

function Loading() {
    return (
        <React.Fragment>
            <style.Main>
                <style.Spinner></style.Spinner>
                <br></br>
                <span>Loading...</span>
            </style.Main>
        </React.Fragment>
    )
}

export default Loading
