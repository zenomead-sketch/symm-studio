"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We are a dynamic duo based in St. Petersburg, Florida, dedicated to transforming businesses through digital innovation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8 text-blue-600" />,
              title: "Local Roots",
              description: "Two guys from St. Pete, happily building for the Tampa Bay area and surrounding communities.",
            },
            {
              icon: <Zap className="w-8 h-8 text-indigo-600" />,
              title: "Modern Solutions",
              description: "Leveraging the latest in web technology and AI automation to give you a competitive edge.",
            },
            {
              icon: <MapPin className="w-8 h-8 text-sky-600" />,
              title: "Community Focused",
              description: "We understand the local market and are committed to helping our neighbors succeed online.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 bg-white rounded-xl inline-block shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
