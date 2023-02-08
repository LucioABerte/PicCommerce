import React, { useState, useEffect } from 'react'
const Context = React.createContext()

const ContextProvider = (props) => {

    const [allPics, setAllPics] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    function toggleFavorite(id) {
        const updatedArr = allPics.map(photo => {
            if( photo.id === id){
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPics(updatedArr)
    }

    useEffect(() => {
      
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPics(data))
    
    }, [])
    
    return (
        <Context.Provider value={{allPics, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}