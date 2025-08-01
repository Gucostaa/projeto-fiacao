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
  

  // Outros painéis podem ser adicionados aqui
};

const select = document.getElementById("equipamento");
const checklist = document.getElementById("checklist-container");
const table = document.getElementById("motor-table");
const tbody = table.querySelector("tbody");

select.addEventListener("change", function () {
  const painelSelecionado = this.value;

  if (painelSelecionado && painelMotores[painelSelecionado]) {
    checklist.style.display = "block";
    table.style.display = "table";

    // Limpa tabela antes de adicionar nova
    tbody.innerHTML = "";

    painelMotores[painelSelecionado].forEach(motor => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><input type="text" name="motor_id" value="${motor.id}" readonly /></td>
        <td><input type="text" name="motor_nome" value="${motor.nome}" readonly /></td>
        <td><input type="text" name="temperatura" /></td>
        <td><input type="text" name="amperagem" /></td>
      `;

      tbody.appendChild(row);
    });

  } else {
    checklist.style.display = "none";
    table.style.display = "none";
    tbody.innerHTML = "";
  }
});
