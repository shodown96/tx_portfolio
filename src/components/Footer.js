import React from 'react'
import { data } from '@/utils/constants'
import Contact from './Contact'

function Footer() {
    const handleClick = () => {
        window.open(`mailto:${data.email}?subject=${data.emailSubject}&body=${data.emailDefaultMessage}`);
    }
    return (
        <div className='flex items-center gap-10 md:flex-row flex-col bg-gradient-left p-8 lg:p-14 rounded-2xl mb-10'>
            <div className="lg:w-3/4">
                <div className='mb-8 font-bold text-4xl text-dark'
                    dangerouslySetInnerHTML={{ __html: data.footerTitle }}>

                </div>
                <div className='mb-10 text-md lg:pr-44'>
                    <span dangerouslySetInnerHTML={{ __html: data.footerText }}></span> <br />
                    <span className='underline cursor-pointer' onClick={handleClick}>{data.email}</span>
                </div>
                <Contact />
            </div>

            <div className='flex justify-center'>
                <img src="/work-together.png" className='w-11/12 sm:w-full' alt="" />
            </div>
        </div>
    )
}

export default Footer