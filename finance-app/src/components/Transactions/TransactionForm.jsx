import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTimes } from 'react-icons/fa';

const TransactionForm = ({ transaction, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: '',
    date: new Date(),
    description: ''
  });

  const categories = {
    income: ['Salary', 'Bonus', 'Freelance', 'Investment', 'Other Income'],
    expense: [
      'Groceries', 'Rent', 'Utilities', 'Transportation', 
      'Entertainment', 'Dining', 'Shopping', 'Healthcare', 
      'Education', 'Other Expense'
    ]
  };

  useEffect(() => {
    if (transaction) {
      setFormData({
        type: transaction.type,
        amount: transaction.amount.toString(),
        category: transaction.category,
        date: new Date(transaction.date),
        description: transaction.description || ''
      });
    } else {
      setFormData({
        type: 'expense',
        amount: '',
        category: '',
        date: new Date(),
        description: ''
      });
    }
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submittedData = {
      ...formData,
      amount: parseFloat(formData.amount),
      date: formData.date.toISOString()
    };

    onSubmit(submittedData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>{transaction ? 'Edit Transaction' : 'Add New Transaction'}</h3>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <div className="type-toggle">
              <button
                type="button"
                className={`toggle-option ${formData.type === 'income' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, type: 'income'})}
              >
                Income
              </button>
              <button
                type="button"
                className={`toggle-option ${formData.type === 'expense' ? 'active' : ''}`}
                onClick={() => setFormData({...formData, type: 'expense'})}
              >
                Expense
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {categories[formData.type].map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <DatePicker
              id="date"
              selected={formData.date}
              onChange={(date) => setFormData({...formData, date})}
              dateFormat="MMMM d, yyyy"
              required
              className="date-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description (Optional)</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Add any additional details..."
            />
          </div>

          <div className="form-actions">
            <button type="button" className="secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="primary">
              {transaction ? 'Update Transaction' : 'Add Transaction'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;