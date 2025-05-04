/**
 * This file contains the footer that appears at the bottom of the website.
 * It displays copyright information and additional notes.
 */

/**
 * Footer Component
 *
 * This creates the footer that appears at the bottom of the website
 * with copyright information and additional notes.
 */
export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright information with current year */}
        <p className="text-gray-500">© {new Date().getFullYear()} Michał Zdunek. All rights reserved.</p>

        {/* Additional note about AI integration */}
        <p className="text-gray-600 text-sm mt-2">Website optimized for future AI avatar integration</p>
      </div>
    </footer>
  )
}
