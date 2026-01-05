'use client';

import { useState } from 'react';

export default function Landing() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`relative h-[100dvh] w-full overflow-hidden transition-colors duration-700 ease-in-out ${
      isDark ? 'bg-[#1a1a1a]' : 'bg-white'
    }`}>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 px-8 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold tracking-tight transition-colors duration-700 ease-in-out ${
            isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'
          }`}>
            STUDIO
          </div>
          <div className="flex gap-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium tracking-wide transition-colors duration-700 ease-in-out hover:opacity-60 ${
                  isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Dev Mode Pill */}
      <div className="absolute top-8 right-8 z-40">
        <div className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-700 ease-in-out ${
          isDark 
            ? 'bg-[#2a2a2a] text-[#f5f5f5] shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          Dev Mode
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`font-bold tracking-tight transition-colors duration-700 ease-in-out ${
            isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'
          }`}>
            <div className="text-[7vw] leading-none mb-4">We craft digital</div>
            <div className="text-[7vw] leading-none" style={{ minHeight: '7vw' }}>
              <button
                onClick={toggleTheme}
                className="inline-block relative hover:opacity-70 transition-opacity duration-300 cursor-pointer"
                aria-label="Toggle dark mode"
                style={{ width: '100%', maxWidth: '600px' }}
              >
                <span className="relative inline-block w-full text-center">
                  <span className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isDark ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <span className={`transition-colors duration-700 ease-in-out ${
                      isDark ? 'text-[#f5f5f5]/40' : 'text-[#1a1a1a]/40'
                    }`}>[</span>experiences<span className={`transition-colors duration-700 ease-in-out ${
                      isDark ? 'text-[#f5f5f5]/40' : 'text-[#1a1a1a]/40'
                    }`}>]</span>
                  </span>
                  <span className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isDark ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className={`transition-colors duration-700 ease-in-out ${
                      isDark ? 'text-[#f5f5f5]/40' : 'text-[#1a1a1a]/40'
                    }`}>[</span>moods<span className={`transition-colors duration-700 ease-in-out ${
                      isDark ? 'text-[#f5f5f5]/40' : 'text-[#1a1a1a]/40'
                    }`}>]</span>
                  </span>
                  <span className="invisible">[experiences]</span>
                </span>
              </button>
            </div>
          </h1>
          
          <p className={`text-[clamp(18px,2vw,24px)] font-light max-w-2xl mx-auto mt-12 transition-colors duration-700 ease-in-out ${
            isDark ? 'text-[#f5f5f5]/80' : 'text-[#1a1a1a]/70'
          }`}>
            A creative studio specializing in brand identity, web design, and immersive digital storytelling
          </p>

          <div className="pt-12">
            <button className={`px-8 py-4 text-lg font-medium rounded-full transition-all duration-700 ease-in-out hover:scale-105 ${
              isDark 
                ? 'border border-white hover:bg-white/5' 
                : 'border border-[#1a1a1a] hover:bg-[#1a1a1a]/5'
            } ${isDark ? 'text-[#f5f5f5]' : 'text-[#1a1a1a]'}`}>
              View Our Work
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-40 px-8 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className={`text-sm transition-colors duration-700 ease-in-out ${
            isDark ? 'text-[#f5f5f5]/60' : 'text-[#1a1a1a]/50'
          }`}>
            © 2024 Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className={`text-sm transition-colors duration-700 ease-in-out hover:opacity-60 ${
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












