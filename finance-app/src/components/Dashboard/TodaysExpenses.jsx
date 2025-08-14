import { useFinance } from '../../context/FinanceContext';

const TodaysExpenses = () => {
    const { transactions, user } = useFinance();
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2
        }).format(amount).replace('INR', user.currency);
    };

    const today = new Date().toISOString().split('T')[0];
    const todaysExpenses = transactions.filter(
        t => t.type === 'expense' && t.date.includes(today)
    );

    return (
        <div className="todays-expenses card">
            <h3>Today's Expenses</h3>
            {todaysExpenses.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todaysExpenses.map((expense) => (
                            <tr key={expense.id}>
                                <td>{formatCurrency(expense.amount)}</td>
                                <td>{expense.category}</td>
                                <td>{expense.description || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No expenses recorded for today.</p>
            )}
        </div>
    );
};

export default TodaysExpenses;