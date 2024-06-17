import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'
type Props = {}

function Projects({}: Props) {
  let projects = [1,2,3,4,5,6];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 test-2xl">Projects</h3>
    <div className='relative w-full flex overfow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#ed8a07]/80 scrollbar-thin'>
      {projects.map((project,i)=>{
         return (<div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img 
          initial = {{opacity:0,y:-300,}}
          transition={{duration:1.2}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className='w-100 h-80'
          src="/reconb.png"  alt={`project case study {i+1}`} />
          <div>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-orange-500'>
                {`Case Study ${projects.length} of ${i+1} `}
                </span>
                Project Clone
                </h4>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
          </div>
        </div>)}
      )}
    </div>
    <div className='w-full absolute top-[30%] bg-[#ed8a07]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects