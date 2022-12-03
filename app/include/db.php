<?php

$link = mysqli_connect('localhost', 'root', '', 'contests_db');

if (mysqli_connect_errno())
{
    echo 'Ошибка подключения к БД (' . mysqli_connect_errno() . '): ' . mysqli_connect_error();
    exit();
}

?>