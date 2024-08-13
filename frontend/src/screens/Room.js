import React from 'react'
import DrawingCanvas from '../components/DrawingCanvas/DrawingCanvas.js';
import Navbar from './Navbar.js';

export default function Room() {
  return (
    <>
        <div className='' ><Navbar /></div>
        <div className='flex items-center justify-center flex-col' >
            <div className=' font-serif text-4xl mb-3 mt-3'>Hello welcome to the room</div>
            <div><DrawingCanvas /></div>
        </div>
    </>
  )
}
