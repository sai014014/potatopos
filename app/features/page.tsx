'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { FileText, BarChart3, Clock, Users, Shield, Zap, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const detailedFeatures = [
    {
      id: 1,
      icon: FileText,
      title: 'Compliance Automation',
      description: 'Fully digitize and automate your food hygiene records, temperature logs, and active HACCP logs.',
      benefits: [
        'Automated sensor logs integration',
        'UK regulatory standard compliance logs',
        'One-click EHO reporting dashboard',
        'Daily allergen list checkmarks',
      ],
      color: 'from-primary/15 to-primary/5',
      iconColor: 'text-primary',
      iconBg: 'from-primary/20 to-primary/10',
    },
    {
      id: 2,
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive, live dashboards indicating kitchen performance, item sales, and total store operations.',
      benefits: [
        'Live sales trackers by shift',
        'FOH vs BOH ticket metrics',
        'Waste reduction alerts',
        'Consolidated Excel & PDF export options',
      ],
      color: 'from-accent/15 to-accent/5',
      iconColor: 'text-accent',
      iconBg: 'from-accent/20 to-accent/10',
    },
    {
      id: 3,
      icon: Clock,
      title: 'Shift Task Management',
      description: 'Keep shift handovers organized with smart automated checkmarks and escalation parameters.',
      benefits: [
        'Intelligent prep checklists',
        'Direct FOH shift logs',
        'Calibration reminders',
        'Manager escalation updates',
      ],
      color: 'from-primary/15 to-accent/5',
      iconColor: 'text-primary',
      iconBg: 'from-primary/20 to-accent/10',
    },
    {
      id: 4,
      icon: Users,
      title: 'Unified Team Platform',
      description: 'Bridge FOH floor service directly to back-of-house kitchen operations on any standard terminal.',
      benefits: [
        'Shift handover notices',
        'Manager alert logs',
        'Direct terminal messaging',
        'User roles and permissions log',
      ],
      color: 'from-accent/15 to-primary/5',
      iconColor: 'text-accent',
      iconBg: 'from-accent/20 to-primary/10',
    },
    {
      id: 5,
      icon: Shield,
      title: 'Intelligent Food Safety',
      description: 'Maintain premium levels of supplier safety and kitchen traceability standards throughout shifts.',
      benefits: [
        'Batch intake checklists',
        'Traceability audit trails',
        'Supplier audit records',
        'Allergy matrix grids',
      ],
      color: 'from-primary/15 to-primary/5',
      iconColor: 'text-primary',
      iconBg: 'from-primary/20 to-primary/10',
    },
    {
      id: 6,
      icon: Zap,
      title: 'Offline-First Engine',
      description: 'Transactions and checklists run directly in local cache, syncing the moment connection returns.',
      benefits: [
        'Instant terminal refresh rates',
        'Auto-caching offline orders',
        'Local device-to-device failover',
        'Secure Cloud database storage',
      ],
      color: 'from-accent/15 to-accent/5',
      iconColor: 'text-accent',
      iconBg: 'from-accent/20 to-accent/10',
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[420px] md:h-[55vh] min-h-[360px] overflow-hidden bg-background">
        <div className="absolute inset-0 select-none">
          <Image
            src="/hero-2.png"
            alt="Features Hero"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Rich gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="text-center text-white px-4 max-w-5xl animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                System Capabilities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              Designed for Modern<br className="hidden md:block" /> UK Hospitality
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Potato POS coordinates order tracking, daily checklist flows, and regulatory compliance into a unified, powerful interface.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <section className="w-full py-6 bg-primary text-primary-foreground">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            {[
              { stat: '6', label: 'Core Modules' },
              { stat: '500+', label: 'UK Restaurants' },
              { stat: '99.9%', label: 'Uptime SLA' },
              { stat: '24/7', label: 'Support' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-accent">{item.stat}</span>
                <span className="text-xs text-primary-foreground/75 uppercase tracking-wider font-light">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="w-full py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">All Features</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">A complete operational platform</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.id}
                  className={`group p-8 bg-card rounded-2xl border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 flex flex-col justify-between`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div>
                    <div className={`w-13 h-13 w-14 h-14 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{feature.description}</p>
                    <ul className="space-y-2.5 mb-6">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-accent" />
                          </div>
                          <span className="text-xs text-foreground font-light leading-normal">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent tracking-wider uppercase group-hover:translate-x-1 transition-transform cursor-pointer">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Operational Ecosystem Section */}
      <section className="w-full py-20 bg-gradient-to-br from-secondary/40 to-primary/5 border-t border-b border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Deep Dive</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Operational Ecosystem</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="space-y-16">
            {[
              {
                title: 'Automated Compliance Logs',
                description: 'Eliminate binder documentation. Potato POS processes cold-room statuses, batch checklists, and training rosters automatically.',
                emoji: '📋',
                points: [
                  'Automated shift checklist logs',
                  'UK regulatory guidelines alignment',
                  'Instant digital signature sign-offs',
                  'Automatic temperature anomaly alerts',
                ],
                reverse: false,
              },
              {
                title: 'Real-Time Kitchen Analytics',
                description: 'Access consolidated reports on operations, order speed, ticket times, and staff performance from a dashboard.',
                emoji: '📊',
                points: [
                  'Shift sales trackers',
                  'Kitchen order prep times',
                  'Daily food wastage summaries',
                  'Consolidated multi-site comparisons',
                ],
                reverse: true,
              },
              {
                title: 'Dynamic Operational Checklists',
                description: 'Unified checklists that coordinate tasks between floor managers and kitchen teams with smart escalation.',
                emoji: '👥',
                points: [
                  'Automated manager handovers',
                  'Shift task delegation updates',
                  'Calibration reminder checks',
                  'EHO preparation lists',
                ],
                reverse: false,
              },
            ].map((section, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-8"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${section.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="text-5xl mb-4">{section.emoji}</div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">{section.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">{section.description}</p>
                    <ul className="space-y-2.5">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-foreground font-light">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-72 bg-gradient-to-br from-primary/8 to-accent/8 rounded-2xl border border-border flex items-center justify-center overflow-hidden group hover:border-primary/30 transition-colors">
                    <div className="text-center relative z-10">
                      <p className="text-7xl mb-3">{section.emoji}</p>
                      <p className="text-sm font-semibold text-muted-foreground">{section.title}</p>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -ml-24 -mt-24" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            See all features in action
          </h2>
          <p className="text-base text-primary-foreground/85 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a personalized live demo with our restaurant support team to discover how Potato POS can optimize your venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/85 hover:from-accent/90 hover:to-accent text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all"
            >
              Book Demo Session <ArrowRight size={18} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
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
