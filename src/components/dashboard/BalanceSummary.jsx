import { useTransactions } from '../../hooks/useTransactions'
import { formatCurrency, pct } from '../../utils/formatters'
import Card from '../ui/Card'

function StatCard({ label, amount, variant = 'neutral', icon }) {
  const colorMap = {
    positive: 'text-sage-400',
    negative: 'text-rose-400',
    neutral:  'text-gold-400',
  }
  const bgMap = {
    positive: 'bg-sage-600/10 border-sage-600/20',
    negative: 'bg-rose-500/10 border-rose-500/20',
    neutral:  'bg-gold-400/10 border-gold-400/20',
  }

  return (
    <Card className={`flex flex-col gap-3 ${bgMap[variant]}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-ink-400">
          {label}
        </span>
        <span className="text-lg">{icon}</span>
      </div>
      <p className={`font-display text-2xl font-semibold tracking-tight ${colorMap[variant]}`}>
        {formatCurrency(Math.abs(amount))}
      </p>
    </Card>
  )
}

export default function BalanceSummary() {
  const { summary } = useTransactions()
  const { balance, totalIncome, totalExpense } = summary

  const savingsRate = pct(balance, totalIncome)

  return (
    <div className="space-y-4">
      <div className="animate-stagger grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Υπόλοιπο"
          amount={balance}
          variant="neutral"
          icon="⚖️"
        />
        <StatCard
          label="Συνολικά Έσοδα"
          amount={totalIncome}
          variant="positive"
          icon="↑"
        />
        <StatCard
          label="Συνολικά Έξοδα"
          amount={totalExpense}
          variant="negative"
          icon="↓"
        />
      </div>

      {/* Savings rate bar */}
      {totalIncome > 0 && (
        <Card className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-400">
              Ποσοστό αποταμίευσης
            </span>
            <span className="text-xs font-mono text-sage-400">
              {savingsRate}%
            </span>
          </div>
          <div className="h-1.5 bg-ink-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sage-600 to-sage-400 rounded-full transition-all duration-700"
              style={{ width: `${Math.max(0, savingsRate)}%` }}
            />
          </div>
        </Card>
      )}
    </div>
  )
}
