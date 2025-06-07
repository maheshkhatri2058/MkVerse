"use client"
import Link from "next/link"
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import Image from "next/image";
export default function Nvbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

return(
    <>
      <nav className="bg-orange-600 text-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <Image
          src='/logo.png'
          alt='Logo'
          width={100}
          height={100}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="/blogs" className="hover:text-cyan-400 transition">Blogs</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-4 bg-black border-t border-gray-700">
          <Link href="/" className="block hover:text-cyan-400">Home</Link>
          <Link href="/projects" className="block hover:text-cyan-400">Projects</Link>
          <Link href="/blogs" className="block hover:text-cyan-400">Blogs</Link>
          <Link href="/about" className="block hover:text-cyan-400">About</Link>
          <Link href="/contact" className="block hover:text-cyan-400">Contact</Link>
        </div>
      )}
    </nav>
    </>
)    
}