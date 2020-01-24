import React from 'react'
import CustomHookDocumentTitleComponent from './titleupdate/CustomHookDocumentTitleComponent'
import CustomHookCounterComponent from './counter/CustomHookCounterComponent'
import CustomHookUseInputComponent from './useinput/CustomHookUseInputComponent'

function CustomHooksComponent() {
    return(
        <div>
            <CustomHookDocumentTitleComponent/>
            <CustomHookCounterComponent />
            <CustomHookUseInputComponent />
        </div>
    )
}

export default CustomHooksComponent