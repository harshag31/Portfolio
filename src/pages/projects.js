import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'
import Image from 'next/image'
import project1 from "../../public/images/projects/project1.png"
import project2 from "../../public/images/projects/project2.png"


const FeaturedProject =({type,title,summary,img,link}) => {
  return(
    <article className='w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:text-light dark:border-light dark:shadow-darkShadow shadow-2xl p-12'>

      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className="w-full h-auto"/>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'> 
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark  dark:text-light  '>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={link} target="_blank" className='rounded-lg bg-dark text-light p-2
        px-6 text-lg font-semibold dark:text-dark dark:bg-light'>Visit Project</Link>
      </div>
      </div>
    </article>
  )
}
const Project =({title,type,img,link})=>{
  return(

    <article className='w-full flex flex-col items-center justify-center dark:shadow-darkShadow
    rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light dark:text-light shadow-2xl relative p-6'>

      <Link href={link} target="_blank"
      className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className="w-full h-auto"/>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'> 
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={link} target="_blank" className='underline text-lg font-semibold'>Visit</Link>
      </div>
      </div>
    </article>

  )
}

const projects = () => {
  return (
    <>
    <Head>
    <title>Harsha G | Projects Page</title>
    <meta name="description" content="any description"/>
    </Head>
    <TransitionEffect />

    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light '>
    <Layout >
        <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16'/>

        <div className='grid grid-col-12 gap-24'>

          <div className='col-span-12'>
          <FeaturedProject
          title="Fake News Detection Using Machine Learning"
          img={project1}
          summary="Employed Machine learning algorithms to proactively combat the proliferation of fake news on digital platforms, protecting individuals, organizations, and politics. Incorporating Python, HTML5, CSS, Django, and JavaScript."
          link=""
          type="A Team Project on,"
          />
          </div>

          <div className='col-span-6'>
          <Project
          title="Implementation of DHCP Protocol using CISCO packet tracer"
          img={project2}
          link=""
          type="A Team Project on,"
          />
          </div>
          

        </div>
    </Layout>
    </main>
    </>
  )
}

export default projects