import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function CustomHookDocumentTitleOne() {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])
    useDocumentTitle(count, 'Count One')
    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Count One: {count}</button>
        </div>
    )
}

export default CustomHookDocumentTitleOne