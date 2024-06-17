
import {Header,LandingComponent,About,WorkExperience,Skills,Projects,ContactMe} from "@/components";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ed8a07]/80">
     {/**Header Component*/}
     <Header/>
     {/**Landing Component with type writer */}
     <section id='landing' className='snap-start'>
     <LandingComponent />
     </section>
     {/** About */}
     <section id='about' className='snap-center'>
      <About />
     </section>
     {/**Experience */}
     <section id='experience' className='snap-center'>
      <WorkExperience />
     </section>
     {/** Skills */}
     <section id='skills' className='snap-start'>
     <Skills />
     </section>
     {/** Projects */}
     <section id='projects' className='snap-start' >
      <Projects />
     </section>
     {/**Contact Me */}
     <section id='contact' className='snap-start' >
     <ContactMe />
     </section>
     <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
     <Link href='#landing'>
      <Image src='/favicon.png' alt="" width={30} height={30} className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"/>
     </Link>
      </div>
     </footer>
    </div>
  );
}
