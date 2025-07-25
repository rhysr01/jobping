'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Sparkles, Zap, Target } from 'lucide-react';
import PricingSelector from './priceselector';

export default function Home() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms analyze your profile and preferences to find perfect job matches daily.',
      tier: 'SMART',
      icon: Sparkles
    },
    {
      title: 'Graduate-Focused',
      description: 'Curated opportunities specifically for ambitious graduates entering the job market.',
      tier: 'TARGETED',
      icon: Target
    },
    {
      title: 'Zero Job Boards',
      description: 'Skip the endless scrolling. We bring the best opportunities directly to your inbox.',
      tier: 'EFFICIENT',
      icon: Zap
    }
  ];

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            const tallyWindow = window as Window & { 
              Tally?: { loadEmbeds: () => void } 
            };
            tallyWindow.Tally?.loadEmbeds();
          }
        }}
      />

      <div className="min-h-screen overflow-x-hidden relative">
        {/* Cursor follower */}
        <div 
          className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.1s ease-out'
          }}
        />

        {/* Animated Grid Background */}
        <div className="fixed inset-0 -z-20 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite'
          }} />
        </div>

        {/* Enhanced Floating Orbs */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 120, -50, 0],
              y: [0, -80, 40, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 40%, transparent 70%)'
            }}
          />
          <motion.div
            animate={{ 
              x: [0, -100, 80, 0], 
              y: [0, 80, -60, 0],
              scale: [1, 0.8, 1.3, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[140px]"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 40%, transparent 70%)'
            }}
          />
          <motion.div
            animate={{ 
              x: [0, 60, -40, 0], 
              y: [0, -40, 60, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)'
            }}
          />
        </div>

        {/* Enhanced Noise texture overlay */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }} />

        {/* Navigation */}
        <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <GraduationCap className="w-7 h-7 text-gradient animate-pulse-glow" strokeWidth={1.5} />
            <span className="premium-text text-xl font-semibold tracking-tight">JobPingAI</span>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="nav-button magnetic-button"
          >
            Get Started
          </motion.button>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative">
          {/* Logo + Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <GraduationCap className="w-10 h-10 text-gradient animate-pulse-glow animate-float" strokeWidth={1.5} />
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold hero-title tracking-tight">
              JobPingAI
            </h1>
          </motion.div>

          {/* Catchphrase */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-accent text-xl md:text-2xl font-light mb-12 max-w-2xl italic leading-relaxed"
          >
            AI-powered job discovery, built for ambitious graduates who deserve better than endless scrolling.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-button magnetic-button animate-gradient premium-glow"
          >
            Start Free Trial
          </motion.button>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50"
            />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-40"
            />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6 bg-[#0A0A0A] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose JobPingAI?
            </h2>
            <p className="text-gray-300 text-lg font-light">
              Built for students by students. Powered by AI. Delivered with simplicity.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-transparent backdrop-blur-md p-8 text-left transition-all duration-300 group hover:border-gray-600/60 hover:bg-gradient-to-br hover:from-gray-700/40 hover:via-gray-800/30 hover:to-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20"
                >
                  <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gray-700/40 border border-gray-600/50">
                      <IconComponent className="w-7 h-7 text-gray-200" strokeWidth={1.5} />
                    </div>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                  <span className="inline-block text-xs uppercase tracking-widest text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50 font-semibold">
                    {item.tier}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Pricing Selector */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold hero-title mb-8"
            >
              Choose Your Plan
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-slate-300 text-lg md:text-xl font-light mb-12 leading-relaxed"
            >
              Select the plan that best fits your needs and budget.
            </motion.p>
            <PricingSelector onSelect={(plan) => console.log('Selected plan:', plan)} />
          </div>
        </section>

        {/* Signup Section */}
        <section id="signup" className="py-40 px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-transparent backdrop-blur-xl border-2 border-gray-600/50 rounded-3xl p-12 shadow-2xl shadow-gray-900/30">
              <h2 className="text-5xl font-black text-white mb-6 text-center">
                Ready to Get Started?
              </h2>
              <p className="text-gray-200 text-xl text-center mb-10 font-light leading-relaxed">
                Join thousands of ambitious graduates finding their dream jobs with AI-powered precision.
              </p>
              
              <iframe
                src="https://tally.so/r/mJEqx4?alignLeft=1&transparentBackground=1&hideTitle=1"
                className="w-full h-[600px] rounded-2xl border border-gray-700/50"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-8 border-t-2 border-gray-700/50 text-center text-gray-300 text-base font-medium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2025 JobPingAI. All rights reserved. · 
            <a href="/terms" className="hover:text-white transition-colors ml-1 font-semibold">Terms</a> · 
            <a href="/privacy" className="hover:text-white transition-colors ml-1 font-semibold">Privacy</a>
          </motion.div>
        </footer>
      </div>
    </>
  );
}
