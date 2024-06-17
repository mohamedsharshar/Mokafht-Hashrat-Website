<<<<<<< HEAD
<?php
$host = 'localhost';
$dbname = 'bugs';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $yes = isset($_POST['yes']) ? $_POST['yes'] : 'no'; 
        $date = $_POST['date'];

        $stmt = $pdo->prepare("INSERT INTO bug (name, phone, yes, date) VALUES (?, ?, ?, ?)");

        $stmt->execute([$name, $phone, $yes, $date]);
        echo "Data inserted successfully!";
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$pdo = null;
?>
=======
<?php
$host = 'localhost';
$dbname = 'bugs';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $yes = isset($_POST['yes']) ? $_POST['yes'] : 'no'; 
        $date = $_POST['date'];

        $stmt = $pdo->prepare("INSERT INTO bug (name, phone, yes, date) VALUES (?, ?, ?, ?)");

        $stmt->execute([$name, $phone, $yes, $date]);
        echo "Data inserted successfully!";
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$pdo = null;
?>
>>>>>>> 77235a8 (Update)
