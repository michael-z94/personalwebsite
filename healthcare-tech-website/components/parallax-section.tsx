"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Parallax Section Component
 *
 * Creates a section with parallax scrolling effect
 *
 * @param id - The section ID for navigation
 * @param className - Additional CSS classes
 * @param children - The content of the section
 */
export const ParallaxSection = forwardRef<HTMLElement, { id: string; className?: string; children: React.ReactNode }>(
  ({ id, className = "", children }, ref) => {
    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

    return (
      <section id={id} ref={ref} className={`relative ${className}`}>
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          {/* Parallax background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ffaa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4361ee]/5 rounded-full blur-3xl"></div>
        </motion.div>
        {children}
      </section>
    )
  },
)

ParallaxSection.displayName = "ParallaxSection"
