'use client';

import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { DetailsType } from '@/app/types';
import Link from 'next/link';
import { SingleProject } from '@/components/skeleton';


export default function Project() {
  const [project, setProject] = useState<DetailsType | null>(null);
  const params = useParams();
  const title = params?.title as string;

  useEffect(() => {
    if (title) {
      fetch('/data/portfolio.json')
        .then((response) => response.json())
        .then((data: DetailsType[]) => {
          const selectedProject = data.find((project) => project.title === title);
          setProject(selectedProject ?? null);
        })
        .catch((error) => {
          console.error('Error fetching the portfolio data:', error);
          setProject(null);
        });
    }
  }, [title]);

  if (!project) return <SingleProject />;

  return (
    <div className='m-4 w-full mx-auto lg:w-[95%] lg:mx-auto bg-[#09233c] p-5 lg:m-5 text-gray-200'>
      <p className='text-4xl font-extrabold text-center mb-2'>{project.title}</p>
      <p className='mb-2'>{project.description}</p>
      <Image src={project.image} alt={project.imageAlt} width={1920} height={958} className='mb-2 w-full h-auto rounded-lg sm:w-[60rem] sm:h-[40rem] mx-auto' />
      <h3 className='text-2xl text-center p-2 my-4'>Technologies</h3>
      <ul className='grid grid-cols-2 gap-4 p-2 sm:w-[35rem] mx-auto'>
        {project.technologies.map((tech) => (
          <li key={crypto.randomUUID()} className='bg-[#4c6d8b] rounded-lg p-2 text-center'>{tech}</li>
        ))}
      </ul>
      <section className='flex justify-around mt-4 w-full sm:w-[35rem] mx-auto'>
        <Link href={project.liveUrl} target='_blank' rel='noreferrer' className='p-2 rounded-md bg-[#4c6d8b]'>Live Url</Link>
        <Link href={project.githubUrl} target='_blank' rel='noreferrer' className='p-2 rounded-md bg-[#4c6d8b]'>Github Url</Link>
        <Link href='/' className='p-2 rounded-md bg-[#4c6d8b]'>Home</Link>
      </section>
      <p className='text-7xl text-center my-10'>{project.done}</p>
    </div>
  );
}
