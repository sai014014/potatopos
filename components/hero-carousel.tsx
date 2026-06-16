'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSlide {
  id: number
  image: string
  title: string
  highlight: string
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
    title: 'Restaurant Operations,',
    highlight: 'Fully Automated',
    subtitle: 'Modern POS and compliance software built for UK restaurants. Cut admin time by 5+ hours a week.',
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    secondaryCta: 'See Features',
    secondaryLink: '/features',
    badge: 'UK Restaurant Standard',
  },
  {
    id: 2,
    image: '/hero-2.png',
    title: 'Stay Inspection-Ready',
    highlight: '24 / 7',
    subtitle: 'Automated HACCP logs, temperature monitoring, and one-click EHO reports. Always audit-ready.',
    cta: 'Explore Compliance',
    ctaLink: '/compliance',
    secondaryCta: 'Talk to Expert',
    secondaryLink: '/contact',
    badge: 'HACCP Automated',
  },
  {
    id: 3,
    image: '/hero-3.png',
    title: 'One Platform for',
    highlight: 'FOH & BOH Teams',
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
    title: 'Offline-First',
    highlight: 'Zero Downtime',
    subtitle: 'Works when your internet doesn\'t. Multi-device sync and bulletproof offline caching.',
    cta: 'Learn More',
    ctaLink: '/about',
    secondaryCta: 'See Pricing',
    secondaryLink: '/pricing',
    badge: 'Offline-First Engine',
  },
  {
    id: 5,
    image: '/hero-5.png',
    title: 'EHO Audits Made',
    highlight: 'Effortless',
    subtitle: 'Digital HACCP tracking, instant compliance logs, and one-click reports for inspectors.',
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  return (
    <div className="relative w-full h-[700px] md:h-screen min-h-[620px] max-h-[900px] overflow-hidden bg-[#060b18]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background image */}
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

          {/* Multi-layer overlay for deep dark aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060b18]/90 via-[#060b18]/60 to-[#060b18]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/70 via-transparent to-[#060b18]/10" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-16">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 bg-white/8 border border-white/15 text-blue-300 font-semibold tracking-[0.18em] uppercase text-[10px] px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm ${
                  index === currentSlide ? 'animate-in fade-in' : ''
                }`} style={{ animationDelay: '100ms' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  {slide.badge}
                </div>

                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-4 ${
                  index === currentSlide ? 'animate-in slide-in-from-bottom' : ''
                }`} style={{ animationDelay: '200ms' }}>
                  {slide.title}
                  <br />
                  <span className="text-gradient">{slide.highlight}</span>
                </h1>

                <p className={`text-base md:text-lg text-white/65 mb-10 max-w-lg font-light leading-relaxed ${
                  index === currentSlide ? 'animate-in slide-in-from-bottom' : ''
                }`} style={{ animationDelay: '350ms' }}>
                  {slide.subtitle}
                </p>

                <div className={`flex flex-col sm:flex-row gap-3 ${
                  index === currentSlide ? 'animate-in slide-in-from-bottom' : ''
                }`} style={{ animationDelay: '480ms' }}>
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4fd8] text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 text-sm"
                  >
                    {slide.cta} <ArrowRight size={16} />
                  </Link>
                  {slide.secondaryCta && (
                    <Link
                      href={slide.secondaryLink || '/contact'}
                      className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/14 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 text-sm"
                    >
                      {slide.secondaryCta}
                    </Link>
                  )}
                </div>

                {/* Trust line */}
                <div className={`flex items-center gap-6 mt-10 ${
                  index === currentSlide ? 'animate-in fade-in' : ''
                }`} style={{ animationDelay: '600ms' }}>
                  {[
                    { value: '500+', label: 'UK Venues' },
                    { value: '5-Star', label: 'EHO Rated' },
                    { value: '24/7', label: 'Support' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {i > 0 && <span className="w-px h-6 bg-white/15" />}
                      <div className="pl-0 md:pl-2">
                        <span className="block text-white font-bold text-base leading-none">{stat.value}</span>
                        <span className="block text-white/45 text-[10px] font-medium mt-0.5">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-6 sm:left-10 lg:left-16 max-w-7xl z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-400 ${
              index === currentSlide ? 'bg-[#2563eb] w-8' : 'bg-white/30 w-4 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
