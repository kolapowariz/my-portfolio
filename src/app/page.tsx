'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function Home() {
  const [click, setClick] = useState(false);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  useEffect(() => {
    fetch('/data/portfolio.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, []);
  

  const toggle = () => {
    setClick(prev => !prev)
  }
  return (
    <div className='w-full mx-auto lg:w-[95%] lg:mx-auto bg-[#09233c] p-5 lg:m-5 text-gray-200'>
      <header className='lg:hidden flex justify-between items-center mt-4 mx-auto py-5 px-3 w-full bg-[#2a455e] shadow-2xl rounded-md'>
        <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='text-md'>Kolapo Wariz</motion.h1>
        <nav className='flex flex-col justify-center items-end'>
          <button onClick={toggle}>{click ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
          }</button>
        </nav>
      </header>
      <main className='lg:hidden'>
        <div className={click ? '' : 'hidden'}>
          <ul className='py-2 text-center bg-[#2a455e] mt-2 rounded-md'>
            <li className='py-2 text-sm'>About Me</li>
            <li className='py-2 text-sm'>Projects</li>
            <li className='py-2 text-sm'>Contacts</li>
            <li className='py-2 text-sm'>Download Resume</li>
          </ul>
        </div>
      </main>

      <header className='hidden lg:flex justify-between items-center mt-4'>
        <h1 className='text-sm'>Kolapo Wariz</h1>
        <nav>
          <ul className='flex justify-between mx-4 gap-20 text-sm'>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contacts</li>
            <li>Download Resume</li>
          </ul>
        </nav>
      </header>

      <main className='my-4'>
        <section id='#' className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
          <motion.section initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='order-last lg:order-first lg:w-3/5'>
            <p className='text-2xl lg:text-3xl my-4'>Hi there! Call me Wariz,</p>
            <p className='text-3xl lg:text-4xl my-4'>FrontEnd developer.</p>
            <section id='about' className='mt-5'>
              <p className='mt-2'>I&apos;m a passionate and dedicated Frontend Developer who loves creating beautiful, dynamic user and functional web experiences. I enjoy transforming ideas into reality and thrive on solving complex problems with elegant solutions.</p>
              <p>During my teenage years, at the age of 17, I became fascinated with the world of programming and I delved into it intending to learn C# (C Sharp) programming language. Although I encountered obstacles and my progress was not as smooth as I had envisioned, this experience laid the foundation for my future endeavors. Despite encountering numerous challenges, I persisted in my pursuit.</p>
              <p>However, my journey took an unexpected turn when I stumbled upon JavaScript, a language that ignited a deep-seated passion within me. From that point on, My path was crystal clear - I was meant to pursue a career in web development.</p>
              <p>This newfound passion has been the driving force behind my relentless quest for self-improvement, pushing me to continually refine my skills, keep abreast of the latest industry trends, and adhere to best practices in the field.</p>
            </section>
          </motion.section>
          <section>
            <Image src='/nft.jpg' width={338} height={344} alt="Kolapo Wariz" priority={true} className='block mt-6  lg:h-96 lg:w-96 mx-auto rounded-full object-cover' />
          </section>
        </section>

        <section>
          <h2 className='text-center text-4xl mt-10'>Projects</h2>
          <div className='xl:grid lg:grid-cols-2 lg:gap-4'>
            {projects.map((data) => {
              return (
                <div key={data.id} className='flex flex-col lg:flex-row justify-center items-center my-7 '>
                  <div className='w-full h-auto min-h-72 rounded-t-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 text-black lg:rounded-s-2xl p-5'>
                    <p>{data.title}</p>
                    <p className='mb-4'>{data.description}</p>
                    <Link href={`/${data.title}`} className='text-blue-500 border-slate-800 border rounded-lg p-2'>View Project</Link>

                  </div>
                  <div className='w-full h-auto rounded-b-xl lg:rounded-none lg:w-96 lg:h-96 bg-gray-200 lg:rounded-e-2xl p-5'>
                    <Image src={data.image} alt={data.imageAlt} width={338} height={344} className='mx-auto' />
                  </div>
                </div>
              )
            })}
          </div>

        </section>
        <section id='contact' className='mt-10 w-4/5 lg:w-2/4 mx-auto'>
          <h2 className='text-center text-4xl'>Contact</h2>
          <form action="" className="mt-7">
            <input type="text" placeholder='Name' className='w-full p-2 my-2 rounded-md' />
            <input type="email" placeholder='Email' className='w-full p-2 my-2 rounded-md' />
            <textarea name="" id="" placeholder='Message' className='w-full p-2 my-2 rounded-md'></textarea>
            <button type="button" className='w-full p-2 my-2 bg-blue-500 text-white rounded-md'>Send</button>
          </form>
        </section>
      </main>
      <footer>
        {/* <div className='flex justify-center'>
          <img src={fb} width={30} height={30} className='mr-4' alt="Facebook Account" />
          <img src={ig} width={30} height={30} className='mr-4' alt="Instagram Account" />
          <img src={tw} width={37} height={30} className='mr-4' alt="X Account" />
          <img src={ln} width={30} height={30} className='mr-4' alt="Facebook Account" />
        </div> */}
        <p className='text-center text-sm my-4'>Kolapo Wariz &copy; 2024</p>
      </footer>
    </div>

  );
}
