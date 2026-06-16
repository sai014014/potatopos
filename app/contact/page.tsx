'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function ContactPage() {
  useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! Our team will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <>
      <Header />

      {/* Header section */}
      <div className="w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0f1f5c] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/15 rounded-full blur-3xl" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10 animate-in slide-in-from-bottom">
          <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-blue-300 font-semibold tracking-[0.2em] uppercase text-[10px] px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-4">
            Contact Our<br />
            <span className="text-gradient">Support Team</span>
          </h1>
          <p className="text-base text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            Have questions about integrations or UK compliance standards? We are ready to help.
          </p>
        </div>
      </div>

      {/* Form + Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="reveal-left">
            <h2 className="text-2xl font-bold text-[#0f1f5c] mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Sarah Mitchell', key: 'name' },
                { id: 'email', label: 'Work Email', type: 'email', placeholder: 'e.g. sarah@restaurant.com', key: 'email' },
                { id: 'company', label: 'Venue Name', type: 'text', placeholder: 'e.g. The Meridian London', key: 'company' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-xs font-semibold uppercase tracking-wider text-[#0f1f5c] mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    required={field.key !== 'company'}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[#f7f9ff] text-[#0f1f5c] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#0f1f5c] mb-2">
                  Inquiry Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[#f7f9ff] text-[#0f1f5c] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition resize-none"
                  placeholder="Describe your restaurant scale and compliance goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-[#0f1f5c] text-white rounded-xl hover:bg-[#162770] hover:shadow-xl transition-all font-semibold text-sm flex items-center justify-center gap-2 group"
              >
                Send Inquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="reveal-right">
            <h2 className="text-2xl font-bold text-[#0f1f5c] mb-8">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Contact', val: 'hello@potatopos.com', desc: 'Average response under 1 hour' },
                { icon: Phone, title: 'Call Centre', val: '+44 (0) 20 7123 4567', desc: 'Mon–Fri 9:00–18:00 GMT' },
                { icon: MapPin, title: 'HQ Location', val: "King's Cross, London, UK", desc: 'Book a visit to our showroom' },
                { icon: Clock, title: 'Active Support', val: '24/7 Hotline Support', desc: 'Dedicated line for urgent terminal issues' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-[#0f1f5c] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#0f1f5c]">{item.title}</h3>
                      <p className="text-xs text-[#5a6282] mt-0.5">{item.val}</p>
                      <p className="text-[10px] text-[#5a6282]/70 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-[#0f1f5c] rounded-2xl border border-[#1a3080]">
              <h3 className="font-bold text-sm mb-2 text-white">Need urgent terminal setups?</h3>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                If you have an active EHO inspection scheduled this week, specify this in the email subject to escalate onboarding immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f9ff] border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Answers</span>
            <h2 className="text-3xl font-bold text-[#0f1f5c]">Common Inquiries</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: 'How long is setup?', a: 'Standard cloud setup is finished in under 30 minutes. Physical terminals ship within 2 business days.' },
              { q: 'Can I keep my hardware?', a: 'Potato POS runs on standard iPads, Android tablets, and local POS terminals. Check with support for setup details.' },
              { q: 'Is onboarding free?', a: 'Yes, all packages include free remote onboarding and initial staff training calls.' },
            ].map((faq, index) => (
              <div key={index} className={`p-6 bg-white rounded-2xl border border-border reveal stagger-${index + 1} card-hover`}>
                <h3 className="font-bold text-sm text-[#0f1f5c] mb-2">{faq.q}</h3>
                <p className="text-xs text-[#5a6282] font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
