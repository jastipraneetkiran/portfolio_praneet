import React from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject:string;
  message:string;
}
type Props = {}

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jastipraneet@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name} ${formData.message} ${formData.email}`
    // console.log(formData)
  }
  return (
    <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>CONTACT</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
        Hey, I think I can help you out!  {" "}
          <span className='underline decoration-[#ed8a07]/50'>Let's Talk</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#ed8a07] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+918860009036</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#ed8a07] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>jastipraneet@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#ed8a07] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Delhi, India</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' type='text' className='contactInput'></input>
            <input {...register('email')} placeholder='Email' type='text' className='contactInput'></input>
          </div>
          <input {...register('subject')} placeholder='Subject' type='text' className='contactInput'></input>
          <textarea {...register('message')} placeholder='Message' className='contactInput'/>
          <button type='submit'className='bg-[#ed8a07] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe