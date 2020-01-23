import React from 'react'

function UseCallbackTitle() {
    console.log(`Use Callback : Title`)
    return(
        <div>
            <h2> Use Callback Example:</h2>
        </div>
    )
}

export default React.memo(UseCallbackTitle)