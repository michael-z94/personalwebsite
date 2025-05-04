/**
 * This file contains the navigation bar that appears at the top of the website.
 * It stays fixed in place as the user scrolls and highlights the current section.
 */

"use client"
// This means the component runs in the browser, allowing for interactivity

import { useState } from "react"
// This is a React function that stores and updates information that can change

import { ChevronDown, X } from "lucide-react"
// These are icons for the mobile menu button

import { Button } from "@/components/ui/button"
// This imports a pre-styled button component

import { motion } from "framer-motion"
// This imports tools for creating animations

import { NavMenu } from "@/components/navigation/nav-menu"
// This imports the component that contains the actual navigation links

/**
 * Properties that must be provided to the Navigation component
 */
interface NavigationProps {
  // The ID of the section that's currently visible
  activeSection: string
  // Function to call when a navigation link is clicked
  scrollToSection: (sectionId: string) => void
}

/**
 * Navigation Component
 *
 * This creates the navigation bar that stays at the top of the screen.
 * It shows different layouts for desktop and mobile devices.
 *
 * @param activeSection - Which section is currently visible
 * @param scrollToSection - Function to scroll to a section when a link is clicked
 */
export function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  // Track whether the mobile menu is open or closed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to toggle the mobile menu open/closed
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-[#1a1a1a]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name - Animates in from the left when the page loads */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl"
        >
          <span className="text-[#00ffaa]">MZ</span>
        </motion.div>

        {/* Desktop Navigation - Only visible on medium screens and larger */}
        <div className="hidden md:flex space-x-8">
          <NavMenu activeSection={activeSection} scrollToSection={scrollToSection} />
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white hover:text-[#00ffaa]" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" /> // Show X icon when menu is open
            ) : (
              <ChevronDown className="h-6 w-6" /> // Show down arrow when menu is closed
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Slides down when the menu button is clicked */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a]"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavMenu
              activeSection={activeSection}
              scrollToSection={(sectionId) => {
                scrollToSection(sectionId)
                setMobileMenuOpen(false) // Close the menu after clicking a link
              }}
              isMobile={true}
            />
          </div>
        </motion.div>
      )}
    </nav>
  )
}
