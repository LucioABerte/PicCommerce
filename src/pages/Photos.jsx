import React, { useContext } from "react"
import Image from "../components/Image"
import { Context } from "../context/Context"
import {getClass} from "../utils"

const Photos = () => {

    const {allPics} = useContext(Context)

    const images = allPics.map((img, i) => (
         <Image key={img.id} img={img} className={getClass(i)} /> 
    ))

    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos