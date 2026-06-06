import { useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import { todayISO } from '../../utils/formatters'
import Card from '../ui/Card'

const INCOME_CATEGORIES  = ['Μισθός', 'Freelance', 'Επενδύσεις', 'Δώρο', 'Άλλο']
const EXPENSE_CATEGORIES = [
  'Ενοίκιο', 'Φαγητό', 'Μεταφορές', 'Ψυχαγωγία',
  'Υγεία', 'Υπηρεσίες', 'Ρούχα', 'Εκπαίδευση', 'Άλλο',
]

const INITIAL_FORM = {
  type: 'expense',
  category: EXPENSE_CATEGORIES[0],
  amount: '',
  date: todayISO(),
}

export default function AddTransactionForm() {
  const { addTransaction } = useTransactions()
  const [form, setForm]     = useState(INITIAL_FORM)
  const [flash, setFlash]   = useState(false)

  const categories = form.type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => {
      // When type changes, reset category to first option of new list
      if (name === 'type') {
        const cats = value === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES
        return { ...prev, type: value, category: cats[0] }
      }
      return { ...prev, [name]: value }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!amount || amount <= 0) return

    addTransaction({ ...form, amount })
    setForm({ ...INITIAL_FORM, type: form.type }) // preserve type for UX
    setFlash(true)
    setTimeout(() => setFlash(false), 1200)
  }

  const isIncome = form.type === 'income'
  const accentClass = isIncome ? 'border-sage-600/40 focus:border-sage-500' : 'border-rose-500/30 focus:border-rose-400'
  const btnClass    = isIncome
    ? 'bg-sage-600 hover:bg-sage-500 text-white'
    : 'bg-rose-500 hover:bg-rose-400 text-white'

  return (
    <Card
      className={`transition-all duration-300 ${flash ? 'border-sage-600/60' : ''}`}
    >
      <h2 className="font-display text-base font-semibold text-ink-200 tracking-tight mb-4">
        Νέα Συναλλαγή
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type toggle */}
        <div className="flex rounded-xl overflow-hidden border border-ink-700 p-0.5 gap-0.5 bg-ink-950">
          {['expense', 'income'].map(t => (
            <button
              key={t}
              type="button"
              onClick={() => setForm(prev => {
                const cats = t === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES
                return { ...prev, type: t, category: cats[0] }
              })}
              className={[
                'flex-1 py-2 px-3 rounded-lg text-sm font-mono transition-all duration-200',
                form.type === t
                  ? t === 'income'
                    ? 'bg-sage-600 text-white'
                    : 'bg-rose-500 text-white'
                  : 'text-ink-400 hover:text-ink-200',
              ].join(' ')}
            >
              {t === 'income' ? '↑ Έσοδο' : '↓ Έξοδο'}
            </button>
          ))}
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-1.5">
            Κατηγορία
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className={`w-full bg-ink-950 border rounded-xl px-3 py-2.5 text-sm text-ink-200 outline-none transition-colors duration-150 ${accentClass}`}
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Amount + Date row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-1.5">
              Ποσό (€)
            </label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="0.00"
              min="0.01"
              step="0.01"
              required
              className={`w-full bg-ink-950 border rounded-xl px-3 py-2.5 text-sm text-ink-200 outline-none transition-colors duration-150 font-mono placeholder-ink-700 ${accentClass}`}
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-1.5">
              Ημερομηνία
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className={`w-full bg-ink-950 border rounded-xl px-3 py-2.5 text-sm text-ink-200 outline-none transition-colors duration-150 font-mono ${accentClass}`}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-xl text-sm font-display font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] ${btnClass}`}
        >
          {flash ? '✓ Προστέθηκε!' : 'Προσθήκη Συναλλαγής'}
        </button>
      </form>
    </Card>
  )
}
