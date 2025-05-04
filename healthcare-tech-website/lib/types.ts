import type { ReactNode } from "react"

/**
 * Common Types
 *
 * This file contains shared type definitions used across multiple components.
 * Following the Interface Segregation Principle, we define specific interfaces
 * for different components rather than one large interface.
 */

/**
 * Skill - Represents a single skill with name and proficiency level
 */
export interface Skill {
  /** Name of the skill */
  name: string
  /** Proficiency level (0-100) */
  value: number
}

/**
 * Metric - Represents a key performance indicator with label and value
 */
export interface Metric {
  /** Name of the metric */
  label: string
  /** Value of the metric (usually a percentage or number) */
  value: string
}

/**
 * WithIcon - Interface for components that include an icon
 */
export interface WithIcon {
  /** React node representing an icon */
  icon: ReactNode
}

/**
 * WithChildren - Interface for components that accept children
 */
export interface WithChildren {
  /** Child React nodes */
  children: ReactNode
}
