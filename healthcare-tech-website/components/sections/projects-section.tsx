/**
 * This file contains the projects section that showcases featured work.
 * It displays project cards with details and metrics.
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
 * Properties for a project metric
 */
interface Metric {
  // Name of the metric
  label: string
  // Value of the metric
  value: string
}

/**
 * Properties for a project card
 */
interface ProjectCardProps {
  // Project title
  title: string
  // Project description
  description: string
  // Array of tags/technologies used
  tags: string[]
  // Key performance metrics
  metrics: Metric[]
  // How long to wait before starting the animation (in seconds)
  delay?: number
  // Primary color for the metrics (in hex format, like "#00ffaa")
  color?: string
}

/**
 * ProjectCard Component
 *
 * This creates a card displaying details about a project including description,
 * technologies used, and key performance metrics.
 *
 * @param title - Project title
 * @param description - Project description
 * @param tags - Array of tags/technologies used
 * @param metrics - Key performance metrics
 * @param delay - How long to wait before starting the animation
 * @param color - Primary color for the metrics
 */
function ProjectCard({ title, description, tags, metrics, delay = 0, color = "#00ffaa" }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
      whileInView={{ opacity: 1, y: 0 }} // When in view, animate to fully visible at final position
      transition={{ duration: 0.6, delay }} // Animation takes 0.6 seconds and starts after the specified delay
      viewport={{ once: true, margin: "-100px" }} // Only animate once when 100px from entering the viewport
      whileHover={{ y: -5, transition: { duration: 0.2 } }} // Lift up slightly when hovered
      className="bg-[#111111] border border-gray-800 p-6 rounded-lg shadow-glow"
    >
      {/* Project title */}
      <h3 className="text-xl font-bold mb-3">{title}</h3>

      {/* Project description */}
      <p className="text-gray-400 mb-4">{description}</p>

      {/* Tags/technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#0a0a0a] border border-gray-800 text-gray-300 text-xs py-1 px-2 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Key metrics section */}
      <div className="border-t border-gray-800 pt-4 mt-4">
        <h4 className="text-sm font-bold mb-4 text-gray-500 uppercase">Key Metrics</h4>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              {/* Metric value with custom color */}
              <p className="text-2xl font-bold" style={{ color }}>
                {metric.value}
              </p>
              {/* Metric label */}
              <p className="text-sm text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * ProjectsSection Component
 *
 * This creates the projects section that showcases featured work with
 * details and metrics.
 *
 * @param ref - Reference passed from the parent component
 */
export const ProjectsSection = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <ParallaxSection id="projects" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title with animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ffaa] to-[#4361ee] mx-auto"></div>
        </motion.div>

        {/* Grid of project cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Healthcare AI Chat project */}
          <ProjectCard
            title="Healthcare AI Chat Overhaul"
            description="Implemented advanced NLP models to improve patient support chatbot accuracy from 70% to 95%, resulting in higher patient satisfaction and reduced support costs."
            tags={["NLP", "Healthcare", "AI Implementation"]}
            metrics={[
              { label: "Accuracy Improvement", value: "95%" },
              { label: "Support Ticket Reduction", value: "40%" },
            ]}
            delay={0.1}
            color="#00ffaa"
          />

          {/* Predictive Analytics project */}
          <ProjectCard
            title="Predictive Analytics for Patient Care"
            description="Developed a predictive analytics system to identify high-risk patients, enabling proactive care interventions and reducing hospital readmissions."
            tags={["Predictive Analytics", "Patient Care", "Data Science"]}
            metrics={[
              { label: "Readmission Reduction", value: "25%" },
              { label: "Early Intervention Rate", value: "60%" },
            ]}
            delay={0.3}
            color="#4361ee"
          />
        </div>
      </div>
    </ParallaxSection>
  )
})

// Add a display name for better debugging
ProjectsSection.displayName = "ProjectsSection"
