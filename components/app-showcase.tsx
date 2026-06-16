'use client'

import { motion } from 'framer-motion'
import AnimatedCard from './animated-card'

interface AppScreenMockup {
  id: string
  title: string
  description: string
  device: 'terminal' | 'tablet' | 'phone'
  features: string[]
  color: 'primary' | 'accent'
}

export default function AppShowcase() {
  const screens: AppScreenMockup[] = [
    {
      id: 'dashboard',
      title: 'Dashboard & Analytics',
      description: 'Real-time business intelligence at a glance',
      device: 'terminal',
      features: ['Live Sales Metrics', 'Staff Performance', 'Kitchen Status'],
      color: 'primary',
    },
    {
      id: 'compliance',
      title: 'Compliance Checklist',
      description: 'Automated food safety documentation',
      device: 'tablet',
      features: ['Temperature Logs', 'EHO Reports', 'Task Management'],
      color: 'accent',
    },
    {
      id: 'inventory',
      title: 'Inventory Management',
      description: 'Track stock and supplier audits',
      device: 'phone',
      features: ['Stock Levels', 'Batch Tracking', 'Expiry Alerts'],
      color: 'primary',
    },
    {
      id: 'transactions',
      title: 'POS Transactions',
      description: 'Fast & secure payment processing',
      device: 'terminal',
      features: ['Quick Checkout', 'Multiple Payments', 'Offline Mode'],
      color: 'accent',
    },
    {
      id: 'team',
      title: 'Team Collaboration',
      description: 'Kitchen to floor communication',
      device: 'tablet',
      features: ['Live Messaging', 'Digital Handovers', 'Shift Notes'],
      color: 'primary',
    },
  ]

  const getDeviceFrame = (device: string) => {
    switch (device) {
      case 'phone':
        return 'w-32 h-64'
      case 'tablet':
        return 'w-48 h-40'
      default:
        return 'w-56 h-40'
    }
  }

  const getDeviceLabel = (device: string) => {
    switch (device) {
      case 'phone':
        return 'Mobile POS'
      case 'tablet':
        return 'Tablet Interface'
      default:
        return 'Terminal Screen'
    }
  }

  return (
    <section className="w-full py-24 md:py-32 bg-secondary/30 border-t border-b border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '50px' }}
          className="text-center mb-20"
        >
          <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
            Multi-Device Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            App Interface Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamless experience across all devices - from terminal to mobile
          </p>
        </motion.div>

        {/* Screens Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 auto-rows-auto">
          {screens.map((screen, index) => (
            <AnimatedCard
              key={screen.id}
              delay={index * 0.1}
              className="h-full"
              hover
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 h-full flex flex-col border border-border hover:border-accent/50 transition-colors">
                {/* Device mockup */}
                <div className="mb-6 flex justify-center">
                  <div className={`${getDeviceFrame(screen.device)} bg-gradient-to-br from-slate-900 to-black rounded-2xl shadow-xl border-4 border-slate-700 flex flex-col items-center justify-center p-3 relative`}>
                    {/* Screen content */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-lg flex flex-col items-center justify-center p-3">
                      <div className={`text-sm font-bold ${
                        screen.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}>
                        {screen.title.split(' ')[0]}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">Screen</div>
                    </div>

                    {/* Camera notch for phones */}
                    {screen.device === 'phone' && (
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-slate-900 rounded-b-2xl border-2 border-slate-700" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{screen.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{screen.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {screen.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          screen.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        }`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Device label */}
                <div className={`mt-6 pt-4 border-t border-border text-xs font-semibold ${
                  screen.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {getDeviceLabel(screen.device)}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            All screens sync in real-time. All changes reflect instantly across every device.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-accent to-accent/85 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5">
            Request Live Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}
