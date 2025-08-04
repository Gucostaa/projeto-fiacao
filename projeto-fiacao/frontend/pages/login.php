<?php
// Simplifica a leitura dos erros da URL
$erro = $_GET['erro'] ?? '';
$erros = explode(',', $erro);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/login.css" />
    <link rel="shortcut icon" href="../images/fiacao-icon.png" type="image/x-icon">
    <title>Login - Fiação São Paulo</title>
</head>                
<body>

    <main class="login-container">
        <h1 class="login-title">Área de Login</h1>

        <form action="/projeto-fiacao/backend/login-processo.php" method="post" class="login-form">
            
            <div class="form-group">
                <label for="usuario" class="form-label">Usuário</label>
                <input type="text" id="usuario" name="usuario"
                    class="form-input <?php echo in_array('usuario', $erros) ? 'is-invalid' : ''; ?>" required>
                <?php if (in_array('usuario', $erros)): ?>
                    <span class="error-message">Usuário não encontrado.</span>
                <?php endif; ?>
            </div>

            <div class="form-group">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" id="senha" name="senha"
                    class="form-input <?php echo in_array('senha', $erros) ? 'is-invalid' : ''; ?>" required>
                <?php if (in_array('senha', $erros)): ?>
                    <span class="error-message">Senha incorreta.</span>
                <?php endif; ?>
            </div>

            <?php if (in_array('erro_servidor', $erros)): ?>
                <div class="alert alert-error">Erro no servidor. Tente novamente mais tarde.</div>
            <?php endif; ?>

            <p class="login-info">Não possui uma conta? Cadastre-se diretamente com o administrador do sistema.</p>

            <button type="submit" class="login-button">Entrar</button>

        </form>
    </main>

</body>
</html>
