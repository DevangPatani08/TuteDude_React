import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import SummaryCards from '../components/Dashboard/SummaryCards';
import SpendingChart from '../components/Dashboard/SpendingChart';
import ExpensePieChart from '../components/Dashboard/ExpensePieChart';
import TodaysExpenses from '../components/Dashboard/TodaysExpenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardPage = () => {
    const { dateFilter, setDateFilter } = useFinance();
    const [showDateRange, setShowDateRange] = useState(false);

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Financial Overview</h1>
                <div className="date-filter">
                    <button onClick={() => setShowDateRange(!showDateRange)}>
                        {showDateRange ? 'Hide Date Filter' : 'Show Date Filter'}
                    </button>
                    {showDateRange && (
                        <div className="date-range-picker">
                            <div>
                                <label>Start Date:</label>
                                <DatePicker selected={dateFilter.startDate} onChange={(date) => setDateFilter({...dateFilter, startDate: date})} selectsStart startDate={dateFilter.startDate} endDate={dateFilter.endDate} />
                            </div>
                            <div>
                                <label>End Date:</label>
                                <DatePicker selected={dateFilter.endDate} onChange={(date) => setDateFilter({...dateFilter, endDate: date})} selectsEnd startDate={dateFilter.startDate} endDate={dateFilter.endDate} minDate={dateFilter.startDate} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <SummaryCards />
            <div className="charts-container">
                <SpendingChart />
                <ExpensePieChart />
            </div>
            <TodaysExpenses />
        </div>
    );
};

export default DashboardPage;