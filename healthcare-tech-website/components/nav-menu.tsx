"use client"

import { motion } from "framer-motion"

/**
 * Navigation Menu Component
 *
 * Interactive navigation menu with highlighting for the active section
 *
 * @param activeSection - The currently active section ID
 * @param scrollToSection - Function to scroll to a section when clicked
 */
export function NavMenu({
  activeSection,
  scrollToSection,
}: {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}) {
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
        <div key={item.id} className="relative">
          <button
            onClick={() => scrollToSection(item.id)}
            className={`px-1 py-2 transition-colors ${
              activeSection === item.id ? "text-[#00ffaa]" : "text-white hover:text-gray-300"
            }`}
          >
            {item.label}
          </button>

          {/* Active indicator */}
          {activeSection === item.id && (
            <motion.div
              layoutId="activeSection"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ffaa]"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </>
  )
}
