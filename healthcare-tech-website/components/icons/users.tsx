/**
 * This file contains a custom SVG icon for representing groups of users.
 * It's used in the Achievements section to represent professionals trained.
 */

/**
 * Properties that can be provided to the Users icon
 */
interface UsersIconProps {
  // Optional CSS classes to apply to the SVG
  className?: string
}

/**
 * Users Icon Component
 *
 * This creates a custom SVG icon for representing groups of users or people.
 * It's used in the Achievements section to represent professionals trained.
 *
 * @param className - Optional CSS classes to apply to the SVG
 */
export function Users({ className }: UsersIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* First user (front) */}
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />

      {/* Second user (back) */}
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
