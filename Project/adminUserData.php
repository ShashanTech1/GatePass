<?php
include 'dbConnect.php';

try {
    $stmt = $pdo->query("SELECT * FROM userdetails"); 
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
} catch (PDOException $e) {
    die("Error fetching data: " . $e->getMessage());
}
?>