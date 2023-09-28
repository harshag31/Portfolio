import React from 'react';
import a from 'next/link';
import { useRouter } from 'next/router'
import Logo from './Logo';
import Linkedin from './icons'
import {motion} from "framer-motion";

const CustomLink=({href,title,className=""})=>{
const router = useRouter();

  return(
    <a href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath ===href ? 'w-full':'w-0'}
      `}>&nbsp;</span>
    </a>
  )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex item-center justify-between'>

  <nav>
    <CustomLink href="/" title="Home" className='mr-4'/>
    <CustomLink href="/about" title="About" className='mx-4'/>
    <CustomLink href="/projects" title="Projects" className='mx-4'/>
    <CustomLink href="/articles" title="Certificates" className='ml-4'/>
  </nav>
  <nav className="flex item-center justify-center flex-wrap">
    <motion.a href="https://linkedin.com" target={"_blank"}
    className='w-6 ml-3'
    whileHover={{y:-2 }}
    whileTap={{scale:0.9}}
    >
      <Linkedin/>
    </motion.a>
  </nav>
  <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo/></div>

</header>
  )
}

export default NavBar