<?php
// إنشاء قاعدة بيانات MySQL وليس SQLite
$host = 'localhost';
$dbname = 'bugs';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // إنشاء قاعدة البيانات إذا لم تكن موجودة
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$dbname`");
    // إنشاء الجدول إذا لم يكن موجودًا
    $query = "CREATE TABLE IF NOT EXISTS bug (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(30) NOT NULL,
        yes ENUM('yes','no') NOT NULL,
        date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
    $pdo->exec($query);
    echo 'Database and table created successfully.';
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}
?>