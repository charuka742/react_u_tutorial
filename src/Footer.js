import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <div className="flex flex-col justify-end  items item-font-bold text-[#fff34b] text-md bg-[#0284c7] border rounded-sm ">
        <p className='flex justify-center'>
            <i>Copyright &copy; {today.getFullYear()}</i>
        </p>
    </div>
  )
}

export default Footer