'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'
import { ProjectType } from "@/app/types";
import { ProjectSkeleton } from "./skeleton";

async function getProjects() {
  const res = await fetch('/data/portfolio.json')
  const data = await res.json()
  return data
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  // useEffect(() => {
  //   fetch('/data/portfolio.json')
  //     .then(res => res.json())
  //     .then(data => setProjects(data))
  //     .catch((error) => {
  //       console.error('Error fetching the portfolio data:', error);
  //       setProjects([]);
  //     });
  // }, []);


  return (
    <section id="projects">
          <h2 className='text-center text-4xl mt-10'>Projects</h2>
          <div className='xl:grid lg:grid-cols-2 lg:gap-4'>
            <>
              {projects.length === 0 && <ProjectSkeleton />}
            </>
            {projects.map((data) => {
              return (
                <div key={data.id} className='sm:w-full flex flex-col sm:flex-row justify-center items-center my-7 mx-auto'>
                  <div className='w-full h-auto rounded-t-xl sm:rounded-none sm:w-96 sm:h-52 bg-gray-200 text-black sm:rounded-s-2xl p-4'>
                    <h1 className="text-center text-2xl mb-2">{data.title}</h1>
                    <p className='mb-4'>{data.littleDesc}</p>
                    <Link href={`/${data.title}`} className='text-blue-500 border-slate-800 border rounded-lg p-2'>View Project</Link>

                  </div>
                  <div className='w-full h-auto rounded-b-xl sm:rounded-none sm:w-96 sm:h-52 bg-gray-200 sm:rounded-e-2xl p-4'>
                    <Image src={data.image} alt={data.imageAlt} width={400} height={400} className='mx-auto w-full h-auto rounded-lg ' />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
  )
}