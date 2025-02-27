import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-around items-center p-4 border-b-2 font-[Roboto] relative">
      {/* Logo */}
      <h1 className="font-[Playfair] tracking-tight font-black text-3xl md:text-4xl">
        <Link to="/">Frontend Practice</Link>
      </h1>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 tracking-wide text-[18px] font-[600] list-none">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Project</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/newsletter">Newsletter</Link></li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-white shadow-md p-5 flex flex-col items-center gap-4 md:hidden">
          <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/projects">Project</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/blog">Blog</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/faq">FAQ</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/contact">Contact</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/newsletter">Newsletter</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
