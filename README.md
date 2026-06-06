# 💰 Personal Finance Tracker

A clean, professional personal finance tracker built with React, Recharts, and Tailwind CSS.

## ✨ Features

- **Balance Summary** — Live balance, total income & total expense cards with a savings rate bar
- **Add Transactions** — Form with type toggle (income/expense), category selector, amount and date fields
- **Pie Chart** — Recharts donut chart grouping expenses by category with custom tooltip & legend
- **Transaction List** — Filterable list (All / Income / Expense) with smooth delete animation
- **Global State** — Context + useReducer pattern for clean, scalable state management

## 🏗 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + Vite | UI framework & dev server |
| Recharts | Data visualisation (Pie chart) |
| Tailwind CSS v3 | Utility-first styling |
| uuid | Unique transaction IDs |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/         Header
│   ├── dashboard/      BalanceSummary, ExpensePieChart
│   ├── transactions/   AddTransactionForm, TransactionList
│   └── ui/             Card (reusable wrapper)
├── context/            TransactionContext (global state)
├── hooks/              useTransactions (ergonomic context hook)
├── utils/              formatters (currency, date helpers)
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🗂 Data Shape

```js
{
  id:       string,          // auto-generated UUID
  type:     'income' | 'expense',
  category: string,
  amount:   number,          // positive float
  date:     string,          // ISO 8601, e.g. "2025-06-15"
}
```

## 🔧 Extending

- **Persistence**: Swap the in-memory `useReducer` state for `localStorage` by adding a `useEffect` in `TransactionContext.jsx`
- **New charts**: Add a `BarChart` in `src/components/dashboard/` — `pieData` and `summary` are already available via `useTransactions()`
- **Filters**: Extend `TransactionList` with a month/year filter using `useMemo`
