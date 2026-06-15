'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { CheckCircle, AlertCircle, Shield, Clock, FileText, ArrowRight, Lock, Activity } from 'lucide-react'
import Link from 'next/link'

export default function CompliancePage() {
  const standards = [
    {
      name: 'HACCP Standards',
      description: 'Hazard Analysis Critical Control Point guidelines',
      features: ['Automated temperature logging checks', 'Digital deviation logs', 'Verifiable supervisor approvals', 'Custom step checklists'],
      color: 'border-primary/30 hover:border-primary',
      iconGradient: 'from-primary/20 to-primary/5',
    },
    {
      name: 'UK Food Safety Act',
      description: 'Regulatory business standards alignment',
      features: ['Automated records database', 'Staff hygiene checkmarks', 'Risk factor calculators', 'Allergen matrix logs'],
      color: 'border-accent/30 hover:border-accent',
      iconGradient: 'from-accent/20 to-accent/5',
    },
    {
      name: 'EHO Inspections',
      description: 'Environmental Health Officer portal',
      features: ['One-click compliance reports', 'Action log photos upload', 'Immutable digital audit trails', 'Instant CSV/PDF exports'],
      color: 'border-primary/30 hover:border-primary',
      iconGradient: 'from-primary/20 to-primary/5',
    },
    {
      name: 'Allergen Directives',
      description: 'Allergen list alignment checks',
      features: ['Allergen matrix grids', 'Recipe safety checks', 'Menu component database', 'Staff allergen notices'],
      color: 'border-accent/30 hover:border-accent',
      iconGradient: 'from-accent/20 to-accent/5',
    },
    {
      name: 'Product Traceability',
      description: 'Complete supply chain safety tracking',
      features: ['Supplier batch logs', 'Intake quality audits', 'Expiring stock reminders', 'Product recall logs'],
      color: 'border-primary/30 hover:border-primary',
      iconGradient: 'from-primary/20 to-primary/5',
    },
    {
      name: 'Temperature Control',
      description: 'Digital cold chain tracking compliance',
      features: ['Fridge & freezer sensor logs', 'Critical limit alert checks', 'Action logs on deviations', 'Daily log backups'],
      color: 'border-accent/30 hover:border-accent',
      iconGradient: 'from-accent/20 to-accent/5',
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[420px] md:h-[55vh] min-h-[360px] overflow-hidden bg-background">
        <div className="absolute inset-0 select-none">
          <Image
            src="/hero-5.png"
            alt="Compliance & Food Safety"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="text-center text-white px-4 max-w-5xl animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                HACCP & Safety Suite
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              EHO Inspection<br className="hidden md:block" /> Readiness
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Potato POS digital compliance module aligns with UK Food Safety standards, moving your kitchen away from paper logs forever.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="w-full py-6 bg-primary text-primary-foreground">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            {[
              { label: 'Compliance Rate', value: '99.9%' },
              { label: 'Paper Admin Reduced', value: '90%' },
              { label: 'EHO Access Time', value: '<10s' },
              { label: 'Avg Admin Saved', value: '5+ hrs/wk' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-accent">{stat.value}</span>
                <span className="text-xs text-primary-foreground/75 uppercase tracking-wider font-light">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Covered Section */}
      <section className="w-full py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Regulatory Scope</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Compliance Standards Covered</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <div
                key={index}
                className={`p-8 bg-card rounded-2xl border-2 ${standard.color} hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 group`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${standard.iconGradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">{standard.name}</h3>
                    <p className="text-xs text-muted-foreground font-light mt-0.5">{standard.description}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 ml-14">
                  {standard.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground font-light flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/40 to-primary/5 border-t border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">EHO Shield</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">How Potato POS Ensures Compliance</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Checklists Automated',
                description: 'Kitchen teams follow system checklists for pre-opening and line checks directly on standard hardware terminals.',
                icon: FileText,
              },
              {
                step: '02',
                title: 'Real-Time Limit Warnings',
                description: 'Manager alerts trigger instantly via email or push notifications on critical limit deviations like hot-holding dips.',
                icon: AlertCircle,
              },
              {
                step: '03',
                title: 'Digital Signatures Audit',
                description: 'Every shift log contains immutable date and user identifiers, providing full trace accountability for inspections.',
                icon: Lock,
              },
              {
                step: '04',
                title: 'EHO One-Click Reports',
                description: 'Inspectors are provided access to clean, searchable digital logs immediately, saving venue admin time.',
                icon: Shield,
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-in fade-in group"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-accent tracking-wider">{item.step}</span>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deviation Warning Engine */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Smart Shield</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">Deviation Warning Engine</h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
                Potato POS monitors active checks and triggers local alerts if corrective thresholds are missed, correcting risks before inspection.
              </p>
              <ul className="space-y-4">
                {[
                  'Fridge temperature alerts within 30 seconds of threshold breach',
                  'FOH prep checklist incomplete shift handovers warning logs',
                  'Manager training certification expiration schedules tracking',
                  'Automated supplier allergy compliance checkups',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Activity className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-light leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/85 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all group"
                >
                  Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative bg-card rounded-2xl border border-border p-6 md:p-8 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <h4 className="font-bold text-sm text-foreground mb-5 flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Live Alert Monitor
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-red-50/50 border border-red-200/60 rounded-xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-red-700">Temperature Log Alert</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Kitchen Fridge 2: 7.8°C (Max Limit: 5°C)</p>
                  </div>
                  <span className="ml-auto text-[10px] font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">URGENT</span>
                </div>
                <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-amber-700">Pending Safety Checklist</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Pre-shift Allergen checklist is missing verification</p>
                  </div>
                  <span className="ml-auto text-[10px] font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">WARN</span>
                </div>
                <div className="p-4 bg-green-50/50 border border-green-200/60 rounded-xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-green-700">Inspection Grade Verification</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">HACCP files verified. All logs current & backup secured.</p>
                  </div>
                  <span className="ml-auto text-[10px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">OK</span>
                </div>
                <div className="p-4 bg-blue-50/50 border border-blue-200/60 rounded-xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-blue-700">Daily Cold Chain Sync</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">All temperature sensors reporting — 6/6 devices active.</p>
                  </div>
                  <span className="ml-auto text-[10px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">SYNC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -ml-24 -mt-24" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Get Compliant</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Simplify Regulatory Audits
          </h2>
          <p className="text-base text-primary-foreground/85 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Move to an automated compliance setup today. Set up your restaurant in under an hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/85 hover:from-accent/90 hover:to-accent text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all"
            >
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
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
