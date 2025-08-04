document.addEventListener('DOMContentLoaded', () => {
    const equipamentoSelect = document.getElementById('equipamento');
    const checklistContainer = document.getElementById('checklist-container');
    const motorTable = document.getElementById('motor-table');
    const motorTableBody = motorTable.querySelector('tbody');
    const btnExportPDF = document.getElementById('btnExportPDF');
    const btnExportExcel = document.getElementById('btnExportExcel');

    // Função para formatar inputs de temperatura e amperagem
    const setupMeasurementInputs = () => {
        const handleInput = (event, unit) => {
            const value = event.target.value.trim();
            const isNumeric = /^-?\d+(\.\d+)?$/.test(value);
            if (isNumeric && !value.endsWith(unit)) {
                event.target.value = `${value} ${unit}`;
            }
        };

        const tempInputs = document.querySelectorAll('.temp-input');
        tempInputs.forEach(input => {
            input.addEventListener('blur', (event) => handleInput(event, '°C'));
        });

        const ampInputs = document.querySelectorAll('.amp-input');
        ampInputs.forEach(input => {
            input.addEventListener('blur', (event) => handleInput(event, 'A'));
        });
    };

    equipamentoSelect.addEventListener('change', () => {
        const painelSelecionado = equipamentoSelect.value;

        if (!painelSelecionado) {
            checklistContainer.style.display = 'none';
            motorTable.style.display = 'none';
            motorTableBody.innerHTML = '';
            return;
        }

        checklistContainer.style.display = 'block';

        fetch(`/projeto-fiacao/backend/preventiva-eletrica/get-motores.php?equipamento=${encodeURIComponent(painelSelecionado)}`)
            .then(response => response.json())
            .then(motores => {
                motorTableBody.innerHTML = '';
                if (Array.isArray(motores) && motores.length > 0) {
                    motores.forEach(motor => {
                        const newRow = document.createElement('tr');
                        newRow.innerHTML = `
                            <td data-label="ID do Motor">${motor.codigo_fsp}</td>
                            <td data-label="Motor">${motor.nome_motor}</td>
                            <td data-label="Temperatura Atual"><input type="text" placeholder="Temperatura" class="table-input temp-input" /></td>
                            <td data-label="Amperagem Atual"><input type="text" placeholder="Amperagem" class="table-input amp-input" /></td>
                        `;
                        motorTableBody.appendChild(newRow);
                    });
                    motorTable.style.display = 'table';
                    setupMeasurementInputs();
                } else {
                    motorTable.style.display = 'none';
                    const emptyRow = document.createElement('tr');
                    emptyRow.innerHTML = `<td colspan="4">Nenhum motor encontrado.</td>`;
                    motorTableBody.appendChild(emptyRow);
                }
            })
            .catch(error => {
                console.error('Erro ao buscar motores:', error);
                motorTable.style.display = 'none';
                motorTableBody.innerHTML = '';
            });
    });

    // Exportação PDF
    btnExportPDF.addEventListener('click', async () => {
        const { jsPDF } = window.jspdf;
        const mainContent = document.querySelector('.main-content');
        const tempContainer = mainContent.cloneNode(true);
        tempContainer.style.margin = '20px auto';
        tempContainer.style.width = '210mm';
        tempContainer.style.padding = '20px';
        tempContainer.style.backgroundColor = '#fff';

        // Ocultar botões no PDF
        const buttons = tempContainer.querySelector('.export-buttons-container');
        if (buttons) buttons.style.display = 'none';

        // Copiar valores do formulário para o clone
        const formInputs = tempContainer.querySelectorAll('.form-input, .form-select');
        formInputs.forEach(input => {
            const originalInput = document.getElementById(input.id);
            if (originalInput) input.value = originalInput.value;
        });

        // Copiar estados dos checkboxes
        const originalCheckboxes = document.querySelectorAll('#checklist-container input[type="checkbox"]');
        originalCheckboxes.forEach(cb => {
            if (cb.checked) {
                const tempCheckbox = tempContainer.querySelector(`input[type="checkbox"][value="${cb.value}"]`);
                if (tempCheckbox) tempCheckbox.setAttribute('checked', 'true');
            }
        });

        // Copiar valores dos inputs da tabela
        const tempTable = tempContainer.querySelector('#motor-table');
        if (tempTable) {
            const originalTableInputs = motorTableBody.querySelectorAll('input');
            const tempTableInputs = tempTable.querySelectorAll('input');
            originalTableInputs.forEach((originalInput, index) => {
                if (tempTableInputs[index]) tempTableInputs[index].value = originalInput.value;
            });
        }

        document.body.appendChild(tempContainer);

        try {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvas = await html2canvas(tempContainer, {
                scale: 2,
                backgroundColor: '#ffffff'
            });
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const imgWidth = pdfWidth - 20;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
            let heightLeft = imgHeight;
            let position = 10;
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= (pdfHeight - 20);
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= (pdfHeight - 20);
            }
            pdf.save('preventiva_eletrica.pdf');
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
        } finally {
            document.body.removeChild(tempContainer);
        }
    });

    // Exportação Excel
    btnExportExcel.addEventListener('click', () => {
        const wb = XLSX.utils.book_new();
        let rowNum = 0;

        // Criar a planilha com título e dados do formulário
        const ws = XLSX.utils.aoa_to_sheet([]);
        XLSX.utils.sheet_add_aoa(ws, [['Dados da Preventiva']], { origin: "A1" });
        XLSX.utils.sheet_add_aoa(ws, [['Campo', 'Valor']], { origin: "A2" });
        rowNum = 2;

        // Preencher os dados do formulário
        const formInputs = document.querySelectorAll('.preventiva-form .form-input, .preventiva-form .form-select');
        formInputs.forEach(input => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (label && input.value) {
                XLSX.utils.sheet_add_aoa(ws, [[label.textContent.replace(':', '').trim(), input.value]], { origin: -1 });
                rowNum++;
            }
        });

        // Checklist marcado
        const checkedItems = document.querySelectorAll('#checklist-container input[type="checkbox"]:checked');
        if (checkedItems.length > 0) {
            XLSX.utils.sheet_add_aoa(ws, [['Checklist']], { origin: `A${rowNum + 2}` });
            XLSX.utils.sheet_add_aoa(ws, [['Item']], { origin: `A${rowNum + 3}` });
            rowNum += 3;
            checkedItems.forEach(item => {
                const label = item.parentNode.textContent.trim();
                XLSX.utils.sheet_add_aoa(ws, [[label]], { origin: -1 });
                rowNum++;
            });
        }

        // Dados da tabela de motores
        if (motorTable.style.display !== 'none' && motorTableBody.rows.length > 0) {
            XLSX.utils.sheet_add_aoa(ws, [['Dados dos Motores']], { origin: `A${rowNum + 2}` });
            const tableHeaders = Array.from(motorTable.querySelectorAll('th')).map(th => th.textContent.trim());
            XLSX.utils.sheet_add_aoa(ws, [tableHeaders], { origin: `A${rowNum + 3}` });
            rowNum += 3;

            Array.from(motorTableBody.rows).forEach(row => {
                const rowData = [
                    row.cells[0].textContent.trim(),
                    row.cells[1].textContent.trim(),
                    row.cells[2].querySelector('input').value,
                    row.cells[3].querySelector('input').value
                ];
                XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: -1 });
            });
        }

        XLSX.utils.book_append_sheet(wb, ws, 'Preventiva Elétrica');
        XLSX.writeFile(wb, 'preventiva_eletrica.xlsx');
    });
});
