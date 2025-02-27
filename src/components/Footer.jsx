import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white md:text-center px-4 py-10">
      <h2>Frontend Practice - © 2025</h2>
      <ul className="md:flex md:justify-center md:gap-5 font-bold mt-3">
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>FQA</li>
        <li>Contact</li> 
        <li>Newsletter</li>
      </ul>
    </div>
  );
};

export default Footer;
