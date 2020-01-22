import React from 'react'
import ContextComponentC from './ContextComponentC'
import UseContext from './UseContext'

function ContextComponentB() {
    return(
        <div>
            <ContextComponentC />
            <UseContext />
        </div>
    )
}

export default ContextComponentB