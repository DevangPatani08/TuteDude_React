import { useFinance } from '../../context/FinanceContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = () => {
    const { transactions } = useFinance();
    const categoryData = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'expense') {
            if (!acc[transaction.category]) {
                acc[transaction.category] = 0;
            }
            acc[transaction.category] += transaction.amount;
        }
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categoryData),
        datasets: [
            {
                label: 'Expenses by Category',
                data: Object.values(categoryData),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Pie data={data} />;
};

export default ExpensePieChart;