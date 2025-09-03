document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#IBOV #BRML3 BR Malls divulga ata de a reunião de o conselho de administração realizada dia 25 de fevereiro . http://t.co/7MpofZh7wj",
    "marks": [
      {
        "word": "reunião",
        "type": "rel"
      },
      {
        "word": "com o conselho de administração",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "reunião",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "com o conselho de administração"
    }
  },
  {
    "Texto": "A Light S.A. arquivou a ata de a Reunião de o Conselho de Administração realizada hoje . Confira : http://t.co/F8LbSlsFfV $LIGT3",
    "marks": [
      {
        "word": "Reunião",
        "type": "rel"
      },
      {
        "word": "de o Conselho de Administração",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Reunião",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "de o Conselho de Administração"
    }
  },
  {
    "Texto": "já pensou , se para abafar possível ' crise ' em a #PETR4 a reunião de conselho de hoje decidir por um aumento em os combustíveis ? o.O",
    "marks": [
      {
        "word": "reunião",
        "type": "rel"
      },
      {
        "word": "por um aumento em os combustíveis",
        "type": "arg1"
      },
      {
        "word": "de conselho",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "reunião",
        "subscript": "rel"
      },
      {
        "word": "combustíveis",
        "subscript": "nmod"
      },
      {
        "word": "conselho",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "por um aumento em os combustíveis",
      "arg2": "de conselho"
    }
  },
  {
    "Texto": "#IBOV #CCRO3 CCR publica ata de a reunião de o conselho de administração realizada dia 19 de fevereiro . http://t.co/R0eQ7JedZl",
    "marks": [
      {
        "word": "reunião",
        "type": "rel"
      },
      {
        "word": "de o conselho de administração",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "reunião",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "de o conselho de administração"
    }
  },
  {
    "Texto": "Por ordem de Dilma , Mantega fará reunião com ' gigantes ' de o empresariado : Ministro de a fazenda ... http://t.co/wEYR2pNDqY #infomoney #vale5",
    "marks": [
      {
        "word": "reunião",
        "type": "rel"
      },
      {
        "word": "Mantega",
        "type": "arg0"
      },
      {
        "word": "com ' gigantes ' de o empresariado",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "reunião",
        "subscript": "rel"
      },
      {
        "word": "Mantega",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Mantega",
      "arg1": "-",
      "arg2": "com ' gigantes ' de o empresariado"
    }
  },
  {
    "Texto": "Reunião com a Eletrobras em a Apimec Rio em o dia 1 de Abril . Coincidentemente , em o dia de a mentira . Bela escolha , combina com a empresa . #ELET6",
    "marks": [
      {
        "word": "Reunião",
        "type": "rel"
      },
      {
        "word": "com a Eletrobras",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Reunião",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "com a Eletrobras"
    }
  },
  {
    "Texto": "RT @chrinvestor : Reunião com a Eletrobras em a Apimec Rio em o dia 1 de Abril . Coincidentemente , em o dia de a mentira . Bela escolha , combina com …",
    "marks": [
      {
        "word": "Reunião",
        "type": "rel"
      },
      {
        "word": "com a Eletrobras",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Reunião",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "com a Eletrobras"
    }
  },
  {
    "Texto": "Reunião de o conselho de a Petrobras hoje , resultados e Vale agitam noticiário : Entre a temporad ... http://t.co/1YYzcTRfmC #infomoney #vale5",
    "marks": [
      {
        "word": "Reunião",
        "type": "rel"
      },
      {
        "word": "de o conselho de a Petrobras",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Reunião",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "de o conselho de a Petrobras"
    }
  },
  {
    "Texto": "#ELET3 Eletrobrás : reunião que promete http://t.co/fZKymcKhfZ via @VEJA",
    "marks": [
      {
        "word": "reunião",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "reunião",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
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