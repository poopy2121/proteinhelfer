<?php 

include("database.php"); // Include database connection

if (isset($_POST['username'], $_POST['password'])) {

    $username = htmlspecialchars($_POST['username']);
    $password = $_POST['password'];

    // Prepare and execute the SQL query
    $stmt = $conn->prepare("SELECT * FROM userinfo WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Start a session and store the username
        session_start();
        $_SESSION['username'] = $username;
        $_SESSION['password'] = $password;
        $_SESSION['success'] = "Hi " . $username . "👋";
        header("Location: index.php");  
        exit;
    } else {
        echo "Login not successful. Invalid username or password.";
    }






    $stmt->close();
}

$conn->close();
?>










<!-- yt approach 
    $sql = "select * from userinfo where username = '$username' and password = '$password'";
    
    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_array($result, mysqli_assoc);gpt approach, weil stmt anscheinend safer ist gegen  sql injections
   -->