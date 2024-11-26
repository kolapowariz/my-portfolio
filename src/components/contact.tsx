export default function Contact() {
  return (
    <section id="contact" className="pt-10">
      <h2 className='text-center text-4xl mt-10'>Contact</h2>
      <p className="text-3xl text-center mt-10">Get in touch</p>
      <div className='text-xl flex flex-col justify-center items-center mt-10'>
        <p className="text-center">I am always open to new oppurtunites, lets build something amazing.</p>
        <p className="text-center">From simple landing pages to huge projects, etc.</p>
        <p className="mt-4 text-center">If you have other requests or question,</p>
        <p className="text-center">please by all means...</p>
        <p className="text-center">slide in!</p>
        <button className="mt-20 border rounded-md px-10 py-6 border-gray-500"> <a href="mailto:kolapowariz@gmail.com">Send Message!</a></button>
      </div>
    </section>
  )
}