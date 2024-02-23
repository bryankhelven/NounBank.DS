document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo
    const data = [
      {
        Texto: "$BBAS3 - Banco Do Brasil (bbas-nm) - Fato Relevante   Acordo Com Os Correios http://t.co/kW3xh2fjzU",
        marks: [
            { word: "Acordo", type: "rel" }, // Relação principal
            { word: "Com Os Correios", type: "arg2" } // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
            { word: "Acordo", subscript: "rel" },
            { word: "Correios", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
            "arg0": "-",
            "arg1": "-",
            "arg2": "Com Os Correios"
        }
    },
    {
        Texto: "$MRFG3 - Marfrig (mrfg-nm) - Fato Relevante - Primeiro Aditivo Ao Acordo De Acionistas http://t.co/jBJzeY5U5V",
        marks: [
            { word: "Acordo", type: "rel" }, // Relação principal
            { word: "De Acionistas", type: "arg0" }, // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
            { word: "Acordo", subscript: "rel" },
            { word: "Acionistas", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
            "arg0": "De Acionistas",
            "arg1": "-",
            "arg2": "-"
        }
    },
    {
        Texto: "$CCRO3 - Ccr Sa (ccro-nm) - Fato Relevante - Assinatura Do Aditivo Do Acrodo De Acionista http://t.co/xzQyZPPbBL",
        marks: [
            { word: "Acrodo", type: "rel" }, // Relação principal
            { word: "De Acionista", type: "arg0" }, // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
            { word: "Acrodo", subscript: "rel" },
            { word: "Acionista", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
            "arg0": "De Acionista",
            "arg1": "-",
            "arg2": "-"
        }
    },
    {
        Texto: "$GOLL4 - GOL e TAP assinam acordo para compartilhamento de voos http://t.co/F87EcEzEWK",
        marks: [
            { word: "acordo", type: "rel" }, // Relação principal
            { word: "GOL e TAP", type: "arg0" }, // Argumento com cor
            { word: "para compartilhamento de voos", type: "arg1" }, // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
            { word: "acordo", subscript: "rel" },
            { word: "GOL", subscript: "nsubj" },
            { word: "compartilhamento", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
            "arg0": "GOL e TAP",
            "arg1": "para compartilhamento de voos",
        }
    },
    {
        Texto: "#BR #BOVESPA #GOLL4  Gol assina acordo de compartilhamento de voos com TAP. http://t.co/wHGukBg7qp",
        marks: [
            { word: "acordo", type: "rel" }, // Relação principal
            { word: "Gol", type: "arg0" }, // Argumento com cor
            { word: "de compartilhamento de voos", type: "arg1" }, // Argumento com cor
            { word: "com TAP", type: "arg2" } // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
            { word: "acordo", subscript: "rel" },
            { word: "Gol", subscript: "nsubj" },
            { word: "compartilhamento", subscript: "nmod" },
            { word: "TAP", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
            "arg0": "Gol",
            "arg1": "de compartilhamento de voos",
            "arg2": "com TAP"
        }
    },
    {
        Texto: "@gugabianco Até onde sei, 1) não temos cap. instalada para refino, 2) Acordos comerciais, Petr4 precisa exp pra gerar receita em dólar",
        marks: [
            { word: "Acordos", type: "rel" }, // Relação principal
            { word: "comerciais", type: "arg1" } // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
            { word: "Acordos", subscript: "rel" },
            { word: "comerciais", subscript: "amod" }
        ],
   
        args: { // Texto dos argumentos para tabela
            "arg0": "-",
            "arg1": "comerciais",
            "arg2": "-"
        }
    },
    {
        Texto: "Veja as melhores ações para comprar nesta semana, de acordo com 8 corretoras: Os papéis da G... http://t.co/L6OsbF6Os6 #infomoney #vale5",
        marks: [
            { word: "acordo", type: "rel" }, // Relação principal
            { word: "as melhores ações para comprar nesta semana", type: "arg1" }, // Argumento com cor
            { word: "com 8 corretoras", type: "arg2" } // Argumento com cor
            
        ],
        subscripts: [ // Marcações de subscrito separadas
            { word: "acordo", subscript: "rel" },
            { word: "ações", subscript: "nmod" },
            { word: "corretoras", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
            "arg0": "-",
            "arg1": "as melhores ações para comprar nesta semana",
            "arg2": "com 8 corretoras"
        }
    },
    {
        Texto: "Veja as melhores ações para comprar em esta semana , de acordo com 8 corretoras : Os papéis de a Gerdau ( GGBR4 ) e de a ... http://t.co/SK7rRvdHEZ",
        marks: [
          { word: "acordo", type: "rel" }, // Relação principal
          { word: "as melhores ações para comprar em esta semana", type: "arg1" }, // Argumento com cor
          { word: "com 8 corretoras", type: "arg2" } // Argumento com cor
          
      ],
      subscripts: [ // Marcações de subscrito separadas
          { word: "acordo", subscript: "rel" },
          { word: "ações", subscript: "nmod" },
          { word: "corretoras", subscript: "nmod" }
      ],

      args: { // Texto dos argumentos para tabela
          "arg0": "-",
          "arg1": "as melhores ações para comprar em esta semana",
          "arg2": "com 8 corretoras"
      }
    },
    {
        Texto: "Confira 5 'top picks' para comprar este mês, de acordo com a Socopa: As 'Top Picks' da corre... http://t.co/Zu6BAhev7W #infomoney #vale5",
        marks: [
            { word: "acordo", type: "rel" }, // Relação principal
            { word: "com a Socopa", type: "arg2" }, // Argumento com cor
            { word: "5 'top picks' para comprar este mês", type: "arg1" } // Argumento com cor
        ],
        subscripts: [ // Marcações de subscrito separadas
          { word: "acordo", subscript: "rel" },
          { word: "top", subscript: "nmod" },
          { word: "Socopa", subscript: "nmod" }
        ],

        args: { // Texto dos argumentos para tabela
            "arg0": "-",
            "arg1": "5 'top picks' para comprar este mês",
            "arg2": "com a Socopa"
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
  