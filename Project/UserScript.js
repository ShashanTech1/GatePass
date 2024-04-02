document.getElementById("myRequestBtn").addEventListener("click", function() {
    document.getElementById("newRequest").classList.add("hidden");
    document.getElementById("myRequestsContainer").classList.remove("hidden");
});
document.getElementById("requestHistoryBtn").addEventListener("click", function() {
    document.getElementById("newRequest").classList.add("hidden");
    document.getElementById("myRequestsHistoryContainer").classList.remove("hidden");
});



document.getElementById("newRequestBtn2").addEventListener("click", function() {
    document.getElementById("newRequest").classList.remove("hidden");
    document.getElementById("myRequestsContainer").classList.add("hidden");
});
document.getElementById("requestHistoryBtn2").addEventListener("click", function() {
    document.getElementById("myRequestsHistoryContainer").classList.remove("hidden");
    document.getElementById("myRequestsContainer").classList.add("hidden");
});


document.getElementById("newRequestBtn3").addEventListener("click", function() {
    document.getElementById("newRequest").classList.remove("hidden");
    document.getElementById("myRequestsHistoryContainer").classList.add("hidden");
});
document.getElementById("myRequestBtn3").addEventListener("click", function() {
    document.getElementById("myRequestsContainer").classList.remove("hidden");
    document.getElementById("myRequestsHistoryContainer").classList.add("hidden");
});

// DATA VIEW
document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    // Today DATA
    function fetchData() {
        fetch('userRequestData.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('TodayDataTable');
            data.forEach(row => {
                if (row.Status !== 'Pending') {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${row.ID}</td>
                        <td>${row.Requestor}</td>
                        <td>${row.CheckOutTime}</td>
                        <td>${row.CheckInTime}</td>
                        <td>${row.VehicleID}</td>
                        <td>${row.ReasonCategory}</td>
                    `;
                    tableBody.appendChild(newRow);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    }

});

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    // Today DATA
    function fetchData() {
        fetch('userRequestData.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('HistoryDataTable');
            data.forEach(row => {
                if (row.Status === 'Pending') {
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${row.ID}</td>
                        <td>${row.Requestor}</td>
                        <td>${row.CheckOutTime}</td>
                        <td>${row.CheckInTime}</td>
                        <td>${row.VehicleID}</td>
                        <td>${row.ReasonCategory}</td>
                    `;
                    tableBody.appendChild(newRow);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    }

});