'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TravelSections } from '@/components/travel-sections';
import { MobileNavigation } from '@/components/mobile-navigation';
import './travel.css';
import './kinetic.css';
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const textBlockARef = useRef<HTMLDivElement>(null);
  const textBlockBRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: '+=200%',
      },
    });
    tl.addLabel("start")
      .to(
        textBlockARef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.3,
          ease: 'power1.in',
        },
        "start"
      )
      .to(
        maskRef.current,
        {
          scale: 80,
          transformOrigin: 'center center',
          ease: 'none',
          duration: 4, 
        },
        "start"
      )
      .to(
        textBlockBRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          pointerEvents: 'auto', 
          ease: 'power2.out',
        },
        "start+=0.8"
      );
  }, { scope: containerRef });

  return (
    <div className="skyway-site relative w-full overflow-hidden bg-background text-white font-sans selection:bg-[var(--skyway-accent)]/30">
      
      <header className="sw-nav fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
        <a href="#" aria-label="Skyway home" className="sw-brand text-2xl font-bold tracking-[0.25em] text-white cursor-pointer hover:text-white/80 transition-colors">
          SKYWAY
        </a>
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.15em] font-semibold">
          <a href="#experience" className="text-zinc-200 hover:text-white transition-colors relative group">
            Experience
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--skyway-accent)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#fleet" className="text-zinc-200 hover:text-white transition-colors relative group">
            Fleet
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--skyway-accent)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#destinations" className="text-zinc-200 hover:text-white transition-colors relative group">
            Destinations
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--skyway-accent)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#book" className="text-zinc-200 hover:text-white transition-colors relative group">
            Book
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--skyway-accent)] transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <MobileNavigation />
      </header>

      <section ref={containerRef} className="sw-hero relative h-screen w-full overflow-hidden bg-black">
        
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/mountain-bg.webp"
            alt="Majestic Mountains"
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div
          ref={maskRef}
          className="absolute inset-0 z-20 pointer-events-none will-change-transform"
        >
          <Image
            src="/images/window-mask.webp"
            alt="Airplane Window"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          ref={textBlockARef}
          className="sw-window-caption absolute bottom-12 right-12 md:right-24 z-30 flex flex-col items-end text-right max-w-sm pointer-events-none"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white drop-shadow-xl">
            The Journey Begins
          </h2>
          <p className="mt-2 text-sm md:text-base font-light text-zinc-200 drop-shadow-md">
            Your window to a world of stunning destinations and endless possibilities.
          </p>
        </div>

        <div
          ref={textBlockBRef}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center opacity-0 pointer-events-none translate-y-[50px]"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
            Navigating the Skies
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-zinc-100 drop-shadow-lg tracking-wide max-w-2xl px-4">
            Experience the ultimate comfort and luxury on your next journey around the globe.
          </p>
          <div className="mt-10 flex gap-6">
            <button onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-[var(--skyway-accent)] to-[var(--skyway-accent)] hover:scale-105 text-white font-bold rounded-full transition-transform shadow-lg shadow-[var(--skyway-accent)]/40">
              Book a Flight
            </button>
            <button onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:scale-105 text-white font-bold rounded-full transition-transform shadow-lg">
              Destinations
            </button>
          </div>
        </div>
      </section>

      <section className="sw-main-content relative z-40 w-full bg-background pb-12">
        
        <div id="book" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -top-16 md:-top-24">
          <div className="sw-booking-panel bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-6 md:p-8 flex flex-col gap-6 text-slate-900">
            
            <div className="flex items-center gap-8 border-b border-slate-100 pb-4 overflow-x-auto whitespace-nowrap">
              <button className="text-sm font-bold border-b-2 border-slate-900 pb-4 -mb-4 text-slate-900 tracking-wide">
                Book a Flight
              </button>
              <button className="text-sm font-semibold text-slate-400 hover:text-slate-600 pb-4 -mb-4 transition-colors tracking-wide">
                Manage Booking
              </button>
              <button className="text-sm font-semibold text-slate-400 hover:text-slate-600 pb-4 -mb-4 transition-colors tracking-wide">
                Check In
              </button>
              <button className="text-sm font-semibold text-slate-400 hover:text-slate-600 pb-4 -mb-4 transition-colors tracking-wide">
                Flight Status
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
              
              <div className="flex flex-col gap-1.5 lg:col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                  From
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="New York (JFK)"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow text-slate-900 placeholder-slate-400 font-semibold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 lg:col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                  To
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Paris (CDG)"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow text-slate-900 placeholder-slate-400 font-semibold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 lg:col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                  Depart - Return
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Oct 15 - Oct 22"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow text-slate-900 placeholder-slate-400 font-semibold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 lg:col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                  Travelers
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow text-slate-900 font-semibold appearance-none cursor-pointer">
                    <option>1 Adult, First Class</option>
                    <option>2 Adults, First Class</option>
                    <option>1 Adult, Business</option>
                  </select>
                  
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end lg:col-span-1">
                <button className="group w-full h-[52px] bg-gradient-to-r from-[var(--skyway-accent)] to-[var(--skyway-accent)] hover:from-[var(--skyway-accent-hover)] hover:to-[var(--skyway-accent-hover)] text-white font-bold rounded-xl transition-all shadow-lg shadow-[var(--skyway-accent)]/40 flex items-center justify-center gap-2 hover:scale-[1.02]">
                  <span>Find Flights</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="destinations" data-kinetic-intro className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
          <div className="inline-block px-5 py-2 mb-8 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-[var(--skyway-accent)]">
            Exclusive Destinations
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white">
            Beyond First Class.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the world&apos;s most extraordinary locations with unparalleled luxury. From private island retreats to majestic alpine chalets, we curate exceptional travel experiences for the discerning few.
          </p>
        </div>

        <TravelSections />
      </section>
    </div>
  );
}
