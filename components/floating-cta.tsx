'use client'

import { useState } from 'react'
import { MessageCircle, Mail, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <a
          href="https://wa.me/447700000000?text=Hi%20Potato%20POS%2C%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all duration-200 font-semibold text-sm animate-in fade-in slide-in-from-bottom"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      )}

      {isOpen && (
        <a
          href="mailto:info@potatopos.com?subject=Inquiry%20about%20Potato%20POS"
          className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-3 rounded-full shadow-xl hover:bg-[#1d4fd8] transition-all duration-200 font-semibold text-sm animate-in fade-in slide-in-from-bottom"
        >
          <Mail size={18} />
          <span className="hidden sm:inline">Email</span>
        </a>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-200 font-semibold ${
          isOpen
            ? 'bg-[#080d1f] text-white rotate-180'
            : 'bg-[#0f1f5c] text-white hover:bg-[#162770] hover:shadow-2xl hover:-translate-y-0.5'
        }`}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
