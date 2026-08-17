/** Splits a longBio-style field into paragraphs on blank lines. */
export function splitParagraphs(text: string | null): string[] {
  if (!text) return []
  return text.split('\n\n').map((p) => p.trim()).filter(Boolean)
}

/**
 * Experience.description is stored as "summary paragraph\n\n- bullet\n- bullet" (see the
 * seed migration). Parses that back out; if the second block isn't bullet-formatted, the
 * whole text is treated as the summary and no bullets are shown — a safe fallback for
 * free-form edits made from the admin that don't follow the convention.
 */
export function parseSummaryAndDetails(text: string | null): { summary: string; details: string[] } {
  if (!text) return { summary: '', details: [] }

  const [firstBlock, ...rest] = text.split('\n\n')
  const remainder = rest.join('\n\n')
  const lines = remainder.split('\n').map((l) => l.trim()).filter(Boolean)

  if (lines.length > 0 && lines.every((line) => line.startsWith('- '))) {
    return { summary: firstBlock.trim(), details: lines.map((line) => line.slice(2)) }
  }

  return { summary: text.trim(), details: [] }
}
