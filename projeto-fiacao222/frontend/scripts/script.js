document.addEventListener('DOMContentLoaded', () => {
    const equipamentoSelect = document.getElementById('equipamento');
    const checklistContainer = document.getElementById('checklist-container');
    const motorTable = document.getElementById('motor-table');
    const motorTableBody = motorTable.querySelector('tbody');

    const btnExportPDF = document.getElementById('btnExportPDF');
    const btnExportExcel = document.getElementById('btnExportExcel');

    // Mapeamento de equipamentos e seus motores
    const painelMotores = {
        "RASGADEIRA": [
            { id: "FSP001", nome: "Motor de estágio 1" },
            { id: "FSP002", nome: "Motor de estágio 2" },
            { id: "FSP003", nome: "Motor de estágio 3" },
            { id: "FSP004", nome: "Motor de estágio 4" },
            { id: "FSP005", nome: "Motor de estágio 5" },
            { id: "FSP006", nome: "Motor de estágio 6" },
            { id: "FSP007", nome: "Cilindro de alimentação e estágio 1" },
            { id: "FSP008", nome: "Cilindro de alimentação e estágio 2" },
            { id: "FSP009", nome: "Cilindro de alimentação e estágio 3" },
            { id: "FSP010", nome: "Cilindro de alimentação e estágio 4" },
            { id: "FSP011", nome: "Cilindro de alimentação e estágio 5" },
            { id: "FSP012", nome: "Cilindro de alimentação e estágio 6" },
            { id: "FSP013", nome: "Exaustor 1" },
            { id: "FSP014", nome: "Exaustor 2" },
            { id: "FSP015", nome: "Exaustor 3" },
            { id: "FSP016", nome: "Exaustor 4" },
            { id: "FSP017", nome: "Exaustor 5" },
            { id: "FSP018", nome: "Exaustor 6" },
            { id: "FSP020", nome: "Redutor final out" },
            { id: "FSP019", nome: "Correia de entrada" },
            { id: "FSP021", nome: "Correia inferior" },
            { id: "FSP022", nome: "Correia de reciclagem" },
            { id: "FSP023", nome: "Cilindro de pressão" },
            { id: "FSP024", nome: "Abertura inferior" },
            { id: "FSP025", nome: "Ventilador de pó" },
            { id: "FSP026", nome: "Ventilador de transporte" },
            { id: "FSP027", nome: "Convedor" },
            { id: "FSP028", nome: "DT71 CIVILI HASIR" },
            { id: "FSP029", nome: "DT70 E.HASIR" },
            { id: "FSP030", nome: "DT70 TOZ FANI1" },
            { id: "FSP031", nome: "HOR.ALIMENTAÇÃO" },
            { id: "FSP032", nome: "CILINDRO DE SAIDA" },
        ],
        "CORTADEIRA": [
            { id: "FSP033", nome: "Motor de corte" },
            { id: "FSP034", nome: "Transportador" },
            { id: "FSP035", nome: "Correia de alimentação" },
            { id: "FSP036", nome: "Cilindro de pressão" },
        ],
        "TC15": [
            { id: "FSP037", nome: "Carda alimentação" },
            { id: "FSP038", nome: "Acionamento captação" },
            { id: "FSP039", nome: "Cilindro abridor" },
            { id: "FSP040", nome: "Ventilador" },
            { id: "FSP041", nome: "Tambor" },
            { id: "FSP042", nome: "Cilinddro de limpeza dos flats" }, 
            { id: "FSP043", nome: "Acionamento dos flats/Cilindro de strip" },
            { id: "FSP044", nome: "Cilinddro separador de limpeza" },
            { id: "FSP045", nome: "Acionamento/entrega" },
        ],
        "CF": [
            { id: "FSP046", nome: "Compactador 1" },
            { id: "FSP047", nome: "Compactador de poeiras" },
            { id: "FSP048", nome: "Ventilador do pré-filtro 1" },
            { id: "FSP049", nome: "Disco pré-filtro" },
            { id: "FSP050", nome: "Filtro fino do ventilador" },
            { id: "FSP051", nome: "Filtro fino do tambor" },

        ],
        "CL-P": [
            { id: "FSP052", nome: "Ventilador" },
            { id: "FSP053", nome: "Tambor-crivo" },
            { id: "FSP054", nome: "Acionamento cilindro" },
            { id: "FSP055", nome: "Comporta celular e roda" },

        ],
        "BR-CO": [
            { id: "FSP056", nome: "Condensador/Ventilador" },
            { id: "FSP057", nome: "Condensador/Perforado ventilador" },
        ],
        "MXU": [
            { id: "FSP058", nome: "Alimentação" },
            { id: "FSP059", nome: "Acionamento cilindro" },
            { id: "FSP060", nome: "Acionamento de temperatura" },
            { id: "FSP061", nome: "Alimentação" },
            { id: "FSP062", nome: "Acionamento cilindro" },
        ],
        "TC19": [
            { id: "FSP063", nome: "Acionamento prato de latas" },
            { id: "FSP064", nome: "Torrniquete" },
            { id: "FSP065", nome: "(verificar)" },
            { id: "FSP066", nome: "Carda alimentação" },
            { id: "FSP067", nome: "Acionamento captação" },
            { id: "FSP068", nome: "Cilindro abridor" },
            { id: "FSP069", nome: "Ventilador" },
            { id: "FSP070", nome: "Tambor" },
            { id: "FSP071", nome: "Cilindro de limpeza dos flats" },
            { id: "FSP072", nome: "Acionamento dos flats/Cilinddro de strip" },
            { id: "FSP073", nome: "Cilindro separador de limpeza" },
            { id: "FSP074", nome: "Acionamento/Entrega" },
        ],
        "CL-C3": [
            { id: "FSP075", nome: "Ventilador do armário de distribuição" },
            { id: "FSP076", nome: "Ventilador do armário de distribuição" },
            { id: "FSP077", nome: "Ventilador" },
            { id: "FSP078", nome: "Tambor-crivo" },
        ],
        "CL-X": [
            { id: "FSP079", nome: "Ventilador de acionamento BR-FD500" },
        ],
        "FD-T 1200/1600": [
            { id: "FSP080", nome: "Ventilador" },
            { id: "FSP081", nome: "Tambor perfurado" },
            { id: "FSP082", nome: "Aba distribuidora" },
        ],
        "BX": [
            { id: "FSP083", nome: "Ventilador aspiração do material" },
            { id: "FSP084", nome: "Ventilador alimentação do matérial" },
            { id: "FSP085", nome: "Comando flats" },
            { id: "FSP086", nome: "Ventilador aspiração do pó" },
            { id: "FSP087", nome: "Distribuidor T" },
        ],
        "BDT": [
            { id: "FSP088", nome: "Acionamento rotativo torre" },
            { id: "FSP089", nome: "Acionamento movimento carro inferior" },
            { id: "FSP090", nome: "Acionamento cilindro de suport doffer" },
            { id: "FSP091", nome: "Acionamento em altura" },
            { id: "FSP092", nome: "Cilindro batedor 1" },
            { id: "FSP093", nome: "Cilindro batedor 2" },
            { id: "FSP094", nome: "Acionamento da fita" },
        ],
        "BD": [
            { id: "FSP095", nome: "Unidade de subpressão" },
            { id: "FSP096", nome: "Unidade de subpressão" },
            { id: "FSP097", nome: "Impureza" },
            { id: "FSP098", nome: "Impureza" },
            { id: "FSP099", nome: "Ligação do motor a resquerda rotor" },
            { id: "FSP100", nome: "Ligação do motor a esquerda rotor" },
            { id: "FSP101", nome: "Eixo do rolamento esquerdo" },
            { id: "FSP102", nome: "Eixo do rolamento esquerdo" },
            { id: "FSP103", nome: "Guia fio esquerdo" },
            { id: "FSP104", nome: "Guia fio esquerdo" },
            { id: "FSP105", nome: "Rolete de abertura esquerdo (cardinha)" },
            { id: "FSP106", nome: "Rolode de abertura esquerdo (cardinha)" },
            { id: "FSP107", nome: "Rotor direito" },
            { id: "FSP108", nome: "Rotor direito" },
            { id: "FSP109", nome: "Eixo rolamento direito" },
            { id: "FSP110", nome: "Eixo rolamento direito" },
            { id: "FSP111", nome: "Guia fio direito" },
            { id: "FSP112", nome: "Guia fio direito" },
            { id: "FSP113", nome: "Rolo abertura direito" },
            { id: "FSP114", nome: "Rolo abertura direito" },
            { id: "FSP115", nome: "Transportadora de pacotes ant-horario" },
            { id: "FSP116", nome: "Transportadora de pacotes ant-horario" },
            { id: "FSP117", nome: "Ventilador do conversos de frequência do dissipador de calor a esquerda" },
            { id: "FSP118", nome: "Ventilador do conversos de frequência do dissipador de calor médio" },
            { id: "FSP119", nome: "Ventilador do conversos de frequência do dissipador de calor a direita" },
            { id: "FSP120", nome: "Motor do rotor do ventilador direito" },
            { id: "FSP121", nome: "Unidade de sugção" },
            { id: "FSP122", nome: "Ventilador de afogador" },
            { id: "FSP123", nome: "Motor de rotor do ventilador esquerdo" },
            { id: "FSP124", nome: "Motor de terceira mão" },
            { id: "FSP125", nome: "Motor de terceira mão" },
            { id: "FSP126", nome: "Ventilador de carruagem" },
        ],
        "PRENSA": [
            { id: "FSP127", nome: "Motor de violação" },
            { id: "FSP128", nome: "Tambor hidraulico" },
            { id: "FSP129", nome: "Transportador correia superior" },
            { id: "FSP130", nome: "Rotação" },
            { id: "FSP131", nome: "Circulação" },
            { id: "FSP132", nome: "Ventilador" },
        ],
        "GBR": [
            { id: "FSP133", nome: "" },
            { id: "FSP134", nome: "" },
            { id: "FSP135", nome: "" },
        ],
        "COMPRESSORES": [
            { id: "FSP136", nome: "" },
            { id: "FSP137", nome: "" },
            { id: "FSP138", nome: "" },
            { id: "FSP139", nome: "" },
            { id: "FSP140", nome: "" },
            { id: "FSP141", nome: "" },
        ],
    };

    // Função para renderizar a tabela de motores
    const renderMotorTable = (equipamento) => {
        motorTableBody.innerHTML = '';
        if (painelMotores[equipamento]) {
            painelMotores[equipamento].forEach(motor => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td data-label="ID do Motor">${motor.id}</td>
                    <td data-label="Motor">${motor.nome}</td>
                    <td data-label="Temperatura Atual"><input type="text" placeholder="Temperatura" class="table-input temp-input" /></td>
                    <td data-label="Amperagem Atual"><input type="text" placeholder="Amperagem" class="table-input amp-input" /></td>
                `;
                motorTableBody.appendChild(newRow);
            });
            // Adiciona o event listener para os novos campos de temperatura e amperagem
            setupMeasurementInputs();
        }
    };

    // Função para adicionar os listeners de autocompletar aos campos de temperatura e amperagem
    const setupMeasurementInputs = () => {
        const handleInput = (event, unit) => {
            const value = event.target.value.trim();
            // Expressão regular para verificar se o valor é um número (incluindo decimais)
            const isNumeric = /^-?\d+(\.\d+)?$/.test(value);
            
            // Adiciona a unidade se for um número e ainda não a tiver
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

    // Event listener para o seletor de equipamento
    equipamentoSelect.addEventListener('change', function () {
        const painelSelecionado = this.value;
        if (painelSelecionado) {
            checklistContainer.style.display = 'block';
            motorTable.style.display = 'table';
            renderMotorTable(painelSelecionado);
        } else {
            checklistContainer.style.display = 'none';
            motorTable.style.display = 'none';
        }
    });

    // --- Lógica de Exportação (inclusa no mesmo arquivo) ---
    // Exportar para PDF
    btnExportPDF.addEventListener('click', async () => {
        const { jsPDF } = window.jspdf;
        const mainContent = document.querySelector('.main-content');
        const tempContainer = mainContent.cloneNode(true);
        tempContainer.style.margin = '20px auto';
        tempContainer.style.width = '210mm';
        tempContainer.style.padding = '20px';
        tempContainer.style.backgroundColor = '#fff';
        
        const buttons = tempContainer.querySelector('.export-buttons-container');
        if (buttons) {
            buttons.style.display = 'none';
        }
        const formInputs = tempContainer.querySelectorAll('.form-input, .form-select');
        formInputs.forEach(input => {
            const originalInput = document.getElementById(input.id);
            if (originalInput) {
                input.value = originalInput.value;
            }
        });
        const originalCheckboxes = document.querySelectorAll('#checklist-container input[type="checkbox"]');
        originalCheckboxes.forEach(cb => {
            if (cb.checked) {
                const tempCheckbox = tempContainer.querySelector(`input[type="checkbox"][value="${cb.value}"]`);
                if (tempCheckbox) {
                    tempCheckbox.setAttribute('checked', 'true');
                }
            }
        });
        const tempTable = tempContainer.querySelector('#motor-table');
        if (tempTable) {
            const originalTableInputs = motorTableBody.querySelectorAll('input');
            const tempTableInputs = tempTable.querySelectorAll('input');
            originalTableInputs.forEach((originalInput, index) => {
                if (tempTableInputs[index]) {
                    tempTableInputs[index].value = originalInput.value;
                }
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

    // Exportar para Excel
    btnExportExcel.addEventListener('click', () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([]);
        let rowNum = 0;
        XLSX.utils.sheet_add_aoa(ws, [['Dados da Preventiva']], { origin: "A1" });
        XLSX.utils.sheet_add_aoa(ws, [['Campo', 'Valor']], { origin: "A2" });
        rowNum = 2;
        const formInputs = document.querySelectorAll('.preventiva-form .form-input, .preventiva-form .form-select');
        formInputs.forEach(input => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (label && input.value) {
                XLSX.utils.sheet_add_aoa(ws, [[label.textContent.replace(':', '').trim(), input.value]], { origin: -1 });
                rowNum++;
            }
        });
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
        if (motorTable.style.display !== 'none' && motorTableBody.rows.length > 0) {
            XLSX.utils.sheet_add_aoa(ws, [['Dados dos Motores']], { origin: `A${rowNum + 2}` });
            const tableHeaders = Array.from(motorTable.querySelectorAll('th')).map(th => th.textContent.trim());
            XLSX.utils.sheet_add_aoa(ws, [tableHeaders], { origin: `A${rowNum + 3}` });
            rowNum += 3;
            Array.from(motorTableBody.rows).forEach(row => {
                const rowData = [];
                rowData.push(row.cells[0].textContent.trim());
                rowData.push(row.cells[1].textContent.trim());
                rowData.push(row.cells[2].querySelector('input').value);
                rowData.push(row.cells[3].querySelector('input').value);
                XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: -1 });
            });
        }
        XLSX.utils.book_append_sheet(wb, ws, 'Preventiva Elétrica');
        XLSX.writeFile(wb, 'preventiva_eletrica.xlsx');
    });
});