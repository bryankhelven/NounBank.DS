document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#petr4 na briga com 12,94",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "#petr4",
        "type": "arg0"
      },
      {
        "word": "12.94",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "#petr4",
      "arg1": "-",
      "arg2": "12.94"
    }
  },
  {
    "Texto": "#petr4 agora que vi, o King Kong tem briga em 15,35",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "King Kong",
        "type": "arg0"
      },
      {
        "word": "15.35",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "Kong",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "King Kong",
      "arg1": "-",
      "arg2": "15.35"
    }
  },
  {
    "Texto": "Olha o Post!!! RT @Live_Trade: #petr4 agora que vi, o King Kong tem briga em 15,35",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "King Kong",
        "type": "arg0"
      },
      {
        "word": "15.35",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "Kong",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "King Kong",
      "arg1": "-",
      "arg2": "15.35"
    }
  },
  {
    "Texto": "@Andresmoraes nossa querida e amada #PETR4 em a briga por a confirmação de o rompimento de os R$ 16,60 hein ? Essa promete ser de as boas . =)",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "por a confirmação de o rompimento de os R$ 16,60",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "-",
      "arg2": "por a confirmação de o rompimento de os R$ 16,60"
    }
  },
  {
    "Texto": "RT @clubedopairico : @Andresmoraes nossa querida e amada #PETR4 em a briga por a confirmação de o rompimento de os R$ 16,6 hein ? Essa promete ser …",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "confirmação de o rompimento",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "-",
      "arg2": "confirmação de o rompimento"
    }
  },
  {
    "Texto": "@clubedopairico : @Andresmoraes nossa querida e amada #PETR4 em a briga por a confirmação de o rompimento . Mercado amarrado .",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "confirmação de o rompimento",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "-",
      "arg2": "confirmação de o rompimento"
    }
  },
  {
    "Texto": "e olha lá a #PETR4 em a briga de os R$ 13,5 ... ,)",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "13.5",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "#PETR4",
      "arg1": "-",
      "arg2": "13.5"
    }
  },
  {
    "Texto": "GFSA3 ... 227 com um ritmo muito forte em a venda . Se permanecer assim será difícil o papel fechar em o azul hoje . Briga pesada : 227 x 40 .",
    "marks": [
      {
        "word": "Briga",
        "type": "rel"
      },
      {
        "word": "227",
        "type": "arg0"
      },
      {
        "word": "40",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Briga",
        "subscript": "rel"
      },
      {
        "word": "227",
        "subscript": "nmod"
      },
      {
        "word": "40",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "227",
      "arg1": "40",
      "arg2": "-"
    }
  },
  {
    "Texto": "olho em os 15 de o king Kong #petr4 15,54 pode ter briga boa ...",
    "marks": [
      {
        "word": "briga",
        "type": "rel"
      },
      {
        "word": "#petr4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "briga",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#petr4",
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