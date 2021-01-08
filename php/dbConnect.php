<?
$hostName = "localhost";
$userName = "";
$password = "";
$dbName = "";

$link = mysqli_connect($hostName, $userName, $password, $dbName);

if (mysqli_connect($link))
    echo "error";
?>