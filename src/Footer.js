import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <div>
        <p>
            <i>Copyright &copy; {today.getFullYear()}</i>
        </p>
    </div>
  )
}

export default Footer