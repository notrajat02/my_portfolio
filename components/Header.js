"use client";
import Image from "next/image";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="bg-gray-900 border-b border-gray-700 shadow-md h-20" style={{ backgroundImage: 'url(/logo.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-3xl text-white italic font-serif bg-black bg-opacity-60 px-4 py-2 rounded">CreatSpace</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <NavigationMenu />
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-blue-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4">
          <NavigationMenu />
        </nav>
      )}
    </header>
  );
}