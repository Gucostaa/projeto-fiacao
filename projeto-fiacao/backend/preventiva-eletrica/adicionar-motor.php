<?php
include '../conexao.php';

if (!empty($_POST['nome_motor']) && !empty($_POST['painel_id'])) {
    $nome_motor = $_POST['nome_motor'];
    $painel_id = $_POST['painel_id'];

    // Pega o maior número usado no codigo_fsp (ex: FSP001 -> 1)
    $stmt = $pdo->query("SELECT MAX(CAST(SUBSTRING(codigo_fsp, 4) AS UNSIGNED)) AS max_num FROM motores");
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $max_num = $row['max_num'] ?? 0;
    $next_num = $max_num + 1;

    // Formata o codigo_fsp com zeros à esquerda (ex: FSP001)
    $codigo_fsp = 'FSP' . str_pad($next_num, 3, '0', STR_PAD_LEFT);

    // Insere no banco com o codigo_fsp
    $stmt = $pdo->prepare("INSERT INTO motores (painel_id, nome_motor, codigo_fsp) VALUES (:painel_id, :nome_motor, :codigo_fsp)");
    $stmt->bindParam(':painel_id', $painel_id);
    $stmt->bindParam(':nome_motor', $nome_motor);
    $stmt->bindParam(':codigo_fsp', $codigo_fsp);
    $stmt->execute();
}

header("Location: /projeto-fiacao/frontend/pages/area-exclusiva.php");
exit;
