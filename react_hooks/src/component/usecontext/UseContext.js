import React, { useContext } from 'react'
import { UserContext, ChannelContext } from './ContextComponent'

function UseContext() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
        <div>
            <h2> Use Context with hooks. </h2>
            <h2> Use Context with hooks user: {user} @Channel: {channel}</h2>
        </div>
    )
}

export default UseContext