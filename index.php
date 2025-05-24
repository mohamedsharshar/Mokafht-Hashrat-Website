<?php
// إعدادات قاعدة البيانات
$host = 'localhost';
$dbname = 'bugs';
$username = 'root';
$password = '';

// محاولة الاتصال بقاعدة البيانات
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

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
