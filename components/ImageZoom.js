import React from 'react'
import { useRef } from 'react'

export default function ImageZoom() {
    const imageRef = useRef()
    const getCursor = () => {
        // let e = window.event
        let bounds = imageRef.getBoudingClientRect()
        console.log(bounds)
    }

    return (
        <div id="img-container">
            <div id="lens"></div>
            <img
                className='pointer' 
                onClick={() => getCursor()}
                id="featured" ref={imageRef} src="/shoe1.jpg" />

        </div>
    )
}
