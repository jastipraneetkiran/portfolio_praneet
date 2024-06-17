import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transistion={{
            duration:1.2,
        }}
        whileInView = {{ opacity:1,x:0}}
        viewport = {{once:true}}
        src='./FlexiEleOld.png'
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        ></motion.img>
        <div className='px-0 md:px-0'>
            <h4 className='text-4xl font-light'>Senior Associate Tecnology</h4>
            <p className='flex-bold text-2xl mt-1'>FlexiEle</p>
            <div className='fkex space-x-2 my-2'>
                <Image
                className=' rounded-full'
                src="/JavaScriptLogo.webp"
                width={40}
                height={40}
                alt="Picture of Software"
                />
                {/** Tech Using */}
                {/** Tech Using */}
                {/** Tech Using */}
            </div>
            <p className='uppercase py-5 text-gray-300'>Started Work ... Ended ...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Point 1</li>
                <li>Summary Point 2</li>
                <li>Summary Point 3</li>
                <li>Summary Point 4</li>
                <li>Summary Point 5</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard