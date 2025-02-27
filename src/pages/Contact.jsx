import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#FAEBD7]   w-full  p-3 md:flex md:flex-col md:justify-center md:items-center   min-h-screen ">
      
      {/* Contact Info */}
      <div className="mt-15">
        <h1 className="font-[Playfair] tracking-tight font-black text-6xl md:text-[65px] md:tracking-tighter">
          Contact us.
        </h1>
        <p className="font-[Roboto] mt-6">
          You may find that our FAQ page has the answers that <br className='hidden md:block' /> you are looking for. If not, feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <form action="" className="  py-6  md:w-[27%]">
        <div className="">
          <label htmlFor="name" className="block  font-bold ">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            className="w-full mt-4 p-3 border-2 bg-white text-base outline-none "
            placeholder="Jana Code  "
          />
        </div>
        <div className="mt-4">
          <label htmlFor="name" className="block  font-bold ">
          Email Address
          </label>
          <input 
            type="text" 
            id="name" 
            className="w-full mt-4 p-3 border-2 bg-white text-base outline-none "
            placeholder="email@website.com "
          />
        </div>
        <div className="mt-4">
          <label htmlFor="name" className="block  font-bold ">
          Message
          </label>
          <textarea
            placeholder="What would you like to say?"
            rows="4"
            className="w-full p-2 border-2 bg-white mt-4 h-60  outline-none "
          ></textarea>
        </div>
       <button className='bg-white border-2 text-center py-2 px-10 font-bold mt-4'>Submit</button>
      </form>

    </div>
  );
}

export default Contact;
