import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = () => {
    const data = {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [
            {
                label: 'Budget Allocation',
                data: [20, 20, 10, 20, 20],
                backgroundColor: '#4CAF50',
            },
            {
                label: 'Spent',
                data: [10, 20, 5, 10, 8],
                backgroundColor: '#FF6384',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Stacked Bar Chart Example',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default StackedBarChart;
