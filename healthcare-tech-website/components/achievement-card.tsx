import type { ReactNode } from "react"

/**
 * Achievement Card Component Props
 */
interface AchievementCardProps {
  /** Icon to display at the top of the card */
  icon: ReactNode
  /** Title of the achievement */
  title: string
  /** Numerical or text value representing the achievement */
  value: string
  /** Brief description of the achievement */
  description: string
}

/**
 * Achievement Card Component
 *
 * Displays a single achievement with an icon, title, value, and description.
 * Used in the Key Achievements section to highlight important metrics.
 *
 * @param props - The component props
 * @returns A styled achievement card
 */
export function AchievementCard({ icon, title, value, description }: AchievementCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {/* Icon at the top */}
      <div className="flex justify-center mb-4">{icon}</div>

      {/* Achievement title */}
      <h3 className="text-xl font-bold mb-2 font-sans">{title}</h3>

      {/* Achievement value (highlighted) */}
      <p className="text-3xl font-bold text-[#4CAF50] mb-3">{value}</p>

      {/* Achievement description */}
      <p className="text-gray-600 font-serif">{description}</p>
    </div>
  )
}
