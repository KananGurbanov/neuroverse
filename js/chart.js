// Sample data for charts
let performanceData = [40, 60, 80, 100, 70, 50, 60];

// Code to render bar chart or graph
function renderBarChart() {
    let chartContainer = document.querySelector('.bar-chart-container');
    chartContainer.innerHTML = ''; // Clear existing bars

    performanceData.forEach(value => {
        let bar = document.createElement('div');
        bar.style.height = `${value}%`;
        bar.classList.add('bar');
        chartContainer.appendChild(bar);
    });
}

renderBarChart();
