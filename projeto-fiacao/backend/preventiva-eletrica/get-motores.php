<?php
header('Content-Type: application/json');
require '../../backend/conexao.php';

if (!isset($_GET['equipamento']) || empty($_GET['equipamento'])) {
    echo json_encode([]);
    exit;
}

$painel_nome = $_GET['equipamento'];

// Pega o id do painel pelo nome
$sqlPainel = "SELECT id FROM paineis WHERE nome = :nome LIMIT 1";
$stmtPainel = $pdo->prepare($sqlPainel);
$stmtPainel->execute(['nome' => $painel_nome]);
$painel = $stmtPainel->fetch(PDO::FETCH_ASSOC);

if (!$painel) {
    echo json_encode([]);
    exit;
}

$painel_id = $painel['id'];

// Pega motores com o codigo_fsp junto
$sqlMotores = "SELECT id as id_motor, nome_motor, codigo_fsp FROM motores WHERE painel_id = :painel_id ORDER BY nome_motor";
$stmtMotores = $pdo->prepare($sqlMotores);
$stmtMotores->execute(['painel_id' => $painel_id]);
$motores = $stmtMotores->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($motores);
