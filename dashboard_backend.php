<?php
// dashboard_backend.php
header('Content-Type: application/json; charset=utf-8');
require_once 'db.php'; // ملف الاتصال بقاعدة البيانات

$action = $_GET['action'] ?? '';

if ($action === 'get_faqs') {
    $faqs = $db->query('SELECT * FROM faqs ORDER BY id DESC')->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($faqs);
    exit;
}
if ($action === 'add_faq' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $q = trim($_POST['question'] ?? '');
    $a = trim($_POST['answer'] ?? '');
    if ($q && $a) {
        $stmt = $db->prepare('INSERT INTO faqs (question, answer) VALUES (?, ?)');
        $stmt->execute([$q, $a]);
    }
    echo json_encode(['success'=>true]);
    exit;
}
if ($action === 'delete_faq') {
    $id = intval($_GET['id'] ?? 0);
    if ($id) {
        $db->prepare('DELETE FROM faqs WHERE id=?')->execute([$id]);
    }
    echo json_encode(['success'=>true]);
    exit;
}
if ($action === 'get_users') {
    $users = $db->query('SELECT * FROM users ORDER BY id DESC')->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
    exit;
}
if ($action === 'delete_user') {
    $id = intval($_GET['id'] ?? 0);
    if ($id) {
        $db->prepare('DELETE FROM users WHERE id=?')->execute([$id]);
    }
    echo json_encode(['success'=>true]);
    exit;
}
echo json_encode(['error'=>'Invalid action']);
exit;
