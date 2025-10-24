"use client";

import styles from './Title.module.css';
import { Instagram, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-white text-slate-900 py-12 px-6 mt-20">
      {/* White Curve Divider */}
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden"
        style={{ height: '100px', marginTop: '-99px' }}
      >
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 Q300,100 600,50 T1200,0 L1200,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h2 className={`${styles.title} text-4xl mb-4 [text-shadow:_2px_2px_0_black]`}>
              K. Epelbaum
            </h2>
            <p className="text-sm leading-relaxed">
              Premium web design, and development services to help your business stand out and make an impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">QUICK LINKS</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="duration-300 text-md hover:text-pink-400 hover:translate-x-1 transition-all"
              >
                HOME
              </Link>
              <Link
                href="/me"
                className="duration-300 text-md hover:text-pink-400 hover:translate-x-1 transition-all"
              >
                ABOUT ME
              </Link>
              <Link
                href="/projects"
                className="duration-300 text-md hover:text-pink-400 hover:translate-x-1 transition-all"
              >
                PROJECTS
              </Link>
              <Link
                href="/contact"
                className="text-md font-bold duration-300 hover:text-pink-400 hover:translate-x-1 transition-all"
              >
                TALK TO ME?
              </Link>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold mb-4 text-lg">CONNECT</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-pink-900/30 p-3 rounded-lg transition-all duration-300 hover:bg-pink-400 hover:text-white hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-pink-900/30 p-3 rounded-lg transition-all duration-300 hover:bg-pink-400 hover:text-white hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-pink-900/30 p-3 rounded-lg transition-all duration-300 hover:bg-pink-400 hover:text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-pink-900/30 p-3 rounded-lg transition-all duration-300 hover:bg-pink-400 hover:text-white hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-700 text-xs">
          <p>©2025 K. Epelbaum. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
