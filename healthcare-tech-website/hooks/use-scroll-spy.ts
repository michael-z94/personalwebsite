"use client"

import type React from "react"

/**
 * This file contains a custom hook (a reusable piece of functionality)
 * that tracks which section of the page is currently visible as the user scrolls.
 */

import { useEffect, useState } from "react"
// These are React functions:
// - useEffect: Runs code at specific times (like when the page loads or when certain values change)
// - useState: Stores and updates information that can change (like which section is active)

/**
 * Options for configuring the scroll spy behavior
 */
interface ScrollSpyOptions {
  // How far from the top of the viewport a section should be before it's considered "active"
  offset: number
}

/**
 * useScrollSpy Hook
 *
 * This is a custom function that watches the page as you scroll and figures out
 * which section is currently most visible on the screen.
 *
 * @param sectionRefs - References to all the sections we want to track
 * @param options - Configuration settings like how far from the top a section should be to count as "active"
 * @returns The ID of the section that's currently most visible
 */
export function useScrollSpy(
  sectionRefs: Record<string, React.RefObject<HTMLElement>>,
  options: ScrollSpyOptions = { offset: 0 },
): string {
  // Store which section is currently active
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    // This function runs whenever the user scrolls the page
    const handleScroll = () => {
      // Get the current scroll position plus our offset
      const scrollPosition = window.scrollY + options.offset

      // Convert our section references object to an array we can loop through
      const sections = Object.entries(sectionRefs).map(([id, ref]) => ({
        id,
        ref,
      }))

      // Check each section to see if it's currently visible
      for (const section of sections) {
        // Skip if we can't find this section in the DOM
        if (!section.ref.current) continue

        // Calculate where this section starts and ends
        const offsetTop = section.ref.current.offsetTop
        const offsetHeight = section.ref.current.offsetHeight

        // If the scroll position is within this section's boundaries, it's active
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id)
          break
        }
      }
    }

    // Set up the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Run once on initial load to set the initial active section
    handleScroll()

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionRefs, options.offset]) // Only re-run this effect if these values change

  return activeSection
}
