document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo
    const data = [
      {
        Texto: "O fundo ocorreu no dia 17/03, nos R$ 12,57. Em 12 pregões já subiu mais de 30%. Isso tudo, no meio de escândalos de corrupção. #PETR4",
        marks: [
          { word: "meio", type: "rel" }, // Relação principal
          { word: "de escândalos de corrupção", type: "arg1" } // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
          { word: "meio", subscript: "rel" },
          { word: "de escândalos de corrupção", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
          "arg1": "de escândalos de corrupção",
        }
      }
    ];
  
    const tableBody = document.getElementById('relations-table').getElementsByTagName('tbody')[0];

    data.forEach((item, index) => {
      let textWithMarks = item.Texto;
  
      // Aplicar cores aos argumentos
      item.marks.forEach(mark => {
        const pattern = new RegExp(`\\b(${mark.word})\\b`, 'g');
        textWithMarks = textWithMarks.replace(pattern, `<span class="${mark.type}">$1</span>`);
      });
  
      // Aplicar subscritos
      item.subscripts.forEach(sub => {
        const pattern = new RegExp(`\\b(${sub.word})\\b`, 'g');
        textWithMarks = textWithMarks.replace(pattern, `$1<sub>${sub.subscript}</sub>`);
      });
  
      // Criar e adicionar a linha na tabela
      const row = document.createElement('tr');
      row.innerHTML = `
  <td>${index + 1}</td>
  <td class="${item.args.arg0 ? 'arg0' : ''}">${item.args.arg0 || '-'}</td>
  <td class="${item.args.arg1 ? 'arg1' : ''}">${item.args.arg1 || '-'}</td>
  <td class="${item.args.arg2 ? 'arg2' : ''}">${item.args.arg2 || '-'}</td>
  <td>${textWithMarks}</td>
  `;
  
      tableBody.appendChild(row);
  
      // Adiciona uma linha de divisão após cada item, exceto o último
      if (index < data.length - 1) {
        const dividerRow = document.createElement('tr');
        const dividerCell = document.createElement('td');
        dividerCell.colSpan = 5; // Cobrir todas as colunas da tabela
        dividerCell.style.borderBottom = '1px solid #ccc';
        dividerRow.appendChild(dividerCell);
        tableBody.appendChild(dividerRow);
      }
    });
  });