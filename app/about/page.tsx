'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Users, Award, Zap, ArrowRight, Target, Heart, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Simplification First',
      description: 'We believe restaurant management solutions must remain intuitive, clear, and easy to run.',
      gradient: 'from-accent/20 to-accent/5',
      iconColor: 'text-accent',
    },
    {
      icon: Heart,
      title: 'Restaurant Centric',
      description: 'Designed and built by professionals who understand shift stress and kitchen flows.',
      gradient: 'from-primary/20 to-primary/5',
      iconColor: 'text-primary',
    },
    {
      icon: Target,
      title: 'Compliance Integrity',
      description: 'We prioritize regulatory food safety standards and EHO audit criteria above all else.',
      gradient: 'from-accent/20 to-primary/5',
      iconColor: 'text-accent',
    },
  ]

  const team = [
    { name: 'Sarah Chen', role: 'Co-founder & CEO', bio: '15 years managing London fine dining restaurants.', initial: 'S' },
    { name: 'James Mitchell', role: 'Co-founder & CTO', bio: 'Former lead architect for enterprise retail POS products.', initial: 'J' },
    { name: 'Emma Richardson', role: 'Compliance Lead', bio: 'EHO regulation expert and UK Food Standards specialist.', initial: 'E' },
    { name: 'David Kumar', role: 'Customer Success', bio: '10+ years optimizing systems configurations for venues.', initial: 'D' },
  ]

  return (
    <>
      <Header />

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[420px] md:h-[55vh] min-h-[360px] overflow-hidden bg-background">
        <div className="absolute inset-0 select-none">
          <Image
            src="/hero-4.png"
            alt="About Potato POS"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="text-center text-white px-4 max-w-5xl animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent font-semibold tracking-[0.2em] uppercase text-[10px] md:text-xs px-4 py-1.5 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Our Mission
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              The Story Behind<br className="hidden md:block" /> Potato POS
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Coordinating kitchen teams, floor operations, and safety audits into a single unified platform — built in London, for UK hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <section className="w-full py-6 bg-primary text-primary-foreground">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            {[
              { number: '500+', label: 'UK Venues' },
              { number: '50,000+', label: 'Daily Shifts Logged' },
              { number: '99.99%', label: 'Cloud Uptime' },
              { number: '4.8/5', label: 'EHO Rating Success' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-accent">{stat.number}</span>
                <span className="text-xs text-primary-foreground/75 uppercase tracking-wider font-light">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Origins</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">Born in a Busy London Kitchen</h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                Potato POS was born out of frustration. Our founders were managing high-volume venues in London and found themselves drowning in folders of temperature logs, supplier checklists, and shift notes.
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                We realized that hospitality staff deserved better tools. Not complicated spreadsheets or separate programs that clash, but a single terminal that manages checkouts, shifts, and HACCP compliance seamlessly.
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
                Today, Potato POS secures 5-star hygiene logs and handles daily checkouts for hundreds of venues across the UK. We keep the system simple so you can focus on dining experiences.
              </p>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/85 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all group"
              >
                Explore Our Platform <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-700">
              <div className="relative h-80 bg-gradient-to-br from-primary/8 to-accent/12 rounded-2xl border border-border flex items-center justify-center p-8 overflow-hidden group hover:border-primary/30 transition-all hover:shadow-xl">
                <Image
                  src="/potato-pos-logo.png"
                  alt="Potato POS Logo"
                  width={260}
                  height={260}
                  className="opacity-50 object-contain group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/40 to-primary/5 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Our Core</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground animate-in fade-in">Company Values</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-card rounded-2xl border border-border text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-in fade-in group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Founders</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Meet the Team</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-7 hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-in fade-in group text-center"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mx-auto mb-5 flex items-center justify-center font-bold text-xl text-primary group-hover:scale-110 transition-transform duration-300">
                  {member.initial}
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-0.5">{member.name}</h3>
                <p className="text-xs font-semibold text-accent mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/40 to-primary/5 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Trusted UK Restaurant Groups</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'The Silver Fork Group', locations: '15 operational locations', icon: '🍴' },
              { name: 'Urban Kitchen Collective', locations: '8 operational locations', icon: '🏙️' },
              { name: 'Heritage Restaurant Co', locations: '12 operational locations', icon: '🏛️' },
            ].map((customer, index) => (
              <div
                key={index}
                className="p-7 bg-card rounded-2xl border border-border text-center shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-in fade-in group"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="text-3xl mb-3">{customer.icon}</div>
                <p className="font-bold text-sm text-foreground mb-1">{customer.name}</p>
                <p className="text-xs text-muted-foreground font-light">{customer.locations}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -ml-24 -mt-24" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Join Us</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Simplify safety protocols
          </h2>
          <p className="text-base text-primary-foreground/85 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Begin your trial and let Potato POS help handle safety and operations for your venue.
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
