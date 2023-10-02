import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const Skill = ({names, x ,y})=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      py-3 px-6 shadow-dark cursor-pointer absolute '
      whileHover={{scale:1.05}}
      initial={{x:0,y:0}}            //Aniamtion seection Animate whileInView try change values harsha after adding sections
      whileInView={{x:x, y:y}}
      transition ={{duration:1.5}}
      
      >
      {names}
      </motion.div>
  )    
  }

const Skills = () => {
  return (
    <>
      <Head>
      <title>Harsha G | Skills Page</title>
      <meta name="description" content="any description"/>
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
      <AnimatedText text ="Skills" className=''/>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'> 
    
            <Skill names="CSS" x="-10vw" y="-10vw"/>
            <Skill names="HTML" x="-20vw" y="2vw"/>
            <Skill names="C++" x="-7vw" y="-1vw"/>
            <Skill names="C" x="-22vw" y="-15vw"/>
            <Skill names="MySQL" x="-38vw" y="-1vw"/>
            <Skill names="Machine Learning" x="35vw" y="-10vw"/>
            <Skill names="Java" x="18vw" y="-16vw"/>
            <Skill names="React.Js" x="23vw" y="8vw"/>
            <Skill names="NeXt.Js" x="1vw" y="8vw"/>
            <Skill names="TailwindCSS" x="-13vw" y="14vw"/>
            <Skill names="Python" x="13vw" y="-1vw"/>
            <Skill names="JavaScript" x="8vw" y="-11vw"/>
            <Skill names="Framer Motion" x="8vw" y="19vw"/>

    </div>
    </Layout>
    </main>
    </>
  )
}

export default Skills