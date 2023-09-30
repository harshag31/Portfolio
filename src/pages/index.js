import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import PP from '../../public/images/profile/hg1.svg'
import AnimatedText from '@/components/AnimatedText'
import Lottie from "lottie-react"
import animationData from "/bot.json"
import {useRef} from 'react'
import Link from 'next/link'
import {LinkArrow}  from '@/components/icons'



export default function Home() {
  return (
    <>

      <Head>
        <title>Harsha G</title>
        <meta name="description" content="Generated by create next app" /> 
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen' >
       <Layout className='pt-0'>

          <div className='flex items-center justify-between w-full'>
          
            <div className='w-1/2'>
              
              <Lottie animationData={animationData} className='w-full h-auto'/> 
                         
            </div>

            <div className='w-1/2 flex flex-col items-center self-center'> 
              <AnimatedText text="Where Imagination Meets Execution, Code and Design in Harmony." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium '>
              Join me on this exciting journey as I continue to learn, grow, and contribute to the ever-evolving field of engineering. Let's create the future together.
              </p>
              
              <div className='flex items-center self-start mt-2'>
                <Link href="/Harsha G.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark"
                download={true}
                >Resume  <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:harshag3103@gmail.com?subject=Your%20Subject&body=You%20can%20Start%20by%20Saying%20Hi!." target={"_blank"}
                className="ml-4 px-5 text-1g font-bold capitalize text-dark underline"
                >Contact</Link>
            
              </div>
            </div>
          </div>
       </Layout>
      </main>

    </>
  )
}
