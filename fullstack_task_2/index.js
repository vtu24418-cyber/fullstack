const records = [
    { name: "Alice Smith", dept: "Engineering", date: "2023-05-15" },
    { name: "Bob Johnson", dept: "Marketing", date: "2022-11-01" },
    { name: "Charlie Davis", dept: "Engineering", date: "2024-01-10" },
    { name: "Diana Prince", dept: "Design", date: "2023-08-20" },
    { name: "Edward Norton", dept: "Marketing", date: "2021-03-12" }
];

let currentData = [...records];

function init() {
    renderStats();
    renderTable(currentData);
}

function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = data.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.dept}</td>
            <td>${item.date}</td>
        </tr>
    `).join('');
}

function sortData(key) {
    currentData.sort((a, b) => a[key].localeCompare(b[key]));
    renderTable(currentData);
}

document.getElementById('deptFilter').addEventListener('change', (e) => {
    const dept = e.target.value;
    currentData = dept === "All" 
        ? [...records] 
        : records.filter(r => r.dept === dept);
    renderTable(currentData);
});

function renderStats() {
    const counts = records.reduce((acc, curr) => {
        acc[curr.dept] = (acc[curr.dept] || 0) + 1;
        return acc;
    }, {});

    const statsDiv = document.getElementById('stats-container');
    statsDiv.innerHTML = Object.keys(counts).map(dept => `
        <div class="stat-card">
            <h3>${dept}</h3>
            <p>${counts[dept]} Members</p>
        </div>
    `).join('');
}

init();
