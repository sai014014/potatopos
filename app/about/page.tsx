'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { ArrowRight, Target, Heart, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function AboutPage() {
  useScrollReveal()

  const values = [
    { icon: Lightbulb, title: 'Simplification First', description: 'We believe restaurant management solutions must remain intuitive, clear, and easy to operate.', dark: true },
    { icon: Heart, title: 'Restaurant Centric', description: 'Designed and built by professionals who understand shift stress and kitchen flows firsthand.', dark: false },
    { icon: Target, title: 'Compliance Integrity', description: 'We prioritize regulatory food safety standards and EHO audit criteria above all else.', dark: true },
  ]

  const team = [
    { name: 'Sarah Chen', role: 'Co-founder & CEO', bio: '15 years managing London fine dining restaurants.', initial: 'S' },
    { name: 'James Mitchell', role: 'Co-founder & CTO', bio: 'Former lead architect for enterprise retail POS products.', initial: 'J' },
    { name: 'Emma Richardson', role: 'Compliance Lead', bio: 'EHO regulation expert and UK Food Standards specialist.', initial: 'E' },
    { name: 'David Kumar', role: 'Customer Success', bio: '10+ years optimising systems configurations for venues.', initial: 'D' },
  ]

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[420px] md:h-[52vh] min-h-[360px] overflow-hidden bg-[#060b18]">
        <div className="absolute inset-0 select-none">
          <Image src="/hero-4.png" alt="About" fill sizes="100vw" className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b18]/88 via-[#060b18]/55 to-[#060b18]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-20">
          <div className="max-w-2xl animate-in slide-in-from-bottom">
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-blue-300 font-semibold tracking-[0.2em] uppercase text-[10px] px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Our Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              The Story Behind<br />
              <span className="text-gradient">Potato POS</span>
            </h1>
            <p className="text-base text-white/60 max-w-xl font-light leading-relaxed">
              Coordinating kitchen teams, floor operations, and safety audits into a single unified platform — built in London, for UK hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="w-full py-5 bg-[#0f1f5c]">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {[['500+', 'UK Venues'], ['50,000+', 'Daily Shifts Logged'], ['99.99%', 'Cloud Uptime'], ['4.8/5', 'EHO Rating Success']].map(([val, label], i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-blue-300">{val}</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Origins</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c] mb-6">Born in a Busy London Kitchen</h2>
              <p className="text-sm text-[#5a6282] font-light leading-relaxed mb-4">
                Potato POS was born out of frustration. Our founders were managing high-volume venues in London and found themselves drowning in folders of temperature logs, supplier checklists, and shift notes.
              </p>
              <p className="text-sm text-[#5a6282] font-light leading-relaxed mb-4">
                We realised that hospitality staff deserved better tools — not complicated spreadsheets or separate programs that clash, but a single terminal that manages checkouts, shifts, and HACCP compliance seamlessly.
              </p>
              <p className="text-sm text-[#5a6282] font-light leading-relaxed mb-8">
                Today, Potato POS secures 5-star hygiene logs and handles daily checkouts for hundreds of venues across the UK.
              </p>
              <Link href="/features" className="inline-flex items-center gap-2 bg-[#0f1f5c] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#162770] hover:shadow-xl hover:-translate-y-0.5 transition-all group">
                Explore Our Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="reveal-right">
              <div className="relative h-80 bg-[#0f1f5c] rounded-2xl border border-[#1a3080] flex items-center justify-center p-8 overflow-hidden">
                <Image src="/potato-pos-logo.png" alt="Potato POS Logo" width={220} height={220} className="opacity-40 object-contain" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563eb]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f59e0b]/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f9ff] border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Our Core</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Company Values</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className={`p-8 rounded-2xl border text-center reveal stagger-${index + 1} card-hover ${
                  value.dark ? 'bg-[#0f1f5c] border-[#1a3080]' : 'bg-white border-border hover:border-[#2563eb]/25'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${value.dark ? 'bg-white/10' : 'bg-[#0f1f5c]/6'}`}>
                    <Icon className={`w-7 h-7 ${value.dark ? 'text-blue-300' : 'text-[#0f1f5c]'}`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${value.dark ? 'text-white' : 'text-[#0f1f5c]'}`}>{value.title}</h3>
                  <p className={`text-sm font-light leading-relaxed ${value.dark ? 'text-white/55' : 'text-[#5a6282]'}`}>{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Founders</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Meet the Team</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className={`bg-[#f7f9ff] rounded-2xl border border-border p-7 hover:border-[#2563eb]/25 hover:shadow-xl transition-all duration-300 text-center reveal stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-[#0f1f5c] rounded-2xl mx-auto mb-5 flex items-center justify-center font-bold text-xl text-white">
                  {member.initial}
                </div>
                <h3 className="text-base font-bold text-[#0f1f5c] mb-0.5">{member.name}</h3>
                <p className="text-xs font-semibold text-[#2563eb] mb-3">{member.role}</p>
                <p className="text-xs text-[#5a6282] font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted partners */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f9ff] border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Trusted UK Restaurant Groups</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'The Silver Fork Group', locations: '15 operational locations', emoji: '🍴' },
              { name: 'Urban Kitchen Collective', locations: '8 operational locations', emoji: '🏙️' },
              { name: 'Heritage Restaurant Co', locations: '12 operational locations', emoji: '🏛️' },
            ].map((customer, index) => (
              <div key={index} className={`p-7 bg-white rounded-2xl border border-border text-center hover:border-[#2563eb]/25 hover:shadow-xl transition-all duration-300 reveal stagger-${index + 1} card-hover`}>
                <div className="text-3xl mb-3">{customer.emoji}</div>
                <p className="font-bold text-sm text-[#0f1f5c] mb-1">{customer.name}</p>
                <p className="text-xs text-[#5a6282] font-light">{customer.locations}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-[#0f1f5c] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-15" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 reveal">
          <span className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Join Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simplify safety protocols</h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Begin your trial and let Potato POS handle safety and operations for your venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4fd8] text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/features" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/8 transition-all">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </>
  )
}
