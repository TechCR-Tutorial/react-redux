import React from 'react'
import ClassCounter from './ClassCounter'
import UseEffectCounter from './UseEffectCounter'
import UseEffectConditionaly from './UseEffectConditionaly'
import UseEffectMouce from './UseEffectMouce'

function UseEffectComponent() {
    return(
        <div>
            <h1> Use Effect .... </h1>
            <ClassCounter />
            <UseEffectCounter />
            <UseEffectConditionaly />

            <UseEffectMouce />
        </div>
    )
}

export default UseEffectComponent