import Header             from './components/layout/Header'
import BalanceSummary     from './components/dashboard/BalanceSummary'
import ExpensePieChart    from './components/dashboard/ExpensePieChart'
import AddTransactionForm from './components/transactions/AddTransactionForm'
import TransactionList    from './components/transactions/TransactionList'

export default function App() {
  return (
    <div className="noise min-h-screen bg-ink-950">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Balance summary cards */}
        <BalanceSummary />

        {/* Main grid: chart + form | transaction list */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left column — 2/5 */}
          <div className="lg:col-span-2 space-y-6">
            <AddTransactionForm />
            <ExpensePieChart />
          </div>

          {/* Right column — 3/5 */}
          <div className="lg:col-span-3">
            <TransactionList />
          </div>

        </div>
      </main>
    </div>
  )
}
