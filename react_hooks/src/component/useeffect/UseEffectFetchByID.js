import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectFetchByID() {
    const defaultMessage = 'By Text BOX'
    const [id, setId] = useState(1)
    const [post, setPost] = useState('')
    const [message, setMessage] = useState(defaultMessage)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        console.log('useEffect - fetch by input box id  ...')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    useEffect(() => {
        console.log('useEffect - fetch by button click id ...')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [idFromButtonClick])

    const handleButtonClick = () => {
        setIdFromButtonClick(id)
        setMessage('By Button')
    }

    return(
        <div>
            <h2> Get post just by entering value into text field. </h2>
            <input type="text" value={id} onChange={ e => {setId(e.target.value)
                 setMessage(defaultMessage)}} />
            <h2>{message} : {post.title}</h2>


            <h2> Get post by button click </h2>
            <button onClick={handleButtonClick}> Fetch Post </button>
        </div>
    )
}

export default UseEffectFetchByID