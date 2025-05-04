/**
 * This file contains the hero section that appears at the top of the website.
 * It's the first thing visitors see and introduces Michał Zdunek.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import { forwardRef } from "react"
// This is a React function that allows a component to receive a reference

import { FileText, Sparkles, User } from "lucide-react"
// These are icons used in the buttons and avatar

import { motion } from "framer-motion"
// This imports tools for creating animations

import { ParallaxSection } from "@/components/ui/parallax-section"
// This imports our custom parallax scrolling component

import { GlowingButton } from "@/components/ui/glowing-button"
// This imports our custom button with glow effect

/**
 * Properties that must be provided to the HeroSection component
 */
interface HeroSectionProps {
  // Function to call when a button is clicked to scroll to a section
  scrollToSection: (sectionId: string) => void
}

/**
 * HeroSection Component
 *
 * This creates the main hero section at the top of the website.
 * It introduces Michał Zdunek and provides buttons to navigate to other sections.
 *
 * @param scrollToSection - Function to scroll to a section when a button is clicked
 * @param ref - Reference passed from the parent component
 */
export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ scrollToSection }, ref) => {
  return (
    <ParallaxSection id="about" ref={ref} className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00ffaa]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#4361ee]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content - Animates in from below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Start invisible and below final position
            animate={{ opacity: 1, y: 0 }} // Animate to fully visible at final position
            transition={{ duration: 0.8, delay: 0.2 }} // Animation takes 0.8 seconds and starts after 0.2 seconds
          >
            {/* Professional title badge */}
            <div className="inline-block px-3 py-1 mb-4 border border-[#00ffaa]/30 rounded-full bg-[#00ffaa]/5 text-[#00ffaa] text-sm">
              Business Analyst & AI Specialist
            </div>

            {/* Name with highlighted last name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Michał <span className="text-[#00ffaa]">Zdunek</span>
            </h1>

            {/* Tagline */}
            <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Transforming Healthcare Technology</h2>

            {/* Brief description */}
            <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
              Focused on delivering innovative AI-driven solutions that enhance healthcare outcomes while ensuring
              compliance and operational efficiency.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Download CV button */}
              <GlowingButton color="#00ffaa" onClick={() => {}}>
                Download CV <FileText className="ml-2 h-4 w-4" />
              </GlowingButton>

              {/* View Projects button - scrolls to the projects section when clicked */}
              <GlowingButton color="#4361ee" variant="outline" onClick={() => scrollToSection("projects")}>
                View Projects <Sparkles className="ml-2 h-4 w-4" />
              </GlowingButton>
            </div>
          </motion.div>

          {/* Avatar - Animates in by scaling up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Start invisible and smaller
            animate={{ opacity: 1, scale: 1 }} // Animate to fully visible at full size
            transition={{ duration: 0.8, delay: 0.4 }} // Animation takes 0.8 seconds and starts after 0.4 seconds
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Pulsing background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ffaa]/20 to-[#4361ee]/20 animate-pulse-slow"></div>

              {/* Avatar circle with placeholder icon */}
              <div className="absolute inset-4 rounded-full border border-[#00ffaa]/30 flex items-center justify-center bg-[#0a0a0a]">
                <User className="h-32 w-32 text-gray-700" />
              </div>

              {/* "Talk to my AI twin" badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#0a0a0a] border border-[#00ffaa]/30 text-[#00ffaa] text-sm py-2 px-4 rounded-full whitespace-nowrap z-10">
                Talk to my AI twin!{" "}
                <span className="inline-block ml-1 h-2 w-2 bg-[#00ffaa] rounded-full animate-pulse"></span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Appears at the bottom of the screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0], // Move down and back up
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY, // Repeat forever
                  duration: 1.5, // Each cycle takes 1.5 seconds
                }}
                className="w-1.5 h-1.5 bg-[#00ffaa] rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
})

// Add a display name for better debugging
HeroSection.displayName = "HeroSection"
