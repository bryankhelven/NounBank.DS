document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$BBAS3 - Banco Do Brasil (bbas-nm) - Fato Relevante   Acordo Com Os Correios http://t.co/kW3xh2fjzU",
    "marks": [
      {
        "word": "Acordo",
        "type": "rel"
      },
      {
        "word": "Com Os Correios",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Acordo",
        "subscript": "rel"
      },
      {
        "word": "Os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "Com Os Correios"
    }
  },
  {
    "Texto": "$MRFG3 - Marfrig (mrfg-nm) - Fato Relevante - Primeiro Aditivo Ao Acordo De Acionistas http://t.co/jBJzeY5U5V",
    "marks": [
      {
        "word": "Acordo",
        "type": "rel"
      },
      {
        "word": "De Acionistas",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Acordo",
        "subscript": "rel"
      },
      {
        "word": "Acionistas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De Acionistas",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CCRO3 - Ccr Sa (ccro-nm) - Fato Relevante - Assinatura Do Aditivo Do Acrodo De Acionista http://t.co/xzQyZPPbBL",
    "marks": [
      {
        "word": "acordo",
        "type": "rel"
      },
      {
        "word": "De Acionista",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "acordo",
        "subscript": "rel"
      },
      {
        "word": "Acionista",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De Acionista",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$GOLL4 - GOL e TAP assinam acordo para compartilhamento de voos http://t.co/F87EcEzEWK",
    "marks": [
      {
        "word": "acordo",
        "type": "rel"
      },
      {
        "word": "GOL e TAP",
        "type": "arg0"
      },
      {
        "word": "para compartilhamento de voos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "acordo",
        "subscript": "rel"
      },
      {
        "word": "TAP",
        "subscript": "nsubj"
      },
      {
        "word": "compartilhamento",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "GOL e TAP",
      "arg1": "para compartilhamento de voos",
      "arg2": "-"
    }
  },
  {
    "Texto": "Veja as melhores ações para comprar nesta semana, de acordo com 8 corretoras: Os papéis da G... http://t.co/L6OsbF6Os6 #infomoney #vale5",
    "marks": [
      {
        "word": "acordo",
        "type": "rel"
      },
      {
        "word": "as melhores ações para comprar nesta semana",
        "type": "arg1"
      },
      {
        "word": "com 8 corretoras",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "acordo",
        "subscript": "rel"
      },
      {
        "word": "comprar",
        "subscript": "obl"
      },
      {
        "word": "8",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "as melhores ações para comprar nesta semana",
      "arg2": "com 8 corretoras"
    }
  },
  {
    "Texto": "Veja as melhores ações para comprar em esta semana , de acordo com 8 corretoras : Os papéis de a Gerdau ( GGBR4 ) e de a ... http://t.co/SK7rRvdHEZ",
    "marks": [
      {
        "word": "acordo",
        "type": "rel"
      },
      {
        "word": "as melhores ações para comprar em esta semana",
        "type": "arg1"
      },
      {
        "word": "com 8 corretoras",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "acordo",
        "subscript": "rel"
      },
      {
        "word": "comprar",
        "subscript": "obl"
      },
      {
        "word": "8",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "as melhores ações para comprar em esta semana",
      "arg2": "com 8 corretoras"
    }
  },
  {
    "Texto": "Confira 5 'top picks' para comprar este mês, de acordo com a Socopa: As 'Top Picks' da corre... http://t.co/Zu6BAhev7W #infomoney #vale5",
    "marks": [
      {
        "word": "acordo",
        "type": "rel"
      },
      {
        "word": "5 'top picks' para comprar este mês",
        "type": "arg1"
      },
      {
        "word": "com a Socopa",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "acordo",
        "subscript": "rel"
      },
      {
        "word": "comprar",
        "subscript": "obj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "5 'top picks' para comprar este mês",
      "arg2": "com a Socopa"
    }
  },
  {
    "Texto": "@gugabianco Até onde sei, 1) não temos cap. instalada para refino, 2) Acordos comerciais, Petr4 precisa exp pra gerar receita em dólar",
    "marks": [
      {
        "word": "Acordo",
        "type": "rel"
      },
      {
        "word": "comerciais",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Acordo",
        "subscript": "rel"
      },
      {
        "word": "comerciais",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "comerciais",
      "arg2": "-"
    }
  }
];

  const tableBody = document.getElementById('relations-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // evita duplicar quando o HTML já trouxe linhas

  data.forEach((item, index) => {
    let textWithMarks = item.Texto;

    // aplicar cores
    item.marks.forEach(mark => {
      const pattern = new RegExp(`\b(${
        mark.word
      })\b`, 'g');
      textWithMarks = textWithMarks.replace(pattern, `<span class="${mark.type}">$1</span>`);
    });

    // subscritos
    item.subscripts.forEach(sub => {
      const pattern = new RegExp(`\b(${
        sub.word
      })\b`, 'g');
      textWithMarks = textWithMarks.replace(pattern, `$1<sub>${sub.subscript}</sub>`);
    });

    // monta a linha com # + Args mostrados + Texto
    const row = document.createElement('tr');
    let cells = `<td>${index + 1}</td>`;
    SHOWN_ARGS.forEach(a => {
      const v = (item.args[a] ?? '-');
      const cls = (v && v !== '-') ? a : '';
      cells += `<td class="${cls}">${v}</td>`;
    });
    cells += `<td>${textWithMarks}</td>`;
    row.innerHTML = cells;
    tableBody.appendChild(row);

    // linha divisória (colspan dinâmico)
    if (index < data.length - 1) {
      const dividerRow = document.createElement('tr');
      const dividerCell = document.createElement('td');
      dividerCell.colSpan = SHOWN_ARGS.length + 2; // # + args + Texto
      dividerCell.style.borderBottom = '1px solid #ccc';
      dividerRow.appendChild(dividerCell);
      tableBody.appendChild(dividerRow);
    }
  });
});