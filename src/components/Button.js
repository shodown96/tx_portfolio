import React from 'react'

function Button({ onClick = () => { }, theme = "dark", children, className = "" }) {
    return (
        <button onClick={onClick}
            className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}
            py-2 px-5 lg:py-3 lg:px-10 rounded-full ${className}`}>
            {children}
        </button>
    )
}

export default Button