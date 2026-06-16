'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing to the Potato POS newsletter!')
    setEmail('')
  }

  return (
    <footer className="w-full bg-[#080d1f] text-white/80">
      {/* Newsletter bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 border-b border-white/6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              Stay ahead on restaurant compliance
            </h3>
            <p className="text-sm text-white/45 font-light max-w-md">
              Monthly updates on UK food safety legislation, EHO standards, and tech tips.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md lg:ml-auto">
              <input
                type="email"
                placeholder="Enter work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#2563eb] w-full transition"
              />
              <button
                type="submit"
                className="bg-[#2563eb] hover:bg-[#1d4fd8] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 flex-shrink-0"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo-final.png" alt="Potato POS" width={36} height={36} className="rounded-xl" />
              <div>
                <h3 className="font-bold text-base tracking-tight text-white">Potato POS</h3>
                <p className="text-[9px] text-[#2563eb] font-semibold tracking-widest uppercase mt-0.5">UK Restaurant Tech</p>
              </div>
            </div>
            <p className="text-xs text-white/40 font-light leading-relaxed mb-6">
              Modern POS unified with automated HACCP compliance. Built for UK hospitality.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/40">All systems operational</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-[10px] tracking-widest uppercase text-white mb-5">Product</h4>
            <ul className="space-y-3 text-xs text-white/45 font-light">
              <li><Link href="/features" className="hover:text-white transition-colors">POS Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition-colors">HACCP Tracker</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Hardware Bundles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[10px] tracking-widest uppercase text-white mb-5">Company</h4>
            <ul className="space-y-3 text-xs text-white/45 font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[10px] tracking-widest uppercase text-white mb-5">Legal</h4>
            <ul className="space-y-3 text-xs text-white/45 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR & Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EHO Standards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[10px] tracking-widest uppercase text-white mb-5">Support</h4>
            <ul className="space-y-4 text-xs text-white/45 font-light">
              <li className="flex items-start gap-2">
                <Mail size={13} className="mt-0.5 text-[#2563eb] flex-shrink-0" />
                <a href="mailto:hello@potatopos.com" className="hover:text-white transition-colors">hello@potatopos.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={13} className="mt-0.5 text-[#2563eb] flex-shrink-0" />
                <a href="tel:+442071234567" className="hover:text-white transition-colors">+44 (0) 20 7123 4567</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 text-[#2563eb] flex-shrink-0" />
                <span>King&apos;s Cross, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/25">
          <p>&copy; {currentYear} Potato POS. Engineered in London. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Server Status</a>
            <a href="#" className="hover:text-white/60 transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white/60 transition-colors">EHO Checklist</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
