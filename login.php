<?php 

include("database.php");  // incldue bascially ensures communciation between them and the action in html redirects

if (isset($_POST['submit'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];

     $stmt = $conn->prepare("SELECT * FROM userinfo WHERE username = ? AND password = ?");
    
    // Bind the username parameter
    $stmt->bind_param("ss", $username, $password);

    // Execute the statement
    $stmt->execute();

    // Fetch the result 

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
    
        echo  "hi " .  $username . " 👋"; }
        else {
            echo "login not succesful. invalid rusername or password";
        }
    }
?>
















<!-- yt approach 
    $sql = "select * from userinfo where username = '$username' and password = '$password'";
    
    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_array($result, mysqli_assoc);gpt approach, weil stmt anscheinend safer ist gegen  sql injections
   -->