'use client';
import Image from "next/image";
import { Suspense, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'
import Projects from "@/components/project";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(prev => !prev)
  }

  return (
    <div className='w-full mx-auto lg:mx-auto bg-[#09233c] p-3 lg:px-20 lg:py-5 text-gray-200 font-mono'>
      <header className='md:hidden flex justify-between items-center mt-4 mx-auto py-5 px-3 w-full bg-[#2a455e] shadow-2xl rounded-md'>
        <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='text-lg'>Kolapo Wariz</motion.h1>
        <nav className='flex flex-col justify-center items-end'>
          <button onClick={toggle}>{click ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
              <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          }</button>
        </nav>
      </header>
      <main className='md:hidden bg-[#2a455e] mt-2 rounded-md'>
        <div className={click ? '' : 'hidden'}>
          <div className="flex p-4 justify-between items-center">
            <ul className='py-2 text-center text-lg'>
              <li className='py-1'><Link href="#about-me">About Me</Link></li>
              <li className='py-1'><Link href="#projects">Projects</Link></li>
              <li className='py-1'><Link href="#contact">Contact</Link></li>
              <li className='py-1'><Link href="https://folll.io/warizkolapo/resume/" target="_blank">Resume</Link></li>
            </ul>
            <ul className="grid grid-cols-2 gap-2 items-center">
              <li className="my-2"><Link href="https://x.com/kolapowariz" target="_blank"><Image src='/x.svg' width={40} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
              <li className="my-2"><Link href="https://linkedin.com/in/warizkolapo" target="_blank"><Image src='/linkedin.svg' width={40} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
              <li className="my-2"><Link href="https://github.com/kolapowariz/" target="_blank"><Image src='/github.svg' width={40} height={30} alt="Twitter logo" className="w h-auto" /></Link></li>
            </ul>
          </div>
        </div>
      </main>

      <header className='hidden font-mono md:flex justify-between items-center bg-[#2a455e] shadow-2xl rounded-md px-3 text-lg mx-auto'>
        <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='text-md'>Kolapo Wariz</motion.h1>
        <motion.nav initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} className="flex justify-between items-center">
          <ul className='flex justify-between mx-4 text-md gap-10'>
            <li className='py-2'><Link href="#about-me">About Me</Link></li>
            <li className='py-2'><Link href="#projects">Projects</Link></li>
            <li className='py-2'><Link href="#contact">Contact</Link></li>
            <li className='py-2'><Link href="https://folll.io/warizkolapo/resume/" target="_blank">Resume</Link></li>
          </ul>
          <ul className="flex items-center justify-around gap-5">
            <li className="my-2"><Link href="https://x.com/kolapowariz" target="_blank"><Image src='/x.svg' width={30} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
            <li className="my-2"><Link href="https://linkedin.com/in/warizkolapo" target="_blank"><Image src='/linkedin.svg' width={30} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
            <li className="my-2"><Link href="https://github.com/kolapowariz/" target="_blank"><Image src='/github.svg' width={30} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
          </ul>
        </motion.nav>
      </header>

      <main className='my-4' id="about-me">
        <section id='#' className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
          <section className='order-last lg:order-first lg:w-3/5'>
            <p className='text-2xl lg:text-3xl my-4 font-mono'>Hi there! Call me Wariz,</p>
            <p className='text-3xl lg:text-4xl my-4 font-mono'>FrontEnd developer.</p>
            <section id='about' className='mt-5 text-xl'>
              <p className='mt-2'>I&apos;m a passionate and dedicated Frontend Developer who loves creating beautiful, dynamic user and functional web experiences. I enjoy transforming ideas into reality and thrive on solving complex problems with elegant solutions.</p>
              <p>During my teenage years, at the age of 17, I became fascinated with the world of programming and I delved into it intending to learn C# (C Sharp) programming language. Although I encountered obstacles and my progress was not as smooth as I had envisioned, this experience laid the foundation for my future endeavors. Despite encountering numerous challenges, I persisted in my pursuit.</p>
              <p>However, my journey took an unexpected turn when I stumbled upon JavaScript, a language that ignited a deep-seated passion within me. From that point on, My path was crystal clear - I was meant to pursue a career in web development.</p>
              <p>This newfound passion has been the driving force behind my relentless quest for self-improvement, pushing me to continually refine my skills, keep abreast of the latest industry trends, and adhere to best practices in the field.</p>
              <Skills />
            </section>
          </section>
          <section>
            <Image src='/warizz.jpg' width={338} height={344} alt="Kolapo Wariz" priority={true} className='block mt-6  lg:h-96 lg:w-96 mx-auto rounded-full object-cover w-auto' />
          </section>
        </section>
        <Suspense fallback='Loading...'>
          <Projects />
        </Suspense>
        <Contact/>

      </main>
      <footer>
        <p className='text-center text-lg my-4'>Kolapo Wariz &copy; 2024</p>
      </footer>
    </div>

  );
}

