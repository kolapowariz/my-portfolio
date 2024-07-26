 export type ProjectType = {
  id: number;
  title: string;
  littleDesc: string;
  image: string;
  imageAlt: string;
  
};

export type DetailsType = ProjectType & {
  description: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  done?: string;
}