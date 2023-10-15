import React from 'react';
import a from 'next/link';
import { useRouter } from 'next/router'
import Logo from './Logo';
import {motion} from "framer-motion";
import { Linkedin, MoonIcon, SunIcon } from './icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink=({href,title,className=""})=>{
const router = useRouter();

  return(
    <a href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0  bg-dark
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath ===href ? "w-full":"w-0"}
      dark:bg-light`}>&nbsp;</span>
    </a>
  )
}

const NavBar = () => {
  const [mode,setMode] = useThemeSwitcher();
  return (
    <header className='w-full px-32 py-8 font-medium flex item-center justify-between
    dark:text-light'>

  <nav>
    <CustomLink href="/" title="Home" className='mr-4'/>
    <CustomLink href="/about" title="About" className='mx-4'/>
    <CustomLink href="/skills" title="Skills" className='mx-4'/>
    <CustomLink href="/projects" title="Projects" className='ml-4'/>
  </nav>
  <nav className="flex item-center justify-center flex-wrap">
    <motion.a href="https://www.linkedin.com/in/harsha-g-72a900292" target={"_blank"}
    className='w-6 ml-3'
    whileHover={{y:-2 }}
    whileTap={{scale:0.9}}
    >
      <Linkedin/>
    </motion.a>
    <button onClick={() => setMode(mode === "light" ? "dark" : "light" )} 
    className={`ml-6 flex items-center justify-center rounded-full p-1
    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {
        mode==="dark" ?
        <MoonIcon className={"fill-dark"}/>:<SunIcon className={"fill-dark"}/>
      }

    </button>

  </nav>
  <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo/></div>

</header>
  )
}

export default NavBar