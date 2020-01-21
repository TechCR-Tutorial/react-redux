import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectFetchList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log('useEffect - fetch by List...')
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return(
        <div>
            <h2>Default fetch List. </h2>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default UseEffectFetchList