// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    // Replace the following data with actual financial data
    const data = {
        labels: ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Others'],
        datasets: [
            {
                data: [300, 150, 200, 100, 250],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FFA726',
                    '#8BC34A',
                ],
            },
        ],
    };

    return (
        <div>
            <h2>Expense Categories</h2>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
