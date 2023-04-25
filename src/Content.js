import React from 'react'
import SuccessAlert from './Alerts/Success';


const Content = () => {
  const handleNameChange = () => {
    const name = ["supun", "charuka", "Pramod"];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }
  const handleClick = () => {
  
  }

  return (
    <div className="items items-center">
      <h4 className="p-4 m-1">This was created by {handleNameChange()}!</h4>
      <p className="p-4 m-1">This is a testing tailwind. </p>
      <button onClick={handleClick} className='p-2 m-3 bg-cyan-500 border-40 border-black-300 rounded-full font-bold uppercase'>click me!</button>
      
    </div>
  )
}

export default Content