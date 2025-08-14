import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import TransactionList from '../components/Transactions/TransactionList';
import TransactionForm from '../components/Transactions/TransactionForm';

const TransactionsPage = () => {
    const { transactions } = useFinance();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTransaction, setEditingTransaction] = useState(null);
    const handleEdit = (transaction) => {
        setEditingTransaction(transaction);
        setIsFormOpen(true);
    };
    const handleFormClose = () => {
        setIsFormOpen(false);
        setEditingTransaction(null);
    };

    return (
        <div className="transactions-page">
            <div className="page-header">
                <h1>Transaction History</h1>
                <button onClick={() => setIsFormOpen(true)}>Add Transaction</button>
            </div>
            <TransactionList onEdit={handleEdit} />
            {isFormOpen && (
                <TransactionForm transaction={editingTransaction} onClose={handleFormClose} />
            )}
        </div>
    );
};

export default TransactionsPage;