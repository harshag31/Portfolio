import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>``
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
        Build with <span className='text-primary text-2x1 px-1'>&#9825;</span>
        by&nbsp;<Link href="">Harsha G</Link>
        </div>
        <Link href="mailto:harshag3103@gmail.com?subject=Your%20Subject&body=You%20can%20Start%20by%20Saying%20Hi%20!." target={"_blank"}>Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer