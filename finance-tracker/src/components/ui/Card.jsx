/**
 * Reusable card wrapper with consistent styling.
 * Supports optional hover effect and custom className overrides.
 */
export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={[
        'bg-ink-900 border border-ink-800 rounded-2xl p-5',
        hover ? 'transition-colors duration-200 hover:border-ink-700 hover:bg-ink-800/60' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
