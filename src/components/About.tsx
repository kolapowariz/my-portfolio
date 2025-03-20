import Skills from "./skills";

function About() {
  return (
    <section id="about" className="pt-10 text-xl">
      <h2 className="text-center text-4xl mt-10">About Me</h2>
      <p className="mt-2">
        I&apos;m a passionate and dedicated Frontend Developer who loves
        creating beautiful, dynamic user and functional web experiences. I enjoy
        transforming ideas into reality and thrive on solving complex problems
        with elegant solutions.
      </p>
      <p>
        During my teenage years, at the age of 17, I became fascinated with the
        world of programming and I delved into it intending to learn C# (C
        Sharp) programming language. Although I encountered obstacles and my
        progress was not as smooth as I had envisioned, this experience laid the
        foundation for my future endeavors. Despite encountering numerous
        challenges, I persisted in my pursuit.
      </p>
      <p>
        However, my journey took an unexpected turn when I stumbled upon
        JavaScript, a language that ignited a deep-seated passion within me.
        From that point on, My path was crystal clear - I was meant to pursue a
        career in web development.
      </p>
      <p>
        This newfound passion has been the driving force behind my relentless
        quest for self-improvement, pushing me to continually refine my skills,
        keep abreast of the latest industry trends, and adhere to best practices
        in the field.
      </p>
      <Skills />
    </section>
  );
}

export default About;
