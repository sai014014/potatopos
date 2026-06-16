'use client'

import Header from '@/components/header'
import HeroCarousel from '@/components/hero-carousel'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import DeviceMockupSection from '@/components/device-mockup-section'
import AppShowcase from '@/components/app-showcase'
import ScrollSection from '@/components/scroll-section'
import AnimatedCard from '@/components/animated-card'
import Link from 'next/link'
import { Check, BarChart3, Shield, Users, Clock, Zap, ArrowRight, Star, Award, Compass, FileCheck2, Activity } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'HACCP & EHO Compliance',
      description: 'Automated compliance logs, digital temperature checklists, allergy trackers, and instant inspection-ready report exports.',
    },
    {
      icon: BarChart3,
      title: 'BOH & Sales Analytics',
      description: 'Comprehensive, real-time dashboards mapping labor performance, waste metrics, and live store-level sales.',
    },
    {
      icon: Clock,
      title: 'Smart Task Delegations',
      description: 'System-triggered checklist management that escalates issues and schedules equipment calibrations automatically.',
    },
    {
      icon: Users,
      title: 'Cross-Shift Collaboration',
      description: 'Direct kitchen-to-floor messaging channels, digital handovers, and real-time operational notifications.',
    },
    {
      icon: Zap,
      title: 'Offline-First Engine',
      description: 'Zero-downtime database caching that automatically logs and syncs transactions even when local internet drops.',
    },
    {
      icon: Award,
      title: 'Supplier Safety Audits',
      description: 'Track food batches from local suppliers through intake audits to secure total product transparency.',
    },
  ]

  const benefits = [
    'Secure 5-star EHO food hygiene ratings with minimal manual admin',
    'Reclaim over 5 hours per week previously lost to paper log checking',
    'Ensure critical fridge and freezer cold chain compliance 24/7',
    'Increase team efficiency by up to 40% with smart digital handovers',
    'Instant cloud backups for all regulatory safety documentation',
  ]

  const testimonials = [
    {
      name: 'James Mitchell',
      role: 'General Manager',
      company: 'The Meridian, London',
      content: 'Potato POS has completely removed the stress of compliance. EHO visits used to require folders of paper; now we just present the dashboard.',
      rating: 5,
    },
    {
      name: 'Sarah Thompson',
      role: 'Operations Director',
      company: 'Urban Eats Group',
      content: 'Multi-site management has never been this smooth. The real-time temperature logs and tasks keep our 6 kitchens fully aligned.',
      rating: 5,
    },
    {
      name: 'Chef Michael Roux',
      role: 'Chef Patron',
      company: 'The Kitchen House',
      content: 'My kitchen staff love the simplicity. Checks are completed in seconds, letting my team focus entirely on the culinary experience.',
      rating: 5,
    },
  ]

  return (
    <>
      <Header />
      <HeroCarousel />

      {/* Editorial Introduction Section */}
      <ScrollSection className="w-full py-16 md:py-24 bg-background border-b border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                The New Operational Standard
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
                Restaurant POS meets automated food safety compliance.
              </h2>
            </div>
            <div className="lg:col-span-5 border-l-2 border-accent pl-6 lg:pl-8 py-2">
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Potato POS merges daily point-of-sale functionality with a rigorous, automated compliance suite. Designed under UK EHO guidelines to keep modern, high-volume venues audit-ready, 24/7.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Asymmetrical Editorial Features Section */}
      <section className="w-full py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollSection className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Comprehensive Suite
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Engineered for busy kitchens
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </ScrollSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className="p-8 bg-card border-r border-b border-border hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 flex flex-col justify-between group"
                  hover
                >
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 shadow-sm">
                      <Icon className="text-primary group-hover:text-white transition-colors" size={22} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-accent tracking-wider uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                    Explore Feature <ArrowRight size={12} />
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive EHO Shield & Live System Preview */}
      <ScrollSection className="w-full py-20 bg-gradient-to-br from-secondary/40 to-primary/5 border-t border-b border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Inspections Redefined
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Your EHO digital shield
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Eliminate the anxiety of unexpected hygiene visits. Our automated portal presents EHO officers with a pristine, verifiable log of all critical temperature thresholds and kitchen protocols instantly.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Auto-generated daily HACCP logs',
                  'Deviation alerts with corrective actions',
                  'Digital signature verification for audit trails',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={13} />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/compliance"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/85 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all group"
              >
                View Compliance Suite
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-card rounded-2xl border border-border shadow-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/8 rounded-full blur-3xl" />

                {/* Mockup Topbar */}
                <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileCheck2 className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">Kitchen Control Hub</h4>
                      <p className="text-[10px] text-muted-foreground">Location: Kitchen A (Line 1)</p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Inspection Ready
                  </div>
                </div>

                {/* Mockup Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-border rounded-xl p-4 bg-background hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase font-semibold text-muted-foreground">Cold Chain</span>
                      <span className="bg-green-100 text-green-800 text-[9px] px-2 py-0.5 rounded-full font-semibold">Normal</span>
                    </div>
                    <p className="text-2xl font-bold tracking-tight">3.2 °C</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Walk-in Freezer • Auto-logged 5m ago</p>
                  </div>

                  <div className="border border-border rounded-xl p-4 bg-background hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase font-semibold text-muted-foreground">HACCP Checklists</span>
                      <span className="bg-yellow-100 text-yellow-800 text-[9px] px-2 py-0.5 rounded-full font-semibold">Pending 1</span>
                    </div>
                    <p className="text-2xl font-bold tracking-tight">14 / 15</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Daily Prep Checklist • FOH + BOH</p>
                  </div>

                  <div className="border border-border rounded-xl p-4 bg-background sm:col-span-2">
                    <span className="text-[10px] uppercase font-semibold text-muted-foreground block mb-3">Real-time Inspection Logs</span>
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-xs border-b border-border/50 pb-2">
                        <span className="font-medium">1. Daily Hot Holding Temp</span>
                        <span className="text-green-600 font-semibold">✓ Verified (68.4°C)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs border-b border-border/50 pb-2">
                        <span className="font-medium">2. Allergen Matrix Update</span>
                        <span className="text-green-600 font-semibold">✓ Verified</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium">3. Calibrations Log</span>
                        <span className="text-amber-600 font-semibold">⏰ Due in 2h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Device Mockup Section - NEW */}
      <DeviceMockupSection />

      {/* App Showcase Section - NEW */}
      <AppShowcase />

      {/* The Restaurant Operational Loop Timeline */}
      <section className="w-full py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollSection className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Smarter flows, day and night
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </ScrollSection>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {[
              {
                step: '01',
                title: 'Check-In & Setup',
                subtitle: 'Morning shifts begin by launching the checklist. Smart sensors verify ambient fridge ranges instantly without requiring manual clipboard documentation.',
              },
              {
                step: '02',
                title: 'Interactive Prep Flow',
                subtitle: 'Potato POS monitors prep checklists, allergy tables, and recipe logs dynamically. Staff mark milestones on any terminal or active handheld.',
              },
              {
                step: '03',
                title: 'Automated Audit Prep',
                subtitle: 'At the end of the evening, all reports consolidate into a structured, encrypted file stored securely in the cloud. You are instantly inspection ready.',
              },
            ].map((item, idx) => (
              <AnimatedCard key={idx} delay={idx * 0.15} className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 group" hover>
                <div className="text-6xl md:text-7xl font-bold text-accent/12 select-none absolute -top-8 left-6 font-sans group-hover:text-accent/20 transition-colors">
                  {item.step}
                </div>
                <div className="mt-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Statistical Editorial Showcase */}
      <ScrollSection className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {[
              { stat: '500+', label: 'UK Restaurants' },
              { stat: '1.2M+', label: 'HACCP Logs Saved' },
              { stat: '100%', label: 'EHO Audit Pass' },
              { stat: '5hrs+', label: 'Saved Weekly / Venue' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left py-4 border-t border-primary-foreground/20">
                <span className="block text-4xl md:text-5xl font-bold tracking-tight mb-2 text-accent">
                  {stat.stat}
                </span>
                <span className="text-sm font-light tracking-wider text-primary-foreground/80 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Benefits Section */}
      <ScrollSection className="w-full py-20 bg-background border-b border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Value Added
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                Transform your restaurant metrics
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Potato POS keeps your team unified and your kitchen aligned. Reduce operational error, save on administrative hours, and ensure compliance requirements are hit on every shift automatically.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-white" size={11} />
                    </div>
                    <span className="text-foreground text-sm font-light leading-normal">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/85 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all group"
                >
                  Explore All Features
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 border-2 border-accent/50 text-accent px-6 py-3 rounded-xl font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-primary/8 to-accent/12 rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="text-primary" size={15} />
                    </div>
                    Continuous Monitoring
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Automated, scheduled tasks ensure you capture cold-room status, supplier logs, and daily allergen cards with verified digital logs.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Activity className="text-accent" size={15} />
                    </div>
                    Live operational metrics
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Access live performance dashboards to monitor your operations, labor metrics, checklist percentages, and waste totals from any device.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Compass className="text-primary" size={15} />
                    </div>
                    Comprehensive support
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Access our dedicated restaurant tech support staff based in London, available 24/7 for urgent hardware or operational inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Testimonials Section */}
      <ScrollSection className="w-full py-20 bg-secondary/20">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollSection className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Loved by restaurant managers
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
          </ScrollSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
                hover
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm font-light italic leading-relaxed mb-8">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium mt-1">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Premium CTA Section */}
      <ScrollSection className="w-full py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -ml-24 -mt-24" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Ready to upgrade your restaurant?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/85 mb-10 max-w-xl mx-auto font-light">
            Start your free 14-day trial today. No setup fees, no binding contracts, and free onboarding for your entire staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/85 hover:from-accent/90 hover:to-accent text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all"
            >
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </ScrollSection>

      <FloatingCTA />
      <Footer />
    </>
  )
}
