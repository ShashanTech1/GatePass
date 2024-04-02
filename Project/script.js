// Add JavaScript code here

/*
document.getElementById("userManagementBtn").addEventListener("click", function() {
    document.getElementById("container1").classList.add("hidden");
    document.getElementById("container2").classList.remove("hidden");
});

document.getElementById("vehicleManagementBtn").addEventListener("click", function() {
    document.getElementById("container1").classList.add("hidden");
    document.getElementById("container3").classList.remove("hidden");
});

document.getElementById("requestManagementBtn").addEventListener("click", function() {
    document.getElementById("container1").classList.add("hidden");
    document.getElementById("container4").classList.remove("hidden");
});
*/


/****** POPUP ***** */
function togglePopup() {
    var popup = document.getElementById("addUserPopup");
    popup.style.display = (popup.style.display === "none") ? "block" : "none";
}
function togglePopup2() {
    var popup = document.getElementById("addVehiclePopup");
    popup.style.display = (popup.style.display === "none") ? "block" : "none";
}

/*** VISIBLE CHANGE *****/

document.getElementById("userManagementBtn").addEventListener("click", function() {

    document.getElementById("addUserContainer").classList.remove("hidden");
    document.getElementById("container1").classList.add("hidden");
    document.getElementById("addVehicleContainer").classList.add("hidden");
});

document.getElementById("vehicleManagementBtn").addEventListener("click", function() {

    document.getElementById("addUserContainer").classList.add("hidden");
    document.getElementById("container1").classList.add("hidden");
    document.getElementById("addVehicleContainer").classList.remove("hidden");

});

document.getElementById("requestManagementBtn").addEventListener("click", function() {

    document.getElementById("addUserContainer").classList.add("hidden");
    document.getElementById("container1").classList.add("hidden");
    document.getElementById("requestsContainer").classList.remove("hidden");

});







document.getElementById("NavAdminPortal").addEventListener("click", function(event) {
    window.location.href = "AdminPanel.html";
});
document.getElementById("NavAdminPortal1").addEventListener("click", function(event) {
    window.location.href = "AdminPanel.html";
});
document.getElementById("NavAdminPortal2").addEventListener("click", function(event) {
    window.location.href = "AdminPanel.html";
});


//PRINT
function printTable1() {
    window.print();
}

// DATA VIEW
document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    // USER DATA
    function fetchData() {
        fetch('adminUserData.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('userDataTable');
            data.forEach(row => {
            
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${row.Email}</td>
                        <td>${row.UserName}</td>
                        <td>${row.UserRole}</td>
                        <td>${row.Department}</td>
                    `;
                    tableBody.appendChild(newRow);
            
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    }

});


// DATA VIEW
document.addEventListener("DOMContentLoaded", function() {
    fetchData();
    // USER DATA
    function fetchData() {
        fetch('adminVehicleData.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('vehicleDataTable');
            data.forEach(row => {
            
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${row.VehicleNo}</td>
                        <td>${row.VehicleType}</td>
                        <td>${row.Driver}</td>
                        <td>${row.DriverNIC}</td>
                    `;
                    tableBody.appendChild(newRow);
            
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    }

});