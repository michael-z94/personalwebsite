/**
 * This file contains a custom button component with a glowing effect.
 * It's used throughout the website for interactive buttons.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import type React from "react"
// This imports React types for better code checking

import { useState } from "react"
// This is a React function that stores and updates information that can change

import { motion } from "framer-motion"
// This imports tools for creating animations

/**
 * Properties that must be provided to the GlowingButton component
 */
interface GlowingButtonProps {
  // The main color of the button (in hex format, like "#00ffaa")
  color?: string
  // The style of the button (solid or outline)
  variant?: "solid" | "outline"
  // Whether the button should take up the full width of its container
  fullWidth?: boolean
  // Function to call when the button is clicked
  onClick: () => void
  // The content to display inside the button
  children: React.ReactNode
}

/**
 * GlowingButton Component
 *
 * This creates an interactive button with a glowing effect when hovered.
 * It's used for all clickable buttons throughout the website.
 *
 * @param color - The primary color of the button
 * @param variant - Button style variant (solid or outline)
 * @param fullWidth - Whether the button should take full width
 * @param onClick - Click handler function
 * @param children - Button content
 */
export function GlowingButton({
  color = "#00ffaa",
  variant = "solid",
  fullWidth = false,
  onClick,
  children,
}: GlowingButtonProps) {
  // Track whether the button is currently being hovered
  const [isHovered, setIsHovered] = useState(false)

  // Base classes that apply to all button variants
  const baseClasses = `relative flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${fullWidth ? "w-full" : ""}`

  // Classes specific to the solid button variant
  const solidClasses = {
    normal: `bg-[#111111] border border-gray-800 text-white`,
    hovered: `border border-[${color}]/50 text-white`,
  }

  // Classes specific to the outline button variant
  const outlineClasses = {
    normal: `bg-transparent border border-gray-800 text-white`,
    hovered: `border border-[${color}]/50 text-[${color}]`,
  }

  // Choose which set of classes to use based on the variant
  const classes = variant === "outline" ? outlineClasses : solidClasses

  return (
    <motion.button
      className={`${baseClasses} ${isHovered ? classes.hovered : classes.normal}`}
      onHoverStart={() => setIsHovered(true)} // When mouse enters the button
      onHoverEnd={() => setIsHovered(false)} // When mouse leaves the button
      onClick={onClick} // When button is clicked
      whileHover={{ scale: 1.05 }} // Grow slightly when hovered
      whileTap={{ scale: 0.98 }} // Shrink slightly when clicked
    >
      {/* Glow effect - Only visible when the button is hovered */}
      {isHovered && (
        <motion.div
          layoutId="glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `0 0 20px ${color}30, 0 0 30px ${color}20`,
            zIndex: -1,
          }}
        />
      )}
      {children}
    </motion.button>
  )
}
