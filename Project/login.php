<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'dbConnect.php';




if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $stmt = $conn->prepare("SELECT * FROM userdetails WHERE UserName = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $stored_hashed_password = $row['PasswordHash'];


        if (password_verify($password, $stored_hashed_password)) {
            $role = $row['UserRole']; 
            switch ($role) {
                case 'Admin':
                    header("Location: adminPanel.html");
                    break;
                case 'Security':
                    header("Location: securityPanel.html");
                    break;
                case 'User':
                    header("Location: userPanel.php");
                    break;
                case 'Manager':
                        header("Location: userPanel.php");
                        break;
                default:
                    echo "Invalid user role.";
            }
            exit;
        } else {
            echo "Invalid username or password.";
        }
    } else {
        echo "Invalid username or password.";
    }


    $stmt->close();
} else {
    header("Location: index.html");
    exit;
}


$conn->close();
?>