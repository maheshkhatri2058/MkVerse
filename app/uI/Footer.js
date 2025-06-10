'use client';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Name */}
        <p className="text-xl font-semibold text-cyan-400">MKSVerse</p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <Link href="/projects" className="hover:text-cyan-400">Projects</Link>
          <Link href="/blogs" className="hover:text-cyan-400">Blogs</Link>
          <Link href="/about" className="hover:text-cyan-400">About</Link>
          <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61577199869494" target="_blank" rel="noopener noreferrer">
            <Facebook className="hover:text-cyan-400 transition" size={24} />
          </a>
          <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-cyan-400 transition" size={24} />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <Twitter className="hover:text-cyan-400 transition" size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MKSVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
