document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to show the active section
    function showActiveSection() {
        const currentHash = window.location.hash || '#overview'; // Default to overview if no hash
        sections.forEach(section => {
            if (section.id === currentHash.substring(1)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Show the section when the page loads or the hash changes
    showActiveSection();

    // Listen for click events on sidebar links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            window.location.hash = event.target.getAttribute('href'); // Change the URL hash
            showActiveSection(); // Show the relevant section
        });
    });

    // Update active section when the hash changes (using the back/forward browser buttons)
    window.addEventListener('hashchange', showActiveSection);

    // Performance Chart (Bar Chart)
    const performanceChart = document.getElementById('performanceChart').getContext('2d');
    const chart = new Chart(performanceChart, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Performance This Week',
                data: [10, 15, 25, 30, 40, 35, 50],
                backgroundColor: '#4C8BF5',
                borderColor: '#4C8BF5',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Real-time Performance Chart (Line Chart)
    const realTimeChart = document.getElementById('realTimeChart').getContext('2d');
    const realTimeData = new Chart(realTimeChart, {
        type: 'line',
        data: {
            labels: ['0s', '5s', '10s', '15s', '20s', '25s'],
            datasets: [{
                label: 'Focus and Attention',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: '#4C8BF5',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Weekly Performance Chart (Bar Chart)
    const weeklyPerformanceChart = document.getElementById('weeklyPerformanceChart').getContext('2d');
    const weeklyChart = new Chart(weeklyPerformanceChart, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Weekly Performance',
                data: [20, 25, 30, 35, 40, 45, 50],
                backgroundColor: '#2F3A5A',
                borderColor: '#2F3A5A',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
