'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

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
    <div>
      <h1>Welcome to the project section</h1>
      <p>{project.title}</p>
      <p>{project.description}</p>
      {/* <Image src={project.image} alt={project.imageAlt} width={400} height={400} /> */}
    </div>
  );
}
