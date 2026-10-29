
import { createContext, useContext, useState, useEffect } from "react";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    try {
      const savedTransactions = localStorage.getItem("transactions");

      return savedTransactions
        ? JSON.parse(savedTransactions)
        : [];
    } catch (error) {
      console.error("Could not load transactions:", error);
      return [];
    }
  });
  function deleteTransaction(id) {
  setTransactions((prevTransactions) =>
    prevTransactions.filter(
      (transaction) => transaction.id !== id
    )
  );

}

function updateTransaction(updatedTransaction) {
  setTransactions((prevTransactions) =>
    prevTransactions.map((transaction) =>
      transaction.id === updatedTransaction.id
        ? updatedTransaction
        : transaction
    )
  );
}

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, setTransactions,deleteTransaction,updateTransaction}}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}
