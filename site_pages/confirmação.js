document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Petr4 a os 13.41 com topo em 15,1 . Sugeriu fundo em 12,9 mas falta confirmação .",
    "marks": [
      {
        "word": "confirmação",
        "type": "rel"
      },
      {
        "word": "fundo em 12,9",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "confirmação",
        "subscript": "rel"
      },
      {
        "word": "9",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "fundo em 12,9",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Andresmoraes nossa querida e amada #PETR4 em a briga por a confirmação de o rompimento de os R$ 16,60 hein ? Essa promete ser de as boas . =)",
    "marks": [
      {
        "word": "confirmação",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "de o rompimento de os R$ 16,60",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "confirmação",
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
      "arg1": "de o rompimento de os R$ 16,60",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @clubedopairico : @Andresmoraes nossa querida e amada #PETR4 em a briga por a confirmação de o rompimento de os R$ 16,6 hein ? Essa promete ser …",
    "marks": [
      {
        "word": "confirmação",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "de o rompimento de os R$ 16,60",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "confirmação",
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
      "arg1": "de o rompimento de os R$ 16,60",
      "arg2": "-"
    }
  },
  {
    "Texto": "@clubedopairico : @Andresmoraes nossa querida e amada #PETR4 em a briga por a confirmação de o rompimento . Mercado amarrado .",
    "marks": [
      {
        "word": "confirmação",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      },
      {
        "word": "de o rompimento",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "confirmação",
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
      "arg1": "de o rompimento",
      "arg2": "-"
    }
  },
  {
    "Texto": "@clubedopairico Zé , qual seria a confirmação de que os shootings stars estão indicando uma reversão de tendência para a PETR4 ? ?",
    "marks": [
      {
        "word": "confirmação",
        "type": "rel"
      },
      {
        "word": "de que os shootings stars estão indicando uma reversão de tendência para a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "confirmação",
        "subscript": "rel"
      },
      {
        "word": "que",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de que os shootings stars estão indicando uma reversão de tendência para a PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Petr4 a os 12.93 com topo em 15.1 . Sugerindo fundo em a região 12,90-12,86 mas falta confirmação .",
    "marks": [
      {
        "word": "confirmação",
        "type": "rel"
      },
      {
        "word": "fundo em a região 12,90-12,86",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "confirmação",
        "subscript": "rel"
      },
      {
        "word": "86",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "fundo em a região 12,90-12,86",
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