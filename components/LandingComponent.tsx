import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '@/components/BackgroundCircle'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function LandingComponent({ }: Props) {
    const [text, setText] = useTypewriter({
        words: ["Hi, I am Praneet Kiran Jasti", "<Inqusitive And Pragmatic />", "I'm the architect, the blueprint, and the builder.", "From brainwave to masterpiece: I think it up, map it out, then code it live!"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <Image
                className='relative rounded-full mx-auto object-cover'
                src="/profileimg.jpeg"
                width={120}
                height={120}
                alt="Picture of Jasti Praneet Kiran"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Developer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#ed8a07' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                    <button className='landingButtons'>About</button>
                    </Link>
                    <Link href='#experience'>
                    <button className='landingButtons'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                    <button className='landingButtons'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                    <button className='landingButtons'>Projects</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default LandingComponent