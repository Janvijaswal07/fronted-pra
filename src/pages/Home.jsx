import React from "react";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.avif";
import img3 from "../images/img3.avif";
import img4 from "../images/img4.avif";
import img5 from "../images/img5.avif";

const Home = () => {
  return (
    <div className="font-[Roboto] overflow-hidden">
      {/* First Section */}
      <div className="bg-[#FAEBD7] border-b-2 flex flex-col md:h-screen px-4 py-8 md:flex-row md:justify-evenly items-center w-full">
        {/* Left Content */}
        <div>
          <h1 className="font-[Playfair] tracking-tight font-black text-4xl sm:text-6xl md:text-[68px] md:tracking-tighter md:leading-15">
            Become a better
            <br />
            <span>frontend developer.</span>
          </h1>

          <p className="text-lg md:text-2xl py-4">
            Take your frontend skills to the next level by <br className="hidden md:block" />
            recreating <span className="font-bold">real websites</span> from <span className="font-bold">real companies</span>.
          </p>

          <p className="text-lg md:text-2xl py-2">
            The perfect type of practice for developers of all <br className="hidden md:block" /> skill levels. Are you up for the challenge?
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row lg:justify-start gap-4 py-2">
            <button className="border-2 py-2 px-5 font-semibold text-base bg-white hover:bg-black hover:text-white hover:border-black">
              View Projects
            </button>
            <button className="border-2 py-2 px-5 font-semibold text-base  hover:bg-black hover:text-white hover:border-black">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image - Visible only on lg and above */}
        <div className="hidden lg:block">
          <img src={img1} alt="Frontend Developer" className="w-[580px] h-[450px]" />
        </div>
      </div>

      {/* Second Section */}
      <div className="px-4 text-center py-10 font-[Roboto]">
        <h1 className="font-[Playfair] text-center tracking-tight leading-7 font-black text-3xl sm:text-5xl md:text-4xl md:leading-9">
          Frontend Practice provides you with the <br className="hidden md:block" /> inspiration and resources to create <br className="hidden md:block" />
          beautiful websites.
        </h1>
        <h1 className="text-xl leading-9 mt-10 md:text-2xl">
          Here are some ways you can benefit <br className="hidden md:block" /> from using our platform:
        </h1>

        {/* Four Column Div */}
        <div className="md:flex md:flex-wrap md:justify-center md:items-center mt-8 md:gap-6">
         <div className="md:flex md:justify-center md:gap-10">
         <div className="border-2 p-4 mt-5 flex flex-col  items-center justify-center md:flex md:flex-row md:gap-4 md:w-[30%] ">
            <img src={img2} alt="img" className="h-[60px] w-[60px] mb-3 md:h-[80px] md:w-[80px]" />
            <p className="text-lg md:text-xl text-center">Enhance your skills by building real websites selected for their educational value.</p>
          </div>
          <div className="border-2 mt-5 p-4 flex flex-col items-center justify-center md:flex md:flex-row md:gap-4 md:w-[30%]">
            <img src={img3} alt="img" className="h-[60px] w-[60px] mb-3 md:h-[80px] md:w-[80px]" />
            <p className="text-lg md:text-xl text-center">Improve your frontend abilities with real-world projects.</p>
          </div>
         </div>
          
         <div className="md:flex md:justify-center md:gap-10">
         <div className="border-2 mt-5 p-4 flex flex-col items-center justify-center md:flex md:flex-row md:gap-4 md:w-[35%]">
            <img src={img4} alt="img" className="h-[60px] w-[60px] mb-3 md:h-[80px] md:w-[80px]" />
            <p className="text-lg md:text-xl text-center">Refine your coding skills with hands-on challenges.</p>
          </div>
          
          <div className="border-2 mt-5  p-4 flex flex-col items-center justify-center md:flex md:flex-row md:gap-4 md:w-[35%]">
            <img src={img5} alt="img" className="h-[60px] w-[60px] mb-3 md:h-[80px] md:w-[80px]" />
            <p className="text-lg md:text-xl text-center">Gain confidence by practicing with industry-standard designs.</p>
          </div>
         </div>
        </div>

        {/* Final Section */}
        <div className="mt-8 md:mt-20">
          <h1 className="font-[Playfair] leading-8 tracking-tight font-black text-3xl sm:text-5xl md:text-4xl">
            Ready to become a better <br className="hidden md:block" /> frontend developer?
          </h1>
          <button className="border-2 mt-8 py-2 px-5 font-semibold text-base bg-white hover:bg-black hover:text-white hover:border-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
