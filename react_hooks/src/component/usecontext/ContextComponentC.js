import React from 'react'
import { UserContext, ChannelContext } from './ContextComponent'

function ContextComponentC() {
    return(
        <div>
            <h2> Context in normal use. </h2>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                { channel => {
                                    return(
                                        <div>
                                            User Context Value {user} @Channel {channel}
                                        </div>
                                    )
                                } }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ContextComponentC