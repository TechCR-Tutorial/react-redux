import React, { useState, useCallback } from 'react'
import UseCallbackTitle from './UseCallbackTitle'
import UseCallbackCount from './UseCallbackCount'
import UseCallbackButton from './UseCallbackButton'

function UseCallbackComponent() {
    const [age, setAge] = useState(30)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    }, [])

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 5000)
    }, [])

    return(
        <div>
            <UseCallbackTitle />
            <UseCallbackCount text='Age Increment' value={age} />
            <UseCallbackButton handleClick={incrementAge}> Increase Age</UseCallbackButton>
            <UseCallbackCount text='Salary Increment' value={salary} />
            <UseCallbackButton handleClick={incrementSalary}> Increase Salary</UseCallbackButton>
        </div>
    )
}

export default UseCallbackComponent