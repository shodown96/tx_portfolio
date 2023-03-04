import React from 'react'
import Button from './Button'
import Icon from './Icon'
import {
  BehanceSVG,
  InstagramSVG,
  LinkedInSVG,
  TwitterSVG
} from '@/assets/svg'
import { data } from '@/utils/constants'

function Contact() {

  const handleClick = () => {
    window.open(`mailto:${data.email}?subject=${data.emailSubject}&body=${data.emailDefaultMessage}`);
  }

  return (
    <div className='flex flex-wrap items-center gap-y-10 sm:gap-x-10 lg:gap-x-4 justify-between sm:justify-center lg:justify-start'>
      <Button className='lg:w-auto w-full' onClick={handleClick}>Contact me</Button>
      <Icon onClick={()=>window.open(data.socials.Behance)}><BehanceSVG /></Icon>
      <Icon onClick={()=>window.open(data.socials.Instagram)}><InstagramSVG /></Icon>
      <Icon onClick={()=>window.open(data.socials.Twitter)}> <TwitterSVG /></Icon>
      <Icon onClick={()=>window.open(data.socials.LinkedIn)}><LinkedInSVG /></Icon>
    </div>
  )
}

export default Contact