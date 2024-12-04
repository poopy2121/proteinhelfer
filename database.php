<?php
//  header('Content-Type: application/json'); // Set response type to JSON

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



// Output the data in JSON format echo 

// "was geht";


// Close the database connection
?>



