<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$servername = "localhost";
$username = "WebUser";
$password = "12345678";
$dbname = "gatepass";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "INSERT INTO vehicledetails (VehicleNo, VehicleName, VehicleType, DriverNIC, DriverName, CreatedBy)
        VALUES (?, ?, ?, ?, ?, 'Admin')";


$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $_POST["vehicleNo"], $_POST["vehicleName"], $_POST["vehicleType"], $_POST["driverNIC"], $_POST["driverName"]);

if ($stmt->execute()) {
    echo "New vehicle added successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>