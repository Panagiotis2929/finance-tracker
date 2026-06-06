export function formatCurrency(amount) {
  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatDate(isoDate) {
  return new Intl.DateTimeFormat('el-GR', {
    day:   '2-digit',
    month: 'short',
    year:  'numeric',
  }).format(new Date(isoDate))
}

export function todayISO() {
  return new Date().toISOString().split('T')[0]
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export function pct(part, total) {
  if (!total) return 0
  return Math.round((part / total) * 100)
}
