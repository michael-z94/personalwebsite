/**
 * Timeline Item Component Props
 */
interface TimelineItemProps {
  /** Year or time period */
  year: string
  /** Job title or position */
  title: string
  /** Company or organization name */
  company: string
  /** Brief description of responsibilities */
  description: string
  /** Which side of the timeline to display on (left or right) */
  side: "left" | "right"
  /** Whether this is the current position */
  current?: boolean
}

/**
 * Timeline Item Component
 *
 * Displays a single position or experience in a timeline format.
 * Used in the Experience section to show professional history.
 *
 * @param props - The component props
 * @returns A styled timeline item
 */
export function TimelineItem({ year, title, company, description, side, current = false }: TimelineItemProps) {
  return (
    <div className={`relative mb-12 ${side === "right" ? "md:ml-auto" : "md:mr-auto"} md:w-[45%] ml-8 md:ml-0`}>
      {/* Year label - positioned above the content */}
      <div className="absolute left-0 md:left-auto md:right-auto md:-translate-x-1/2 -translate-x-[calc(100%+1rem)] top-[-2rem] bg-gray-100 text-[#2A5C82] font-bold py-1 px-3 rounded-full text-sm md:text-base">
        {year}
      </div>

      {/* Timeline dot - different color for current position */}
      <div
        className={`absolute left-[-2rem] md:left-auto md:right-auto md:-translate-x-1/2 top-0 h-4 w-4 rounded-full ${current ? "bg-[#4CAF50]" : "bg-[#2A5C82]"}`}
      ></div>

      {/* Content card */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        {/* Job title */}
        <h3 className="text-xl font-bold font-sans">{title}</h3>

        {/* Company name */}
        <p className="text-[#4CAF50] font-medium mb-3">{company}</p>

        {/* Job description */}
        <p className="text-gray-600 font-serif">{description}</p>

        {/* Current position badge */}
        {current && (
          <div className="mt-4 inline-block bg-[#4CAF50] text-white text-xs py-1 px-2 rounded-full">
            Current Position
          </div>
        )}
      </div>
    </div>
  )
}
