document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    fetch('sbc.php')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('dataBody');
        data.forEach(row => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${row.user}</td>
                <td>${row.time}</td>
                <td>${row.vehicle}</td>
                <td>${row.location}</td>
            `;
            tableBody.appendChild(newRow);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
