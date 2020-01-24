import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

function CustomHookDocumentTitleTwo() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])
    useDocumentTitle(count)
    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Count Two: {count}</button>
        </div>
    )
}

export default CustomHookDocumentTitleTwo