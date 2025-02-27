import React from 'react';

const Blog = () => {
  return (
    <div className="font-[Roboto] h-screen w-full p-4 md:text-center md:flex md:flex-col  md:items-center md:justify-center">
      <h1 className="md:text-[85px] text-center font-black font-[Playfair] text-5xl  tracking-tighter">
        Frontend <br /> Practice Blog
      </h1>
      <p className="text-base text-center md:mb-15 mt-6 md:text-xl">
        Covering a wide range of topics, including project tutorials, responsive design, <br className="hidden md:block" />
        accessibility, testing, helpful tips, and more.
      </p>

      <div className="md:flex md:flex-col md:justify-center md:items-center md:text-center mt-10 w-full">
        <div className="md:flex items-center border-b md:text-center md:justify-between px-4 border-t py-3 md:w-[57%] mx-auto">
          <h1 className="font-[Playfair] text-[27px] md:text-3xl leading-7 md:leading-0 font-black">Where to host your frontend projects.</h1>
          <div className="md:flex md:gap-2 hidden sm:block ">
            <button className="font-[Playfair] text-white bg-black rounded-full px-3 py-1 text-base leading-none inline-flex items-center">Hosting</button>
            <button className="font-[Playfair] text-white bg-black rounded-full px-3 py-1 text-base leading-none inline-flex items-center">Projects</button>
          </div>
        </div>

        <div className="md:flex items-center border-b md:text-center md:justify-between px-4 py-3 md:w-[57%] mx-auto">
          <h1 className="font-[Playfair] text-[27px] md:text-3xl leading-7 md:leading-0 font-black">How to quickly build your developer portfolio.</h1>
          <div className="md:flex md:gap-2 hidden sm:block">
            <button className="font-[Playfair] text-white bg-black rounded-full px-3 py-1 text-base leading-none inline-flex items-center">Tips</button>
            <button className="font-[Playfair] text-white bg-black rounded-full px-3 py-1 text-base leading-none inline-flex items-center">Portfolio</button>
          </div>
        </div>

        <div className="md:flex  items-center border-b md:text-center md:justify-between px-4 py-3 md:w-[57%] mx-auto">
          <h1 className="font-[Playfair] text-[27px] md:text-3xl leading-7 md:leading-0 font-black">Frontend Practice and how it works.</h1>
          <div className="md:flex md:gap-2 hidden sm:block">
            <button className="font-[Playfair] text-white bg-black rounded-full px-3 py-1 text-base leading-none inline-flex items-center">Projects</button>
            <button className="font-[Playfair] text-white bg-black rounded-full px-3 py-1 text-base leading-none inline-flex items-center">How-to</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
