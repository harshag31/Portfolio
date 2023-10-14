import React, { useRef } from 'react';
import { useScroll, motion } from "framer-motion";
import Lilcon from './Lilcon';

const Details =({type, time, place, info})=>{
   const ref =useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between'>
        <Lilcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium w-full'>{time} </span>
            <p className='capitalize font-medium w-full'>{place} </p>
            <p className='font-medium  text-dark/7'> {info} </p>
        </motion.div>
    </li>
    );
};

const Education = () => {
    const ref=useRef(null);
    const {scrollYProgress} = useScroll(
        {
        target:ref,
        offset:["start end","center start"]
    }
)

  return (
    <div className='my-64'>
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative">

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>          

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
              
              
                <Details 
                type="Bachelor Of Information Science & Engineering"
                time="Pursuing B.E. degree with an anticipated graduation in 2025"
                place="JSS Science and Technology University"
                info="SJCE campus, Mysuru - 570006"
                />

                <Details 
                type="Diploma in Computer Science and Engineering"
                time="2019 - 2022"
                place="JSS Polytechnic"
                info="SJCE campus, Mysuru - 570006."
                />

                <Details 
                type="Secondary High School Education "
                time="2018 - 2019"
                place="Sree Cauvery Educational Institutions"
                info="KuvempuNagara, Mysuru - 570023"
                />

                
            </ul>
        </div>
    </div>
  );
};

export default Education