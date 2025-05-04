"use client"

/**
 * This is the main page file for the website.
 * It brings together all the different sections and components.
 *
 * "use client" at the top means this code runs in the web browser (not just on the server).
 * This allows us to use interactive features like animations and scrolling effects.
 */

import { useRef } from "react"
// This imports tools for creating animations

// Import all our custom sections and components
import { HeroSection } from "@/components/sections/hero-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/navigation/navigation"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

/**
 * Main Home Page Component
 *
 * This is the central component that organizes the entire website.
 * It handles:
 * 1. Tracking which section the user is currently viewing
 * 2. Setting up references to each section for scrolling
 * 3. Arranging all sections in the correct order
 */
export default function Home() {
  // Create references to each section so we can measure their position
  // Think of these like placing bookmarks in different parts of the page
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    achievements: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  // Use our custom hook to detect which section is currently visible
  // This will highlight the correct navigation link as you scroll
  const activeSection = useScrollSpy(sectionRefs, { offset: 100 })

  // This function scrolls the page to a specific section when a navigation link is clicked
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Scroll to section minus header height
        behavior: "smooth", // Animate the scrolling for a smooth effect
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* 
        Navigation Bar
        This stays fixed at the top of the screen as you scroll
        It shows links to all sections and highlights the current section
      */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        {/* 
          Hero/About Section
          This is the first section visitors see - it introduces Michał
          The ref={sectionRefs.about} connects this section to our scroll tracking system
        */}
        <HeroSection ref={sectionRefs.about} scrollToSection={scrollToSection} />

        {/* 
          Achievements Section
          This section showcases key professional accomplishments with animated counters
        */}
        <AchievementsSection ref={sectionRefs.achievements} />

        {/* 
          Experience Section
          This section shows professional history in a timeline format
        */}
        <ExperienceSection ref={sectionRefs.experience} />

        {/* 
          Skills Section
          This section displays professional skills organized by category
          with animated progress bars
        */}
        <SkillsSection ref={sectionRefs.skills} />

        {/* 
          Projects Section
          This section highlights featured projects with details and metrics
        */}
        <ProjectsSection ref={sectionRefs.projects} />

        {/* 
          Contact Section
          This section provides ways to get in touch and includes a contact form
        */}
        <ContactSection ref={sectionRefs.contact} />
      </main>

      {/* 
        Footer
        This appears at the bottom of the page with copyright information
      */}
      <Footer />
    </div>
  )
}
