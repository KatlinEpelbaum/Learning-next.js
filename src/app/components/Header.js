"use client";

import styles from './Title.module.css';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex flex-row justify-between items-center z-10">
      {/* Brand */}
      <h1
        className={`${styles.title} p-4 transition-transform duration-300 cursor-pointer text-xl md:text-2xl hover:scale-105`}
      >
        K. Epelbaum
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-white rounded-l-full items-center py-6 text-slate-900 pr-20 shadow-lg">
        <div className="space-x-2 lg:space-x-8 flex flex-end pl-4 lg:pl-8 text-sm lg:text-base">
          {['HOME', 'ME', 'PROJECTS', 'TALK TO ME?'].map((text, idx) => {
            const href = ['/', '/me', '/projects', '/contact'][idx];
            return (
              <Link
                key={text}
                href={href}
                className={`relative group ${text === 'TALK TO ME?' ? 'font-bold' : ''} hover:text-pink-400 transition-colors duration-200`}
              >
                {text}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white p-4 transition-transform duration-300 hover:scale-110 z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation with Drop-down Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }} // 👈 start slightly above
            animate={{ opacity: 1, y: 0 }} // 👈 drop down smoothly
            exit={{ opacity: 0, y: -20 }} // 👈 animate out upward
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40"
          >
            <div className="flex flex-col space-y-4 p-6">
              <Link
                href="/"
                className="text-slate-900 hover:text-pink-400 transition-colors duration-200 text-lg font-medium border-b border-slate-200 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/me"
                className="text-slate-900 hover:text-pink-400 transition-colors duration-200 text-lg font-medium border-b border-slate-200 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                ME
              </Link>
              <Link
                href="/projects"
                className="text-slate-900 hover:text-pink-400 transition-colors duration-200 text-lg font-medium border-b border-slate-200 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/contact"
                className="text-slate-900 hover:text-pink-400 transition-colors duration-200 text-lg font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                TALK TO ME?
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
