'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { FileText, ChartBar as BarChart3, Clock, Users, Shield, Zap, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function FeaturesPage() {
  useScrollReveal()

  const detailedFeatures = [
    {
      id: 1, icon: FileText, title: 'Compliance Automation',
      description: 'Fully digitize and automate your food hygiene records, temperature logs, and active HACCP logs.',
      benefits: ['Automated sensor logs integration', 'UK regulatory compliance logs', 'One-click EHO reporting dashboard', 'Daily allergen list checkmarks'],
      dark: true,
    },
    {
      id: 2, icon: BarChart3, title: 'Advanced Analytics',
      description: 'Comprehensive, live dashboards indicating kitchen performance, item sales, and store operations.',
      benefits: ['Live sales trackers by shift', 'FOH vs BOH ticket metrics', 'Waste reduction alerts', 'Consolidated Excel & PDF exports'],
      dark: false,
    },
    {
      id: 3, icon: Clock, title: 'Shift Task Management',
      description: 'Keep shift handovers organised with smart automated checkmarks and escalation parameters.',
      benefits: ['Intelligent prep checklists', 'Direct FOH shift logs', 'Calibration reminders', 'Manager escalation updates'],
      dark: true,
    },
    {
      id: 4, icon: Users, title: 'Unified Team Platform',
      description: 'Bridge FOH floor service directly to back-of-house kitchen operations on any terminal.',
      benefits: ['Shift handover notices', 'Manager alert logs', 'Direct terminal messaging', 'User roles and permissions'],
      dark: false,
    },
    {
      id: 5, icon: Shield, title: 'Intelligent Food Safety',
      description: 'Maintain premium levels of supplier safety and kitchen traceability throughout every shift.',
      benefits: ['Batch intake checklists', 'Traceability audit trails', 'Supplier audit records', 'Allergy matrix grids'],
      dark: true,
    },
    {
      id: 6, icon: Zap, title: 'Offline-First Engine',
      description: 'Transactions and checklists run in local cache, syncing the moment connection returns.',
      benefits: ['Instant terminal refresh rates', 'Auto-caching offline orders', 'Local device-to-device failover', 'Secure cloud database storage'],
      dark: false,
    },
  ]

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[420px] md:h-[52vh] min-h-[360px] overflow-hidden bg-[#060b18]">
        <div className="absolute inset-0 select-none">
          <Image src="/hero-2.png" alt="Features" fill sizes="100vw" className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b18]/88 via-[#060b18]/55 to-[#060b18]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-20">
          <div className="max-w-2xl animate-in slide-in-from-bottom">
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-blue-300 font-semibold tracking-[0.2em] uppercase text-[10px] px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              System Capabilities
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Built for Modern<br />
              <span className="text-gradient">UK Hospitality</span>
            </h1>
            <p className="text-base text-white/60 max-w-xl font-light leading-relaxed">
              Potato POS coordinates order tracking, daily checklist flows, and regulatory compliance into a powerful unified interface.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="w-full py-5 bg-[#0f1f5c] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {[['6', 'Core Modules'], ['500+', 'UK Restaurants'], ['99.9%', 'Uptime SLA'], ['24/7', 'Support']].map(([val, label], i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-blue-300">{val}</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="w-full py-24 bg-[#f7f9ff]">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">All Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">A complete operational platform</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.id}
                  className={`group rounded-2xl p-8 border flex flex-col reveal stagger-${(index % 3) + 1} card-hover ${
                    feature.dark
                      ? 'bg-[#0f1f5c] border-[#1a3080]'
                      : 'bg-white border-border hover:border-[#2563eb]/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    feature.dark ? 'bg-white/10' : 'bg-[#0f1f5c]/6'
                  }`}>
                    <Icon className={`w-5 h-5 ${feature.dark ? 'text-blue-300' : 'text-[#0f1f5c]'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${feature.dark ? 'text-white' : 'text-[#0f1f5c]'}`}>{feature.title}</h3>
                  <p className={`text-sm font-light leading-relaxed mb-6 flex-1 ${feature.dark ? 'text-white/50' : 'text-[#5a6282]'}`}>{feature.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {feature.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${feature.dark ? 'bg-blue-500/25' : 'bg-[#2563eb]/10'}`}>
                          <Check className={`w-2.5 h-2.5 ${feature.dark ? 'text-blue-300' : 'text-[#2563eb]'}`} />
                        </div>
                        <span className={`text-xs font-light ${feature.dark ? 'text-white/60' : 'text-[#5a6282]'}`}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform cursor-pointer ${feature.dark ? 'text-blue-300' : 'text-[#2563eb]'}`}>
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deep dive sections */}
      <section className="w-full py-24 bg-white border-t border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Deep Dive</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Operational Ecosystem</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-4" />
          </div>

          <div className="space-y-20">
            {[
              { title: 'Automated Compliance Logs', desc: 'Eliminate binder documentation. Potato POS processes cold-room statuses, batch checklists, and training rosters automatically.', points: ['Automated shift checklist logs', 'UK regulatory guidelines alignment', 'Instant digital signature sign-offs', 'Temperature anomaly alerts'], reverse: false },
              { title: 'Real-Time Kitchen Analytics', desc: 'Access consolidated reports on operations, order speed, ticket times, and staff performance from a unified dashboard.', points: ['Shift sales trackers', 'Kitchen order prep times', 'Daily food wastage summaries', 'Multi-site comparisons'], reverse: true },
              { title: 'Dynamic Operational Checklists', desc: 'Unified checklists that coordinate tasks between floor managers and kitchen teams with smart escalation.', points: ['Automated manager handovers', 'Shift task delegation updates', 'Calibration reminder checks', 'EHO preparation lists'], reverse: false },
            ].map((section, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${section.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className={section.reverse ? 'reveal-right' : 'reveal-left'}>
                  <h3 className="text-2xl font-bold text-[#0f1f5c] mb-4">{section.title}</h3>
                  <p className="text-[#5a6282] font-light leading-relaxed mb-6 text-sm">{section.desc}</p>
                  <ul className="space-y-3">
                    {section.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#2563eb] rounded-full flex-shrink-0" />
                        <span className="text-sm text-[#0f1f5c] font-light">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-64 bg-[#0f1f5c] rounded-2xl border border-[#1a3080] flex items-center justify-center overflow-hidden ${section.reverse ? 'reveal-left' : 'reveal-right'}`}>
                  <div className="text-center relative z-10">
                    <p className="text-6xl mb-3">{['📋', '📊', '👥'][index]}</p>
                    <p className="text-sm font-semibold text-white/50">{section.title}</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/20 rounded-full blur-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-[#0f1f5c] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-15" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 reveal">
          <span className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">See all features in action</h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a personalised live demo to discover how Potato POS optimises your venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4fd8] text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all">
              Book Demo Session <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/8 transition-all">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </>
  )
}
