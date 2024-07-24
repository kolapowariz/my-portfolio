'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ProjectType } from '@/app/types';


export default function Project() {
  const [project, setProject] = useState<ProjectType | null>(null);
  const params = useParams();
  const title = params?.title as string;

  useEffect(() => {
    if (title) {
      fetch('/data/portfolio.json')
        .then((response) => response.json())
        .then((data: ProjectType[]) => {
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
      <p className='text-4xl font-extrabold text-center p-2'>{project.title}</p>
      <p>{project.description}</p>
      <Image src={project.image} alt={project.imageAlt} width={400} height={400} className='w-full h-auto rounded-lg' />
    </div>
  );
}
