export default function Header() {
  const now = new Date()
  const month = now.toLocaleDateString('el-GR', { month: 'long', year: 'numeric' })

  return (
    <header className="border-b border-ink-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo mark */}
          <div className="w-8 h-8 rounded-lg bg-sage-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 10 L6 6 L9 9 L14 4"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="4" r="1.5" fill="white" />
            </svg>
          </div>
          <span className="font-display font-700 text-lg tracking-tight text-ink-50">
            Finance<span className="text-sage-500">Tracker</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-ink-400">
          <span className="w-1.5 h-1.5 rounded-full bg-sage-500 inline-block" />
          <span className="font-mono capitalize">{month}</span>
        </div>
      </div>
    </header>
  )
}
