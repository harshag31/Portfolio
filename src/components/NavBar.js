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

<Logo/>
<nav>
    <Link href="/" target={"_blank"}>T</Link>
</nav>


</nav>
</header>
  )
}

export default NavBar