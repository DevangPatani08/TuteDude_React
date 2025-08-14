import { useFinance } from '../../context/FinanceContext';

const BudgetList = ({ onEdit }) => {
    const { budgets, transactions, deleteBudget, user } = useFinance();
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2
        }).format(amount).replace('INR', user.currency);
    };

    const getCategorySpending = (category) => {
        return transactions.filter(t => t.type === 'expense' && t.category === category).reduce((sum, t) => sum + t.amount, 0);
    };

    return (
        <div className="budget-list card">
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Budget</th>
                        <th>Spent</th>
                        <th>Remaining</th>
                        <th>Progress</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {budgets.map((budget) => {
                        const spent = getCategorySpending(budget.category);
                        const remaining = budget.amount - spent;
                        const percentage = Math.min(100, (spent / budget.amount) * 100);
            
                        return (
                            <tr key={budget.id}>
                                <td>{budget.category}</td>
                                <td>{formatCurrency(budget.amount)}</td>
                                <td>{formatCurrency(spent)}</td>
                                <td className={remaining < 0 ? 'danger' : ''}>
                                    {formatCurrency(remaining)}
                                </td>
                                <td>
                                    <div className="progress-bar">
                                        <div className={`progress ${percentage > 100 ? 'danger' : ''}`} style={{ width: `${percentage}%` }}></div>
                                    </div>
                                    <span>{Math.round(percentage)}%</span>
                                </td>
                                <td className="actions">
                                    <button onClick={() => onEdit(budget)}>Edit</button>
                                    <button className="danger" onClick={() => deleteBudget(budget.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BudgetList;