import React, { useState } from 'react'

function CustomHookUseInputDefault() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitEvent = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }

    const reset = () => {
        setFirstName('')
        setLastName('')
    }

    return(
        <div>
            <form onSubmit={submitEvent}>
                <div>
                    <label>Default First Name</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Default Last Name</label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <button>Default Submit</button>
                
            </form>
            <button onClick={reset}>Default Reset</button>
        </div>
    )
}

export default CustomHookUseInputDefault