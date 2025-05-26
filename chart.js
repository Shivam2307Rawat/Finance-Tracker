// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas elements for the charts
    const expensePieChartCtx = document.getElementById('expensePieChart').getContext('2d');
    const incomePieChartCtx = document.getElementById('incomePieChart').getContext('2d');
    const timeSeriesChartCtx = document.getElementById('timeSeriesChart').getContext('2d');

    // Sample data for the expense pie chart
    const expenseData = {
        labels: ['Food', 'Housing', 'Transportation', 'Entertainment', 'Other'],
        datasets: [{
            label: 'Expenses',
            data: [300, 250, 100, 150, 200], // Sample expense values
            backgroundColor: [ // Colors for each segment of the pie chart
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [ // Border colors for each segment
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1 // Width of the border
        }]
    };

    // Sample data for the income pie chart
    const incomeData = {
        labels: ['Salary', 'Investments', 'Other Income'],
        datasets: [{
            label: 'Income',
            data: [500, 300, 100], // Sample income values
            backgroundColor: [ // Colors for each segment
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)'
            ],
            borderColor: [ // Border colors for each segment
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1 // Width of the border
        }]
    };

    // Sample data for the time series line chart
    const timeSeriesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months
        datasets: [{
            label: 'Income',
            data: [800, 1000, 900, 1200, 1100, 1300, 1200, 1400, 1300, 1500, 1400, 1600], // Sample income data over time
            borderColor: 'rgba(75, 192, 192, 1)', // Line color for income
            fill: false, // Do not fill area under the line
            pointRadius: 5, // Radius of data points
            pointHoverRadius: 7 // Radius of data points on hover
        }, {
            label: 'Expenses',
            data: [600, 700, 500, 800, 600, 900, 800, 1000, 900, 1100, 1000, 1200], // Sample expense data over time
            borderColor: 'rgba(255, 99, 132, 1)', // Line color for expenses
            fill: false, // Do not fill area under the line
            pointRadius: 5, // Radius of data points
            pointHoverRadius: 7 // Radius of data points on hover
        }]
    };

    // Declare chart variables globally so they can be accessed if needed (e.g., for updates)
    let expensePieChart, incomePieChart, timeSeriesChart;

    // Function to create all charts
    function createCharts() {
        // Create the expense pie chart
        expensePieChart = new Chart(expensePieChartCtx, {
            type: 'pie', // Type of chart
            data: expenseData, // Data for the chart
            options: {
                responsive: true, // Make the chart responsive
                maintainAspectRatio: true, // Maintain aspect ratio (can be false if you want to control width/height independently)
                plugins: {
                    legend: {
                        position: 'top' // Position of the legend
                    },
                    title: {
                        display: true, // Display the chart title
                        text: 'Expense Breakdown', // Title text
                        font: {
                            size: 16 // Font size of the title
                        }
                    }
                }
            }
        });

        // Create the income pie chart
        incomePieChart = new Chart(incomePieChartCtx, {
            type: 'pie', // Type of chart
            data: incomeData, // Data for the chart
            options: {
                responsive: true, // Make the chart responsive
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top' // Position of the legend
                    },
                    title: {
                        display: true, // Display the chart title
                        text: 'Income Sources', // Title text
                        font: {
                            size: 16 // Font size of the title
                        }
                    }
                }
            }
        });

        // Create the time series line chart
        timeSeriesChart = new Chart(timeSeriesChartCtx, {
            type: 'line', // Type of chart
            data: timeSeriesData, // Data for the chart
            options: {
                responsive: true, // Make the chart responsive
                maintainAspectRatio: true,
                scales: { // Configuration for chart scales (axes)
                    x: {
                        display: true, // Display the X-axis
                        title: {
                            display: true,
                            text: 'Month', // Label for the X-axis
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        display: true, // Display the Y-axis
                        title: {
                            display: true,
                            text: 'Amount ($)', // Label for the Y-axis
                            font: {
                                size: 12
                            }
                        },
                        beginAtZero: true // Start the Y-axis from zero
                    }
                },
                plugins: {
                    legend: {
                        position: 'top' // Position of the legend
                    },
                    title: {
                        display: true, // Display the chart title
                        text: 'Income vs Expenses Over Time', // Title text
                        font: {
                            size: 16 // Font size of the title
                        }
                    }
                },
                interaction: { // How the chart interacts with user input (e.g., hover)
                    intersect: false, // Tooltip will show for items close to the mouse, not just direct hits
                    mode: 'index' // Find all items at the same X-axis index
                },
                hover: { // Hover behavior
                    mode: 'nearest', // Find the nearest item to the mouse
                    intersect: true // Hover will trigger when the mouse intersects an item
                }
            }
        });
    }

    // Call the function to create the charts
    createCharts();
});
