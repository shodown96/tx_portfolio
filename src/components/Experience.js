import { GoSVG } from '@/assets/svg'
import { data } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import Icon from './Icon'

function Experience() {
    const project_icons = data.projects.filter(x => x.icon !== "")
    const remaining_icons = 10 - project_icons.length
    const mobile_limit = remaining_icons - 2

    return (
        <div className='bg-gradient-dark rounded-2xl mt-10 mb-6 flex flex-col lg:flex-row lg:gap-96 px-10 py-12'>
            <div className='flex gap-4 md:gap-10 items-center justify-center mb-10 md:mb-0'>
                <div className='flex justify-center gap-4 items-center text-white'>
                    <div className='font-bold text-3xl md:text-4xl lg:text-6xl'>{data.yearsOfExperience}</div>
                    <div className='font-normal text-sm md:text-xl'>Years of <br /> Experience</div>
                </div>
                <div className='flex justify-center gap-4 items-center text-white'>
                    <div className='font-bold text-3xl md:text-4xl lg:text-6xl'>{data.happyClients}</div>
                    <div className='font-normal text-sm md:text-xl'>Happy <br /> Clients</div>
                </div>
            </div>
            <div className={`flex flex-wrap flex-row justify-center 
                md:flex-col md:items-center 
                gap-4 md:ml-10 h-32`}>
                {project_icons.map((project, i) => (
                    <Icon key={i}
                        onClick={() => window.open(project.link)}>
                        <Image src={`/svgs/${project.icon}`} width={22} height={22} alt="" />
                    </Icon>
                ))}
                {Array(remaining_icons).fill(null).map((_, i) => (
                    <Icon key={i} className={` ${i >= mobile_limit ? 'hidden xl:block' : ''}`}></Icon>
                ))}
            </div>
        </div>
    )
}

export default Experience