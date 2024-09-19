'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'
import Projects from "@/components/Projects";

export default function Home() {
  const [click, setClick] = useState(false);
  
  const toggle = () => {
    setClick(prev => !prev)
  }

  return (
    <div className='w-full mx-auto lg:mx-auto bg-[#09233c] p-5 lg:m-5 text-gray-200'>
      <header className='md:hidden flex justify-between items-center mt-4 mx-auto py-5 px-3 w-full bg-[#2a455e] shadow-2xl rounded-md'>
        <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='text-md'>Kolapo Wariz</motion.h1>
        <nav className='flex flex-col justify-center items-end'>
          <button onClick={toggle}>{click ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          }</button>
        </nav>
      </header>
      <main className='md:hidden bg-[#2a455e] mt-2 rounded-md'>
        <div className={click ? '' : 'hidden'}>
          <div className="flex p-4 justify-between items-center">
            <ul className='py-2 text-center text-sm'>
              <li className='py-2'><Link href="#about-me">About Me</Link></li>
              <li className='py-2'><Link href="#projects">Projects</Link></li>
              <li className='py-2'><Link href="#contact">Contact</Link></li>
              <li className='py-2'><Link href="#skills">Skills</Link></li>
              <li className='py-2'><Link href="https://folll.io/warizkolapo/resume/" target="_blank">Resume</Link></li>
            </ul>
            <ul className="grid grid-cols-2 gap-2 items-center">
              <li className="my-2"><Link href="https://x.com/kolapowariz" target="_blank"><Image src='/x.svg' width={40} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
              <li className="my-2"><Link href="https://linkedin.com/in/warizkolapo" target="_blank"><Image src='/linkedin.svg' width={40} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
              <li className="my-2"><Link href="https://github.com/kolapowariz/" target="_blank"><Image src='/github.svg' width={40} height={30} alt="Twitter logo" className="w h-auto" /></Link></li>
            </ul>
          </div>
        </div>
      </main>

      <header className='hidden md:flex justify-between items-center mt-4 bg-[#2a455e] shadow-2xl rounded-md px-3'>
        <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='text-md'>Kolapo Wariz</motion.h1>
        <motion.nav initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} className="flex justify-between items-center">
          <ul className='flex justify-between mx-4 text-md gap-10'>
            <li className='py-2'><Link href="#about-me">About Me</Link></li>
            <li className='py-2'><Link href="#projects">Projects</Link></li>
            <li className='py-2'><Link href="#contact">Contact</Link></li>
            <li className='py-2'><Link href="#skills">Skills</Link></li>
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
            <p className='text-2xl lg:text-3xl my-4'>Hi there! Call me Wariz,</p>
            <p className='text-3xl lg:text-4xl my-4'>FrontEnd developer.</p>
            <section id='about' className='mt-5'>
              <p className='mt-2'>I&apos;m a passionate and dedicated Frontend Developer who loves creating beautiful, dynamic user and functional web experiences. I enjoy transforming ideas into reality and thrive on solving complex problems with elegant solutions.</p>
              <p>During my teenage years, at the age of 17, I became fascinated with the world of programming and I delved into it intending to learn C# (C Sharp) programming language. Although I encountered obstacles and my progress was not as smooth as I had envisioned, this experience laid the foundation for my future endeavors. Despite encountering numerous challenges, I persisted in my pursuit.</p>
              <p>However, my journey took an unexpected turn when I stumbled upon JavaScript, a language that ignited a deep-seated passion within me. From that point on, My path was crystal clear - I was meant to pursue a career in web development.</p>
              <p>This newfound passion has been the driving force behind my relentless quest for self-improvement, pushing me to continually refine my skills, keep abreast of the latest industry trends, and adhere to best practices in the field.</p>
            </section>
          </section>
          <section>
            <Image src='/warizz.jpg' width={338} height={344} alt="Kolapo Wariz" priority={true} className='block mt-6  lg:h-96 lg:w-96 mx-auto rounded-full object-cover w-auto' />
          </section>
        </section>

        <section id="skills" className='mt-10 w-auto sm:w-96 mx-auto'>
          <h2 className='text-center text-4xl'>Skills</h2>
        </section>

        <Projects />
        <section id='contact' className='mt-10 w-auto sm:w-96 mx-auto'>
          <h2 className='text-center text-4xl'>Contact</h2>
          <form action="" className="mt-7 text-black">
            <input type="text" placeholder='Name' className='w-full p-2 my-2 rounded-md' />
            <input type="email" placeholder='Email' className='w-full p-2 my-2 rounded-md' />
            <textarea name="" id="" placeholder='Message' className='w-full p-2 my-2 rounded-md'></textarea>
            <button type="button" className='w-full p-2 my-2 bg-blue-500 text-white rounded-md'>Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p className='text-center text-sm my-4'>Kolapo Wariz &copy; 2024</p>
      </footer>
    </div>

  );
}

