<?php
// Check if the form is submitted
if (isset($_GET["username"]) && isset($_GET["password"])) {
    // Connect to your MySQL database
    $conn = mysqli_connect("localhost", "username", "password", "database_name");

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Retrieve user input
    $username = $_GET['username'];
    $password = $_GET['password'];

    // Validate user input
    if (empty($username) || empty($password)) {
        echo "Please enter both username and password.";
    } else {
        // Query the database
        $sql = "SELECT * FROM users WHERE username = '$username'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) == 1) {
            // Verify credentials
            $row = mysqli_fetch_assoc($result);
            if (password_verify($password, $row['password'])) {
                // Start session and set session variables
                session_start();
                $_SESSION['username'] = $username;
                // Redirect to secured page
                header("Location: secured_page.php");
                exit();
            } else {
                echo "Invalid username or password.";
            }
        } else {
            echo "Invalid username or password.";
        }
    }
}
?>
