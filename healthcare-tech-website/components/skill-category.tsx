import { Progress } from "@/components/ui/progress"
import type { ReactNode } from "react"

/**
 * Skill Item Interface
 */
interface Skill {
  /** Name of the skill */
  name: string
  /** Proficiency level (0-100) */
  value: number
}

/**
 * Skill Category Component Props
 */
interface SkillCategoryProps {
  /** Icon representing the category */
  icon: ReactNode
  /** Category title */
  title: string
  /** Array of skills in this category */
  skills: Skill[]
}

/**
 * Skill Category Component
 *
 * Displays a group of related skills with progress bars showing proficiency.
 * Used in the Skills section to organize different skill areas.
 *
 * @param props - The component props
 * @returns A styled skill category card
 */
export function SkillCategory({ icon, title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Category header with icon */}
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-xl font-bold ml-2 font-sans">{title}</h3>
      </div>

      {/* List of skills with progress bars */}
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            {/* Skill name and percentage */}
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-serif">{skill.name}</span>
              <span className="text-[#4CAF50] font-bold">{skill.value}%</span>
            </div>

            {/* Progress bar */}
            <Progress value={skill.value} className="h-2 bg-gray-200" indicatorClassName="bg-[#2A5C82]" />
          </div>
        ))}
      </div>
    </div>
  )
}
