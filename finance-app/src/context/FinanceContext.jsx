import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    currency: '₹'
  });
  const [dateFilter, setDateFilter] = useState({
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date()
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load data from localStorage
  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    const savedBudgets = localStorage.getItem('budgets');
    const savedUser = localStorage.getItem('user');

    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    } else {
      const defaultTransactions = [
        {
          id: '1',
          type: 'income',
          amount: 50000,
          category: 'Salary',
          date: new Date().toISOString(),
          description: 'Monthly salary'
        },
        {
          id: '2',
          type: 'expense',
          amount: 10000,
          category: 'Rent',
          date: new Date().toISOString(),
          description: 'Apartment rent'
        },
        {
          id: '3',
          type: 'expense',
          amount: 5000,
          category: 'Groceries',
          date: new Date().toISOString(),
          description: 'Weekly groceries'
        }
      ];
      setTransactions(defaultTransactions);
    }

    if (savedBudgets) {
      setBudgets(JSON.parse(savedBudgets));
    } else {
      const defaultBudgets = [
        {
          id: '1',
          category: 'Groceries',
          amount: 15000
        },
        {
          id: '2',
          category: 'Entertainment',
          amount: 5000
        },
        {
          id: '3',
          category: 'Transportation',
          amount: 3000
        }
      ];
      setBudgets(defaultBudgets);
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('budgets', JSON.stringify(budgets));
    localStorage.setItem('user', JSON.stringify(user));
  }, [transactions, budgets, user]);

  // Filter transactions based on date range
  const filteredTransactions = transactions.filter(t => {
    const transactionDate = new Date(t.date);
    return transactionDate >= dateFilter.startDate && 
           transactionDate <= dateFilter.endDate;
  });

  // Calculate totals
  const totalIncome = filteredTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = filteredTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const remainingBudget = budgets.reduce((sum, b) => sum + b.amount, 0) - totalExpenses;
  const savings = totalIncome - totalExpenses;

  // Transaction actions
  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      date: transaction.date || new Date().toISOString()
    };
    setTransactions([...transactions, newTransaction]);
    toast.success('Transaction added successfully!');
    checkBudgetExceed(newTransaction);
  };

  const updateTransaction = (id, updatedTransaction) => {
    setTransactions(transactions.map(t => 
      t.id === id ? { ...updatedTransaction, id } : t
    ));
    toast.success('Transaction updated successfully!');
    checkBudgetExceed(updatedTransaction);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
    toast.success('Transaction deleted successfully!');
  };

  // Budget actions
  const addBudget = (budget) => {
    const newBudget = {
      ...budget,
      id: Date.now().toString()
    };
    setBudgets([...budgets, newBudget]);
    toast.success('Budget added successfully!');
  };

  const updateBudget = (id, updatedBudget) => {
    setBudgets(budgets.map(b => 
      b.id === id ? { ...updatedBudget, id } : b
    ));
    toast.success('Budget updated successfully!');
  };

  const deleteBudget = (id) => {
    setBudgets(budgets.filter(b => b.id !== id));
    toast.success('Budget deleted successfully!');
  };

  // User actions
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    toast.success('Profile updated successfully!');
  };

  // Check if budget is exceeded
  const checkBudgetExceed = (transaction) => {
    if (transaction.type === 'expense') {
      const budget = budgets.find(b => b.category === transaction.category);
      if (budget) {
        const categoryExpenses = transactions
          .filter(t => t.type === 'expense' && t.category === transaction.category)
          .reduce((sum, t) => sum + t.amount, 0);
        
        if (categoryExpenses > budget.amount) {
          toast.warning(`Budget exceeded for ${budget.category}!`);
        }
      }
    }
  };

  return (
    <FinanceContext.Provider value={{
      transactions: filteredTransactions,
      budgets,
      user,
      dateFilter,
      totalIncome,
      totalExpenses,
      remainingBudget,
      savings,
      isMobile,
      setDateFilter,
      addTransaction,
      updateTransaction,
      deleteTransaction,
      addBudget,
      updateBudget,
      deleteBudget,
      updateUser
    }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);