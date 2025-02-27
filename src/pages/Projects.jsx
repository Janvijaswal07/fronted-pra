import React from 'react';
import { FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import cardimg1 from '../images/cardimg1.webp';

const Projects = () => {
  const projectCards = Array(10).fill({
    title: 'Ableton',
    level: 'Level 1',
    image: cardimg1
  });

  return (
    <div className='w-full px-5 md:py-15 font-[Roboto] '>
      {/* Header Section */}
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-5xl md:text-8xl mt-10 md:mt-0 tracking-tighter font-black font-[Playfair]'>Project Library</h1>
        <h2 className='text-2xl font-bold mt-15 md:mt-5'>How to get started:</h2>

        {/* Steps */}
        <div className='mt-5 '>
          {[
            "Choose one of our projects below.",
            "Recreate all or parts of the page.",
            "Improve and test your skills.",
            "Become a better frontend developer."
          ].map((text, index) => (
            <div key={index} className='md:flex mt-2 md:items-center flex items-center gap-3 text-center'>
              <p className='md:text-xl text-sm'>{index === 3 ? <FaCheck /> : <FaArrowRightLong />}</p>
              <p className={`md:text-2xl text-lg ${index === 3 ? 'font-bold' : ''}`}>{text}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex flex-wrap justify-center gap-4 px-10 md:px-0 mt-8'>
          {["View All", "Level 1", "Level 2", "Level 3"].map((btn, index) => (
            <button
              key={index}
              className={`border-2 font-bold text-medium py-2 px-5 ${
                index === 0 ? 'bg-black text-white' : `hover:bg-${["#BCFF93", "#FCFF74", "#FFD430"][index - 1]}`
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className='mt-4 w-full px-4'>
          <input
            type="text"
            placeholder='Search for project by name: Nintendo'
            className='py-2 text-lg px-5 border-2 md:text-xl md:w-[28.5%] w-full'
          />
        </div>

        {/* Description */}
        <div className='mt-10 md:w-[38%] px-12 md:px-0'>
          <p className='text-lg font-bold'>There are no rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className='flex flex-wrap justify-center  gap-5 mt-10'>
        {projectCards.map((project, index) => (
          <div key={index} className="relative w-[350px] transition-transform duration-300 hover:-translate-y-2">
            {/* Button Outside Card */}
            <button className="absolute top-[-10px] right-[-10px] border-2 font-bold text-medium bg-[#BCFF93] py-1 px-4">
              {project.level}
            </button>

            {/* Main Card */}
            <div className="w-[350px] h-[500px] overflow-hidden ">
              {/* Background Image */}
              <div 
                className="h-[80%] bg-cover border-2" 
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Content Section */}
              <div className="bg-[#FAEBD7] py-4 px-4 border-2 border-t-0">
                <h1 className="text-2xl font-bold">{project.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
