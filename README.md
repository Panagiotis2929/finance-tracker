# 💰 Finance Tracker

A modern personal finance management application built with React, Vite, Recharts, and Tailwind CSS.

Track your income and expenses, monitor your balance in real time, visualize spending habits through interactive charts, and gain better control over your financial decisions.

---

## ✨ Overview

Finance Tracker provides a clean and intuitive interface for managing personal finances. Users can add transactions, categorize expenses, monitor savings performance, and analyze spending patterns through interactive data visualizations.

The application is designed with scalability and maintainability in mind using React Context API and the useReducer state management pattern.

---

## 🚀 Features

### Dashboard Summary
- Real-time balance tracking
- Total income overview
- Total expense overview
- Savings rate calculation
- Visual savings progress bar

### Transaction Management
- Add income and expense transactions
- Select predefined categories
- Record transaction dates
- Instant state updates
- Delete transactions with smooth UI animations

### Analytics & Insights
- Interactive expense breakdown chart
- Category-based expense grouping
- Custom tooltips and legends
- Responsive data visualization

### Filtering System
- View all transactions
- Filter income only
- Filter expenses only

### State Management
- React Context API
- useReducer architecture
- Centralized global state
- Scalable component structure

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React 18 | User Interface |
| Vite | Development Environment |
| Tailwind CSS v3 | Styling |
| Recharts | Data Visualization |
| Context API | Global State Management |
| useReducer | State Logic |
| UUID | Unique Transaction IDs |

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   └── Header
│   │
│   ├── dashboard/
│   │   ├── BalanceSummary
│   │   └── ExpensePieChart
│   │
│   ├── transactions/
│   │   ├── AddTransactionForm
│   │   └── TransactionList
│   │
│   └── ui/
│       └── Card
│
├── context/
│   └── TransactionContext
│
├── hooks/
│   └── useTransactions
│
├── utils/
│   └── formatters
│
├── App.jsx
└── main.jsx
```

---

## Future Improvements

- Local Storage persistence
- Monthly analytics dashboard
- Budget goals
- Dark mode
- Export transactions to CSV
- Authentication & cloud sync
- Multiple account support

---

## Learning Objectives

This project demonstrates:

- Modern React development practices
- Context API state management
- useReducer architecture
- Reusable component design
- Data visualization with Recharts
- Responsive UI development with Tailwind CSS

---

## 👨‍💻 Author

**Panagiotis**

GitHub: https://github.com/Panagiotis2929
