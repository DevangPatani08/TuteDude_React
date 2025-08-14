import { useFinance } from '../../context/FinanceContext';

const SummaryCards = () => {
    const { totalIncome, totalExpenses, remainingBudget, savings, user } = useFinance();
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2
        }).format(amount).replace('INR', user.currency);
    };

    return (
        <div className="summary-cards">
            <div className="card income-card">
                <h3>Total Income</h3>
                <p>{formatCurrency(totalIncome)}</p>
            </div>
            <div className="card expense-card">
                <h3>Total Expenses</h3>
                <p>{formatCurrency(totalExpenses)}</p>
            </div>
            <div className="card budget-card">
                <h3>Remaining Budget</h3>
                <p>{formatCurrency(remainingBudget)}</p>
            </div>
            <div className="card savings-card">
                <h3>Savings</h3>
                <p>{formatCurrency(savings)}</p>
            </div>
        </div>
    );
};

export default SummaryCards;