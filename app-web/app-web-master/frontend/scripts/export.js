document.getElementById('btnExportPDF').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;

    const element = document.querySelector('form');
    const table = document.getElementById('motor-table');

    // Container temporário
    const container = document.createElement('div');
    container.style.backgroundColor = '#121212';
    container.style.color = '#fff';
    container.style.padding = '20px';
    container.style.width = '210mm'; // largura A4
    container.style.fontFamily = 'Urbanist, sans-serif';
    container.appendChild(element.cloneNode(true));
    if (table.style.display !== 'none') {
        container.appendChild(table.cloneNode(true));
    }
    document.body.appendChild(container);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Escala para imagem de boa resolução
    const canvas = await html2canvas(container, { scale: 2, backgroundColor: '#121212' });
    const imgData = canvas.toDataURL('image/png');

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pdfWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Adiciona a primeira página
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Se passar da página, adiciona páginas extras
    while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
    }

    document.body.removeChild(container);
    pdf.save('preventiva_eletrica.pdf');
});

document.getElementById('btnExportExcel').addEventListener('click', () => {
    const wb = XLSX.utils.book_new();

    // --- 1. Extrair dados do formulário ---
    const formData = [];
    formData.push(['Campo', 'Valor']); // cabeçalho

    const inputs = document.querySelectorAll('form input, form select');
    const seen = new Set();

    inputs.forEach(input => {
        if(input.type === 'checkbox') {
            if (input.checked && !seen.has(input.name)) {
                const checkboxes = document.querySelectorAll(`input[type="checkbox"][name="${input.name}"]:checked`);
                const valores = Array.from(checkboxes).map(cb => cb.value).join(', ');
                formData.push([input.name, valores]);
                seen.add(input.name);
            }
        } else if (input.type !== 'checkbox') {
            formData.push([input.name, input.value || '']);
        }
    });

    // --- 2. Extrair dados da tabela motores (incluindo inputs) ---
    let tableData = [];
    if (document.getElementById('motor-table').style.display !== 'none') {
        const table = document.getElementById('motor-table');
        const rows = table.querySelectorAll('tr');

        // Captura o cabeçalho da tabela
        const headerCells = rows[0].querySelectorAll('th');
        const headerRow = Array.from(headerCells).map(th => th.innerText);
        tableData.push(headerRow);

        // Captura as linhas da tabela (pulando o header)
        for(let i=1; i<rows.length; i++) {
            const row = rows[i];
            const cells = row.querySelectorAll('td');
            let rowData = [];

            cells.forEach(td => {
                // Se tiver input dentro da célula, pega o valor do input
                const input = td.querySelector('input');
                if(input) {
                    rowData.push(input.value);
                } else {
                    rowData.push(td.innerText.trim());
                }
            });

            tableData.push(rowData);
        }
    }

    // --- 3. Juntar formData + linha em branco + tableData ---
    const combinedData = [...formData, [], ...tableData];

    // --- 4. Gerar planilha ---
    const ws = XLSX.utils.aoa_to_sheet(combinedData);

    // Opcional: formatação básica (negrito no header do formulário e da tabela)
    // Header formulário (linha 1)
    ['A1','B1'].forEach(cell => {
        if(ws[cell]) ws[cell].s = { font: { bold: true }, alignment: { horizontal: "center" }, fill: { fgColor: { rgb: "FF26A60B" } }, font: { color: { rgb: "FFFFFFFF" } } };
    });

    // Header tabela (após formulário + linha em branco)
    const headerTableRow = formData.length + 2; // posição da linha do header da tabela (base 1)
    const colsCount = tableData[0] ? tableData[0].length : 0;
    for(let c=0; c<colsCount; c++) {
        const cellAddr = XLSX.utils.encode_cell({r: headerTableRow -1, c: c});
        if(ws[cellAddr]) ws[cellAddr].s = {
            font: { bold: true },
            fill: { fgColor: { rgb: "FF1F1F1F" } },
            font: { color: { rgb: "FFFFFFFF" } },
            alignment: { horizontal: "center" }
        };
    }

    // Ajusta largura das colunas (formulário + tabela)
    ws['!cols'] = [
        {wch: 25},
        {wch: 50}
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'Preventiva Elétrica');

    XLSX.writeFile(wb, 'preventiva_eletrica.xlsx', { bookSST: false, cellStyles: true });
});
