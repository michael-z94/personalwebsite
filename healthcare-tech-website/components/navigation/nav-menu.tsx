/**
 * This file contains the navigation menu links that appear in the top navigation bar.
 * It highlights the currently active section as the user scrolls.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import { motion } from "framer-motion"
// This imports tools for creating animations

/**
 * Properties that must be provided to the NavMenu component
 */
interface NavMenuProps {
  // The ID of the section that's currently visible
  activeSection: string
  // Function to call when a navigation link is clicked
  scrollToSection: (sectionId: string) => void
  // Whether this menu is being displayed on mobile (optional)
  isMobile?: boolean
}

/**
 * NavMenu Component
 *
 * This creates the navigation links that appear in the top bar.
 * It highlights the currently active section and handles clicks.
 *
 * @param activeSection - Which section is currently visible
 * @param scrollToSection - Function to scroll to a section when a link is clicked
 * @param isMobile - Whether this menu is being displayed on mobile
 */
export function NavMenu({ activeSection, scrollToSection, isMobile = false }: NavMenuProps) {
  // List of all navigation items with their IDs and display labels
  const navItems = [
    { id: "about", label: "About" },
    { id: "achievements", label: "Achievements" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      {navItems.map((item) => (
        <div key={item.id} className={`relative ${isMobile ? "w-full" : ""}`}>
          <button
            onClick={() => scrollToSection(item.id)}
            className={`${isMobile ? "w-full text-left py-3" : "px-1 py-2"} transition-colors ${
              activeSection === item.id ? "text-[#00ffaa]" : "text-white hover:text-gray-300"
            }`}
          >
            {item.label}
          </button>

          {/* Active indicator - The glowing line that appears under the active section */}
          {activeSection === item.id && (
            <motion.div
              layoutId="activeSection"
              className={`absolute ${isMobile ? "left-0 bottom-0 w-16" : "bottom-0 left-0 right-0"} h-0.5 bg-[#00ffaa]`}
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </>
  )
}
