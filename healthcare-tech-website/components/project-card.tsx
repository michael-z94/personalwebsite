/**
 * Metric Interface
 */
interface Metric {
  /** Name of the metric */
  label: string
  /** Value of the metric */
  value: string
}

/**
 * Project Card Component Props
 */
interface ProjectCardProps {
  /** Project title */
  title: string
  /** Project description */
  description: string
  /** Array of tags/technologies used */
  tags: string[]
  /** Key performance metrics */
  metrics: Metric[]
}

/**
 * Project Card Component
 *
 * Displays details about a project including description, technologies used,
 * and key performance metrics.
 * Used in the Projects section to showcase featured work.
 *
 * @param props - The component props
 * @returns A styled project card
 */
export function ProjectCard({ title, description, tags, metrics }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Project title */}
      <h3 className="text-xl font-bold mb-3 font-sans">{title}</h3>

      {/* Project description */}
      <p className="text-gray-600 mb-4 font-serif">{description}</p>

      {/* Tags/technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-[#2A5C82] text-xs py-1 px-2 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Key metrics section */}
      <div className="border-t pt-4 mt-4">
        <h4 className="text-sm font-bold mb-3 text-gray-500 uppercase">Key Metrics</h4>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-[#4CAF50]">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
