'use client'

import { useState } from 'react'
import { MessageCircle, Mail, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      {isOpen && (
        <a
          href="https://wa.me/447700000000?text=Hi%20Potato%20POS%2C%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 font-semibold animate-in fade-in slide-in-from-bottom"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      )}

      {/* Email Button */}
      {isOpen && (
        <a
          href="mailto:info@potatopos.com?subject=Inquiry%20about%20Potato%20POS"
          className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 font-semibold animate-in fade-in slide-in-from-bottom"
        >
          <Mail size={20} />
          <span className="hidden sm:inline">Email</span>
        </a>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 font-semibold ${
          isOpen
            ? 'bg-foreground text-background'
            : 'bg-primary text-primary-foreground hover:shadow-xl'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
