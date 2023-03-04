import React from 'react'

function Icon({ children, className = "", style = {}, onClick = () => { } }) {
  return (
    <div
      style={style}
      onClick={onClick}
      className={`bg-white rounded-full p-2 w-10 h-10 flex justify-center items-center cursor-pointer ${className}`}>
      {children}
    </div>
  )
}

export default Icon