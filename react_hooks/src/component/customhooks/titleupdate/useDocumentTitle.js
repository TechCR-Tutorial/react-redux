import { useEffect } from 'react'

function useDocumentTitle(count, message = 'Count') {

    useEffect(() => {
        document.title = `${message} ${count}`
    }, [count, message])

}

export default useDocumentTitle