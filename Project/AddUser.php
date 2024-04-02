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


$sql = "INSERT INTO UserDetails (Email, UserName, UserRole, PasswordHash, Department, Created, CreatedBy)
        VALUES (?, ?, ?, ?, ?, NOW(), 'Developer')";


$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $_POST["email"], $_POST["username"], $_POST["userrole"], password_hash($_POST["password"], PASSWORD_DEFAULT), $_POST["department"]);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
