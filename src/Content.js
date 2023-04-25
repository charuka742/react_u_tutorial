import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const name = ["supun", "charuka", "Pramod"];
        const int = Math.floor(Math.random() * 3);
        return name[int];
    }
    

  return (
    <div>
        <small>This was created by {handleNameChange()}!</small>
    </div>
  )
}

export default Content