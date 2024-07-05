'use client'
import Image from "next/image"

const Hero = () => {
  return (
       <section className='bg-gradient-to-b from-sky-950 to-sky-900 p-5 '>
        <div className='container flex flex-col-reverse md:flex-row items-center px-20 mx-auto mt-10 space-y-0 md:space-y-0'>
          <div  className="flex flex-col mb-32 space-y-2 md:1/2">
          <h1 className="text-5xl font-extrabold leading-normal font-serif text-white">Hi I'm S. Ahmer Ali</h1>
          <h3 className="text-3xl font-extrabold font-serif text-blue-400">Frontened Developer</h3>
          <p className="text-sm font-semibold text-white font-serif ms-0 me-50 text-justify">
            I have done my Certification in Web Development from BRMKL. 
            A free Skill Development Program 
            started by KHREWS Services. In which I learned HTML,
            CSS, TailwindCSS, JavaScripting, Next.JS. </p>
          <div className="">
          <button className="relative border-2 bg-blue-500 hover:bg-sky-950 overflow-hidden text-white rounded-md w-32 py-2 px5 font-bold text-center cursor-pointer">
            Hire Me
          </button>
          <button className="absolute border-2 ml-10 bg-blue-500 hover:bg-sky-950 overflow-hidden text-white rounded-md w-32 py-2 px5 font-bold text-center cursor-pointer">
            let's Talk
          </button>
          </div>
          </div>
          
          <div>
          <img className= "rounded-full decoration-sky-950 opacity-50 mt-4 ml-48 "src="/Ahmer2.png" alt="" width={1500} height={2048}/>
          </div>
        
        </div>

       </section>
  )
}

export default Hero