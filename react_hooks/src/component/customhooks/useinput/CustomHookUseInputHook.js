import React from 'react'
import useInput from './useInput'

function CustomHookUseInputHook() {
    
    const [firstName, firstNameBind, firstNameReset] = useInput('')
    const [secondName, secondNameBind, secondNameReset] = useInput('')
    
    const submitEvent = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${secondName}`)
    }

    const reset = () =>{
        firstNameReset()
        secondNameReset()
    }

    return(
        <div>
            <form onSubmit={submitEvent}>
                <div>
                    <label>Hook First Name</label>
                    <input type="text" {...firstNameBind}/>
                </div>
                <div>
                    <label>Hook Last Name</label>
                    <input type="text" {...secondNameBind}/>
                </div>
                <button>Hook Submit</button>
                
            </form>
            <button onClick={reset}>Hook Reset</button>
        </div>
    )
}

export default CustomHookUseInputHook