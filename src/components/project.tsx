import Image from "next/image"

const projects = [
  {
    "title": "wavvySort",
    "littleDesc": "A web application for authors and readers to create and access content.",
    "description": "In this age of pictures, hashtags, Reels, TikTok, likes, and comments, a traditional bookworm’s heaven would be a blog to access more text-based content. WaveSort aims to be that heaven specifically for this kind of audience. It is a multi-functional platform for authors and readers to create and access content.",
    "id": "2",
    "image": "/wavvysort.png",
    "imageAlt": "Healler Image",
    "liveUrl": "https://wavvysort.vercel.app/",
    "githubUrl": "https://github.com/kolapowariz/wavvysort",
    "technologies": ["Nextjs", "Shadcn UI", "Tailwind CSS", "TypeScript", "Supabase"],
    "done": "Coming Soon"
  },
  {
    "title": "Healler",
    "littleDesc": "A web app that connects people with health professionals.",
    "description": "It's a platform that connects people with health professionals. It is a platform that allows people to book appointments with health professionals and have video calls with them.",
    "id": "1",
    "image": "/heallar.png",
    "imageAlt": "Healler Image",
    "liveUrl": "https://healler.vercel.app/",
    "githubUrl": "https://github.com/kolapowariz/healler",
    "technologies": ["MongoDB", "Express", "Reactjs", "Nodejs", "Tailwind CSS", "TypeScript"],
    "done": "Coming Soon"
  },
  {
    "title": "FetchRepoApp",
    "littleDesc": "A vuejs app that fetches my repositories on GitHub.",
    "description": "FetchRepoApp is a platform that fetches my repositories on GitHub. It allows users to search for repositories by name and view the details of the repository.",
    "id": "3",
    "image": "/repoVue.png",
    "imageAlt": "FetchRepo Image",
    "liveUrl": "https://fetchrepowithvue.vercel.app/",
    "githubUrl": "https://github.com/kolapowariz/fetchRepoWithVue",
    "technologies": ["Vuejs","JavaScript", "CSS", "HTML"]
  },
  {
    "title": "RepositoriesApp",
    "littleDesc": "A reactjs app that fetches my repositories on GitHub.",
    "description": "RepositoriesApp is a platform that fetches my repositories on GitHub. It allows users to search for repositories by name and view the details of the repository.",
    "id": "4",
    "image": "/repoReact.png",
    "imageAlt": "Repository Image",
    "liveUrl": "https://alt-second-semester-exam-chi.vercel.app/",
    "githubUrl": "https://github.com/kolapowariz/FetchRepoWithReact",
    "technologies": ["Reactjs","JavaScript","CSS", "HTML"]
  }
]


export default function Projects() {
  return (
    <section id="projects">
      <h2 className='text-center text-4xl mt-10'>Projects</h2>
      <div className='xl:grid lg:mt-6 xl:grid-cols-2 xl:gap-8'>
        {projects.map((data) => {
          return (
            <section key={data.id} className="bg-[#2a455e] xl:w-[100%] lg:w-[80%] sm:w-[90%] rounded-xl mx-auto">

              <div className='bg-[#2a455e] sm:w-full rounded-lg flex flex-col sm:flex-row justify-center items-center my-7 mx-auto mb-0'>
                <div className='bg-[#2a455e] w-full h-auto rounded-t-xl sm:rounded-none sm:w-96 sm:h-48 sm:rounded-s-2xl p-4'>
                  <h1 className="text-center text-2xl mb-2">{data.title}</h1>
                  <p className='mb-4'>{data.littleDesc}</p>
                  <div className="flex gap-2 justify-center">
                    <a href={data.liveUrl} target="_blank" className='text-blue-500 border-white border rounded-lg p-2'>Live URL</a>
                    <a href={data.githubUrl} target="_blank" className='text-blue-500 border-white border rounded-lg p-2'>Repository</a>
                  </div>

                </div>
                <div className='w-full h-auto rounded-b-xl sm:rounded-none sm:w-96 sm:h-48 bg-[#2a455e] sm:rounded-e-2xl p-4'>
                  <Image src={data.image} alt={data.imageAlt} width={400} height={400} className='mx-auto w-full h-auto rounded-lg ' />
                </div>
              </div>
              <section className="bg-[#2a455e] p-2 rounded-xl">
                <p className="text-center mb-2">Technologies</p>
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