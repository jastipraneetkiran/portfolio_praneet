import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}
// const experienceCardData: Array<boolean> = [{}]
function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    transition={{
        duration:1.5,
    }}
    whileInView = {{ opacity:1}} 
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
                <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 test-2xl">
                Experience
                </h3>
                <div
                className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ed8a07]/80'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                </div>
    </motion.div>
  )
}

export default WorkExperience