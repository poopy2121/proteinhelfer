

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="überschrift">
            <h1>protein helper</h1>
                <button id="loginbtn">login</button>
            <dialog id="dialog">
                <button id="closedialog">close</button>
                <div id="welcome-message"></div> <!-- Placeholder for the welcome message -->

        <p>Welcome "👋" </p>

    <!-- Login form -->
        <form id="login-form" action="" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit" id="login-button">Login</button>
        </form>

            </dialog>
    </div>

    <section id="goals-section">
        <h2>Set Your Daily Goals</h2>
        <label>Protein (g): <input type="number" id="protein-goal" min="0"></label>
        <label>Carbs (g): <input type="number" id="carbs-goal" min="0"></label>
        <label>Fats (g): <input type="number" id="fats-goal" min="0"></label>
        <button id="set-goals">Set Goals</button>
    </section>

   <section id="foods-section">
    <h2>Food Database</h2>
    <button id="toggle-foods">Show/Hide Food Database</button>
    <input type="text" id="food-search" placeholder="Search for a food...">
    <div id="food-list"></div>
</section>


   <section id="shopping-list-section">
    <h2>Shopping List</h2>
    <label><input type="checkbox" id="budget-friendly"> Budget-Friendly</label>
    <label><input type="checkbox" id="vegetarian"> Vegetarian</label>
    <button id="generate-shopping-list">Generate Shopping List</button>
    <div id="shopping-list"></div>
</section>

    <script src="script.js"></script>
</body>
</html>

<?php

session_start();
 if (isset($_SESSION['username'])) {
    echo "hi " . htmlspecialchars($_SESSION['username']) . "👋";
}

?>

