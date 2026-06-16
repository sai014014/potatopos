'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Shield } from 'lucide-react'

const receiptLines = [
  { label: 'Ribeye Steak x2', value: '£56.00', type: 'item' },
  { label: 'Truffle Fries x2', value: '£14.00', type: 'item' },
  { label: 'Côtes du Rhône (btl)', value: '£38.00', type: 'item' },
  { label: 'Crème Brûlée x1', value: '£9.50', type: 'item' },
  { label: '────────────', value: '', type: 'divider' },
  { label: 'Subtotal', value: '£117.50', type: 'sub' },
  { label: 'Service (12.5%)', value: '£14.69', type: 'sub' },
  { label: 'VAT (20%)', value: '£23.50', type: 'sub' },
  { label: '────────────', value: '', type: 'divider' },
  { label: 'TOTAL', value: '£155.69', type: 'total' },
  { label: '────────────', value: '', type: 'divider' },
  { label: '✓ HACCP: All checks passed', value: '', type: 'tag' },
  { label: '✓ Allergen log: Verified', value: '', type: 'tag' },
  { label: '✓ Temp: 68.4°C logged', value: '', type: 'tag' },
  { label: '', value: '', type: 'spacer' },
  { label: 'Thank you for dining with us', value: '', type: 'footer' },
  { label: 'potatopos.com', value: '', type: 'footer' },
]

export default function ReceiptSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const start = windowH * 0.8
      const end = -rect.height * 0.3
      const total = start - end
      const p = Math.min(1, Math.max(0, (start - rect.top) / total))
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visibleCount = Math.round(progress * receiptLines.length)

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-40 bg-[#0f1f5c] overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563eb]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <span className="inline-flex items-center gap-2 text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              <span className="w-8 h-px bg-blue-400" />
              Live Transaction Engine
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Every order.<br />
              <span className="text-gradient">Every check. Logged.</span>
            </h2>
            <p className="text-white/55 font-light leading-relaxed mb-8 text-base">
              Potato POS captures your entire service flow — order to receipt — while recording HACCP compliance data, allergen checks, and temperature logs in the background.
            </p>
            <ul className="space-y-3 mb-10">
              {['Real-time HACCP data attached to every transaction', 'Allergen verification at point of sale', 'Temperature logs auto-captured per shift', 'EHO-ready report generated at close of service'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-blue-400" size={10} />
                  </div>
                  <span className="text-white/70 text-sm font-light">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/features" className="inline-flex items-center gap-2 text-blue-300 font-semibold text-sm hover:text-white transition-colors group">
              Explore All Features <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex justify-center items-end reveal-right">
            <div className="relative">
              <div className="relative w-[180px] md:w-[200px] mx-auto device-shadow" style={{ zIndex: 10 }}>
                <div className="w-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[22px] border border-white/10 overflow-hidden" style={{ minHeight: '340px' }}>
                  <div className="bg-[#111] mx-2 mt-2 rounded-2xl overflow-hidden border border-white/5" style={{ height: '200px' }}>
                    <div className="bg-[#0f1f5c] h-full p-3 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/80 text-[9px] font-semibold">TABLE 7</span>
                        <span className="bg-green-500/20 text-green-300 text-[8px] px-1.5 py-0.5 rounded font-semibold">OPEN</span>
                      </div>
                      <div className="space-y-1 flex-1">
                        {[['Ribeye x2', '£56'], ['Truffle Fries x2', '£14'], ['Wine (btl)', '£38']].map(([name, price], i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-white/50 text-[8px]">{name}</span>
                            <span className="text-white/80 text-[8px] font-semibold">{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-white/10 pt-1.5 mt-auto">
                        <div className="flex justify-between">
                          <span className="text-blue-300 text-[9px] font-bold">TOTAL</span>
                          <span className="text-white text-[9px] font-bold">£155.69</span>
                        </div>
                        <div className="mt-1.5 bg-blue-500 rounded py-1 text-center">
                          <span className="text-white text-[8px] font-bold">TAP TO PAY</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 px-4 py-2">
                    {['#ef4444', '#f59e0b', '#22c55e'].map((color, i) => (
                      <div key={i} className="flex-1 h-5 rounded" style={{ backgroundColor: color + '40', border: `1px solid ${color}30` }} />
                    ))}
                  </div>

                  {/* Printer slot with receipt */}
                  <div className="mx-3 bg-black/40 rounded h-3 border border-white/5 mb-2 flex items-center justify-center overflow-visible relative">
                    <div
                      className="absolute w-[calc(100%-8px)] bg-[#fffef8] rounded-sm overflow-hidden transition-all duration-500"
                      style={{ bottom: '100%', height: progress > 0.05 ? `${Math.min(progress * 260, 260)}px` : '0px' }}
                    >
                      <div className="pt-2 pb-1 px-2 font-mono">
                        <div className="text-center mb-1">
                          <p className="font-bold text-[6px] text-[#0f1f5c]">POTATO POS</p>
                          <p className="text-[5px] text-gray-500">The Meridian, London</p>
                          <div className="border-t border-dashed border-gray-300 my-1" />
                        </div>
                        {receiptLines.slice(0, visibleCount).map((line, i) => (
                          <div key={i}>
                            {line.type === 'divider' ? (
                              <div className="w-full border-t border-dashed border-gray-300 my-0.5" />
                            ) : line.type === 'spacer' ? (
                              <div className="h-1" />
                            ) : (
                              <div className="flex justify-between">
                                <span className={`text-[5px] ${line.type === 'total' ? 'text-[#0f1f5c] font-bold' : line.type === 'tag' ? 'text-green-700' : line.type === 'footer' ? 'text-gray-400 w-full text-center' : 'text-gray-600'}`}>{line.label}</span>
                                {line.value && <span className={`text-[5px] font-semibold ${line.type === 'total' ? 'text-[#0f1f5c]' : 'text-gray-500'}`}>{line.value}</span>}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full h-px bg-white/20" />
                  </div>

                  <div className="text-center pb-3">
                    <p className="text-white/30 text-[8px] tracking-widest uppercase">Potato POS</p>
                  </div>
                </div>
                <div className="w-12 h-3 bg-gradient-to-b from-[#1a1a1a] to-[#111] mx-auto rounded-b-xl border border-white/5" />
                <div className="w-20 h-2 bg-[#0d0d0d] mx-auto rounded-b-xl" />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 md:-left-16 top-12 bg-white rounded-2xl shadow-xl border border-border p-3 w-32 float" style={{ animationDelay: '0s' }}>
                <p className="text-[10px] text-[#5a6282] font-medium">Today&apos;s Revenue</p>
                <p className="text-lg font-bold text-[#0f1f5c]">£4,821</p>
                <span className="text-[9px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">+12.4% ↑</span>
              </div>

              <div className="absolute -right-4 md:-right-16 top-20 bg-white rounded-2xl shadow-xl border border-border p-3 w-28 float" style={{ animationDelay: '1.5s' }}>
                <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center mb-1.5">
                  <Shield size={11} className="text-green-600" />
                </div>
                <p className="text-[10px] font-bold text-[#0f1f5c]">EHO Ready</p>
                <p className="text-[9px] text-green-600 font-medium">All checks ✓</p>
              </div>

              <div className="absolute -left-4 md:-left-14 bottom-16 bg-[#0f1f5c] rounded-2xl shadow-xl p-3 w-28 float" style={{ animationDelay: '0.8s' }}>
                <p className="text-[9px] text-blue-300 font-medium">Temperature</p>
                <p className="text-white font-bold text-base">3.2°C</p>
                <p className="text-[8px] text-blue-400">Walk-in · Normal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
