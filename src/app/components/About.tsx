'use client'
import Head from 'next/head';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-950 to-blue-400">
      <div className="bg-sky-950 rounded-lg p-16 mt-0 mb-32 shadow-lg text-white max-w-6xl">
        <h1 className="text-4xl pt-0 text-center font-bold mb-4">
          About <span className="text-blue-400">Me</span>
        </h1>
        <div className="flex justify-center pt-10 mb-12">
            <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-blue-400">
          <img className= "rounded-full opacity-50 ml-2 "src="/Ahmer2.png" alt="" width={100} height={100}/>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse"></div>
            </div>
            </div>
        <h2 className="text-center text-2xl font-bold mb-2">Frontend Developer!</h2>
        <p className="text-center mb-4"> Hi I'm Syed Ahmer Ali 
        I have done my Certification in Web Development from BRMKL. 
            A free Skill Development Program 
            started by KHREWS Services. In which I learned HTML
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Read More
          </button>
      </div>
      </div>
    </div>
  );
};

export default About;
