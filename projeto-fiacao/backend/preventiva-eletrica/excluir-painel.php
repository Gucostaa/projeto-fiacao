<?php
include '../conexao.php';

if (!empty($_POST['painel_id'])) {
    $painel_id = $_POST['painel_id'];
    $stmt = $pdo->prepare("DELETE FROM paineis WHERE id = :id");
    $stmt->bindParam(':id', $painel_id);
    $stmt->execute();
}

header("Location: /projeto-fiacao/frontend/pages/area-exclusiva.php");
exit;
