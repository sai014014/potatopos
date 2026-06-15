'use client'

import Header from '@/components/header'
import FloatingCTA from '@/components/floating-cta'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Check, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 49 : 42,
      description: 'Ideal for independent, single-location bistros and cafes.',
      highlighted: false,
      features: [
        { name: '1 Active Location', included: true },
        { name: 'Digital HACCP Checklists', included: true },
        { name: 'Basic Shift Handovers', included: true },
        { name: 'Mobile Log Access', included: true },
        { name: 'Standard Email Support', included: true },
        { name: 'Shift Sales Analytics', included: false },
        { name: 'Multi-device Syncing', included: false },
        { name: 'Supplier Traceability logs', included: false },
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
        { name: 'Supplier Traceability logs', included: false },
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
        { name: 'Supplier Traceability logs', included: true },
      ],
    },
  ]

  const faqs = [
    {
      q: 'Can I change or cancel my plan at any time?',
      a: 'Yes, you are free to upgrade, downgrade, or cancel your active subscription plan. Cancellations take effect at the end of the billing period.',
    },
    {
      q: 'Do I need to sign a long-term contract?',
      a: 'No, all plans run on a monthly schedule. We do not require lock-in commitments or charge setup fees.',
    },
    {
      q: 'Do you provide discounts for annual billing?',
      a: 'Yes, choosing annual billing reduces your monthly fee by 15%, ideal for budget predictability.',
    },
    {
      q: 'What kind of support is included in my plan?',
      a: 'Starter has standard email support. Professional has priority chat, and Enterprise accounts are allocated a dedicated account director.',
    },
    {
      q: 'Do you offer a free trial period?',
      a: 'Yes, all packages include a 14-day free trial. We do not ask for card details up front.',
    },
    {
      q: 'Is our compliance data kept secure?',
      a: 'All data logs are encrypted in transit and stored in ISO-certified databases, meeting GDPR and UK safety requirements.',
    },
  ]

  return (
    <>
      <Header />
      
      {/* Editorial Image Hero Section */}
      <div className="relative w-full h-[320px] md:h-[45vh] min-h-[280px] overflow-hidden bg-background">
        <div className="absolute inset-0 select-none">
          <Image
            src="/hero-3.png"
            alt="Pricing Hero"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center text-white px-4 max-w-4xl animate-in fade-in slide-in-from-bottom duration-700">
            <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-3">
              Pricing Options
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight">
              Transparent Pricing Plans
            </h1>
            <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              Choose a plan that fits your restaurant scale. No hidden fees or unexpected setup costs.
            </p>
          </div>
        </div>
      </div>

      {/* Billing toggle row with adjusted padding */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="inline-flex items-center bg-secondary/50 rounded-lg p-1 border border-border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-md transition-all text-xs font-bold tracking-wider uppercase ${
                billingCycle === 'monthly'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-md transition-all text-xs font-bold tracking-wider uppercase ${
                billingCycle === 'annual'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground'
              }`}
            >
              Annual <span className="text-accent ml-1 font-extrabold">-15%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan Cards Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl border-2 transition-all duration-300 flex flex-col justify-between animate-in fade-in ${
                  plan.highlighted
                    ? 'border-accent bg-accent/5 shadow-md scale-105 relative z-10'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="p-8">
                  {plan.highlighted && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-accent-foreground px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground font-light mb-6 leading-relaxed">{plan.description}</p>
                  
                  <div className="mb-6 flex items-baseline">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">£{plan.price}</span>
                        <span className="text-muted-foreground text-xs font-light ml-1">/month</span>
                      </>
                    ) : (
                      <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                    )}
                  </div>

                  <div className="space-y-3.5 border-t border-border pt-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <X className="w-3 h-3 text-muted-foreground" />
                          </div>
                        )}
                        <span className={`text-xs font-light ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 border-t border-border/50 bg-secondary/10 rounded-b-xl">
                  <Link
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all block text-center text-xs tracking-wider uppercase ${
                      plan.highlighted
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm'
                        : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
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

      {/* Inclusions Row */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">Core Value</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Included in all plans</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Secure Cloud Logs Backup', description: 'Encrypted databases ensure all safety check logs are preserved for EHO officers.' },
              { title: 'Automated Device Syncing', description: 'Log updates from any active register terminal or handheld device instantly.' },
              { title: 'Regular Module Updates', description: 'Stay aligned with UK legislative changes automatically, free of extra cost.' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border shadow-sm animate-in fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1.5 text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-in fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="text-sm font-bold text-primary mb-2 tracking-wide uppercase">{faq.q}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-24 -mt-24" />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to upgrade your restaurant?
          </h2>
          <p className="text-base text-primary-foreground/90 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Begin your trial and let Potato POS help handle safety and operations.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Start 14-day Free Trial
          </Link>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </>
  )
}
