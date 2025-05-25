<?php
// db.php
// الاتصال بقاعدة البيانات (تأكد من ضبط البيانات حسب إعداداتك)
$host = 'localhost';
$dbname = 'mokafht';
$user = 'root';
$pass = '';
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8mb4'
];
try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass, $options);
} catch (PDOException $e) {
    die('فشل الاتصال بقاعدة البيانات: ' . $e->getMessage());
}
