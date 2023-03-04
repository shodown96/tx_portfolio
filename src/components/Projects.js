import { GoSVG } from '@/assets/svg'
import { data } from '@/utils/constants'
import React from 'react'
import Button from './Button'
import Icon from './Icon'

function Projects() {
    return (
        <div className='flex flex-wrap items-center justify-between gap-10 mt-10 mb-10'>
            {data.projects.map((project, i) => (
                <div key={i} className="rounded-3xl overflow-hidden project-size">
                    <div className="project-size p-8 bg-img flex flex-col justify-between" style={{
                        backgroundImage: `url(/projects/${project.img})`,
                        color: project.color || "#fff",
                    }}>
                        <div className='flex justify-between items-center w-full' style={{ color: project.color }}>
                            <div className='md:w-full w-3/4'>
                                <div className='font-semibold text-xl'>{project.title}</div>
                                <div className="text-sm" style={{ fontSize: 16 }}>{project.text}</div>
                            </div>
                            <Icon
                                onClick={() => window.open(project.link)}
                                style={{ backgroundColor: project.color }} >
                                <GoSVG iColor={project.color === "#000" ? "#fff" : ""} />
                            </Icon>
                        </div>

                        {project.caseStudy ? <div>
                            <Button theme='light' onClick={() => window.open(project.caseStudy)}>Case Study</Button>
                        </div> : null}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects