<?php
// conexao.php (separado)
require '../../backend/conexao.php';

// Busca os painéis do banco para o <select>
$stmt = $pdo->query("SELECT nome FROM paineis ORDER BY nome");
$paineis = $stmt->fetchAll(PDO::FETCH_COLUMN);
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <link rel="stylesheet" href="../styles/preventiva-eletrica.css" />
    <link rel="shortcut icon" href="../images/fiacao-icon.png" type="image/x-icon" />
    <title>Preventiva Elétrica - Fiação São Paulo</title>
</head>

<body>
    <header class="header">
        <div class="header-background-container">
            <img src="../images/logo.png" alt="Logo Fiação São Paulo" class="logo-img" />
        </div>
    </header>

    <main class="main-content">
        <div class="preventiva-container">
            <div class="preventiva-header">
                <h2 class="preventiva-title">Preventiva Elétrica</h2>
                <p class="preventiva-subtitle">Preencha o formulário para registrar a manutenção preventiva.</p>
            </div>

            <form class="preventiva-form">
                <div class="form-section">
                    <div class="form-group">
                        <label for="nome" class="form-label">Nome:</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome" class="form-input" />
                    </div>

                    <div class="form-group">
                        <label for="data_realizada" class="form-label">Data Realizada:</label>
                        <input type="date" id="data_realizada" name="data_realizada" class="form-input" />
                    </div>

                    <div class="form-group">
                        <label for="equipamento" class="form-label">Selecione o Painel:</label>
                        <select name="equipamento" id="equipamento" class="form-select">
                            <option value="">Selecione...</option>
                            <?php foreach ($paineis as $painel): ?>
                                <option value="<?= htmlspecialchars($painel) ?>"><?= htmlspecialchars($painel) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                </div>

                <div id="checklist-container" class="form-section checklist-section" style="display: none;">
                    <div class="checklist-title-container">
                        <h4 class="checklist-title">Checklist de Verificações</h4>
                    </div>
                    <div class="checklist-items-grid">
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="reaperto_born" /> Reaperto de born</label>
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="substituir" /> Substituição de componentes (se necessário)</label>
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="pontos_quentes" /> Análise de pontos quentes (termográfica)</label>
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="cabos_carbonizados" /> Verificação de cabos e bornes carbonizados</label>
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="limpeza_geral" /> Limpeza geral (com aspirador)</label>
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="verif_temp" /> Verificação da Temperatura</label>
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="verif_amperagem" /> Verificação da Amperagem</label>
                        <label class="checklist-item"><input type="checkbox" name="checklist" value="verif_vibracao" /> Verificação da Vibração</label>
                    </div>
                </div>
            </form>

            <table id="motor-table" class="motor-table" style="display: none;">
                <thead>
                    <tr>
                        <th>ID do Motor</th>
                        <th>Motor</th>
                        <th>Temperatura Atual</th>
                        <th>Amperagem Atual</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

            <div class="export-buttons-container">
                <button id="btnExportPDF" class="export-button">
                    <i class="fas fa-file-pdf"></i> Exportar PDF
                </button>
                <button id="btnExportExcel" class="export-button">
                    <i class="fas fa-file-excel"></i> Exportar Excel
                </button>
            </div>
        </div>
    </main>

    <footer class="footer">
        <p>&copy; 2025 Fiação São Paulo. Todos os direitos reservados.</p>
    </footer>

    <script src="../scripts/preventiva-eletrica.js"></script>
</body>

</html>
