import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import BudgetList from '../components/Budgets/BudgetList';
import BudgetForm from '../components/Budgets/BudgetForm';

const BudgetsPage = () => {
    const { budgets } = useFinance();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingBudget, setEditingBudget] = useState(null);
    const handleEdit = (budget) => {
        setEditingBudget(budget);
        setIsFormOpen(true);
    };
    const handleFormClose = () => {
        setIsFormOpen(false);
        setEditingBudget(null);
    };

    return (
        <div className="budgets-page">
            <div className="page-header">
                <h1>Budget Management</h1>
                <button onClick={() => setIsFormOpen(true)}>Add Budget</button>
            </div>
            <BudgetList onEdit={handleEdit} />
            {isFormOpen && (
                <BudgetForm budget={editingBudget} onClose={handleFormClose} />
            )}
        </div>
    );
};

export default BudgetsPage;