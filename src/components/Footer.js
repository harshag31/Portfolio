import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-1g dark:text-light dark:border-light '>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
        <Link href="/">Build with <span className='text-primary text-2x1 px-1'> &#x1F49B; </span>by&nbsp;Harsha G</Link>
        </div>
        <Link href="mailto:harshag3103@gmail.com?subject=Your%20Subject&body=You%20can%20Start%20by%20Saying%20Hi%20!." target={"_blank"} className='underline underline-offset-2'>Say hello &#128516;</Link>
      </Layout>
    </footer>
  )
}

export default Footer