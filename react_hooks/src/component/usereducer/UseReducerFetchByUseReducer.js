import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: false,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'fetch':
            return {loading: true}
        case 'fetch-sucess':
            return {loading: false, post: action.payload, error: null}
        case 'fetch-error':
            return {loading: false, post: {}, error: action.payload}
        default:
            return state
    }
}

function UseReducerFetchByUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({action: 'fetch'})
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'fetch-sucess', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'fetch-error', payload: error.message})
            })
    }, [])
    return(
        <div>
            <h2> Fetch With Use Reducer ..</h2>
            {state.loading ? 'Loadig ...' : state.post.title}
            {state.error ? `Error: ${state.error}` : ''}
        </div>
    )
}

export default UseReducerFetchByUseReducer