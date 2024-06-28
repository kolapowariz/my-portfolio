'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(prev => !prev)
  }
  return (
    <div className='w-[95%] mx-auto lg:w-4/5 lg:mx-auto'>
      <header className='lg:hidden flex justify-between mt-4 mx-4'>
        <h1 className='text-2xl'>Kolapo Wariz</h1>
        <nav className='flex flex-col justify-center items-end'>
          {/* <button onClick={toggle}>{click ? <MdCancel className='w-8 h-8 border' /> : <FiAlignJustify className='w-8 h-8 border' />}</button> */}
          <button onClick={toggle}>{click ? 'Close' : 'Open'}</button>
        </nav>
      </header>
      <main className='lg:hidden'>
        <div className={click ? '' : 'hidden'}>
          <ul className='py-2 text-center'>
            <li className='py-2 text-xl'>About Me</li>
            <li className='py-2 text-xl'>Projects</li>
            <li className='py-2 text-xl'>Contacts</li>
          </ul>
        </div>
      </main>

      <header className='hidden lg:flex justify-between items-center mt-4 mx-4'>
        <h1 className='text-2xl'>Kolapo Wariz</h1>
        <nav>
          <ul className='flex justify-between mx-4 gap-4 text-xl'>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </header>

      <main className='mx-4 my-4'>
        <p className='text-xl my-4'>Hi there! Call me Wariz.</p>
        <p className='text-xl my-4'>Front End developer and a student at AltSchool Africa.</p>
        <Image src='/Myself.png' alt="Kolapo Wariz" width={1000} height={760} className='mt-6 h-72 w-72 mx-auto rounded-full object-cover' />
        <section id='about' className='mt-2'>
          <h2 className='text-center text-xl'>About Me</h2>
          <p className='mt-2'>I&apos;m a passionate and dedicated Frontend Developer who loves creating beautiful, dynamic user and functional web experiences. I enjoy transforming ideas into reality and thrive on solving complex problems with elegant solutions.</p>
          <p className='mt-4'>During my teenage years, at the age of 17, I became fascinated with the world of programming and I delved into it intending to learn C#. Although I encountered obstacles and my progress was not as smooth as I had envisioned, this experience laid the foundation for my future endeavors. Despite encountering numerous challenges, I persisted in my pursuit. However, my journey took an unexpected turn when I stumbled upon JavaScript, a language that ignited a deep-seated passion within me. From that point on, My path was crystal clear - I was meant to pursue a career in web development. This newfound passion has been the driving force behind my relentless quest for self-improvement, pushing me to continually refine my skills, keep abreast of the latest industry trends, and adhere to best practices in the field.</p>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
        <section id='about' className='mt-2'>
          <h2 className='text-center text-xl'>My Skills</h2>
          <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <ul className='mt-4 grid grid-cols-2 gap-2 list-disc border lg:grid-cols-4'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>NextJS</li>
            <li>TailwindCSS</li>
            <li>Git</li>
            <li>Github</li>
            <li>Firebase</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>
        <section id='projects' className='mt-4'>
          <h2 className='text-center text-xl'>Projects</h2>
          <p>Project section is under maintanace</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
        <section id='contact' className='mt-4'>
          <h2 className='text-center text-xl'>Contact</h2>
          <p>Contact section is under maintanace</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus cum deserunt dolores repellat sequi corrupti dolorum a facere numquam, id in, illum ab ullam debitis assumenda reprehenderit molestias cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quas quam sunt unde neque eveniet commodi recusandae, delectus suscipit quod consequatur culpa quo necessitatibus ullam a, maxime in aspernatur. Placeat?</p>
        </section>
      </main>
    </div>

  );
}
