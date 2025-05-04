"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

/**
 * CountUp Component
 *
 * Animated counter that counts up to a target number when in view
 *
 * @param end - The final number to count up to
 * @param duration - Duration of the animation in seconds
 * @param prefix - Text to display before the number
 * @param suffix - Text to display after the number
 */
export function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      className="text-4xl font-bold"
      style={{
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
