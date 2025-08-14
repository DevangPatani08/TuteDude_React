import { useState } from 'react';
import { useFinance } from '../../context/FinanceContext';
import { FaEdit, FaTrash, FaChevronDown, FaChevronUp, FaPlusCircle } from 'react-icons/fa';
import TransactionForm from './TransactionForm';

const TransactionList = () => {
  const { 
    transactions, 
    deleteTransaction, 
    user,
    isMobile,
    addTransaction,
    updateTransaction
  } = useFinance();
  
  const [expandedId, setExpandedId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount).replace('INR', user.currency);
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (transactionData) => {
    if (editingTransaction) {
      updateTransaction(editingTransaction.id, transactionData);
    } else {
      addTransaction(transactionData);
    }
    setIsFormOpen(false);
    setEditingTransaction(null);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingTransaction(null);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="transaction-page">
      <div className="page-header">
        <h2>Transaction History</h2>
        <button 
          className="add-button"
          onClick={() => {
            setEditingTransaction(null);
            setIsFormOpen(true);
          }}
        >
          {isMobile ? <FaPlusCircle /> : 'Add Transaction'}
        </button>
      </div>

      {isMobile ? (
        <div className="mobile-transactions">
          {transactions.length === 0 ? (
            <div className="empty-state">
              <p>No transactions found</p>
            </div>
          ) : (
            transactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className={`transaction-card ${transaction.type}`}
                onClick={() => toggleExpand(transaction.id)}
              >
                <div className="transaction-header">
                  <div className="transaction-main">
                    <span className="transaction-category">
                      {transaction.category}
                    </span>
                    <span className="transaction-amount">
                      {formatCurrency(transaction.amount)}
                    </span>
                  </div>
                  <div className="transaction-actions">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(transaction);
                      }}
                      aria-label="Edit transaction"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      className="danger"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTransaction(transaction.id);
                      }}
                      aria-label="Delete transaction"
                    >
                      <FaTrash />
                    </button>
                    {expandedId === transaction.id ? 
                      <FaChevronUp /> : <FaChevronDown />
                    }
                  </div>
                </div>
                
                {expandedId === transaction.id && (
                  <div className="transaction-details">
                    <div className="detail-row">
                      <span className="detail-label">Type:</span>
                      <span className={`detail-value ${transaction.type}`}>
                        {transaction.type}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Date:</span>
                      <span className="detail-value">
                        {formatDate(transaction.date)}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Description:</span>
                      <span className="detail-value">
                        {transaction.description || 'No description'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="desktop-transactions">
          {transactions.length === 0 ? (
            <div className="empty-state">
              <p>No transactions found</p>
              <button 
                className="add-button"
                onClick={() => setIsFormOpen(true)}
              >
                Add Your First Transaction
              </button>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className={transaction.type}>
                    <td className="transaction-type">
                      <span className={`type-badge ${transaction.type}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="transaction-amount">
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td className="transaction-category">
                      {transaction.category}
                    </td>
                    <td className="transaction-date">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="transaction-description">
                      {transaction.description || '-'}
                    </td>
                    <td className="transaction-actions">
                      <button 
                        onClick={() => handleEdit(transaction)}
                        aria-label="Edit transaction"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        className="danger"
                        onClick={() => deleteTransaction(transaction.id)}
                        aria-label="Delete transaction"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {isFormOpen && (
        <TransactionForm 
          transaction={editingTransaction}
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
};

export default TransactionList;