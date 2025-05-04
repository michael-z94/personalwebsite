/**
 * This file contains the achievements section that showcases key professional accomplishments.
 * It displays statistics with animated counters.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity
import type React from "react"

import { forwardRef } from "react"
// This is a React function that allows a component to receive a reference

import { MessageSquare, Zap } from "lucide-react"
// These are icons used in the achievement cards

import { motion } from "framer-motion"
// This imports tools for creating animations

import { Users } from "@/components/icons/users"
// This imports our custom users icon

import { CountUp } from "@/components/ui/count-up"
// This imports our animated counter component

/**
 * Properties for a single achievement card
 */
interface AchievementCardProps {
  // Icon to display at the top of the card
  icon: React.ReactNode
  // Title of the achievement
  title: string
  // Numerical value of the achievement
  value: number
  // Brief description of the achievement
  description: string
  // Text to display after the number (like "%" or "+")
  suffix?: string
  // How long to wait before starting the animation (in seconds)
  delay?: number
}

/**
 * AchievementCard Component
 *
 * This creates a single card displaying a professional achievement with an
 * animated counter.
 *
 * @param icon - Icon to display at the top of the card
 * @param title - Title of the achievement
 * @param value - Numerical value of the achievement
 * @param description - Brief description of the achievement
 * @param suffix - Text to display after the number
 * @param delay - How long to wait before starting the animation
 */
function AchievementCard({ icon, title, value, description, suffix = "%", delay = 0 }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
      whileInView={{ opacity: 1, y: 0 }} // When in view, animate to fully visible at final position
      transition={{ duration: 0.6, delay }} // Animation takes 0.6 seconds and starts after the specified delay
      viewport={{ once: true, margin: "-100px" }} // Only animate once when 100px from entering the viewport
      whileHover={{ y: -5, transition: { duration: 0.2 } }} // Lift up slightly when hovered
      className="bg-[#111111] border border-gray-800 p-6 rounded-lg shadow-glow"
    >
      {/* Icon at the top */}
      <div className="flex justify-center mb-6">
        <div className="p-3 rounded-full bg-[#0a0a0a] border border-gray-800">{icon}</div>
      </div>

      {/* Achievement title */}
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>

      {/* Animated counter */}
      <div className="text-center mb-4">
        <CountUp end={value} suffix={suffix} />
      </div>

      {/* Achievement description */}
      <p className="text-gray-400 text-center">{description}</p>
    </motion.div>
  )
}

/**
 * AchievementsSection Component
 *
 * This creates the achievements section that displays key professional accomplishments
 * with animated counters.
 *
 * @param ref - Reference passed from the parent component
 */
export const AchievementsSection = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <section id="achievements" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#4361ee]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#00ffaa]/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ffaa] to-[#4361ee] mx-auto"></div>
        </motion.div>

        {/* Grid of achievement cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Chat Accuracy achievement */}
          <AchievementCard
            icon={<MessageSquare className="h-12 w-12 text-[#00ffaa]" />}
            title="AI Chat Accuracy"
            value={95}
            description="Improved healthcare chatbot accuracy through advanced NLP models"
            delay={0.1}
          />

          {/* Cost Reduction achievement */}
          <AchievementCard
            icon={<Zap className="h-12 w-12 text-[#4361ee]" />}
            title="Cost Reduction"
            value={30}
            description="Reduced operational costs through AI-powered process automation"
            delay={0.3}
          />

          {/* Professionals Trained achievement */}
          <AchievementCard
            icon={<Users className="h-12 w-12 text-[#00ffaa]" />}
            title="Professionals Trained"
            value={50}
            suffix="+"
            description="Trained healthcare professionals on AI and data analytics tools"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
})

// Add a display name for better debugging
AchievementsSection.displayName = "AchievementsSection"
