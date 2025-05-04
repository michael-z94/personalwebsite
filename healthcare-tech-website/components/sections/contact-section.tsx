/**
 * This file contains the contact section that provides ways to get in touch.
 * It includes social media links and a contact form.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import { forwardRef } from "react"
// This is a React function that allows a component to receive a reference

import { Linkedin, Mail } from "lucide-react"
// These are icons used in the contact buttons

import { motion } from "framer-motion"
// This imports tools for creating animations

import { GlowingButton } from "@/components/ui/glowing-button"
// This imports our custom button with glow effect

/**
 * ContactSection Component
 *
 * This creates the contact section that provides ways to get in touch
 * and includes a contact form.
 *
 * @param ref - Reference passed from the parent component
 */
export const ContactSection = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-24 relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00ffaa]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#4361ee]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title with animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Innovate Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ffaa] to-[#4361ee] mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Ready to transform your healthcare technology with AI-driven solutions? Let's connect and discuss how we can
            innovate together.
          </p>
        </motion.div>

        {/* Social media links */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* LinkedIn button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GlowingButton color="#00ffaa" onClick={() => {}}>
              <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
            </GlowingButton>
          </motion.div>

          {/* Email button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlowingButton color="#4361ee" onClick={() => {}}>
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </GlowingButton>
          </motion.div>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-6 shadow-glow">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form className="space-y-4">
              {/* Name field */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Name</label>
                <input
                  type="text"
                  className="w-full p-2 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00ffaa] focus:outline-none text-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Email</label>
                <input
                  type="email"
                  className="w-full p-2 bg-[#0a0a0a] border border-gray-800 rounded-md focus:ring-2 focus:ring-[#00ffaa] focus:outline-none text-white"
                  placeholder="Your email"
                />
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Message</label>
                <textarea
                  className="w-full p-2 bg-[#0a0a0a] border border-gray-800 rounded-md h-32 focus:ring-2 focus:ring-[#00ffaa] focus:outline-none text-white"
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Submit button */}
              <GlowingButton color="#00ffaa" fullWidth onClick={() => {}}>
                Send Message
              </GlowingButton>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

// Add a display name for better debugging
ContactSection.displayName = "ContactSection"
