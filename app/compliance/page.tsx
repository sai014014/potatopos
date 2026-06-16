'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { CircleCheck as CheckCircle, Shield, Clock, FileText, ArrowRight, Lock, Activity } from 'lucide-react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function CompliancePage() {
  useScrollReveal()

  const standards = [
    { name: 'HACCP Standards', description: 'Hazard Analysis Critical Control Point guidelines', features: ['Automated temperature logging', 'Digital deviation logs', 'Verifiable supervisor approvals', 'Custom step checklists'], dark: false },
    { name: 'UK Food Safety Act', description: 'Regulatory business standards alignment', features: ['Automated records database', 'Staff hygiene checkmarks', 'Risk factor calculators', 'Allergen matrix logs'], dark: true },
    { name: 'EHO Inspections', description: 'Environmental Health Officer portal', features: ['One-click compliance reports', 'Action log photo uploads', 'Immutable digital audit trails', 'Instant CSV/PDF exports'], dark: false },
    { name: 'Allergen Directives', description: 'Allergen list alignment checks', features: ['Allergen matrix grids', 'Recipe safety checks', 'Menu component database', 'Staff allergen notices'], dark: true },
    { name: 'Product Traceability', description: 'Complete supply chain safety tracking', features: ['Supplier batch logs', 'Intake quality audits', 'Expiry stock reminders', 'Product recall logs'], dark: false },
    { name: 'Temperature Control', description: 'Digital cold chain tracking compliance', features: ['Fridge & freezer sensor logs', 'Critical limit alert checks', 'Action logs on deviations', 'Daily log backups'], dark: true },
  ]

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[420px] md:h-[52vh] min-h-[360px] overflow-hidden bg-[#060b18]">
        <div className="absolute inset-0 select-none">
          <Image src="/hero-5.png" alt="Compliance" fill sizes="100vw" className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b18]/88 via-[#060b18]/55 to-[#060b18]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-20">
          <div className="max-w-2xl animate-in slide-in-from-bottom">
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-blue-300 font-semibold tracking-[0.2em] uppercase text-[10px] px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              HACCP & Safety Suite
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              EHO Inspection<br />
              <span className="text-gradient">Readiness</span>
            </h1>
            <p className="text-base text-white/60 max-w-xl font-light leading-relaxed">
              Potato POS digital compliance module aligns with UK Food Safety standards, moving your kitchen away from paper logs forever.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="w-full py-5 bg-[#0f1f5c]">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {[['99.9%', 'Compliance Rate'], ['90%', 'Paper Admin Reduced'], ['<10s', 'EHO Access Time'], ['5+ hrs/wk', 'Admin Saved']].map(([val, label], i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-blue-300">{val}</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards grid */}
      <section className="w-full py-24 bg-[#f7f9ff]">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Regulatory Scope</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">Compliance Standards Covered</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border reveal stagger-${(index % 3) + 1} card-hover ${
                  standard.dark
                    ? 'bg-[#0f1f5c] border-[#1a3080]'
                    : 'bg-white border-border hover:border-[#2563eb]/30'
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${standard.dark ? 'bg-white/10' : 'bg-[#0f1f5c]/6'}`}>
                    <CheckCircle className={`w-5 h-5 ${standard.dark ? 'text-blue-300' : 'text-[#2563eb]'}`} />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${standard.dark ? 'text-white' : 'text-[#0f1f5c]'}`}>{standard.name}</h3>
                    <p className={`text-xs font-light mt-0.5 ${standard.dark ? 'text-white/40' : 'text-[#5a6282]'}`}>{standard.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {standard.features.map((f, i) => (
                    <li key={i} className={`text-xs font-light flex items-center gap-2 ${standard.dark ? 'text-white/55' : 'text-[#5a6282]'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${standard.dark ? 'bg-blue-400' : 'bg-[#2563eb]'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">EHO Shield</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c]">How Potato POS Ensures Compliance</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {[
              { step: '01', title: 'Checklists Automated', desc: 'Kitchen teams follow system checklists for pre-opening and line checks on standard hardware terminals.', icon: FileText },
              { step: '02', title: 'Real-Time Limit Warnings', desc: 'Manager alerts trigger instantly via email or push notifications on critical limit deviations like hot-holding dips.', icon: Activity },
              { step: '03', title: 'Digital Signatures Audit', desc: 'Every shift log contains immutable date and user identifiers, providing full trace accountability for inspections.', icon: Lock },
              { step: '04', title: 'EHO One-Click Reports', desc: 'Inspectors are provided access to clean, searchable digital logs immediately, saving venue admin time.', icon: Shield },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className={`flex gap-6 items-start bg-[#f7f9ff] rounded-2xl border border-border p-6 hover:border-[#2563eb]/25 hover:shadow-lg transition-all duration-300 reveal stagger-${index + 1}`}>
                  <div className="w-14 h-14 rounded-xl bg-[#0f1f5c] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[#2563eb] tracking-wider">{item.step}</span>
                      <h3 className="text-lg font-bold text-[#0f1f5c]">{item.title}</h3>
                    </div>
                    <p className="text-sm text-[#5a6282] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Alert monitor */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f9ff] border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Smart Shield</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f5c] mb-6">Deviation Warning Engine</h2>
              <p className="text-sm text-[#5a6282] font-light leading-relaxed mb-8">
                Potato POS monitors active checks and triggers alerts if corrective thresholds are missed, correcting risks before inspection.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Fridge temperature alerts within 30 seconds of threshold breach',
                  'FOH prep checklist incomplete shift handover warnings',
                  'Manager training certification expiration tracking',
                  'Automated supplier allergy compliance checkups',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0f1f5c] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Activity className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-[#0f1f5c] font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0f1f5c] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#162770] hover:shadow-xl hover:-translate-y-0.5 transition-all group">
                Start Free Trial <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="reveal-right">
              <div className="bg-[#0f1f5c] rounded-2xl border border-[#1a3080] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563eb]/15 rounded-full blur-3xl" />
                <h4 className="font-bold text-sm text-white mb-5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  Live Alert Monitor
                </h4>
                <div className="space-y-3">
                  {[
                    { dot: 'bg-red-500 animate-pulse', bg: 'bg-red-900/30 border-red-500/30', title: 'text-red-300', label: 'Temperature Log Alert', sub: 'Kitchen Fridge 2: 7.8°C (Max: 5°C)', badge: 'URGENT', badgeBg: 'bg-red-500/20 text-red-300' },
                    { dot: 'bg-amber-400', bg: 'bg-amber-900/20 border-amber-500/20', title: 'text-amber-300', label: 'Pending Safety Checklist', sub: 'Pre-shift Allergen checklist missing verification', badge: 'WARN', badgeBg: 'bg-amber-500/20 text-amber-300' },
                    { dot: 'bg-green-500', bg: 'bg-green-900/20 border-green-500/20', title: 'text-green-300', label: 'Inspection Grade Verified', sub: 'HACCP files verified. All logs current & secure.', badge: 'OK', badgeBg: 'bg-green-500/20 text-green-300' },
                    { dot: 'bg-blue-400', bg: 'bg-blue-900/20 border-blue-500/20', title: 'text-blue-300', label: 'Daily Cold Chain Sync', sub: 'All sensors reporting — 6/6 devices active.', badge: 'SYNC', badgeBg: 'bg-blue-500/20 text-blue-300' },
                  ].map((alert, i) => (
                    <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 ${alert.bg}`}>
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${alert.dot}`} />
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-bold ${alert.title}`}>{alert.label}</p>
                        <p className="text-[10px] text-white/40 mt-0.5">{alert.sub}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${alert.badgeBg}`}>{alert.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-[#0f1f5c] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-15" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 reveal">
          <span className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Get Compliant</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simplify Regulatory Audits</h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto font-light leading-relaxed">Move to automated compliance today. Set up your restaurant in under an hour.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4fd8] text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link href="/features" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/8 transition-all">
              View All Features
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </>
  )
}
