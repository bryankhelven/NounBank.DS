document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "CIEL3 valorizou, está entre as ações indicadas da Carteira Valor. Deve ter sido pelo projeto especial de larga demanda pra Copa. Foi genial.",
    "marks": [
      {
        "word": "demanda",
        "type": "rel"
      },
      {
        "word": "Copa",
        "type": "arg0"
      },
      {
        "word": "projeto especial",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "demanda",
        "subscript": "rel"
      },
      {
        "word": "Copa",
        "subscript": "nmod"
      },
      {
        "word": "especial",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "Copa",
      "arg1": "projeto especial",
      "arg2": "-"
    }
  },
  {
    "Texto": "#GOLL4 O transporte doméstico de passageiros registrou aumento de 8,16 % em a demanda medida em passageiros ... http://t.co/8pIYzbanHG",
    "marks": [
      {
        "word": "demanda",
        "type": "rel"
      },
      {
        "word": "aumento de 8,16 %",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "demanda",
        "subscript": "rel"
      },
      {
        "word": "8",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "aumento de 8,16 %",
      "arg2": "-"
    }
  },
  {
    "Texto": "Bom Dia ! ! Colocaria em esse trimestre USIM5 como neutra as ações ! Demanda fraca em esse 2º trimestre",
    "marks": [
      {
        "word": "Demanda",
        "type": "rel"
      },
      {
        "word": "USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Demanda",
        "subscript": "rel"
      },
      {
        "word": "USIM5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR3 #PETR4 - Petrobras precifica emissão de US$ 8,5 bi , demanda supera US$ 22 bi - http://t.co/EsHc5R6XTA",
    "marks": [
      {
        "word": "demanda",
        "type": "rel"
      },
      {
        "word": "US$ 22 bi",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "demanda",
        "subscript": "rel"
      },
      {
        "word": "bi",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "US$ 22 bi",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR3 #PETR4 - Petrobras prepara megacaptação de bônus , demanda supera supera 12 bi - http://t.co/Bq8mzQiM9d",
    "marks": [
      {
        "word": "demanda",
        "type": "rel"
      },
      {
        "word": "de bônus",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "demanda",
        "subscript": "rel"
      },
      {
        "word": "bônus",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de bônus",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Smarttrade10 @ferrisss @dfittarelli Operador de BTC de um banco me disse hj que não conseguiu toda a demanda de BBAS3 pra tomar por exemplo",
    "marks": [
      {
        "word": "demanda",
        "type": "rel"
      },
      {
        "word": "de BBAS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "demanda",
        "subscript": "rel"
      },
      {
        "word": "BBAS3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de BBAS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "@CapSpaulding01 Petrobras prepara megacaptação de bônus , demanda supera US$ 12 bi - - - olha aí sua grana #petr4 R$ 12",
    "marks": [
      {
        "word": "demanda",
        "type": "rel"
      },
      {
        "word": "de bônus",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "demanda",
        "subscript": "rel"
      },
      {
        "word": "bônus",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de bônus",
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