<?php
// faq_backend.php
header('Content-Type: application/json; charset=utf-8');
require_once 'db.php';

$action = $_GET['action'] ?? '';

if ($action === 'get_faqs') {
    $faqs = $db->query('SELECT * FROM faqs ORDER BY id DESC')->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($faqs);
    exit;
}
echo json_encode(['error'=>'Invalid action']);
exit;
