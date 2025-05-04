import Link from "next/link"
import type { ReactNode } from "react"

/**
 * NavLink Component
 *
 * A reusable navigation link component that applies consistent styling
 * and behavior to all navigation links.
 *
 * @param href - The URL or anchor the link points to
 * @param children - The content to display inside the link
 * @returns A styled navigation link
 */
export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="hover:text-[#4CAF50] transition-colors">
      {children}
    </Link>
  )
}
