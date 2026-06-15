'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! Our team will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <>
      <Header />
      
      {/* Header section with refined spacing */}
      <div className="w-full pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-primary/10 to-background border-b border-border">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center animate-in fade-in slide-in-from-bottom duration-700">
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
            Contact Our Support Team
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Have questions about integrations or UK compliance standards? We are ready to help.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
                  placeholder="e.g. Sarah Mitchell"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
                  placeholder="e.g. sarah@restaurant.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Venue Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
                  placeholder="e.g. The Meridian London"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Inquiry Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
                  placeholder="Describe your restaurant scale and compliance goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-lg hover:shadow-md transition-all font-semibold text-xs tracking-wider uppercase"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Contact', val: 'hello@potatopos.com', desc: 'Average response under 1 hour' },
                { icon: Phone, title: 'Call Center', val: '+44 (0) 20 7123 4567', desc: 'Mon-Fri 9:00 - 18:00 GMT' },
                { icon: MapPin, title: 'HQ Location', val: 'King\'s Cross, London, UK', desc: 'Book a visit to our showroom' },
                { icon: Clock, title: 'Active Support', val: '24/7 Hotline Support', desc: 'Dedicated line for urgent terminal issues' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.val}</p>
                      <p className="text-[10px] text-muted-foreground/80 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Info panel */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
              <h3 className="font-semibold text-sm mb-1.5 text-foreground">Need urgent terminal setups?</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                If you have an active EHO inspection scheduled this week, specify this in the email subject or form field to escalate onboarding tasks immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Answers</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Common Inquiries</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: 'How long is setup?', a: 'Standard cloud setup is finished in under 30 minutes. Physical terminals ship within 2 business days.' },
              { q: 'Can I keep my hardware?', a: 'Potato POS runs on standard iPads, Android tablets, and local POS terminals. Check with support for setup details.' },
              { q: 'Is onboarding free?', a: 'Yes, all packages include free remote onboarding and initial staff training calls.' },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border shadow-sm animate-in fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="font-bold text-xs text-primary mb-2 uppercase tracking-wide">{faq.q}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
