import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const [name, setName] = useState('')
    const navigate = useNavigate();
    const handleChange = (e) => {
      setName(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log(name);
    // navigate to the room page
        console.log(name);
        navigate('/room')
    }
  return (
    <>
        <div className="App flex flex-col items-center justify-center min-h-screen " >
            <h1 className=' font-bold text-5xl m-3' style={{ color: '#FFFFFF' }} >Welcome to Ink-Spill</h1>
            <div className=''>
                <input className=' w-64 h-8 rounded-sm text-black ml-8' type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
                <button className=' m-8 h-8 rounded-lg w-28 bg-green-300' onClick={handleSubmit} >Join Room</button>
            </div>
        </div>
    </>
  )
}
