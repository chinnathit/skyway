'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger outside of the component lifecycle
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ensure GSAP plugins are registered (for SSR safety)
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, // Smooth scrub
        start: 'top top',
        end: '+=200%', // Increased from +=200% to make the scroll effect slower and longer
      },
    });

    // Massively scale the mask wrapper
    tl.to(maskRef.current, {
      scale: 80, // Massive scale to ensure the window completely engulfs the viewport
      transformOrigin: 'center center',
      ease: 'none',
    });

    // Fade in the hero text as the window scales
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, ease: 'power2.out' },
      "<" // Start at the same time as the mask scale
    );
  }, { scope: containerRef });

  return (
    <div className="relative w-full overflow-hidden bg-black text-white font-sans selection:bg-zinc-800">
      
      {/* Hero Reveal Section */}
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
        
        {/* Layer 1: Background (Mountain) */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/mountain-bg.webp"
            alt="Majestic Mountains"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay to make text pop if needed */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Layer 2: Foreground Mask (Airplane Interior) */}
        {/* We animate this entire wrapper to scale up */}
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

        {/* Layer 3: Hero Content (Text Revealed inside the window) */}
        <div 
          ref={textRef}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            ELEVATE
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-zinc-200 drop-shadow-md tracking-wide">
            Your Journey Begins Here
          </p>
        </div>
      </section>

      {/* Flight Destinations / Booking Dummy Section */}
      <section className="relative z-40 flex flex-col items-center justify-center min-h-[120vh] w-full bg-zinc-950 px-8 py-32 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-sm uppercase tracking-widest text-zinc-400">
            Exclusive Destinations
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 text-white">
            Beyond First Class.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Experience the world&apos;s most extraordinary locations with unparalleled luxury. From private island retreats to majestic alpine chalets, we curate exceptional travel experiences for the discerning few.
          </p>
          <button className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
            <span className="relative z-10">Discover Collections</span>
            <div className="absolute inset-0 h-full w-full bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
        
        {/* Dummy image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full text-left transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-zinc-400 text-sm tracking-widest uppercase mb-2">Destinations</p>
                <h3 className="text-2xl font-medium text-white">Location {i}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
