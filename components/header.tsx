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
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
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
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(15,31,92,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="relative w-9 h-9 md:w-10 md:h-10 flex-shrink-0">
              <Image src="/logo-final.png" alt="Potato POS" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-sm md:text-[15px] tracking-tight transition-colors ${
                isSolid ? 'text-[#0f1f5c]' : 'text-white'
              }`}>
                Potato POS
              </span>
              <span className={`text-[9px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                isSolid ? 'text-[#2563eb]' : 'text-blue-200'
              }`}>
                UK Restaurant Tech
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isSolid
                      ? isActive
                        ? 'text-[#2563eb] bg-blue-50'
                        : 'text-[#0f1f5c]/70 hover:text-[#0f1f5c] hover:bg-secondary'
                      : isActive
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full ${
                      isSolid ? 'bg-[#2563eb]' : 'bg-white'
                    }`} />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                isSolid
                  ? 'bg-[#0f1f5c] text-white hover:bg-[#162770] hover:shadow-lg hover:shadow-[#0f1f5c]/20 hover:-translate-y-0.5'
                  : 'bg-white text-[#0f1f5c] hover:bg-white/90 hover:shadow-lg'
              }`}
            >
              Get Started
            </Link>

            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isSolid ? 'text-[#0f1f5c] hover:bg-secondary' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation"
            >
              {isNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isNavOpen && (
          <div className="lg:hidden pb-5 pt-2 animate-in fade-in slide-in-from-top bg-white rounded-b-2xl border-t border-border shadow-xl">
            <div className="space-y-0.5 px-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsNavOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                      isActive
                        ? 'text-[#2563eb] bg-blue-50 font-semibold'
                        : 'text-[#0f1f5c]/70 hover:text-[#0f1f5c] hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                    {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2563eb]" />}
                  </Link>
                )
              })}
            </div>
            <div className="px-4 mt-4 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsNavOpen(false)}
                className="block w-full py-3 bg-[#0f1f5c] text-white rounded-xl font-semibold text-center text-sm"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsNavOpen(false)}
                className="block w-full py-3 border-2 border-[#2563eb]/30 text-[#2563eb] rounded-xl font-semibold text-center text-sm hover:bg-[#2563eb] hover:text-white transition-all"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
