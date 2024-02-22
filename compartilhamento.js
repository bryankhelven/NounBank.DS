document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo
    const data = [
      {
        Texto: "#BR #BOVESPA #GOLL4 Gol assina acordo de compartilhamento de voos com TAP . http://t.co/wHGukBg7qp",
        marks: [
          { word: "Gol", type: "arg0" }, // Argumento com cor
          { word: "compartilhamento", type: "rel" }, // Relação principal
          { word: "de voos", type: "arg1" } // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
          { word: "Gol", subscript: "nsubj" },
          { word: "compartilhamento", subscript: "rel" },
          { word: "voos", subscript: "nmod" }
        ],
        underlines: ["Gol", "compartilhamento", "voos"], // Palavras a serem sublinhadas
        args: { // Texto dos argumentos para tabela
          "arg0": "Gol",
          "arg1": "de voos",
          "arg2": "-"
        }
      },
      {
        Texto: "$GOLL4 - GOL e TAP assinam acordo para compartilhamento de voos http://t.co/F87EcEzEWK",
        marks: [
          { word: "GOL e TAP", type: "arg0" }, // Argumento com cor
          { word: "compartilhamento", type: "rel" }, // Relação principal
          { word: "de voos", type: "arg1" } // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
          { word: "GOL", subscript: "nsubj" },
          { word: "compartilhamento", subscript: "rel" },
          { word: "voos", subscript: "nmod" }
        ],
        underlines: ["GOL", "compartilhamento", "voos"], // Palavras a serem sublinhadas
        args: { // Texto dos argumentos para tabela
          "arg0": "GOL e TAP",
          "arg1": "de voos",
          "arg2": "-"
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
  <td class="arg0">${item.args.arg0}</td>
  <td class="arg1">${item.args.arg1}</td>
  <td class="arg2">${item.args.arg2}</td>
  <td>${textWithMarks}</td>
`;
  
      tableBody.appendChild(row);
    });
  });
  