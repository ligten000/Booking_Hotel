"use client";
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const images = [
    '/img/slider_1.jpg',
    '/img/slider_2.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
        <div className="fixed top-0 left-0 right-0 h-[550px] z-0 pointer-events-none overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center brightness-90 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
      {/* 1. HEADER & MENU */}
      <header className="relative z-50 m-0 w-full bg-white border-b border-slate-100 py-6">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <nav className="flex space-x-8 text-xs tracking-widest font-semibold text-slate-600 mb-2">
            <Link href="/" className="hover:text-teal-600 transition-colors border-b-2 border-teal-600 pb-0.5">HOME</Link>
            <Link href="/about-us" className="hover:text-teal-600 transition-colors">ABOUT US</Link>
            <Link href="/rooms" className="hover:text-teal-600 transition-colors">OUR ROOMS</Link>
            <Link href="/reservation" className="hover:text-teal-600 transition-colors">RESERVATION</Link>
            <Link href="/blog" className="hover:text-teal-600 transition-colors">BLOG</Link>
            <Link href="/contact" className="hover:text-teal-600 transition-colors">CONTACT</Link>
          </nav>
          
          <img 
            src="/img/logo2.jpg" 
            alt="Logo" 
            className="h-24 w-auto object-contain mx-auto"
          />
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative h-[550px] flex items-center justify-center text-center text-white">
        <div className="relative z-10 px-4 max-w-2xl pointer-events-none">
          <div className="pointer-events-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Welcome to Atlantis</h1>
            <p className="text-sm md:text-base text-slate-100 font-light max-w-lg mx-auto">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 z-20 p-3 rounded-full bg-black/30 hover:bg-teal-600 text-white transition-all transform -translate-y-1/2 top-1/2 focus:outline-none"
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 z-20 p-3 rounded-full bg-black/30 hover:bg-teal-600 text-white transition-all transform -translate-y-1/2 top-1/2 focus:outline-none"
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* 3. RESERVATION BANNER */}
      <section className="relative z-10 bg-slate-50 py-8 px-6 border-y border-slate-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg text-slate-700">
            Reserve a room for your family <span className="text-slate-400 text-sm font-sans font-normal">— Far far away behind the word mountains far.</span>
          </p>
          <Link 
            href="/reservation"
            className="bg-[#189278] hover:bg-[#147a64] text-white text-sm font-medium px-6 py-3 rounded-full transition-all shadow-sm"
          >
            Reserve now
          </Link>
        </div>
      </section>

      {/* 4. EXPLORE OUR SERVICES */}
      <section className="relative z-10 py-20 px-6 bg-white text-center">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-serif mb-3 text-slate-900">Explore our Services</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-10">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex justify-center mb-12">
          </div>

          {/* Lưới 3 dịch vụ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* Dịch vụ 1 */}
            <div className="space-y-4">
              <div className="text-slate-800">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-slate-800">1+ Million Hotel Rooms</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <Link href="/services" className="text-xs font-semibold text-[#189278] hover:underline">Learn More</Link>
              </div>
            </div>

            {/* Dịch vụ 2 */}
            <div className="space-y-4">
              <div className="text-slate-800">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-slate-800">Food & Drinks</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <Link href="/services" className="text-xs font-semibold text-[#189278] hover:underline">Learn More</Link>
              </div>
            </div>

            {/* Dịch vụ 3 */}
            <div className="space-y-4">
              <div className="text-slate-800">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-slate-800">Airport Taxi</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div>
                <Link href="/services" className="text-xs font-semibold text-[#189278] hover:underline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEST 5 STAR HOTEL SECTION */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        <div 
          className="h-[400px] lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80')` }}
        ></div>
        <div className="bg-[#124e42] text-white p-12 lg:p-20 flex flex-col justify-center">
          <h2 className="text-3xl font-serif mb-4">Best 5 Star hotel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-teal-100/90 leading-relaxed mb-8">
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div>
            <Link href="/about" className="text-xs font-semibold tracking-wider uppercase text-white hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="relative z-10 bg-[#0f4036] text-slate-300 py-16 px-6 border-b border-teal-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif italic text-white">Atlantis</h3>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              A small river named Duden flows by their place and supplies it with the necessary regelialia, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>

          {/* Cột 2: Blog */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider text-xs uppercase">Blog</h4>
            <div className="flex space-x-3 items-start">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=100&q=80" 
                alt="Blog post" 
                className="w-14 h-14 object-cover rounded"
              />
              <div>
                <p className="text-white text-xs font-medium hover:underline cursor-pointer">River named Duden flows</p>
                <span className="text-[11px] text-teal-300">August 2, 2017</span>
                <p className="text-[11px] text-slate-300 mt-1">A small river named Duden by their place</p>
              </div>
            </div>
          </div>

          {/* Cột 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider text-xs uppercase">Contact</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="text-teal-400 mt-0.5">📍</span>
                <span>198 West 21th Street, Suite 721 New York NY 10016</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.42 2L12 10.5 5.42 6h13.16zM20 18H4V8l8 5 8-5v10z"/>
                  </svg>
                </span>
                <span>info@domain.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-400">📞</span>
                <span>+123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* 7. SUB-FOOTER */}
      <div className="relative z-10 bg-[#0b332b] py-6 text-center text-xs text-slate-400 space-y-3">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-white transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
