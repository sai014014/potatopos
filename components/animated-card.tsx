'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  hover?: boolean
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = '',
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(201, 149, 110, 0.15)' } : {}}
      viewport={{ once: true, margin: '50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
