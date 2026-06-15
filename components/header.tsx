'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isHome = pathname === '/'
  const isSolid = !isHome || isScrolled

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-black/20 backdrop-blur-[3px]'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - always show brand name including on mobile */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-9 h-9 md:w-11 md:h-11 flex-shrink-0">
              <Image
                src="/logo-final.png"
                alt="Potato POS"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Brand name always visible on all screen sizes */}
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-sm md:text-base lg:text-lg tracking-wide transition-colors ${
                isSolid ? 'text-primary' : 'text-white'
              }`}>
                Potato POS
              </span>
              <span className={`text-[9px] md:text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                isSolid ? 'text-accent' : 'text-accent/90'
              }`}>
                UK Restaurant Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg transition-all font-medium text-sm relative ${
                    isSolid
                      ? isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-secondary hover:text-primary'
                      : isActive ? 'text-white bg-white/20' : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full ${
                      isSolid ? 'bg-primary' : 'bg-white'
                    }`} />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA Button - desktop */}
            <Link
              href="/contact"
              className={`hidden md:inline-flex px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm ${
                isSolid
                  ? 'bg-gradient-to-r from-primary to-primary/85 text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5'
                  : 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isSolid
                  ? 'text-foreground hover:bg-secondary'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation"
            >
              {isNavOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <nav className="lg:hidden pb-5 pt-2 animate-in fade-in slide-in-from-top duration-300 bg-card/98 backdrop-blur-xl rounded-b-2xl border-t border-border shadow-2xl">
            <div className="space-y-0.5 px-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsNavOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors font-medium text-sm ${
                      isActive
                        ? 'text-primary bg-primary/10 font-semibold'
                        : 'text-foreground hover:bg-secondary hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                )
              })}
            </div>
            <div className="px-4 mt-4 space-y-2">
              <Link
                href="/contact"
                onClick={() => setIsNavOpen(false)}
                className="block w-full py-3 bg-gradient-to-r from-primary to-primary/85 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsNavOpen(false)}
                className="block w-full py-3 border-2 border-accent/60 text-accent rounded-xl font-semibold text-center hover:bg-accent hover:text-white transition-all text-sm"
              >
                Schedule Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
