'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink, Twitter, Share2, Camera, ArrowRight } from 'lucide-react'
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
    <footer className="w-full bg-[#111622] text-white/90 border-t border-border">
      {/* Newsletter / Upper Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16 pb-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">
              Stay ahead on restaurant compliance
            </h3>
            <p className="text-sm text-white/60 font-light max-w-md">
              Get monthly updates on UK food safety legislation, EHO standards, and tech tips to streamline operations.
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
                className="bg-white/5 border border-white/10 text-white placeholder-white/45 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-accent w-full transition"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 flex-shrink-0"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo-final.png" alt="Potato POS" width={36} height={36} className="rounded" />
              <div>
                <h3 className="font-bold text-base tracking-wide text-white">POTATO</h3>
                <p className="text-[10px] text-accent font-semibold tracking-widest uppercase">POS & COMPLIANCE</p>
              </div>
            </div>
            <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
              Modern point-of-sale systems unified with regulatory HACCP safety logging. Built for UK hospitality.
            </p>
            <div className="flex gap-2">
              <a href="#" className="hover:text-white transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <ExternalLink size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase text-white mb-6">Product</h4>
            <ul className="space-y-3 text-xs text-white/65 font-light">
              <li><Link href="/features" className="hover:text-white transition-colors">POS Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition-colors">HACCP Tracker</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Hardware Bundles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase text-white mb-6">Company</h4>
            <ul className="space-y-3 text-xs text-white/65 font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-xs text-white/65 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR & Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EHO Standards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase text-white mb-6">Support</h4>
            <ul className="space-y-4 text-xs text-white/65 font-light">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 text-accent" />
                <a href="mailto:hello@potatopos.com" className="hover:text-white transition-colors">hello@potatopos.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-accent" />
                <a href="tel:+442071234567" className="hover:text-white transition-colors">+44 (0) 20 7123 4567</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-accent" />
                <span>King&apos;s Cross, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/45">
          <p>&copy; {currentYear} Potato POS. Engineered in London. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Server Status</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">EHO Checklist</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
