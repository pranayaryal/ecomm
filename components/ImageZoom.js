import React from 'react'
import { useRef, useEffect, useState } from 'react'

export default function ImageZoom() {
  const [cursorPos, setCursorPos] = useState({})

  const imageRef = useRef(null)
  const lensRef = useRef(null)
  const getCursor = () => {
    // let e = window.event
    let bounds = imageRef.getBoudingClientRect()
    console.log(bounds)
  }


  useEffect(() => {

    const handleImageHover = (event) => {
      if (imageRef.current?.contains(event.target)) {
        const ratio = 5;
        let bounds = imageRef.current.getBoundingClientRect()
        let cursorX = event.pageX - bounds.left
        let cursorY = event.pageY - bounds.top
        let positionLeft = cursorX - (lensRef.current.offsetWidth / 2)
        let positionTop = cursorY - (lensRef.current.offsetHeight / 2)

        positionLeft = Math.max(positionLeft, 0)
        positionTop = Math.max(positionTop, 0)

        if (positionTop > imageRef.current.height - lensRef.current.offsetHeight / 3) {
          positionTop = imageRef.current.height - lensRef.current.offsetHeight / 3
        }

        if (positionLeft > imageRef.current.width - lensRef.current.offsetWidth / 3) {
          positionLeft = imageRef.current.width - lensRef.current.offsetWidth / 3
        }

        lensRef.current.style.left = positionLeft + 'px'
        lensRef.current.style.top = positionTop + 'px'

        lensRef.current.style.backgroundPosition = `-${(cursorX * ratio)}px -${(cursorY * ratio)}px`;
        lensRef.current.style.backgroundImage = `url(${imageRef.current.src})`
        // lensRef.current.style.backgroundImage = `url('/shoe1.jpg')`

      }
    };
    window.addEventListener('mousemove', handleImageHover)
    return () => window.removeEventListener('mousemove', handleImageHover)
  }, [])



  return (
    <div id="img-container" className='relative z-10 max-w-[800px]'>
      <div id="lens" ref={lensRef} className='absolute z-20 h-[125px] w-[125px] border-2 border-black cursor-none'></div>
      <img
        className='pointer border border-gray-700'
        id="featured" ref={imageRef} src="/preset1.png" />

    </div>
  )
}
