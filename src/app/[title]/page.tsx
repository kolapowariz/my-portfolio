'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { DetailsType } from '@/app/types';
import Link from 'next/link';


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

  if (!project) return <h1>Loading...</h1>;

  return (
    <div className='m-4'>
      <p className='text-4xl font-extrabold text-center mb-2'>{project.title}</p>
      <p className='mb-2'>{project.description}</p>
      <Image src={project.image} alt={project.imageAlt} width={1920} height={958} className='mb-2 w-full h-auto rounded-lg sm:w-[60rem] sm:h-[40rem] mx-auto' />
      <ul className='grid grid-cols-2'>
        {project.technologies.map((tech) => (
          <li key={crypto.randomUUID()} className='bg-white mb-2 p-2 border rounded-md'>{tech}</li>
        ))}
      </ul>
      <section className='flex justify-between'>

      <Link href={project.liveUrl} target='_blank' rel='noreferrer' className=''>LiveUrl</Link>
      <Link href={project.githubUrl} target='_blank' rel='noreferrer'>GithubUrl</Link>
      <Link href='/'>Back to Home</Link>
      </section>
    </div>
  );
}
