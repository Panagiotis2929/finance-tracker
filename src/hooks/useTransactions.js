import { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

/**
 * Custom hook to access the TransactionContext.
 * Throws a descriptive error if used outside of TransactionProvider.
 */
export function useTransactions() {
  const context = useContext(TransactionContext)
  if (!context) {
    throw new Error('useTransactions must be used within a <TransactionProvider>')
  }
  return context
}
