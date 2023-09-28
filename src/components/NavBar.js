import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex item-center justify-between '>

  <nav>
    <Link href="/">HOME</Link>
    <Link href="/about">ABOUT</Link>
    <Link href="/projects">PROJECTS</Link>
    <Link href="/articles">CERTIFICATES</Link>
  </nav>
  <nav>
    <Link href="/" target={"_blank"}>T</Link>
  </nav>
  <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo/></div>

</header>
  )
}

export default NavBar