/**
 * This file contains the skills section that displays professional expertise.
 * It shows skills organized by category with animated progress bars.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity
import type React from "react"

import { forwardRef } from "react"
// This is a React function that allows a component to receive a reference

import { Code, FileText, Heart, Sparkles } from "lucide-react"
// These are icons used in the skill categories

import { motion } from "framer-motion"
// This imports tools for creating animations

/**
 * Properties for a single skill
 */
interface Skill {
  // Name of the skill
  name: string
  // Proficiency level (0-100)
  value: number
}

/**
 * Properties for a skill category
 */
interface SkillCategoryProps {
  // Icon representing the category
  icon: React.ReactNode
  // Category title
  title: string
  // Array of skills in this category
  skills: Skill[]
  // How long to wait before starting the animation (in seconds)
  delay?: number
}

/**
 * SkillCategory Component
 *
 * This creates a card displaying a category of related skills with
 * animated progress bars showing proficiency levels.
 *
 * @param icon - Icon representing the category
 * @param title - Category title
 * @param skills - Array of skills in this category
 * @param delay - How long to wait before starting the animation
 */
function SkillCategory({ icon, title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
      whileInView={{ opacity: 1, y: 0 }} // When in view, animate to fully visible at final position
      transition={{ duration: 0.6, delay }} // Animation takes 0.6 seconds and starts after the specified delay
      viewport={{ once: true, margin: "-100px" }} // Only animate once when 100px from entering the viewport
      className="bg-[#111111] border border-gray-800 p-6 rounded-lg shadow-glow"
    >
      {/* Category header with icon */}
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-[#0a0a0a] border border-gray-800">{icon}</div>
        <h3 className="text-xl font-bold ml-3">{title}</h3>
      </div>

      {/* List of skills with progress bars */}
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            {/* Skill name and percentage */}
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <span className={`${skill.value > 85 ? "text-[#00ffaa]" : "text-[#4361ee]"} font-bold`}>
                {skill.value}%
              </span>
            </div>

            {/* Progress bar background */}
            <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
              {/* Animated progress bar fill */}
              <motion.div
                initial={{ width: 0 }} // Start with zero width
                whileInView={{ width: `${skill.value}%` }} // Animate to the skill value percentage
                transition={{ duration: 1, delay: 0.1 * index }} // Animation takes 1 second with staggered delays
                viewport={{ once: true }} // Only animate once
                className={`h-full ${skill.value > 85 ? "bg-[#00ffaa]" : "bg-[#4361ee]"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/**
 * SkillsSection Component
 *
 * This creates the skills section that displays professional expertise
 * organized by category with animated progress bars.
 *
 * @param ref - Reference passed from the parent component
 */
export const SkillsSection = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <section id="skills" ref={ref} className="py-24 relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[#4361ee]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#00ffaa]/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ffaa] to-[#4361ee] mx-auto"></div>
        </motion.div>

        {/* Grid of skill categories */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Business Analysis skills */}
          <SkillCategory
            icon={<FileText className="h-8 w-8 text-[#00ffaa]" />}
            title="Business Analysis"
            skills={[
              { name: "Agile Methodologies", value: 95 },
              { name: "UML & Process Modeling", value: 90 },
              { name: "Requirements Engineering", value: 85 },
              { name: "Stakeholder Management", value: 90 },
            ]}
            delay={0.1}
          />

          {/* AI & Machine Learning skills */}
          <SkillCategory
            icon={<Sparkles className="h-8 w-8 text-[#4361ee]" />}
            title="AI & Machine Learning"
            skills={[
              { name: "Natural Language Processing", value: 90 },
              { name: "Large Language Models", value: 85 },
              { name: "Predictive Analytics", value: 80 },
              { name: "AI Implementation", value: 85 },
            ]}
            delay={0.3}
          />

          {/* Healthcare Technology skills */}
          <SkillCategory
            icon={<Heart className="h-8 w-8 text-[#00ffaa]" />}
            title="Healthcare Technology"
            skills={[
              { name: "Electronic Health Records", value: 90 },
              { name: "HL7 & FHIR Standards", value: 85 },
              { name: "Healthcare Compliance", value: 90 },
              { name: "Medical Data Analysis", value: 80 },
            ]}
            delay={0.5}
          />

          {/* Tools & Technologies skills */}
          <SkillCategory
            icon={<Code className="h-8 w-8 text-[#4361ee]" />}
            title="Tools & Technologies"
            skills={[
              { name: "Python & Data Science", value: 85 },
              { name: "SQL & Database Design", value: 90 },
              { name: "JIRA & Confluence", value: 95 },
              { name: "Power BI & Tableau", value: 80 },
            ]}
            delay={0.7}
          />
        </div>
      </div>
    </section>
  )
})

// Add a display name for better debugging
SkillsSection.displayName = "SkillsSection"
