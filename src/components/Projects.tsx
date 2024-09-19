'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ProjectType } from "@/app/types";
import { ProjectSkeleton } from "./skeleton";

// async function getProjects() {
//   const res = await fetch('/data/portfolio.json')
//   const data = await res.json()
//   return data
// }

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  useEffect(() => {
    fetch('/data/portfolio.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch((error) => {
        console.error('Error fetching the portfolio data:', error);
        setProjects([]);
      });
  }, []);


  return (
    <section id="projects">
      <h2 className='text-center text-4xl mt-10'>Projects</h2>
      <div className='xl:grid lg:mt-6 lg:grid-cols-2 lg:gap-8'>
        <>
          {projects.length === 0 && <ProjectSkeleton />}
        </>
        {projects.map((data) => {
          return (
            <section key={data.id} className="bg-gray-200 sm:w-[80%] rounded-xl mx-auto">

              <div className='bg-gray-200sm:w-full rounded-lg flex flex-col sm:flex-row justify-center items-center my-7 mx-auto mb-0'>
                <div className='bg-gray-200 w-full h-auto rounded-t-xl sm:rounded-none sm:w-96 sm:h-48 text-black sm:rounded-s-2xl p-4'>
                  <h1 className="text-center text-2xl mb-2">{data.title}</h1>
                  <p className='mb-4'>{data.littleDesc}</p>
                  <div className="flex gap-2 justify-center">
                    <Link href={data.liveUrl} target="_blank" className='text-blue-500 border-slate-800 border rounded-lg p-2'>Live URL</Link>
                    <Link href={data.githubUrl} target="_blank" className='text-blue-500 border-slate-800 border rounded-lg p-2'>Repository</Link>
                  </div>

                </div>
                <div className='w-full h-auto rounded-b-xl sm:rounded-none sm:w-96 sm:h-48 bg-gray-200 sm:rounded-e-2xl p-4'>
                  <Image src={data.image} alt={data.imageAlt} width={400} height={400} className='mx-auto w-full h-auto rounded-lg ' />
                </div>
              </div>
              <section className="bg-gray-200 p-2 rounded-xl">
                <p className="text-black text-center mb-2">Technologies</p>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {data.technologies.map((tech) => (
                    <li key={tech} className='bg-[#4c6d8b] rounded-lg p-2 text-center'>{tech}</li>
                  ))}
                </ul>
              </section>
            </section>
          )
        })}
      </div>
    </section>
  )
}