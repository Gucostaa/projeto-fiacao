<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <link rel="stylesheet" href="../styles/index.css" />
    <title>Fiação São Paulo</title>
</head>

<body class="dark-mode">
    <header>
        <div class="logo-container">
            <img src="../images/logo.png" alt="Logo Fiação" class="logo-img" />
            <h1 class="logo-title">Preventiva Elétrica</h1>
        </div>
    </header>


<form>
    <div class="section flex-container">
        <!-- Coluna esquerda -->
        <div class="form-half lado-esquerdo">
            
            <label for="responsavel" class="label-tittle">Nome:</label>
            <input type="text" id="nome" name="nome">

            <label for="data_realizada" class="label-tittle">Data Realizada:</label>
            <input type="date" id="data_realizada" name="data_realizada">

            <label for="equipamento" class="label-tittle">Selecione o painel:</label>
            <select name="equipamento" id="equipamento"class="styled-select">
                <option value="">Selecione...</option>
                <option value="RASGADEIRA">RASGADEIRA</option>
                <option value="CORTADEIRA">CORTADEIRA</option>
                <option value="TC15">TC15</option>
                <option value="CF">CF</option>
                <option value="CL-P">CL-P</option>
                <option value="BR-CO">BR-CO</option>
                <option value="MXU">MXU</option>
                <option value="TC19">TC19</option>
                <option value="CL-C3">CL-C3</option>
                <option value="CL-X">CL-X</option>
                <option value="FD-T 1200/1600">FD-T 1200/1600</option>
                <option value="BX">BX</option>
                <option value="BDT">BDT</option>
                <option value="BD">BD</option>
                <option value="PRENSA">PRENSA</option>
                <option value="GBR">GBR</option>
                <option value="COMPRESSORES">COMPRESSORES</option>
            </select>
        </div>

        <!-- Coluna direita -->
        <div id="checklist-container" class="form-half checklist lado-direito" style="display: none;">
            <label class="check-title">Checklist:</label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="reaperto_born">
                Reaperto de born
            </label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="substituir">
                Substituir se necessário
            </label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="pontos_quentes">
                Analisar pontos quentes
            </label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="cabos_carbonizados">
                Cabos e borns carbonizados
            </label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="limpeza_geral">
                Limpeza geral (com aspirador)
            </label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="verif_temp">
                Verificação da Temperatura
            </label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="verif_amperagem">
                Verificação da Amperagem
            </label>

            <label class="checkbox-item">
                <input type="checkbox" name="checklist" value="verif_vibracao">
                Verificação da Vibração
            </label>
        </div>
    </div>
</form>

<table id="motor-table" style="display: none;">
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 45%;"> <!-- <- Mais espaço para nome do motor -->
    <col style="width: 20%;">
    <col style="width: 20%;">
  </colgroup>
  <thead>
    <tr>
      <th>ID do Motor</th>
      <th>Motor</th>
      <th>Temperatura Atual</th>
      <th>Amperagem Atual</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

<div style="text-align: center; margin: 2rem 0;">
    <button id="btnExportPDF" class="export-button">
        Exportar PDF
    </button>
    <button id="btnExportExcel" class="export-button">
        Exportar Excel
    </button>
</div>

 <footer>
        <p>&copy; 2025 Fiação São Paulo. Todos os direitos reservados.</p>
</footer>
   
    <script src="../scripts/script.js"></script>
    <script src="../scripts/export.js"></script>
</body>
</html>
