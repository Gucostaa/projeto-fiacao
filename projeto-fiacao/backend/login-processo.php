<?php
session_start();

require_once __DIR__ . '/conexao.php'; // Ajuste o caminho se necessário

// Pega os dados do POST com segurança
$usuario = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_STRING) ?? '';
$senha = filter_input(INPUT_POST, 'senha') ?? '';

if (!$usuario || !$senha) {
    header('Location: ../../frontend/pages/login.php?erro=usuario,senha');
    exit;
}

try {
    // Busca em administradores
    $sql = "SELECT * FROM administradores WHERE nome = :usuario LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':usuario', $usuario);
    $stmt->execute();
    $usuarioData = $stmt->fetch(PDO::FETCH_ASSOC);

    $tipoUsuario = 'administrador';

    if (!$usuarioData) {
        // Busca em colaboradores
        $sql = "SELECT * FROM colaboradores WHERE nome = :usuario LIMIT 1";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':usuario', $usuario);
        $stmt->execute();
        $usuarioData = $stmt->fetch(PDO::FETCH_ASSOC);

        $tipoUsuario = 'colaborador';
    }

    if (!$usuarioData) {
        // Usuário não encontrado
        header('Location: /projeto-fiacao/frontend/pages/login.php?erro=usuario');
        exit;
    }

    if (!password_verify($senha, $usuarioData['senha'])) {
        header('Location: /projeto-fiacao/frontend/pages/login.php?erro=senha');
        exit;
    }


    // Login ok - cria sessão
    $_SESSION['usuario_id'] = $usuarioData['id'];
    $_SESSION['usuario_nome'] = $usuarioData['nome'];
    $_SESSION['usuario_posicao'] = $usuarioData['posicao'] ?? '';
    $_SESSION['usuario_tipo'] = $tipoUsuario;

    header('Location: /projeto-fiacao/frontend/pages/index.php');
    exit;

} catch (PDOException $e) {
    // Erro no servidor / banco
    header('Location: /projeto-fiacao/frontend/pages/login.php?erro=erro_servidor');
    exit;
}
?>
