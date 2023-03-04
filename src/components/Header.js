import React from 'react'
import Button from './Button'
import { data } from '@/utils/constants'

function Header() {
    const openResume = () => {
        window.open(data.resumeLink)
    }
    return (
        <nav className="navbar bg-white">
            <div className="mx-auto w-11/12 sm:px-12 lg:px-16">
                <div className="flex flex-1 h-20 w-full items-center justify-between">
                    <div className='pt-2'>
                        <span className='navbar-brand'>Tamara</span>
                        <span className='text-orange text-xxs font-mono'>&#x25A0;</span>
                    </div>
                    <div>
                        <Button onClick={openResume}>My Resume</Button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header