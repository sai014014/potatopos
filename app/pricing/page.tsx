'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Check, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function PricingPage() {
  useScrollReveal()
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 49 : 42,
      description: 'Ideal for independent single-location bistros and cafes.',
      highlighted: false,
      features: [
        { name: '1 Active Location', included: true },
        { name: 'Digital HACCP Checklists', included: true },
        { name: 'Basic Shift Handovers', included: true },
        { name: 'Mobile Log Access', included: true },
        { name: 'Standard Email Support', included: true },
        { name: 'Shift Sales Analytics', included: false },
        { name: 'Multi-device Syncing', included: false },
        { name: 'Supplier Traceability Logs', included: false },
      ],
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? 149 : 126,
      description: 'Designed for high-volume restaurants and multi-site groups.',
      highlighted: true,
      features: [
        { name: 'Up to 5 Locations', included: true },
        { name: 'Digital HACCP Checklists', included: true },
        { name: 'Smart Shift Handovers', included: true },
        { name: 'Mobile Log Access', included: true },
        { name: 'Priority Email & Chat Support', included: true },
        { name: 'Shift Sales Analytics', included: true },
        { name: 'Multi-device Syncing', included: true },
        { name: 'Supplier Traceability Logs', included: false },
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Custom configurations for large-scale franchise chains.',
      highlighted: false,
      features: [
        { name: 'Unlimited Locations', included: true },
        { name: 'Digital HACCP Checklists', included: true },
        { name: 'Smart Shift Handovers', included: true },
        { name: 'Mobile Log Access', included: true },
        { name: '24/7 Dedicated Support Hotline', included: true },
        { name: 'Shift Sales Analytics', included: true },
        { name: 'Multi-device Syncing', included: true },
        { name: 'Supplier Traceability Logs', included: true },
      ],
    },
  ]

  const faqs = [
    { q: 'Can I change or cancel my plan at any time?', a: 'Yes, upgrade, downgrade, or cancel any time. Cancellations take effect at the end of the billing period.' },
    { q: 'Do I need to sign a long-term contract?', a: 'No. All plans are monthly. No lock-in commitments or setup fees.' },
    { q: 'Do you provide discounts for annual billing?', a: 'Yes — choosing annual billing reduces your monthly fee by 15%.' },
    { q: 'What kind of support is included?', a: 'Starter gets standard email. Professional gets priority chat. Enterprise has a dedicated account director.' },
    { q: 'Do you offer a free trial period?', a: 'Yes — all packages include a 14-day free trial. No card details required up front.' },
    { q: 'Is our compliance data kept secure?', a: 'All logs are encrypted in transit and stored in ISO-certified databases, meeting GDPR and UK safety requirements.' },
  ]

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[320px] md:h-[42vh] min-h-[280px] overflow-hidden bg-[#060b18]">
        <div className="absolute inset-0 select-none">
          <Image src="/hero-3.png" alt="Pricing" fill sizes="100vw" className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b18]/88 via-[#060b18]/55 to-[#060b18]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-20">
          <div className="max-w-2xl animate-in slide-in-from-bottom">
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-blue-300 font-semibold tracking-[0.2em] uppercase text-[10px] px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Pricing Options
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Transparent<br />
              <span className="text-gradient">Pricing Plans</span>
            </h1>
            <p className="text-base text-white/55 font-light">No hidden fees. No unexpected setup costs.</p>
          </div>
        </div>
      </div>

      {/* Billing toggle */}
      <section className="py-10 px-4 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto flex justify-center reveal">
          <div className="inline-flex items-center bg-[#f7f9ff] rounded-xl p-1 border border-border">
            {['monthly', 'annual'].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-6 py-2.5 rounded-lg transition-all text-xs font-bold tracking-wider uppercase ${
                  billingCycle === cycle ? 'bg-white text-[#0f1f5c] shadow-sm' : 'text-[#5a6282]'
                }`}
              >
                {cycle === 'monthly' ? 'Monthly' : <>Annual <span className="text-[#2563eb]">-15%</span></>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto pt-6">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 transition-all duration-300 flex flex-col reveal stagger-${index + 1} ${
                  plan.highlighted
                    ? 'border-[#2563eb] bg-[#0f1f5c] scale-105 relative z-10 shadow-2xl'
                    : 'border-border bg-white hover:border-[#2563eb]/30 hover:shadow-lg'
                }`}
              >
                <div className="p-8 flex-1">
                  {plan.highlighted && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#2563eb] text-white px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-[#0f1f5c]'}`}>{plan.name}</h3>
                  <p className={`text-xs font-light mb-6 leading-relaxed ${plan.highlighted ? 'text-white/50' : 'text-[#5a6282]'}`}>{plan.description}</p>

                  <div className="mb-6 flex items-baseline">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className={`text-4xl md:text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#0f1f5c]'}`}>£{plan.price}</span>
                        <span className={`text-xs font-light ml-1 ${plan.highlighted ? 'text-white/50' : 'text-[#5a6282]'}`}>/month</span>
                      </>
                    ) : (
                      <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#0f1f5c]'}`}>{plan.price}</span>
                    )}
                  </div>

                  <div className={`space-y-3.5 border-t pt-6 ${plan.highlighted ? 'border-white/10' : 'border-border'}`}>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-blue-500/25' : 'bg-[#0f1f5c]/8'}`}>
                            <Check className={`w-3 h-3 ${plan.highlighted ? 'text-blue-300' : 'text-[#0f1f5c]'}`} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <X className={`w-3 h-3 ${plan.highlighted ? 'text-white/25' : 'text-[#5a6282]/40'}`} />
                          </div>
                        )}
                        <span className={`text-xs font-light ${
                          feature.included
                            ? (plan.highlighted ? 'text-white/85' : 'text-[#0f1f5c]')
                            : (plan.highlighted ? 'text-white/30 line-through' : 'text-[#5a6282]/50 line-through')
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-8 border-t ${plan.highlighted ? 'border-white/10' : 'border-border'}`}>
                  <Link
                    href="/contact"
                    className={`w-full py-3 rounded-xl font-semibold transition-all block text-center text-sm ${
                      plan.highlighted
                        ? 'bg-[#2563eb] hover:bg-[#1d4fd8] text-white'
                        : 'border-2 border-[#0f1f5c]/20 text-[#0f1f5c] hover:bg-[#0f1f5c] hover:text-white hover:border-[#0f1f5c]'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included in all */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f9ff] border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Core Value</span>
            <h2 className="text-3xl font-bold text-[#0f1f5c]">Included in all plans</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Secure Cloud Logs Backup', desc: 'Encrypted databases ensure all safety check logs are preserved for EHO officers.' },
              { title: 'Automated Device Syncing', desc: 'Log updates from any active register terminal or handheld device instantly.' },
              { title: 'Regular Module Updates', desc: 'Stay aligned with UK legislative changes automatically, free of extra cost.' },
            ].map((item, index) => (
              <div key={index} className={`p-6 bg-white rounded-2xl border border-border reveal stagger-${index + 1} card-hover`}>
                <div className="w-10 h-10 rounded-xl bg-[#0f1f5c] flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-sm mb-2 text-[#0f1f5c]">{item.title}</h3>
                <p className="text-xs text-[#5a6282] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">FAQ</span>
            <h2 className="text-3xl font-bold text-[#0f1f5c]">Frequently Asked Questions</h2>
            <div className="w-12 h-0.5 bg-[#2563eb] mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className={`reveal stagger-${(index % 2) + 1}`}>
                <h3 className="text-sm font-bold text-[#0f1f5c] mb-2">{faq.q}</h3>
                <p className="text-xs text-[#5a6282] font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-[#0f1f5c] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-15" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to upgrade your restaurant?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto font-light leading-relaxed">Begin your trial and let Potato POS handle safety and operations.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4fd8] text-white px-9 py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all">
            Start 14-day Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </>
  )
}
