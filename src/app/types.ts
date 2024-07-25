 export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  
};

export type DetailsType = ProjectType & {
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}