import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"
import Image from 'next/image'
import hlogo from "../../public/images/profile/hg.png";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/"
       className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2x1 font-bold
       transform hover:scale-105 transition-transform duration-300'
       whileHover={{backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
       transition:{duration:1, repeat:Infinity}
      }}>

        <Image src={hlogo} alt="Logo" className='w-full h-auto'/></MotionLink>  
        
    </div>

  )
}

export default Logo