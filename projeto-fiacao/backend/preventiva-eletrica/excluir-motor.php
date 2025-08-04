<?php
include '../conexao.php';

if (!empty($_POST['motor_id'])) {
    $motor_id = $_POST['motor_id'];
    $stmt = $pdo->prepare("DELETE FROM motores WHERE id = :id");
    $stmt->bindParam(':id', $motor_id);
    $stmt->execute();
}

header("Location: /projeto-fiacao/frontend/pages/area-exclusiva.php");
exit;
