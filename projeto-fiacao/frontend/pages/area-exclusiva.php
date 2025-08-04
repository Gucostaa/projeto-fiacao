

<?php
require_once '../../backend/conexao.php';
session_start();

if (!isset($_SESSION['usuario_tipo']) || $_SESSION['usuario_tipo'] !== 'administrador') {
    header('Location: index.php'); // Ou uma página de erro
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Área Administrativa - Fiação São Paulo</title>
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../styles/area-exclusiva.css" />
</head>
<body>
    <div class="container">
        <aside class="sidebar">
            <div class="sidebar-header">
                <h2>Área Exclusiva</h2>
            </div>
            <nav class="menu">
                <ul>
                    <li><a href="#" class="tab-link active" data-tab="dashboard">Dashboard</a></li>
                    <li><a href="#" class="tab-link" data-tab="plano-acao">Plano de Ação</a></li>
                    <li><a href="#" class="tab-link" data-tab="almoxarifado">Almoxarifado</a></li>
                    <li><a href="#" class="tab-link" data-tab="mtbf-mttr">MTBF e MTTR</a></li>
                    <li><a href="#" class="tab-link" data-tab="preventiva-eletrica">Preventiva Elétrica</a></li>
                    <li><a href="#" class="tab-link" data-tab="preventiva-mecanica">Preventiva Mecânica</a></li>
                    <li><a href="#" class="tab-link" data-tab="linha-abertura">Linha de Abertura</a></li>
                    <li><a href="#" class="tab-link" data-tab="cadastro">Cadastro</a></li>
                    <li><a href="#" class="tab-link" data-tab="configuracoes">Configurações</a></li>
                </ul>
            </nav>
        </aside>

        <main class="main-content">
            <header class="topbar">
                <div class="welcome">
                    Bem-vindo, <span class="usuario-info"><?php echo htmlspecialchars($_SESSION['usuario_nome']); ?></span>
                </div>
                <a href="../pages/index.php" class="logout-btn" title="Sair da conta">Sair</a>
            </header>

            <!-- Conteúdos das abas -->
            <section id="dashboard" class="tab-content active">
                <h2>Dashboard</h2>
                <p>Conteúdo inicial do dashboard.</p>
            </section>

            <section id="plano-acao" class="tab-content">
                <h2>Plano de Ação</h2>
                <p>Em desenvolvimento.</p>
            </section>

            <section id="almoxarifado" class="tab-content">
                <h2>Almoxarifado</h2>
                <p>Em desenvolvimento.</p>
            </section>

            <section id="mtbf-mttr" class="tab-content">
                <h2>MTBF e MTTR</h2>
                <p>Em desenvolvimento.</p>
            </section>

            <section id="preventiva-eletrica" class="tab-content">
    <h2>Gerenciar Preventiva Elétrica</h2>

    <!-- Adicionar Painel -->
    <h3>Adicionar Painel</h3>
    <form method="POST" action="/projeto-fiacao/backend/preventiva-eletrica/adicionar-painel.php">
        <input type="text" name="nome_painel" required placeholder="Nome do painel">
        <button type="submit">Adicionar Painel</button>
    </form>

    <!-- Adicionar Motor -->
    <h3>Adicionar Motor</h3>
    <form method="POST" action="/projeto-fiacao/backend/preventiva-eletrica/adicionar-motor.php">
        <select name="painel_id" required>
            <option value="">Selecione o painel...</option>
            <?php
            try {
                $stmt = $pdo->query("SELECT * FROM paineis ORDER BY nome");
                foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                    $id = htmlspecialchars($row['id']);
                    $nome = htmlspecialchars($row['nome']);
                    echo "<option value='$id'>$nome</option>";
                }
            } catch (PDOException $e) {
                echo "<option disabled>Erro ao carregar painéis</option>";
            }
            ?>
        </select>
        <input type="text" name="nome_motor" required placeholder="Nome do motor">
        <button type="submit">Adicionar Motor</button>
    </form>

    <!-- Lista de Painéis e Motores -->
    <h3>Lista de Painéis e Motores</h3>
    <div class="lista-paineis">
        <?php
        try {
            $stmt = $pdo->query("SELECT * FROM paineis ORDER BY nome");
            foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $painel) {
                $painel_id = (int)$painel['id'];
                $painel_nome = htmlspecialchars($painel['nome']);
                echo "<div class='painel-item'><strong>$painel_nome</strong>
                        <form method='POST' action='/projeto-fiacao/backend/preventiva-eletrica/excluir-painel.php' style='display:inline; margin-left:10px;'>
                            <input type='hidden' name='painel_id' value='$painel_id'>
                            <button type='submit' onclick='return confirm(\"Excluir painel e todos os motores?\")'>Excluir Painel</button>
                        </form>
                      </div>";

                // Listar motores
                $stm2 = $pdo->prepare("SELECT * FROM motores WHERE painel_id = :pid ORDER BY nome_motor");
                $stm2->execute([':pid' => $painel_id]);
                foreach ($stm2->fetchAll(PDO::FETCH_ASSOC) as $motor) {
                    $motor_id = (int)$motor['id'];
                    $motor_nome = htmlspecialchars($motor['nome_motor']);
                    echo "<div class='motor-item' style='margin-left:20px;'>↳ $motor_nome
                            <form method='POST' action='/projeto-fiacao/backend/preventiva-eletrica/excluir-motor.php' style='display:inline; margin-left:5px;'>
                                <input type='hidden' name='motor_id' value='$motor_id'>
                                <button type='submit' onclick='return confirm(\"Excluir este motor?\")'>Excluir</button>
                            </form>
                          </div>";
                }
            }
        } catch (PDOException $e) {
            echo "<p>Erro ao carregar a lista de painéis: " . $e->getMessage() . "</p>";
        }
        ?>
    </div>
</section>



            <section id="preventiva-mecanica" class="tab-content">
                <h2>Preventiva Mecânica</h2>
                <p>Em desenvolvimento.</p>
            </section>

            <section id="linha-abertura" class="tab-content">
                <h2>Linha de Abertura</h2>
                <p>Em desenvolvimento.</p>
            </section>

            <section id="cadastro" class="tab-content">
                <h2>Cadastro de Usuário</h2>
                <form action="/projeto-fiacao/backend/cadastro-usuario.php" method="POST" autocomplete="off">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />

                    <label for="posicao">Posição:</label>
                    <select id="posicao" name="posicao" required>
                        <option value="">Selecione...</option>
                        <option value="administrador">Administrador</option>
                        <option value="colaborador">Colaborador</option>
                    </select>

                    <button type="submit">Cadastrar</button>
                </form>
            </section>

            <section id="configuracoes" class="tab-content">
                <h2>Configurações</h2>
                <p>Em desenvolvimento.</p>
            </section>
        </main>
    </div>

    <script src="../scripts/area-exclusiva.js"></script>
</body>
</html>
