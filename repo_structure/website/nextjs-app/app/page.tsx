'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.jpg';

// ========================================
// Navbar Component (Responsive)
// ========================================
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'AI & Automation', href: '/?category=ai' },
    { name: 'Technology', href: '/?category=technology' },
    { name: 'Business', href: '/?category=business' },
    { name: 'Youth', href: '/?category=youth' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src={logo} 
              alt="HAKA Logo"
              width={50}
              height={50}
              className="h-10 w-auto object-contain transform group-hover:scale-110 transition-transform"
            />
            <span className="text-xl md:text-2xl font-black text-haka-yellow tracking-tight">HAKA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-haka-yellow font-medium text-sm uppercase tracking-wide transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-haka-yellow transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            href="/subscribe"
            className="hidden lg:flex items-center gap-2 bg-haka-yellow hover:bg-yellow-400 text-black font-bold px-6 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Subscribe Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-haka-yellow transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-300 hover:text-haka-yellow hover:bg-gray-900/50 transition-colors rounded-lg mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/subscribe"
              className="block text-center bg-haka-yellow hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-full transition-all mx-4 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

// ========================================
// Hero Section
// ========================================
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-haka-yellow/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        {/* Animated eyebrow */}
        <p className="eyebrow animate-rise text-haka-yellow uppercase tracking-widest text-sm font-semibold mb-4">
          Isipin. Tuklasin. Umangat.
        </p>

        {/* Main heading */}
        <h1 className="font-display mt-2 animate-rise text-[clamp(4rem,13vw,11rem)] leading-none [animation-delay:120ms]">
          HAKA
          <br />
          <span className="text-haka-yellow drop-shadow-lg">Ideas That Move People & Business</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 max-w-md animate-rise text-lg text-gray-400 leading-relaxed [animation-delay:240ms]">
          Filipino digital media and innovation brand. Connecting the next generation of leaders, 
          entrepreneurs, and tech enthusiasts across AI, technology, business, and lifestyle.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex animate-rise flex-wrap gap-4 [animation-delay:360ms]">
          <Link href="/subscribe" className="inline-flex items-center gap-2 bg-haka-yellow hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.013 18.971L2 19v-.029l.013-.029.989-9.89c.09-.911-.228-1.768-.953-2.259L6.85 4.093C7.555 3.67 8.24 3.6 8.912 3.85c.672.25 1.175.83 1.282 1.53l.21 1.51 6.14-3.307c.75-.412 1.65-.33 2.31.208.66.538.87 1.43.54 2.19L16.213 17.5l-3.49-1.93-.37 1.7c-.24 1.06-1.1 1.86-2.12 1.93l-1.03.05-.37-1.7-3.42 1.88c-.75.412-1.65.33-2.31-.208-.66-.538-.87-1.43-.54-2.19z"/></svg>
            Subscribe Now
          </Link>
          <Link href="/about" className="inline-flex items-center gap-2 bg-transparent border-2 border-gray-700 hover:border-haka-yellow text-white hover:text-haka-yellow font-bold px-8 py-4 rounded-full transition-all">
            Learn More
          </Link>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 [animation-delay:480ms]">
          {['AI & Automation', 'Technology Trends', 'Business Growth', 'Youth Development'].map((category) => (
            <span 
              key={category}
              className="px-5 py-2.5 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-haka-yellow hover:bg-gray-700/50 transition-all cursor-pointer text-xs font-semibold border border-gray-700 hover:border-haka-yellow"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex items-center justify-center gap-6 animate-fade-in-up">
          <a href="https://www.youtube.com/channel/UCxD-xfWenPMwlbgFrrFmJkA" target="_blank" rel="noopener noreferrer" className="group">
            <svg className="w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.756 1.918-4.756 4.912 0 2.994.858 4.641 4.756 4.912 3.609.246 11.636.245 15.23 0 3.897-.266 4.756-1.913 4.756-4.912 0-2.993-.859-4.641-4.756-4.912z"/><path d="M10 15l-5.5-3.376 5.5-3.375L25 11.625z"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61596243012781" target="_blank" rel="noopener noreferrer" className="group">
            <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.06L14.5,4.6c-0.89-0.51-2.3-0.51-3.2,0l-4.26,2.56c-0.91,0.54-1.12,1.72-0.46,2.56l1.46,1.64c-1.54,0.68-2.37,2.54-1.51,4.18l3.29,7.04c0.55,1.15,1.88,1.57,2.89,0.97l3.78-2.61c1.11,0.28,2.28,0.28,3.42,0l3.78,2.61c1.01,0.59,2.34,0.18,2.89-0.97l3.29-7.04c0.86-1.64,0.03-3.5-1.51-4.18l1.46-1.64C24.51,9.32,24.3,8.13,23.39,7.59L19.12,5.09 C18.23,4.57,16.82,4.57,15.92,5.09L11.65,7.6C10.77,8.09,10.5,9.18,10.91,10.1c0.31,0.74,0.31,1.56,0,2.3L8.36,16.3c-0.49,0.85-0.8,1.75-0.8,2.76h-3c0,0,0,0,0,0V10c0,0,0-2.8,2.8-2.8h6.1l2.94,3.9C21.29,14.56,21.5,14.27,21.5,14c0-0.2-0.03-0.43-0.1-0.64l-2.91-5.3C18.88,7.75,18.77,7.06,18.77,7.06z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@hakaphai" target="_blank" rel="noopener noreferrer" className="group">
            <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.756 1.918-4.756 4.912 0 2.994.858 4.641 4.756 4.912 3.609.246 11.636.245 15.23 0 3.897-.266 4.756-1.913 4.756-4.912 0-2.993-.859-4.641-4.756-4.912z"/><path d="M10 15l-5.5-3.376 5.5-3.375L25 11.625z"/></svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// ========================================
// Marquee Section
// ========================================
function Marquee() {
  const phrases = [
    'AI Innovation', 
    'Technology Trends', 
    'Business Growth', 
    'Youth Development',
    '🇵🇭 Filipino Made'
  ];

  return (
    <div className="overflow-hidden border-y border-gray-800 bg-black py-4">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {[...phrases, ...phrases].map((phrase, i) => (
          <span 
            key={i} 
            className="font-display flex items-center gap-8 text-xl md:text-2xl text-gray-400"
          >
            {phrase} <span className="text-haka-yellow">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ========================================
// Video Card Component
// ========================================
function VideoCard({ title, thumbnail, duration, category }: any) {
  return (
    <Link href={`/video/${encodeURIComponent(title)}`} className="group block">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-haka-yellow/10 border border-gray-800 hover:border-haka-yellow/50">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-haka-yellow text-black p-4 rounded-full transform scale-75 group-hover:scale-125 transition-transform shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Duration */}
          <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1.5 rounded-md font-medium">
            {duration}
          </span>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-base md:text-lg font-bold text-gray-100 group-hover:text-haka-yellow transition-colors line-clamp-2 mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-xs uppercase tracking-wide">{category}</p>
        </div>
      </div>
    </Link>
  );
}

// ========================================
// Category Section Component
// ========================================
function CategorySection({ title, subtitle, description, videos }: any) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">{title}</h2>
          {subtitle && (
            <p className="text-xl text-haka-yellow font-bold">{subtitle}</p>
          )}
          {description && (
            <p className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">{description}</p>
          )}
        </div>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video: any) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
        
        {/* View All Link */}
        {videos.length > 0 && videos.length > 2 && (
          <div className="text-center mt-8">
            <Link 
              href={`/?category=${encodeURIComponent(title)}`}
              className="inline-flex items-center gap-2 text-haka-yellow hover:text-yellow-400 font-semibold transition-colors"
            >
              View all {videos.length} videos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// ========================================
// Stats Section
// ========================================
function Stats() {
  const stats = [
    { number: '10K+', label: 'Subscribers' },
    { number: '500+', label: 'Videos Published' },
    { number: '1M+', label: 'Total Views' },
    { number: '15K+', label: 'Community Members' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-haka-darkgray to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 border-t border-gray-800">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-haka-yellow mb-3 animate-fade-in-up">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// Social Links Section
// ========================================
function SocialLinks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="font-display text-3xl md:text-4xl font-black mb-8">Follow HAKA on Social Media</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {/* YouTube */}
          <a 
            href="https://www.youtube.com/channel/UCxD-xfWenPMwlbgFrrFmJkA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-2xl transition-all transform hover:scale-110 shadow-lg hover:shadow-red-500/30"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.756 1.918-4.756 4.912 0 2.994.858 4.641 4.756 4.912 3.609.246 11.636.245 15.23 0 3.897-.266 4.756-1.913 4.756-4.912 0-2.993-.859-4.641-4.756-4.912z"/>
              <path d="M10 15l-5.5-3.376 5.5-3.375L25 11.625z"/>
            </svg>
          </a>
          
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/profile.php?id=61596243012781"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl transition-all transform hover:scale-110 shadow-lg hover:shadow-blue-500/30"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.77,7.06L14.5,4.6c-0.89-0.51-2.3-0.51-3.2,0l-4.26,2.56c-0.91,0.54-1.12,1.72-0.46,2.56l1.46,1.64c-1.54,0.68-2.37,2.54-1.51,4.18l3.29,7.04c0.55,1.15,1.88,1.57,2.89,0.97l3.78-2.61c1.11,0.28,2.28,0.28,3.42,0l3.78,2.61c1.01,0.59,2.34,0.18,2.89-0.97l3.29-7.04c0.86-1.64,0.03-3.5-1.51-4.18l1.46-1.64C24.51,9.32,24.3,8.13,23.39,7.59L19.12,5.09 C18.23,4.57,16.82,4.57,15.92,5.09L11.65,7.6C10.77,8.09,10.5,9.18,10.91,10.1c0.31,0.74,0.31,1.56,0,2.3L8.36,16.3c-0.49,0.85-0.8,1.75-0.8,2.76h-3c0,0,0,0,0,0V10c0,0,0-2.8,2.8-2.8h6.1l2.94,3.9C21.29,14.56,21.5,14.27,21.5,14c0-0.2-0.03-0.43-0.1-0.64l-2.91-5.3C18.88,7.75,18.77,7.06,18.77,7.06z"/>
            </svg>
          </a>
          
          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@hakaphai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-900 text-white p-5 rounded-2xl transition-all transform hover:scale-110 shadow-lg border border-gray-700"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.13 3.07.14 4.61-1.25-.04-2.49.2-3.57.65-.91.38-1.74.9-2.45 1.59-1.03,1.04-1.54,2.42-1.5,3.85.02,1.53.38 3.03 1.12 4.33-3.76.43-5.98 4.29-4.63 7.83 1.4 3.63 5.73 5.05 8.89 3.04 1.5-.95,2.47-2.62,2.63-4.43h1.76c-.17,1.61-1.16,2.99-2.58,3.67-1.43,.7-3.12,.56-4.41-.38-2.58-1.93-2.97-5.58-1.01-7.97 1.23-1.5,2.61-2.48,4.12-3.21,.87-.41,1.75-.67,2.65-.65,.02,1.53,.04,3.07,.09,4.61H12.5c-.09-1.53-.2-3.07-.36-4.61h3.88c.16,1.53,.33,3.07,.38,4.61H8.17c.16,1.53,.38,3.07,.72,4.61h-3.9c-.15-1.53-.27-3.07-.36-4.61h3.91c-.1-1.53-.25-3.07-.45-4.61H4.12c-.18,1.53-.27,3.07-.35,4.61h4.11c-.1-1.53-.22-3.07-.35-4.61h3.94c-.13-1.53-.28-3.07-.45-4.61H4.77C3.12,4.22 1.72,5.76 1.13,7.49c-.65,1.92-.35,4.01,.82,5.68,1.15,1.65,3.11,2.49,5.03,2.17,1.92-.33,3.4-1.9,3.62-3.83h-3.77c.28,1.53,.69,3.07,1.25,4.61h3.66c-.52-1.53-.91-3.07-1.21-4.61h3.81c.22-1.53,.54-3.07,.93-4.61h-3.66c.39,1.53,.8,3.07,1.35,4.61h3.59c-.57-1.53-1.02-3.07-1.35-4.61h3.85c.36-1.53,.73-3.07,1.17-4.61H12.5z"/>
            </svg>
          </a>
        </div>
        <p className="mt-6 text-gray-500 text-sm">Click icons to visit our channels</p>
      </div>
    </section>
  );
}

// ========================================
// Newsletter Section
// ========================================
function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-br from-haka-darkgray via-black to-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-haka-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Icon */}
        <svg width="80" height="80" viewBox="0 0 24 24" fill="#FFC107" className="mx-auto mb-6 drop-shadow-lg">
          <path d="M12 2L1.5 7.5l1.68 5.23c-.28.59-.48 1.23-.59 1.88-.22 1.39.3 2.54 1.42 3.05.45.21.94.34 1.46.37 1.06.06 2.18.06 3.36-.03L22.5 7.5 12 2zM12 4l7.5 3-7.5 4.17L4.5 7L12 4z"/>
        </svg>

        <h3 className="font-display text-4xl md:text-5xl font-black mb-6 gradient-text">Join the HAKA Community</h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Get weekly updates on <span className="text-haka-yellow font-semibold">AI, tech trends,</span> and 
          <span className="text-blue-400 font-semibold"> business insights</span> delivered to your inbox.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a 
            href="#subscribe"
            className="inline-flex items-center justify-center px-10 py-4 bg-haka-yellow hover:bg-yellow-400 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
          >
            Subscribe Now →
          </a>
          <a 
            href="https://youtube.com/channel/UCxD-xfWenPMwlbgFrrFmJkA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-gray-700"
          >
            Subscribe on YouTube
          </a>
        </div>

        <p className="mt-4 text-gray-500 text-sm">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

// ========================================
// Features Section
// ========================================
function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'AI Innovation',
      description: 'Stay ahead with the latest AI tools and automation techniques'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: 'Tech Trends',
      description: 'Discover emerging technologies shaping the future'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 13V6a9 9 0 00-9-9H5a9 9 0 00-9 9v7a9 9 0 009 9h14a9 9 0 009-9v-7z"/>
        </svg>
      ),
      title: 'Business Growth',
      description: 'Strategies for entrepreneurs and SMEs in the digital age'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
      title: 'Youth Development',
      description: 'Skills and insights for the next generation of Filipino leaders'
    },
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-haka-yellow/50 transition-all group"
            >
              <div className="text-haka-yellow mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// Footer Component
// ========================================
function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image 
                src={logo} 
                alt="HAKA Logo"
                width={50}
                height={50}
                className="h-12 w-auto object-contain"
              />
              <span className="text-3xl font-black text-haka-yellow">HAKA</span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Isipin. Tuklasin. Umangat.<br />
              Ideas That Move People & Business 🇵🇭
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-haka-yellow transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://youtube.com/channel/UCxD-xfWenPMwlbgFrrFmJkA" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.756 1.918-4.756 4.912 0 2.994.858 4.641 4.756 4.912 3.609.246 11.636.245 15.23 0 3.897-.266 4.756-1.913 4.756-4.912 0-2.993-.859-4.641-4.756-4.912z"/><path d="M10 15l-5.5-3.376 5.5-3.375L25 11.625z"/></svg>
              </a>
              <a href="https://facebook.com/profile.php?id=61596243012781" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.06L14.5,4.6c-0.89-0.51-2.3-0.51-3.2,0l-4.26,2.56c-0.91,0.54-1.12,1.72-0.46,2.56l1.46,1.64c-1.54,0.68-2.37,2.54-1.51,4.18l3.29,7.04c0.55,1.15,1.88,1.57,2.89,0.97l3.78-2.61c1.11,0.28,2.28,0.28,3.42,0l3.78,2.61c1.01,0.59,2.34,0.18,2.89-0.97l3.29-7.04c0.86-1.64,0.03-3.5-1.51-4.18l1.46-1.64C24.51,9.32,24.<content omitted for brevity"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-600 text-center text-sm">
            © 2025 HAKA. All rights reserved. | Isipin. Tuklasin. Umangat.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ========================================
// Main Page Component
// ========================================
export default function Home() {
  // Mock video data - replace with actual content from your CMS
  const firstVideos = [
    { id: 1, title: 'AI Tools That Change How You Work', thumbnail: '/api/placeholder/400/225', duration: '8:32', category: 'AI' },
    { id: 2, title: 'Hindi lahat trabaho ay mapupunta sa AI—ito ang tunay na facts', thumbnail: '/api/placeholder/400/225', duration: '12:45', category: 'AI' },
    { id: 3, title: 'Top 5 tech trends na aabot sa Pilipinas by 2027', thumbnail: '/api/placeholder/400/225', duration: '10:20', category: 'Tech' },
  ];

  const secondVideos = [
    { id: 4, title: 'Hindi lahat ng mahal ang maganda—ito ang gadgets worth buying', thumbnail: '/api/placeholder/400/225', duration: '15:30', category: 'Tech' },
    { id: 5, title: 'Paano gumagamit ng tech ang maliliit na negosyo sa PH', thumbnail: '/api/placeholder/400/225', duration: '9:15', category: 'Business' },
    { id: 6, title: 'Bakit kailangan ng automation kahit may 10 lang ka namang employees', thumbnail: '/api/placeholder/400/225', duration: '11:22', category: 'Business' },
  ];

  const thirdVideos = [
    { id: 7, title: '5 skills na dapat mo pang-aralin kahit graduate na ka na', thumbnail: '/api/placeholder/400/225', duration: '14:10', category: 'Youth' },
    { id: 8, title: 'Ang top careers by 2030—hindi lang programming', thumbnail: '/api/placeholder/400/225', duration: '8:55', category: 'Youth' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Marquee */}
      <Marquee />

      {/* AI & Automation Category */}
      <CategorySection 
        title="AI & Automation" 
        subtitle="Powering Your Digital Transformation"
        description="Discover AI tools that can change how you work, productivity hacks, and the truth about AI replacing jobs." 
        videos={firstVideos} 
      />

      {/* Technology Section */}
      <CategorySection 
        title="Technology" 
        subtitle="Stay Ahead of Tomorrow Today"
        description="Gadgets worth knowing, tech trends to watch, and how technology changes everyday life in the Philippines." 
        videos={secondVideos} 
      />

      {/* Youth Section */}
      <CategorySection 
        title="Youth & Careers" 
        subtitle="Your Future Starts Here"
        description="Skills every young Filipino should learn and careers of the future beyond your diploma." 
        videos={thirdVideos} 
      />

      {/* Features */}
      <Features />

      {/* Social Links */}
      <SocialLinks />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}