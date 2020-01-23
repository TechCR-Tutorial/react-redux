import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseReducerFetchByUseState() {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect( () => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError(error.message)
            })
    }, [])

    return(
        <div>
            <h2> Fetch With Use State ..</h2>
            {loading ? 'Loading...' : post.title}
            {error ? `Error: ${error}` : ''}
        </div>
    )
}

export default UseReducerFetchByUseState