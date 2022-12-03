<?php
    require_once('functions.php');

    $surname = $_POST['surname'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $connect = db_connect();
    $query = "INSERT INTO `users`(`name`, `lastName`, `sureName`, `online`, `password`) VALUES ('$firstname', '$lastname', '$surname', 0, '$password')";
    mysqli_query($connect, $query);
?>