import React from 'react'
import ContextComponentB from './ContextComponentB'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function ContextComponent() {
    return(
        <div>
            <UserContext.Provider value={'Chamly'} >
                <ChannelContext.Provider value={'TechCR'} >
                    <ContextComponentB />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ContextComponent