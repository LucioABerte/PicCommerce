import React, { useState, useEffect } from 'react'

const Context = React.createContext()

const ContextProvider = ({children}) => {

    const [allPics, setAllPics] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
      
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPics(data))
    
    }, [])
    
    return (
        <Context.Provider value={{allPics}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}