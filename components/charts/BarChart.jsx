// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    // Replace the following data with actual financial data
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Expenses',
                data: [300, 400, 200, 500, 600],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Income',
                data: [600, 800, 500, 1000, 900],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Monthly Expenses and Income</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
