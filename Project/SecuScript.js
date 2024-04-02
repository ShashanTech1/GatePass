
// DATA VIEW
document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    // PENDING DATA
    function fetchData() {
        fetch('SecurityDataView.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('pendingDataTable');
            data.forEach(row => {
                if (row.Status == 'Pending') {
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



// COMPLETED DATA
document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    function fetchData() {
        fetch('SecurityDataView.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('completedDataTable');
            data.forEach(row => {
                // Check if the ID of the row is equal to 1
                if (row.Status == 'Completed') {
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





document.getElementById("pendingBtn").addEventListener("click", function() {
    document.getElementById("checkRequest").classList.add("hidden");
    document.getElementById("pendingRequest").classList.remove("hidden");
});
document.getElementById("completedBtn").addEventListener("click", function() {
    document.getElementById("checkRequest").classList.add("hidden");
    document.getElementById("completedRequest").classList.remove("hidden");
});



document.getElementById("checkRequestBtn2").addEventListener("click", function() {
    document.getElementById("checkRequest").classList.remove("hidden");
    document.getElementById("pendingRequest").classList.add("hidden");
});
document.getElementById("completedBtn2").addEventListener("click", function() {
    document.getElementById("completedRequest").classList.remove("hidden");
    document.getElementById("pendingRequest").classList.add("hidden");
});


document.getElementById("checkRequestBtn3").addEventListener("click", function() {
    document.getElementById("completedRequest").classList.add("hidden");
    document.getElementById("checkRequest").classList.remove("hidden");
});
document.getElementById("pendingBtn3").addEventListener("click", function() {
    document.getElementById("completedRequest").classList.add("hidden");
    document.getElementById("pendingRequest").classList.remove("hidden");
});

