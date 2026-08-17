const MONTH_YEAR_FORMATTER = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })

export function formatMonthYear(isoDate: string): string {
  return MONTH_YEAR_FORMATTER.format(new Date(`${isoDate}T00:00:00`))
}

export function formatPeriod(startDate: string | null, endDate: string | null, current: boolean): string {
  const start = startDate ? formatMonthYear(startDate) : ''
  const end = current ? 'Present' : endDate ? formatMonthYear(endDate) : ''
  return [start, end].filter(Boolean).join(' — ')
}
