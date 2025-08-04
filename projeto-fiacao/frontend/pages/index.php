
<<?php
session_start();

if (!isset($_SESSION['usuario_id'])) {
    header('Location: ../pages/login.php'); // caminho relativo ajustado
    exit;
}

// Conteúdo da página para usuário logado
echo "Bem-vindo, " . htmlspecialchars($_SESSION['usuario_nome']) . "!";

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link rel="stylesheet" href="../styles/index.css" />
    <link rel="shortcut icon" href="../images/fiacao-icon.png" type="image/x-icon">
    <title>Fiação São Paulo</title>
</head>
<body>

<header class="header">
    <div class="logo-container">
        <img src="../images/fiacaologo5.png" alt="Logo Fiação São Paulo" class="logo-img" />
    </div>

    <?php if (isset($_SESSION['usuario_tipo']) && $_SESSION['usuario_tipo'] === 'administrador'): ?>
        <nav class="nav-menu">
            <a href="area-exclusiva.php">Área Exclusiva</a>
        </nav>
    <?php endif; ?>
</header>

    <main class="dashboard-content">
        <div class="dashboard-header">
            <h2 class="dashboard-title">Dashboard Principal</h2>
            <p class="dashboard-subtitle">Selecione um módulo para acessar suas funcionalidades</p>
        </div>

        <div class="cards-container">

            <div class="card cardimg1">
                <div class="card-top">
                    <div class="card-icon blue-bg">
                        <i class="fas fa-file-alt"></i>
                    </div>
                </div>
                <h3 class="card-title">PLANO DE AÇÃO</h3>
                <div class="card-footer">
                    <span class="status-badge gray-badge">Em Desenvolvimento</span>
                </div>
            </div>

            <div class="card cardimg2">
                <div class="card-top">
                    <div class="card-icon gray-bg">
                        <i class="fas fa-box-open"></i>
                    </div>
                </div>
                <h3 class="card-title">ALMOXARIFADO</h3>
                <div class="card-footer">
                    <span class="status-badge gray-badge">Em Desenvolvimento</span>
                </div>
            </div>

            <div class="card cardimg3">
                <div class="card-top">
                    <div class="card-icon green-bg">
                        <i class="fas fa-chart-line"></i>
                    </div>
                </div>
                <h3 class="card-title">MTBF E MTTR</h3>
                <div class="card-footer">
                    <span class="status-badge gray-badge">Em Desenvolvimento</span>
                </div>
            </div>

            <div class="card highlighted-card cardimg4">
                <div class="card-top">
                    <div class="card-icon orange-bg">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <span class="status-badge yellow-badge">Disponível</span>
                </div>
                <h3 class="card-title">PREVENTIVA ELÉTRICA</h3>
                <div class="card-footer">
                    <a href="../pages/preventiva-eletrica.php" class="access-button">Acessar Módulo</a>
                </div>
            </div>

            <div class="card cardimg5">
                <div class="card-top">
                    <div class="card-icon purple-bg">
                        <i class="fas fa-wrench"></i>
                    </div>
                </div>
                <h3 class="card-title">PREVENTIVA MECÂNICA</h3>
                <div class="card-footer">
                    <span class="status-badge gray-badge">Em Desenvolvimento</span>
                </div>
            </div>

            <div class="card cardimg6">
                <div class="card-top">
                    <div class="card-icon darkblue-bg">
                        <i class="fas fa-seedling"></i>
                    </div>
                </div>
                <h3 class="card-title">LINHA DE ABERTURA</h3>
                <div class="card-footer">
                    <span class="status-badge gray-badge">Em Desenvolvimento</span>
                </div>
            </div>

        </div>
    </main>

    <footer class="footer">
        <p>&copy; 2025 Fiação São Paulo. Todos os direitos reservados.</p>
    </footer>

</body>
</html>