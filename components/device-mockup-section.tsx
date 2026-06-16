'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function DeviceMockupSection() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  })

  // Receipt scroll-triggered animation
  const receiptY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 200])
  const receiptOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="w-full py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '50px' }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Premium Hardware Integration
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Sunmi V3 Plus Terminal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade 8-inch touch terminal with integrated receipt printing and real-time synchronization
          </p>
        </motion.div>

        {/* Device showcase with receipt animation */}
        <div ref={containerRef} className="relative w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Device Image/Mock */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '50px' }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Device frame - simplified representation */}
                <div className="relative aspect-square bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl shadow-2xl border-4 border-slate-700 overflow-hidden">
                  {/* Screen content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex flex-col items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-2xl font-bold text-slate-800 mb-2">Sunmi V3 Plus</div>
                      <div className="text-sm text-slate-600">Enterprise POS Terminal</div>
                      <div className="mt-4 w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-4xl font-bold">
                        PoS
                      </div>
                      <div className="mt-4 text-xs text-slate-500">Ready to process</div>
                    </div>
                  </div>

                  {/* Home button */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center text-slate-400">
                    ●
                  </div>
                </div>

                {/* Receipt printing animation */}
                <motion.div
                  style={{
                    y: receiptY,
                    opacity: receiptOpacity,
                  }}
                  className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-40 bg-white rounded-lg shadow-xl border border-slate-200"
                >
                  <div className="p-3 space-y-2 text-xs text-slate-800">
                    <div className="text-center font-bold">POTATO POS</div>
                    <div className="text-center text-slate-600">Receipt</div>
                    <div className="border-t border-slate-300 pt-2">
                      <div className="flex justify-between mb-1">
                        <span>Item</span>
                        <span>£10.50</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Item</span>
                        <span>£8.75</span>
                      </div>
                    </div>
                    <div className="border-t border-slate-300 pt-2 font-bold flex justify-between">
                      <span>Total:</span>
                      <span>£19.25</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Features & Description */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '50px' }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Powerful POS at Your Fingertips
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Sunmi V3 Plus is engineered for high-volume restaurants. With an 8-inch capacitive display, integrated thermal receipt printer, and lightning-fast transaction processing, it&apos;s the backbone of modern hospitality.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: '8-inch Touch Display', desc: '1280 x 800 HD screen' },
                  { label: 'Receipt Printer', desc: '80mm thermal printer' },
                  { label: 'Quick Processing', desc: '1.4GHz Quad-core CPU' },
                  { label: 'Secure Payments', desc: 'PCI-DSS 3.2 compliant' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors"
                  >
                    <div className="font-semibold text-foreground text-sm">{feature.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{feature.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/85 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
