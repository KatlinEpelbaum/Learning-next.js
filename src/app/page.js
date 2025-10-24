"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Large Image */}
            <div className="bg-white  rounded-3xl aspect-square md:aspect-auto md:row-span-2 relative overflow-hidden group">
            </div>

            {/* About Text Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-gray-500 text-sm mb-2">ABOUT</p>
              <p className="text-md leading-relaxed mb-6">
                I transform ideas into stunning, functional websites that capture your brand's essence. With a perfect blend of creativity and technical expertise, I create digital experiences that leave lasting impressions. <br />
                Every project is a journey we take together. Through thoughtful collaboration and clear communication, I ensure your vision comes to life exactly as you imagined – or even better.              </p>
              <Link href="/me" className="w-full border border-white rounded-full py-4 px-8 text-sm font-bold hover:bg-white hover:text-black transition-all duration-300">
                SEE MORE
              </Link>
            </div>

            {/* Second Image */}
            <div className="border-white border-2 rounded-3xl aspect-video relative group">
              <ThreeScene />
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href="/projects" 
              className="flex-1 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">MY P</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </div>
            </Link>
            <Link 
              href="/projects" 
              className="flex-1 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">TALK TO ME</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Process Section */}
    </div>
  )
};
