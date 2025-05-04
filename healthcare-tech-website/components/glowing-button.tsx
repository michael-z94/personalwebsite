"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

/**
 * Glowing Button Component
 *
 * An interactive button with a glowing effect on hover
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
}: {
  color?: string
  variant?: "solid" | "outline"
  fullWidth?: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = `relative flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${fullWidth ? "w-full" : ""}`

  const solidClasses = {
    normal: `bg-[#111111] border border-gray-800 text-white`,
    hovered: `border border-[${color}]/50 text-white`,
  }

  const outlineClasses = {
    normal: `bg-transparent border border-gray-800 text-white`,
    hovered: `border border-[${color}]/50 text-[${color}]`,
  }

  const classes = variant === "outline" ? outlineClasses : solidClasses

  return (
    <motion.button
      className={`${baseClasses} ${isHovered ? classes.hovered : classes.normal}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
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
