'use client';

import { useState } from 'react';

export default function Landing() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`relative h-[100dvh] w-full overflow-hidden transition-colors duration-500 ease-in-out ${
      isDark ? 'bg-[#1a1a1a]' : 'bg-white'
    }`}>
      
      {/* Dark Mode Toggle - Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <button
          onClick={toggleTheme}
          className={`relative w-24 h-24 rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 ${
            isDark 
              ? 'bg-[#2a2a2a] shadow-[0_0_40px_rgba(255,255,255,0.1)]' 
              : 'bg-gray-100 shadow-[0_0_40px_rgba(0,0,0,0.1)]'
          }`}
          aria-label="Toggle dark mode"
        >
          {/* Sun Icon */}
          <svg
            className={`absolute inset-0 m-auto w-12 h-12 transition-all duration-500 ease-in-out ${
              isDark 
                ? 'opacity-0 rotate-180 scale-0' 
                : 'opacity-100 rotate-0 scale-100'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#1a1a1a"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>

          {/* Moon Icon */}
          <svg
            className={`absolute inset-0 m-auto w-12 h-12 transition-all duration-500 ease-in-out ${
              isDark 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-180 scale-0'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f5f5f5"
            strokeWidth={2}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 px-8 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold tracking-tight transition-colors duration-500 ease-in-out ${
            isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'
          }`}>
            STUDIO
          </div>
          <div className="flex gap-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium tracking-wide transition-colors duration-500 ease-in-out hover:opacity-60 ${
                  isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className={`text-[clamp(48px,8vw,120px)] font-bold tracking-tight leading-[0.9] transition-colors duration-500 ease-in-out ${
            isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'
          }`}>
            We craft
            <br />
            digital experiences
          </h1>
          
          <p className={`text-[clamp(18px,2vw,24px)] font-light max-w-2xl mx-auto transition-colors duration-500 ease-in-out ${
            isDark ? 'text-[#f5f5f5]/80' : 'text-[#1a1a1a]/70'
          }`}>
            A creative studio specializing in brand identity, web design, and immersive digital storytelling
          </p>

          <div className="pt-8">
            <button className={`px-8 py-4 text-lg font-medium rounded-full transition-all duration-500 ease-in-out hover:scale-105 ${
              isDark 
                ? 'bg-[#f5f5f5] text-[#1a1a1a] hover:bg-[#e5e5e5]' 
                : 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]'
            }`}>
              View Our Work
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-40 px-8 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className={`text-sm transition-colors duration-500 ease-in-out ${
            isDark ? 'text-[#f5f5f5]/60' : 'text-[#1a1a1a]/50'
          }`}>
            © 2024 Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className={`text-sm transition-colors duration-500 ease-in-out hover:opacity-60 ${
                  isDark ? 'text-[#f5f5f5]/60' : 'text-[#1a1a1a]/50'
                }`}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

