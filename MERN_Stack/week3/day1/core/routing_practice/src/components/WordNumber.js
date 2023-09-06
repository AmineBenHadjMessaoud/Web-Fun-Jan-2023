import React from 'react'
import {useParams} from 'react-router-dom'
function WordNumber() {
    const {word} = useParams()
    if(isNaN(word)===true ){
        return <h1>the word is: {word}</h1>
    }else{
        return <h1>the number is: {word}</h1>
    }
}

export default WordNumber