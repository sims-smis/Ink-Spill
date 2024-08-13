import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div className=' mt-8 ml-8'>
      <button onClick={handleClick} className=' bg-red-400' >Leave Room</button>
    </div>
  )
}
