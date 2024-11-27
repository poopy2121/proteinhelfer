<?php
header('Content-Type: application/json'); // Set response type to JSON

// Database connection details
$servername = "127.0.0.1";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password is empty for XAMPP
$dbname = "proteinhelderDB"; // The name of your database

// Create a new MySQLi connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to get all food items
$sql = "SELECT * FROM foods";
$result = $conn->query($sql);

// Prepare the data for output
$foods = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $foods[] = $row; // Add each row to the foods array
    }
}

// Output the data in JSON format
echo json_encode($foods);

// Close the database connection
$conn->close();
?>



