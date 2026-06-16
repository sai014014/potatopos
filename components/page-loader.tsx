'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('potato-pos-loaded')
    if (hasLoaded) {
      setVisible(false)
      return
    }

    const leaveTimer = setTimeout(() => {
      setLeaving(true)
      sessionStorage.setItem('potato-pos-loaded', '1')
    }, 2400)

    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f1f5c] ${leaving ? 'loader-out' : ''}`}
    >
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-dot opacity-20" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-600/20 to-blue-400/10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-8 loader-logo">
        {/* Brand mark */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="13" rx="7" ry="5.5" fill="white" fillOpacity="0.95"/>
              <path d="M7 10 Q8 5 12 5 Q16 5 17 10" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="9.5" cy="12.5" r="1" fill="#2563eb"/>
              <circle cx="14.5" cy="12.5" r="1" fill="#2563eb"/>
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-2xl tracking-tight leading-none">Potato</p>
            <p className="text-blue-300 text-xs font-semibold tracking-[0.25em] uppercase mt-0.5">POS System</p>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full loader-bar" />
        </div>

        {/* Loading dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-300/60"
              style={{ animation: `dot-bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes dot-bounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.4; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
