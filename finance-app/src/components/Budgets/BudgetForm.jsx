import { useState, useEffect } from 'react';
import { useFinance } from '../../context/FinanceContext';

const BudgetForm = ({ budget, onClose }) => {
    const { addBudget, updateBudget } = useFinance();
    const [formData, setFormData] = useState({
        category: '',
        amount: ''
    });

    useEffect(() => {
        if (budget) {
            setFormData({
                category: budget.category,
                amount: budget.amount.toString()
            });
        }
    }, [budget]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const budgetData = {
            ...formData,
            amount: parseFloat(formData.amount)
        };

        if (budget) {
            updateBudget(budget.id, budgetData);
        } else {
            addBudget({
                ...budgetData,
                id: Date.now().toString()
            });
        }
        onClose();
    };

    const categories = ['Groceries', 'Rent', 'Utilities', 'Transportation', 'Entertainment','Dining', 'Shopping', 'Healthcare', 'Education', 'Other Expense'];

    return (
        <div className="modal-overlay">
            <div className="modal card">
                <h2>{budget ? 'Edit Budget' : 'Add New Budget'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} required disabled={!!budget} >
                            <option value="">Select a category</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" name="amount" value={formData.amount} onChange={handleChange} min="0" step="0.01" required />
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BudgetForm;