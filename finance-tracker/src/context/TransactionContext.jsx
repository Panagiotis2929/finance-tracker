import { createContext, useContext, useReducer, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

// ─── Initial seed data ────────────────────────────────────────────────────────
const SEED_TRANSACTIONS = [
  { id: uuidv4(), type: 'income',  category: 'Μισθός',        amount: 2400, date: '2025-06-01' },
  { id: uuidv4(), type: 'income',  category: 'Freelance',     amount: 650,  date: '2025-06-05' },
  { id: uuidv4(), type: 'expense', category: 'Ενοίκιο',       amount: 700,  date: '2025-06-02' },
  { id: uuidv4(), type: 'expense', category: 'Φαγητό',        amount: 210,  date: '2025-06-08' },
  { id: uuidv4(), type: 'expense', category: 'Μεταφορές',     amount: 85,   date: '2025-06-10' },
  { id: uuidv4(), type: 'expense', category: 'Ψυχαγωγία',     amount: 120,  date: '2025-06-12' },
  { id: uuidv4(), type: 'expense', category: 'Υγεία',         amount: 95,   date: '2025-06-14' },
  { id: uuidv4(), type: 'expense', category: 'Υπηρεσίες',     amount: 60,   date: '2025-06-15' },
]

// ─── Action types ─────────────────────────────────────────────────────────────
export const ACTIONS = {
  ADD_TRANSACTION:    'ADD_TRANSACTION',
  DELETE_TRANSACTION: 'DELETE_TRANSACTION',
  CLEAR_ALL:          'CLEAR_ALL',
}

// ─── Reducer ──────────────────────────────────────────────────────────────────
function transactionReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          { ...action.payload, id: uuidv4() },
          ...state.transactions,
        ],
      }
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload),
      }
    case ACTIONS.CLEAR_ALL:
      return { ...state, transactions: [] }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const TransactionContext = createContext(null)

// ─── Provider ─────────────────────────────────────────────────────────────────
export function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, {
    transactions: SEED_TRANSACTIONS,
  })

  // Derived values — memoised to avoid recomputation on every render
  const summary = useMemo(() => {
    const totalIncome = state.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)

    const totalExpense = state.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)

    const balance = totalIncome - totalExpense

    // Group expenses by category for the pie chart
    const expensesByCategory = state.transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount
        return acc
      }, {})

    const pieData = Object.entries(expensesByCategory).map(([name, value]) => ({
      name,
      value,
    }))

    return { totalIncome, totalExpense, balance, pieData }
  }, [state.transactions])

  // Action creators
  const addTransaction = (transaction) =>
    dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: transaction })

  const deleteTransaction = (id) =>
    dispatch({ type: ACTIONS.DELETE_TRANSACTION, payload: id })

  const clearAll = () =>
    dispatch({ type: ACTIONS.CLEAR_ALL })

  const value = {
    transactions: state.transactions,
    summary,
    addTransaction,
    deleteTransaction,
    clearAll,
  }

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  )
}

// ─── Raw context export (used by custom hook) ─────────────────────────────────
export default TransactionContext
