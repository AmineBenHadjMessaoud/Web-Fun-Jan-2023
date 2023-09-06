import React from 'react'
import {useParams} from 'react-router-dom'
function Colored() {
    const {wo,wcolor,bcolor} = useParams()
    return(
        <div style={{backgroundColor: bcolor}}>
            <h1 style={{color: wcolor}}>the word is: {wo}</h1>
        </div>
    )
}

export default Colored