/**
 * This file contains a component that creates a parallax scrolling effect.
 * It makes background elements move at a different speed than the content as you scroll.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import type React from "react"
// This imports React types for better code checking

import { forwardRef } from "react"
// This is a React function that allows a component to receive a reference

import { motion, useScroll, useTransform } from "framer-motion"
// This imports tools for creating animations and scroll effects

/**
 * Properties that must be provided to the ParallaxSection component
 */
interface ParallaxSectionProps {
  // The unique ID for this section (used for navigation)
  id: string
  // Additional CSS classes to apply
  className?: string
  // The content to display inside the section
  children: React.ReactNode
}

/**
 * ParallaxSection Component
 *
 * This creates a section with a parallax scrolling effect, where background
 * elements move at a different speed than the content as you scroll.
 *
 * @param id - The section ID for navigation
 * @param className - Additional CSS classes
 * @param children - The content of the section
 * @param ref - Reference passed from the parent component
 */
export const ParallaxSection = forwardRef<HTMLElement, ParallaxSectionProps>(
  ({ id, className = "", children }, ref) => {
    // Track the scroll progress of this section
    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "end start"], // Start tracking when the section enters the viewport and stop when it leaves
    })

    // Transform the scroll progress into vertical movement values
    // As scrollYProgress goes from 0 to 1, y will go from 50px to -50px
    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    // Transform the scroll progress into opacity values
    // The section will fade in as it enters the viewport, stay fully visible in the middle,
    // and fade out as it leaves
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

    return (
      <section id={id} ref={ref} className={`relative ${className}`}>
        {/* Background elements that move with parallax effect */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          {/* Blurred circles in the background */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ffaa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4361ee]/5 rounded-full blur-3xl"></div>
        </motion.div>
        {/* The actual content of the section */}
        {children}
      </section>
    )
  },
)

// Add a display name for better debugging
ParallaxSection.displayName = "ParallaxSection"
