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

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $requestor = $_POST["requestorMail"]; 
    $reasonCategory = $_POST["reasonCategory"];
    $reasonNote = $_POST["reasonNote"];
    $outDate = date("Y-m-d"); 
    $outTime = $_POST["outTime"];
    $createdBy = 'Admin'; 
    $vehicleNo = $_POST["vehicleNo"];
    $vehicleType = $_POST["vehicleType"];

    $sql = "INSERT INTO requestdetails (Requestor, ReasonCategory, ReasonNote, OutDate, OutTime, Created, CreatedBy, VehicleNo, VehicleType)
            VALUES (?, ?, ?, ?, ?, NOW(), ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssss", $requestor, $reasonCategory, $reasonNote, $outDate, $outTime, $createdBy, $vehicleNo, $vehicleType);

    if ($stmt->execute()) {
        echo "New request added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}