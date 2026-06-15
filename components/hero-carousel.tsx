'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
  cta: string
  ctaLink: string
  secondaryCta?: string
  secondaryLink?: string
  badge: string
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: '/hero-1.png',
    title: 'Streamline Your Restaurant Operations',
    subtitle: 'Modern POS and compliance software built specifically for UK restaurants. Save 5+ hours a week.',
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    secondaryCta: 'Explore Features',
    secondaryLink: '/features',
    badge: 'UK Restaurant Standard',
  },
  {
    id: 2,
    image: '/hero-2.png',
    title: 'Real-Time Compliance & Monitoring',
    subtitle: 'Automated compliance checks, analytics, and intelligent temperature monitoring. Stay inspection-ready 24/7.',
    cta: 'Explore Features',
    ctaLink: '/features',
    secondaryCta: 'Talk to Expert',
    secondaryLink: '/contact',
    badge: 'HACCP Automated',
  },
  {
    id: 3,
    image: '/hero-3.png',
    title: 'Empower Your FOH & BOH Teams',
    subtitle: 'Seamless collaboration and smart task management designed for fast-paced kitchens and floor teams.',
    cta: 'Book a Live Demo',
    ctaLink: '/contact',
    secondaryCta: 'View Compliance',
    secondaryLink: '/compliance',
    badge: 'Smart Task Delegation',
  },
  {
    id: 4,
    image: '/hero-4.png',
    title: 'Smart Technology, Offline First',
    subtitle: 'Multi-device support with instant synchronization and bulletproof offline modes for zero downtime.',
    cta: 'Learn More',
    ctaLink: '/about',
    secondaryCta: 'See Pricing',
    secondaryLink: '/pricing',
    badge: 'Offline-First Engine',
  },
  {
    id: 5,
    image: '/hero-5.png',
    title: 'Ensure EHO Audit Readiness',
    subtitle: 'Stay ahead of food safety inspections with digital HACCP tracking and one-click compliance logs.',
    cta: 'Get Started',
    ctaLink: '/compliance',
    secondaryCta: 'Start Free Trial',
    secondaryLink: '/contact',
    badge: 'EHO Inspection Ready',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  return (
    <div className="relative w-full h-[700px] md:h-[95vh] min-h-[600px] overflow-hidden bg-background">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 select-none">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>

          {/* Overlay: Deep gradient for premium aesthetic & contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-5xl animate-in fade-in slide-in-from-bottom duration-700">
              {/* Badge */}
              <div className="flex justify-center mb-5">
                <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs px-4 py-1.5 rounded-full backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {slide.badge}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 text-balance font-sans leading-[1.1]">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto text-balance font-light leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={slide.ctaLink}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/85 hover:from-accent/90 hover:to-accent text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 text-sm md:text-base"
                >
                  {slide.cta} <ArrowRight size={18} />
                </Link>
                {slide.secondaryCta && (
                  <Link
                    href={slide.secondaryLink || '/contact'}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/25 hover:border-white/50 hover:-translate-y-1 text-sm md:text-base"
                  >
                    {slide.secondaryCta}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous/Next Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/55 text-white/90 hover:text-white w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/15 hover:border-white/30 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/55 text-white/90 hover:text-white w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/15 hover:border-white/30 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/25 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent w-8'
                : 'bg-white/40 w-2 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/60 text-xs font-mono bg-black/25 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}
