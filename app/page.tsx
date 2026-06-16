'use client'

import Header from '@/components/header'
import HeroCarousel from '@/components/hero-carousel'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import ReceiptSection from '@/components/receipt-section'
import AppScreensSection from '@/components/app-screens-section'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Check, BarChart3, Shield, Users, Clock, Zap, ArrowRight, Star, Award, FileCheck2, ChevronRight } from 'lucide-react'

function TickerBar() {
  const items = ['500+ UK Venues', '5-Star EHO Ratings', 'HACCP Automated', 'Offline-First Engine', '24/7 Support', 'Multi-Site Ready', 'UK Food Safety Act Compliant', 'Free Onboarding']
  const doubled = [...items, ...items]
  return (
    <div className="w-full py-3.5 bg-[#0f1f5c] overflow-hidden border-y border-[#1a3080]">
      <div className="ticker-scroll flex gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            <span className="w-1 h-1 rounded-full bg-[#2563eb]" />
            <span className="text-white/60 text-xs font-medium tracking-wider uppercase">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  useScrollReveal()

  const features = [
    { icon: Shield, title: 'HACCP & EHO Compliance', description: 'Automated compliance logs, digital temperature checks, allergen trackers, and instant inspection-ready exports.' },
    { icon: BarChart3, title: 'BOH & Sales Analytics', description: 'Real-time dashboards mapping labour performance, waste metrics, and live store-level sales.' },
    { icon: Clock, title: 'Smart Task Delegations', description: 'System-triggered checklist management that escalates issues and schedules equipment calibrations.' },
    { icon: Users, title: 'Cross-Shift Collaboration', description: 'Kitchen-to-floor messaging, digital handovers, and real-time operational notifications.' },
    { icon: Zap, title: 'Offline-First Engine', description: 'Zero-downtime caching that logs and syncs transactions even when internet drops.' },
    { icon: Award, title: 'Supplier Safety Audits', description: 'Track food batches from suppliers through intake audits for total product transparency.' },
  ]

  const testimonials = [
    { name: 'James Mitchell', role: 'General Manager', company: 'The Meridian, London', content: 'Potato POS has completely removed the stress of compliance. EHO visits used to require folders of paper; now we just present the dashboard.', rating: 5 },
    { name: 'Sarah Thompson', role: 'Operations Director', company: 'Urban Eats Group', content: 'Multi-site management has never been this smooth. Real-time temperature logs keep our 6 kitchens fully aligned.', rating: 5 },
    { name: 'Chef Michael Roux', role: 'Chef Patron', company: 'The Kitchen House', content: 'My kitchen staff love the simplicity. Checks are completed in seconds, letting my team focus on the culinary experience.', rating: 5 },
  ]

  return (
    <>
      <Header />
      <HeroCarousel />
      <TickerBar />

      {/* Editorial intro */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            <div className="lg:col-span-6 reveal-left">
              <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">The New Operational Standard</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f1f5c] leading-[1.12]">
                Restaurant POS meets automated food safety compliance.
              </h2>
            </div>
            <div className="lg:col-span-6 reveal-right">
              <div className="border-l-4 border-[#2563eb] pl-8 py-2">
                <p className="text-[#5a6282] text-lg font-light leading-relaxed">
                  Potato POS merges daily point-of-sale functionality with a rigorous, automated compliance suite. Designed under UK EHO guidelines to keep high-volume venues audit-ready, 24/7.
                </p>
                <div className="flex gap-8 mt-8">
                  {[['500+', 'UK Venues'], ['99.9%', 'Uptime SLA'], ['5hrs+', 'Saved Weekly']].map(([val, label]) => (
                    <div key={label}>
                      <p className="text-2xl font-bold text-[#0f1f5c]">{val}</p>
                      <p className="text-xs text-[#5a6282] font-medium mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="w-full py-24 bg-[#f7f9ff]">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Comprehensive Suite</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Engineered for busy kitchens</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className={`group bg-white rounded-2xl p-8 border border-border hover:border-[#2563eb]/30 hover:shadow-xl transition-all duration-300 card-hover reveal stagger-${(index % 3) + 1}`}>
                  <div className="w-12 h-12 bg-[#0f1f5c]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0f1f5c] transition-colors duration-300">
                    <Icon className="text-[#0f1f5c] group-hover:text-white transition-colors" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f1f5c] mb-3">{feature.title}</h3>
                  <p className="text-[#5a6282] text-sm font-light leading-relaxed mb-5">{feature.description}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2563eb] group-hover:translate-x-1 transition-transform cursor-pointer">
                    Learn More <ChevronRight size={12} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Device + Receipt */}
      <ReceiptSection />

      {/* App screens */}
      <AppScreensSection />

      {/* EHO shield */}
      <section className="w-full py-24 bg-white border-t border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Inspections Redefined</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c] mb-6 leading-tight">Your EHO digital shield</h2>
              <p className="text-[#5a6282] font-light leading-relaxed mb-8">
                Eliminate the anxiety of unexpected hygiene visits. Our automated portal presents EHO officers with verifiable logs of all critical temperature thresholds and kitchen protocols instantly.
              </p>
              <div className="space-y-4 mb-8">
                {['Auto-generated daily HACCP logs', 'Deviation alerts with corrective actions', 'Digital signature verification for audit trails'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0f1f5c] flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={12} />
                    </div>
                    <span className="text-sm font-medium text-[#0f1f5c]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/compliance" className="inline-flex items-center gap-2 bg-[#0f1f5c] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#162770] hover:shadow-xl hover:-translate-y-0.5 transition-all group">
                View Compliance Suite <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="reveal-right">
              <div className="bg-[#0f1f5c] rounded-2xl border border-[#1a3080] p-6 md:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563eb]/20 rounded-full blur-3xl" />
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                      <FileCheck2 className="text-blue-300" size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Kitchen Control Hub</h4>
                      <p className="text-[10px] text-white/40">Location: Kitchen A · Line 1</p>
                    </div>
                  </div>
                  <div className="bg-green-500/15 text-green-300 px-3 py-1.5 rounded-full text-[10px] font-semibold flex items-center gap-1.5 border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Inspection Ready
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/8">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase font-semibold text-white/40">Cold Chain</span>
                      <span className="bg-green-500/20 text-green-300 text-[9px] px-2 py-0.5 rounded-full font-semibold">Normal</span>
                    </div>
                    <p className="text-2xl font-bold text-white">3.2°C</p>
                    <p className="text-[10px] text-white/30 mt-1">Walk-in Freezer · Auto-logged 5m ago</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/8">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase font-semibold text-white/40">HACCP Checks</span>
                      <span className="bg-amber-500/20 text-amber-300 text-[9px] px-2 py-0.5 rounded-full font-semibold">Pending 1</span>
                    </div>
                    <p className="text-2xl font-bold text-white">14/15</p>
                    <p className="text-[10px] text-white/30 mt-1">Daily Prep · FOH + BOH</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/8 sm:col-span-2">
                    <span className="text-[10px] uppercase font-semibold text-white/40 block mb-3">Real-time Inspection Logs</span>
                    <div className="space-y-2">
                      {[{ label: 'Daily Hot Holding Temp', status: '✓ Verified (68.4°C)', ok: true }, { label: 'Allergen Matrix Update', status: '✓ Verified', ok: true }, { label: 'Calibrations Log', status: '⏰ Due in 2h', ok: false }].map((log, i) => (
                        <div key={i} className="flex justify-between text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                          <span className="text-white/60">{log.label}</span>
                          <span className={log.ok ? 'text-green-400 font-semibold' : 'text-amber-400 font-semibold'}>{log.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full py-24 bg-[#f7f9ff]">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Smarter flows, day and night</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Check-In & Setup', desc: 'Morning shifts begin by launching the checklist. Smart sensors verify ambient fridge ranges instantly without manual documentation.' },
              { step: '02', title: 'Interactive Prep Flow', desc: 'Potato POS monitors prep checklists, allergy tables, and recipe logs dynamically. Staff mark milestones on any terminal or handheld.' },
              { step: '03', title: 'Automated Audit Prep', desc: 'At close, all reports consolidate into a structured, encrypted file stored securely in the cloud. Instantly inspection ready.' },
            ].map((item, idx) => (
              <div key={idx} className={`relative bg-white rounded-2xl p-8 border border-border hover:border-[#2563eb]/25 hover:shadow-xl transition-all duration-300 reveal stagger-${idx + 1}`}>
                <span className="text-7xl font-bold text-[#0f1f5c]/5 select-none absolute -top-6 left-6">{item.step}</span>
                <div className="mt-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0f1f5c] flex items-center justify-center mb-5">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f1f5c] mb-3">{item.title}</h3>
                  <p className="text-[#5a6282] text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-20 bg-[#0f1f5c] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/15 rounded-full blur-3xl" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[['500+', 'UK Restaurants'], ['1.2M+', 'HACCP Logs Saved'], ['100%', 'EHO Audit Pass Rate'], ['5hrs+', 'Saved Weekly / Venue']].map((s, i) => (
              <div key={i} className={`border-t-2 border-[#2563eb]/40 pt-4 reveal stagger-${i + 1}`}>
                <span className="block text-4xl md:text-5xl font-bold text-white mb-1">{s[0]}</span>
                <span className="text-sm text-white/45 font-medium tracking-wide">{s[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 bg-white border-t border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Loved by restaurant managers</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className={`bg-[#f7f9ff] rounded-2xl p-8 border border-border hover:border-[#2563eb]/25 hover:shadow-xl transition-all duration-300 flex flex-col reveal stagger-${index + 1}`}>
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[#0f1f5c] text-sm font-light italic leading-relaxed mb-8 flex-1">&ldquo;{t.content}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-sm text-[#0f1f5c]">{t.name}</p>
                  <p className="text-xs text-[#5a6282]">{t.role}</p>
                  <p className="text-xs text-[#2563eb] font-medium mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-[#0f1f5c] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-15" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#2563eb]/15 rounded-full blur-3xl" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 reveal">
          <span className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ready to upgrade your restaurant?</h2>
          <p className="text-white/55 mb-10 max-w-lg mx-auto font-light leading-relaxed">
            Start your free 14-day trial. No setup fees, no contracts, free onboarding for your entire team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4fd8] text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/8 transition-all">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </>
  )
}
