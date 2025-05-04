/**
 * This file contains a component that animates a number counting up from zero.
 * It's used in the Achievements section to display statistics.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import { useEffect, useRef, useState } from "react"
// These are React functions:
// - useEffect: Runs code at specific times
// - useRef: Creates a reference to an element on the page
// - useState: Stores and updates information that can change

import { motion, useInView } from "framer-motion"
// This imports tools for creating animations and detecting when elements are visible

/**
 * Properties that must be provided to the CountUp component
 */
interface CountUpProps {
  // The final number to count up to
  end: number
  // How long the counting animation should take (in seconds)
  duration?: number
  // Text to display before the number (like "$" or "+")
  prefix?: string
  // Text to display after the number (like "%" or "k")
  suffix?: string
}

/**
 * CountUp Component
 *
 * This creates an animated counter that counts up from zero to a target number
 * when it becomes visible on the screen.
 *
 * @param end - The final number to count up to
 * @param duration - Duration of the animation in seconds
 * @param prefix - Text to display before the number
 * @param suffix - Text to display after the number
 */
export function CountUp({ end, duration = 2, prefix = "", suffix = "" }: CountUpProps) {
  // Store the current count value as it animates
  const [count, setCount] = useState(0)

  // Create a reference to this component so we can detect when it's visible
  const ref = useRef(null)

  // Check if this component is currently visible in the viewport
  // "once: true" means the animation only happens once, not every time it comes into view
  // "margin: -100px" means start the animation when the element is 100px from entering the viewport
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // This effect runs when the component becomes visible
  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      // This function updates the count on each animation frame
      const animate = (timestamp: number) => {
        // On the first frame, record the start time
        if (!startTime) startTime = timestamp

        // Calculate how far through the animation we are (0 to 1)
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        // Update the count based on the progress
        setCount(Math.floor(progress * end))

        // If we haven't reached the end, request another animation frame
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      // Start the animation
      animationFrame = requestAnimationFrame(animate)

      // Clean up the animation if the component unmounts
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration]) // Only re-run this effect if these values change

  return (
    <motion.div
      ref={ref}
      className="text-4xl font-bold"
      style={{
        // Create a gradient text effect from green to blue
        background: "linear-gradient(to right, #00ffaa, #4361ee)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.div>
  )
}
