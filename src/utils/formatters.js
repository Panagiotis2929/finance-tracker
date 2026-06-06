/**
 * Format a number as Euro currency (Greek locale).
 * @param {number} amount
 * @returns {string}  e.g.  "1.240,50 €"
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format an ISO date string to a readable Greek short date.
 * @param {string} isoDate  e.g.  "2025-06-15"
 * @returns {string}        e.g.  "15 Ιουν 2025"
 */
export function formatDate(isoDate) {
  return new Intl.DateTimeFormat('el-GR', {
    day:   '2-digit',
    month: 'short',
    year:  'numeric',
  }).format(new Date(isoDate))
}

/**
 * Return today's date as an ISO string (YYYY-MM-DD).
 */
export function todayISO() {
  return new Date().toISOString().split('T')[0]
}

/**
 * Clamp a value between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Compute percentage, safely avoiding division by zero.
 */
export function pct(part, total) {
  if (!total) return 0
  return Math.round((part / total) * 100)
}
