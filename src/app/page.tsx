'use client';
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/contact";
import Projects from "@/components/project";
import { Button } from "@/components/ui/button";
import { FileIcon } from "@radix-ui/react-icons";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(prev => !prev)
  }

  return (
    <div className='w-[90%] mx-auto bg-[#09233c] text-gray-200 font-mono'>
      <header className='md:hidden flex justify-between items-center mt-1 mx-auto py-5 px-3 w-[90%] bg-[#2a455e] shadow-2xl rounded-md fixed'>
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
      <main className='md:hidden bg-[#2a455e] mt-20 rounded-md fixed w-[90%]'>
        <div className={click ? '' : 'hidden'}>
          <div className="flex p-4 justify-between items-center">
            <ul className='py-2 text-center text-lg'>
              <li className='py-1'><Link href="#">Home</Link></li>
              <li className='py-1'><Link href="#projects">Projects</Link></li>
              <li className='py-1'><Link href="#about">About</Link></li>
              <li className='py-1'><Link href="#blog">Blog</Link></li>
              <li className='py-1'><Link href="#contact">Contact</Link></li>
            </ul>
            <ul className="grid grid-cols-2 gap-2 items-center">
              <li className="my-2"><Link href="https://x.com/kolapowariz" target="_blank"><Image src='/x.svg' width={40} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
              <li className="my-2"><Link href="https://linkedin.com/in/warizkolapo" target="_blank"><Image src='/linkedin.svg' width={40} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
              <li className="my-2"><Link href="https://github.com/kolapowariz/" target="_blank"><Image src='/github.svg' width={40} height={30} alt="Twitter logo" className="w h-auto" /></Link></li>
            </ul>
          </div>
        </div>
      </main>

      <header className='hidden font-mono md:flex justify-between items-center bg-[#2a455e] shadow-2xl rounded-md text-lg px-2 fixed mx-auto mt-1 w-[90%]'>
        <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='text-md'>Kolapo Wariz</motion.h1>
        <motion.nav initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} className="flex justify-between items-center gap-5">
          <ul className='flex justify-between text-md gap-10'>
            <li className='py-2'><Link href="#">Home</Link></li>
            <li className='py-2'><Link href="#projects">Projects</Link></li>
            <li className='py-2'><Link href="#about">About</Link></li>
            <li className='py-2'><Link href="#blog">Blog</Link></li>
            <li className='py-2'><Link href="#contact">Contact</Link></li>
          </ul>
          <ul className="flex items-center justify-around gap-5">
            <li className="my-2"><Link href="https://x.com/kolapowariz" target="_blank"><Image src='/x.svg' width={30} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
            <li className="my-2"><Link href="https://linkedin.com/in/warizkolapo" target="_blank"><Image src='/linkedin.svg' width={30} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
            <li className="my-2"><Link href="https://github.com/kolapowariz/" target="_blank"><Image src='/github.svg' width={30} height={30} alt="Twitter logo" className="h-auto" /></Link></li>
          </ul>
        </motion.nav>
      </header>

      <main className='' id="">
        <section id='#' className='flex flex-col lg:flex-row lg:justify-between lg:items-start pt-20 md:pt-15'>
          <section className='order-last lg:order-first lg:w-3/5'>
            <p className='text-2xl lg:text-3xl my-4 font-mono'>Hi there! Call me Wariz,</p>
            <p className='text-3xl lg:text-4xl my-4 font-mono'>FrontEnd developer.</p>
            <p className='text-2xl mt-2'>A dedicated frontend engineer skilled in React.js, Vue.js, Next.js, and TypeScript, specializing in building performant and responsive web applications. Experienced in Agile development environments, delivering optimized user interfaces, and passionate about learning and solving real-world problems through technology.
            </p>
            <Button className="mt-10 text-2xl p-5 rounded-full border-green-800">
              <Link href="/KolapoWariz.pdf" target="_blank">View Resume</Link>
              <FileIcon width={20} height={20} className="ml-2" />
            </Button>
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">Listen to My Resume</h1>
              <audio controls className="w-full max-w-md">
                <source src="/KolapoWariz-VoiceResume.wav" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </section>
          <section>
            <Image src='/warizz.jpg' width={338} height={344} alt="Kolapo Wariz" priority={true} className='block mt-6  lg:h-96 lg:w-96 mx-auto rounded-full object-cover w-auto' />
          </section>
        </section>
        <Suspense fallback='Loading...'>
          <Projects />
        </Suspense>
        <About />
        <Blog />
        <Contact />

      </main>
      <footer>
        <p className='text-center text-lg my-4'>Designed and built by Kolapo Wariz.</p>
        <p className='text-center text-lg my-4'>&copy; 2024</p>
      </footer>
    </div>

  );
}

