import type { ReactNode } from 'react'

/** Resalta el contenido entre rayas (em dash): ` — texto — `. */
export function textWithEmDashHighlights(text: string): ReactNode {
  if (!text.includes('—')) return text

  const parts: ReactNode[] = []
  const re = / — ([^—]+?) — /g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = re.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index))
    parts.push(' — ')
    parts.push(
      <span
        key={`em-dash-${key++}`}
        className="rounded-sm bg-primary/10 px-1 py-0.5 font-medium text-foreground"
      >
        {match[1]}
      </span>,
    )
    parts.push(' — ')
    lastIndex = match.index + match[0].length
  }

  parts.push(text.slice(lastIndex))

  if (parts.length === 1) return parts[0]
  return <>{parts}</>
}
