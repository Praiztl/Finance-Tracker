// YearlyReport.js
import React from 'react';

const YearlyReport = () => {
    // Replace the following data with actual financial data
    const expenses = [3000, 4000, 2000, 5000, 6000];
    const income = [6000, 8000, 5000, 10000, 9000];
    const totalExpenses = expenses.reduce((acc, cur) => acc + cur, 0);
    const totalIncome = income.reduce((acc, cur) => acc + cur, 0);
    const savings = totalIncome - totalExpenses;

    return (
        <div>
            <h2>Yearly Report</h2>
            <p>Total Income: ${totalIncome}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Savings: ${savings}</p>
        </div>
    );
};

export default YearlyReport;
