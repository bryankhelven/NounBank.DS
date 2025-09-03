document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg1", "arg2"];
  const data = [
  {
    "Texto": ". @edmilsonpapo10 Manual de o petista braço-curto : 1 ) culpe FHC , ex : Graça Foster de a #PETR4 culpa FHC por Pasadena http://t.co/BSgvyRqFdZ",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "exemplo",
      "arg2": "-"
    }
  },
  {
    "Texto": "IBOVESPA sobe 0,91 % , com ajuda de PETRO , VALE e muitas outras líderes . Poucas em o vermelho , como por exemplo : ABEV3 , CCRO3 , CIEL3 , BTOW3 ...",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      },
      {
        "word": "Poucas em o vermelho",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      },
      {
        "word": "exemplo",
        "subscript": "nmod"
      },
      {
        "word": "vermelho",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg1": "exemplo",
      "arg2": "Poucas em o vermelho"
    }
  },
  {
    "Texto": "Alta de a Bovespa não é total . Em a tela nota - se algumas ações em o vermelho , como por exemplo : GGBR4 , ABRE11 , SLED4 , ALLL3 , BISA3 , USIM3 , MMXM3 ..",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      },
      {
        "word": "nota-se algumas ações em o vermelho",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      },
      {
        "word": "exemplo",
        "subscript": "obl"
      },
      {
        "word": "vermelho",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "exemplo",
      "arg2": "nota-se algumas ações em o vermelho"
    }
  },
  {
    "Texto": "@Smarttrade10 @ferrisss @dfittarelli Operador de BTC de um banco me disse hj que não conseguiu toda a demanda de BBAS3 pra tomar por exemplo",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      },
      {
        "word": "exemplo",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg1": "exemplo",
      "arg2": "-"
    }
  },
  {
    "Texto": "Poucas ações não caíram hoje , como por exemplo : Rent3 , Vale5 , Csna3 , Usim3 , Usim5 , Ggbr4 , Timp3 ...",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      },
      {
        "word": "Poucas ações não caíram hoje",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      },
      {
        "word": "exemplo",
        "subscript": "obl"
      },
      {
        "word": "hoje",
        "subscript": "advmod"
      }
    ],
    "args": {
      "arg1": "exemplo",
      "arg2": "Poucas ações não caíram hoje"
    }
  },
  {
    "Texto": "RT @ubrals : . @edmilsonpapo10 Manual de o petista braço-curto : 1 ) culpe FHC , ex : Graça Foster de a #PETR4 culpa FHC por Pasadena http://t.co/BSg…",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "exemplo",
      "arg2": "-"
    }
  },
  {
    "Texto": "A refinaria de Pasadena q custou US$ 1,18 Bi em 2006 p/ a PETR4 , hoje vale US$ 120 Mi . Um exemplo de como queimar o dinheiro de os acionistas",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      },
      {
        "word": "de como queimar o dinheiro de os acionistas",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      },
      {
        "word": "exemplo",
        "subscript": "parataxis"
      },
      {
        "word": "como",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "exemplo",
      "arg2": "de como queimar o dinheiro de os acionistas"
    }
  },
  {
    "Texto": "@emirsader o FGTs aplicado em PETR4 , por exemplo .",
    "marks": [
      {
        "word": "exemplo",
        "type": "rel"
      },
      {
        "word": "exemplo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exemplo",
        "subscript": "rel"
      },
      {
        "word": "exemplo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "exemplo",
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