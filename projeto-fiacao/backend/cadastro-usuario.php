<?php
session_start();

if (!isset($_SESSION['usuario_tipo']) || $_SESSION['usuario_tipo'] !== 'administrador') {
    header('Location: ../pages/index.php');
    exit;
}

require_once 'conexao.php';  // Certifique-se que o caminho está correto

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $senha = trim($_POST['senha'] ?? '');
    $posicao = trim($_POST['posicao'] ?? '');

    if ($nome === '' || $senha === '' || $posicao === '') {
        die('Preencha todos os campos.');
    }

    // Criptografa a senha
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);
    $dataCriada = date('Y-m-d H:i:s');

    try {
        if ($posicao === 'administrador') {
            // Insere na tabela administradores
            $stmt = $pdo->prepare("INSERT INTO administradores (nome, senha, posicao, data_criada) VALUES (?, ?, ?, ?)");
        } elseif ($posicao === 'colaborador') {
            // Insere na tabela colaboradores
            $stmt = $pdo->prepare("INSERT INTO colaboradores (nome, senha, posicao, data_criada) VALUES (?, ?, ?, ?)");
        } else {
            die('Posição inválida.');
        }

        $stmt->execute([$nome, $senhaHash, $posicao, $dataCriada]);

        echo "Usuário cadastrado com sucesso!";
        // Você pode redirecionar ou fazer outra ação aqui
    } catch (PDOException $e) {
        die("Erro ao cadastrar usuário: " . $e->getMessage());
    }
} else {
    die('Método inválido.');
}
