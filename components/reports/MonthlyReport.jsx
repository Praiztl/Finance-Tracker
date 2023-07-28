// MonthlyReport.js
import React from 'react';

const MonthlyReport = () => {
    // Replace the following data with actual financial data
    const expenses = [300, 400, 200, 500, 600];
    const income = [600, 800, 500, 1000, 900];
    const totalExpenses = expenses.reduce((acc, cur) => acc + cur, 0);
    const totalIncome = income.reduce((acc, cur) => acc + cur, 0);
    const savings = totalIncome - totalExpenses;

    return (
        <div>
            <h2>Monthly Report</h2>
            <p>Total Income: ${totalIncome}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Savings: ${savings}</p>
        </div>
    );
};

export default MonthlyReport;
