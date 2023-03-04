import React from 'react'
import TamaraAI from '../../public/TamaraAI.png'
import Image from 'next/image'
import Contact from './Contact'
import { data } from '@/utils/constants'

function Banner() {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between gap-10'>
            <div className='p-8 bg-gradient-left rounded-2xl w-full lg:w-65p'>
                <div className='mb-8 font-bold text-3xl lg:text-4xl text-dark'
                dangerouslySetInnerHTML={{__html:data.bannerTitle}}>
                </div>
                <div className='mb-10 lg:mb-16 text-md lg:pr-44'
                    dangerouslySetInnerHTML={{ __html: data.bannerText }}>
                </div>
                <Contact />
            </div>

            <div className='bg-gradient-right h-350 sm:h-500 lg:h-auto flex justify-center items-end rounded-2xl'>
                <Image src={TamaraAI} alt="" className='tamara-ai' />
            </div>
        </div>
    )
}

export default Banner