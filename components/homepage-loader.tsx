'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HomepageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    // Check if loader has been shown in this session
    const loaderShown = sessionStorage.getItem('potato-loader-shown')
    
    if (loaderShown) {
      setIsLoading(false)
    } else {
      setShowLoader(true)
      sessionStorage.setItem('potato-loader-shown', 'true')
      
      // Show loader for 2.5 seconds then fade out
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0d3d47] via-[#1a5a67] to-[#0d3d47] flex items-center justify-center"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#c9956e]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#c9956e]/30 rounded-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto bg-[#c9956e] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#c9956e]/50">
                <span className="text-3xl font-bold text-white">🥔</span>
              </div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                Potato
              </h1>
              <p className="text-xl md:text-2xl text-[#c9956e] font-semibold tracking-[0.15em] uppercase">
                POS
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-white/80 mt-6 text-lg"
            >
              Restaurant Operations Made Simple
            </motion.p>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex gap-3 justify-center"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 bg-[#c9956e] rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
