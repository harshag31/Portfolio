import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Profilepic from "../../public/images/profile/dp1.jpg"

const about = () => {
  return (
    <>
        <Head>
        <title>Harsha G | About Page</title>
        <meta name="description" content="any description"/>
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
            <AnimatedText text ="Harsha G" className='mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                    <p className='font-medium'>
                    Greetings! I'm Harsha G, a dedicated student currently enrolled in the Bachelor of Information Science and Engineering program at JSS Science and Technology University. My academic journey at this prestigious institution has equipped me with a robust understanding of technology and a profound interest in its transformative capabilities.
                    </p>
                    <p className='my-4 font-medium'>
                    With a strong emphasis on innovation and practical problem-solving, I am resolutely committed to advancing my expertise within the dynamic realm of information science and engineering. My belief in technology's role as a driver of progress fuels my determination to contribute significantly to its ongoing evolution.
                    </p>
                    <p className='font-medium'>
                    Beyond the classroom, I actively engage with emerging industry trends and immerse myself in projects that continually challenge and expand my skill set. 
                    </p>
                    </div>

                <div className='col-span-3 flex flex-col relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8'>
                  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-2xl bg-dark '/>
                  <div className="relative group">
                <Image src={Profilepic} alt="Harsha G" className='w-full h-auto rounded-[2rem] grayscale transition-transform hover:scale-105 duration-300 transform group-hover:grayscale-0'/>
                    </div>
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-center'>
                    <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                                 3
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
                    </div>
                    </div>


               
                 </div>
             </Layout>
        </main>

    </>
  )
}

export default about