<?php
include '../conexao.php';

if (!empty($_POST['nome_painel'])) {
    $nome = $_POST['nome_painel'];
    $stmt = $pdo->prepare("INSERT INTO paineis (nome) VALUES (:nome)");
    $stmt->bindParam(':nome', $nome);
    $stmt->execute();
}

header("Location: /projeto-fiacao/frontend/pages/area-exclusiva.php");
exit;
