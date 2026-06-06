# Finance Tracker

A clean, professional personal finance tracker built with React, Recharts, and Tailwind CSS.

## Features

- **Balance Summary** — Live balance, total income & total expense cards with a savings rate bar
- **Add Transactions** — Form with type toggle (income/expense), category selector, amount and date fields
- **Pie Chart** — Recharts donut chart grouping expenses by category with custom tooltip & legend
- **Transaction List** — Filterable list (All / Income / Expense) with smooth delete animation
- **Global State** — Context + useReducer pattern for clean, scalable state management

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + Vite | UI framework & dev server |
| Recharts | Data visualisation (Pie chart) |
| Tailwind CSS v3 | Utility-first styling |
| uuid | Unique transaction IDs |

## Project Structure

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
