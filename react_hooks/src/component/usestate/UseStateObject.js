import React, { useState } from 'react'

function UseStateObject() {

    const [name, setName] = useState({firstname: '', lastName: ''})

    return(
        <div>
            <input type="text" value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />

            <h2> First Name is : {name.firstname}</h2>
            <h2> Last Name is : {name.lastName}</h2>
            <h2> {JSON.stringify(name)} </h2>
        </div>
    )
}

export default UseStateObject