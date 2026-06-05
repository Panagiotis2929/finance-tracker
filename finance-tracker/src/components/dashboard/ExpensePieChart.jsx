import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { useTransactions } from '../../hooks/useTransactions'
import { formatCurrency, pct } from '../../utils/formatters'
import Card from '../ui/Card'

// Earthy, refined color palette
const COLORS = [
  '#5a9970', '#c95555', '#c09030', '#7aad8c',
  '#91847e', '#7a6d5e', '#3f7d55', '#a83e3e',
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const { name, value } = payload[0]
  return (
    <div className="bg-ink-900 border border-ink-700 rounded-xl px-4 py-3 shadow-xl">
      <p className="text-xs font-mono text-ink-400 mb-1">{name}</p>
      <p className="font-display text-lg font-semibold text-ink-50">
        {formatCurrency(value)}
      </p>
    </div>
  )
}

const CustomLegend = ({ payload, total }) => (
  <ul className="space-y-2 mt-4">
    {payload.map((entry, index) => {
      const percentage = pct(entry.payload.value, total)
      return (
        <li key={index} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-ink-300 truncate max-w-[120px]">{entry.value}</span>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <span className="font-mono text-xs text-ink-500">{percentage}%</span>
            <span className="font-mono text-xs text-ink-300">
              {formatCurrency(entry.payload.value)}
            </span>
          </div>
        </li>
      )
    })}
  </ul>
)

export default function ExpensePieChart() {
  const { summary } = useTransactions()
  const { pieData, totalExpense } = summary

  if (!pieData.length) {
    return (
      <Card className="flex items-center justify-center h-64 text-ink-500 text-sm font-mono">
        Δεν υπάρχουν έξοδα ακόμα
      </Card>
    )
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-base font-semibold text-ink-200 tracking-tight">
          Έξοδα ανά Κατηγορία
        </h2>
        <span className="text-xs font-mono text-ink-500">
          Σύνολο: {formatCurrency(totalExpense)}
        </span>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={95}
            paddingAngle={3}
            dataKey="value"
            strokeWidth={0}
          >
            {pieData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            content={(props) => <CustomLegend {...props} total={totalExpense} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}
