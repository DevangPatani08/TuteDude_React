import { useFinance } from '../../context/FinanceContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SpendingChart = () => {
    const { transactions } = useFinance();
    const monthlyData = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'expense') {
            const date = new Date(transaction.date);
            const monthYear = `${date.getFullYear()}-${date.getMonth()}`;
            if (!acc[monthYear]) {
                acc[monthYear] = 0;
            }
            acc[monthYear] += transaction.amount;
        }
        return acc;
    }, {});

    const labels = Object.keys(monthlyData).map(key => {
        const [year, month] = key.split('-');
        return new Date(year, month).toLocaleString('default', { month: 'short', year: 'numeric' });
    });

    const data = {
        labels,
        datasets: [
            {
            label: 'Monthly Spending',
            data: Object.values(monthlyData),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Spending Trend',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default SpendingChart;