import React from 'react'

function UseCallbackCount({text, value}) {
    console.log(`Use Call back Count ${text}`)
    return(
        <div>
            {text} - {value}
        </div>
    )
}

export default React.memo(UseCallbackCount)