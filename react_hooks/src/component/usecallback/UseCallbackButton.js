import React from 'react'

function UseCallbackButton({handleClick, children}) {
    console.log(`Use callback Button ${children}`)
    return(
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(UseCallbackButton)