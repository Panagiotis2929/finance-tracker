import { useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import { formatCurrency, formatDate } from '../../utils/formatters'
import Card from '../ui/Card'

const FILTER_OPTIONS = [
  { value: 'all',     label: 'Όλες' },
  { value: 'income',  label: 'Έσοδα' },
  { value: 'expense', label: 'Έξοδα' },
]

export default function TransactionList() {
  const { transactions, deleteTransaction } = useTransactions()
  const [filter, setFilter]   = useState('all')
  const [deleting, setDeleting] = useState(null)

  const filtered = filter === 'all'
    ? transactions
    : transactions.filter(t => t.type === filter)

  function handleDelete(id) {
    setDeleting(id)
    setTimeout(() => {
      deleteTransaction(id)
      setDeleting(null)
    }, 250)
  }

  return (
    <Card className="space-y-4">
      {/* Header + Filter */}
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-semibold text-ink-200 tracking-tight">
          Συναλλαγές
          <span className="ml-2 text-xs font-mono text-ink-500">
            ({filtered.length})
          </span>
        </h2>

        <div className="flex gap-1 bg-ink-950 border border-ink-800 rounded-lg p-0.5">
          {FILTER_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={[
                'px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-150',
                filter === opt.value
                  ? 'bg-ink-700 text-ink-100'
                  : 'text-ink-500 hover:text-ink-300',
              ].join(' ')}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-ink-600 text-sm font-mono">
          Καμία συναλλαγή
        </div>
      ) : (
        <ul className="space-y-2 animate-stagger">
          {filtered.map(t => (
            <li
              key={t.id}
              className={[
                'flex items-center justify-between px-3 py-3 rounded-xl border border-ink-800',
                'bg-ink-950/60 hover:bg-ink-800/40 transition-all duration-200',
                deleting === t.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100',
              ].join(' ')}
            >
              {/* Left: indicator + info */}
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={[
                    'w-1.5 h-7 rounded-full flex-shrink-0',
                    t.type === 'income' ? 'bg-sage-500' : 'bg-rose-500',
                  ].join(' ')}
                />
                <div className="min-w-0">
                  <p className="text-sm text-ink-200 truncate">{t.category}</p>
                  <p className="text-xs font-mono text-ink-600">{formatDate(t.date)}</p>
                </div>
              </div>

              {/* Right: amount + delete */}
              <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                <span
                  className={[
                    'font-mono text-sm font-medium',
                    t.type === 'income' ? 'text-sage-400' : 'text-rose-400',
                  ].join(' ')}
                >
                  {t.type === 'income' ? '+' : '−'} {formatCurrency(t.amount)}
                </span>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-ink-700 hover:text-rose-400 transition-colors duration-150 p-1 rounded-lg hover:bg-rose-500/10"
                  aria-label="Διαγραφή"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 2L12 12M12 2L2 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
