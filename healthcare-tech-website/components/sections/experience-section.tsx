/**
 * This file contains the experience section that shows professional history.
 * It displays a timeline of positions with details about each role.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import { forwardRef } from "react"
// This is a React function that allows a component to receive a reference

import { motion } from "framer-motion"
// This imports tools for creating animations

import { ParallaxSection } from "@/components/ui/parallax-section"
// This imports our custom parallax scrolling component

/**
 * Properties for a single timeline item
 */
interface TimelineItemProps {
  // Year or time period
  year: string
  // Job title or position
  title: string
  // Company or organization name
  company: string
  // Brief description of responsibilities
  description: string
  // Which side of the timeline to display on (left or right)
  side: "left" | "right"
  // Whether this is the current position
  current?: boolean
  // How long to wait before starting the animation (in seconds)
  delay?: number
}

/**
 * TimelineItem Component
 *
 * This creates a single item in the experience timeline, showing details
 * about a professional position.
 *
 * @param year - Year or time period
 * @param title - Job title or position
 * @param company - Company or organization name
 * @param description - Brief description of responsibilities
 * @param side - Which side of the timeline to display on (left or right)
 * @param current - Whether this is the current position
 * @param delay - How long to wait before starting the animation
 */
function TimelineItem({ year, title, company, description, side, current = false, delay = 0 }: TimelineItemProps) {
  return (
    <div className={`relative mb-16 ${side === "right" ? "md:ml-auto" : "md:mr-auto"} md:w-[45%] ml-8 md:ml-0`}>
      <motion.div
        initial={{ opacity: 0, x: side === "right" ? 20 : -20 }} // Start invisible and to the side
        whileInView={{ opacity: 1, x: 0 }} // When in view, animate to fully visible at final position
        transition={{ duration: 0.6, delay }} // Animation takes 0.6 seconds and starts after the specified delay
        viewport={{ once: true, margin: "-100px" }} // Only animate once when 100px from entering the viewport
        className="relative"
      >
        {/* Year label */}
        <div className="absolute left-0 md:left-auto md:right-auto md:-translate-x-1/2 -translate-x-[calc(100%+1rem)] top-[-2rem] bg-[#111111] border border-gray-800 text-white font-bold py-1 px-3 rounded-full text-sm">
          {year}
        </div>

        {/* Timeline dot - different color for current position */}
        <div
          className={`absolute left-[-2rem] md:left-auto md:right-auto md:-translate-x-1/2 top-0 h-4 w-4 rounded-full ${
            current ? "bg-[#00ffaa]" : "bg-[#4361ee]"
          } shadow-glow-sm`}
        ></div>

        {/* Content card */}
        <div className="bg-[#111111] border border-gray-800 p-6 rounded-lg shadow-glow mt-6">
          {/* Job title */}
          <h3 className="text-xl font-bold">{title}</h3>

          {/* Company name - different color for current position */}
          <p className={`${current ? "text-[#00ffaa]" : "text-[#4361ee]"} font-medium mb-3`}>{company}</p>

          {/* Job description */}
          <p className="text-gray-400">{description}</p>

          {/* Current position badge - only shown for current position */}
          {current && (
            <div className="mt-4 inline-block bg-[#00ffaa]/10 border border-[#00ffaa]/30 text-[#00ffaa] text-xs py-1 px-2 rounded-full">
              Current Position
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

/**
 * ExperienceSection Component
 *
 * This creates the experience section that shows professional history in a
 * timeline format.
 *
 * @param ref - Reference passed from the parent component
 */
export const ExperienceSection = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <ParallaxSection id="experience" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title with animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ffaa] to-[#4361ee] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line with gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ffaa] to-[#4361ee] opacity-30"></div>

          {/* Current position */}
          <TimelineItem
            year="2022 - Present"
            title="AI Project Lead & Business Analyst"
            company="Demant"
            side="right"
            current={true}
            description="Leading AI initiatives for healthcare technology solutions. Mentoring Agile teams and implementing advanced NLP models for patient care improvement."
            delay={0.1}
          />

          {/* Previous positions */}
          <TimelineItem
            year="2019 - 2022"
            title="Senior Business Analyst"
            company="Healthcare Tech Company"
            side="left"
            description="Developed requirements for EHR systems and implemented predictive analytics solutions."
            delay={0.3}
          />

          <TimelineItem
            year="2017 - 2019"
            title="Business Analyst"
            company="Medical Software Provider"
            side="right"
            description="Collaborated with stakeholders to design and implement healthcare software solutions."
            delay={0.5}
          />
        </div>
      </div>
    </ParallaxSection>
  )
})

// Add a display name for better debugging
ExperienceSection.displayName = "ExperienceSection"
