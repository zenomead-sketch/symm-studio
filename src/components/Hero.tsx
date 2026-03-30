"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-70" />
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob" />
      <div className="absolute top-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-20 -z-10 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
            Digital Solutions for Tampa Bay & Beyond
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Web Development, Content Strategy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We build premium digital experiences and automated workflows to help your business grow. 
            From custom web apps to AI-driven strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 hover:border-slate-300"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
