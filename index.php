<<<<<<< HEAD
<?php
// إعدادات قاعدة البيانات
=======
<<<<<<< HEAD
<?php
>>>>>>> 03fb3fb590f0d3fc08fd77a9b091ae80e411d355
$host = 'localhost';
$dbname = 'bugs';
$username = 'root';
$password = '';

<<<<<<< HEAD
// محاولة الاتصال بقاعدة البيانات
=======
>>>>>>> 03fb3fb590f0d3fc08fd77a9b091ae80e411d355
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

<<<<<<< HEAD
    // التحقق مما إذا تم إرسال النموذج
    if(isset($_POST['submit'])) {
        $name = trim($_POST['name']);
        $phone = trim($_POST['phone']);
        $yes = isset($_POST['yes']) ? $_POST['yes'] : 'no'; 
        $date = $_POST['date'];

        // تحقق من صحة البيانات
        if(empty($name) || empty($phone) || empty($date)) {
            echo "يرجى ملء جميع الحقول المطلوبة.";
        } else {
            // إعداد استعلام الإدخال
            $stmt = $pdo->prepare("INSERT INTO bug (name, phone, yes, date) VALUES (?, ?, ?, ?)");
            // تنفيذ الاستعلام مع القيم المدخلة
            $stmt->execute([$name, $phone, $yes, $date]);
            echo "تم الحجز بنجاح!";
        }
    }
} catch(PDOException $e) {
    echo "خطأ: " . $e->getMessage();
}

// إغلاق الاتصال بقاعدة البيانات
$pdo = null;
?>
=======
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
>>>>>>> 03fb3fb590f0d3fc08fd77a9b091ae80e411d355
