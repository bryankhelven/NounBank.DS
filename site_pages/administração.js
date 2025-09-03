document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$MRVE3 - Mrv ( mrve-nm ) - Fato Relevante - Alteracao Em a Administracao De a Companhia http://t.co/PdxXl414Wg",
    "marks": [
      {
        "word": "administração",
        "type": "rel"
      },
      {
        "word": "De a Companhia",
        "type": "arg1"
      },
      {
        "word": "Mrv ( mrve-nm",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "administração",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De a Companhia",
      "arg2": "Mrv ( mrve-nm"
    }
  },
  {
    "Texto": "#IBOV #BRML3 BR Malls divulga ata de a reunião de o conselho de administração realizada dia 25 de fevereiro . http://t.co/7MpofZh7wj",
    "marks": [
      {
        "word": "administração",
        "type": "rel"
      },
      {
        "word": "Malls",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "administração",
        "subscript": "rel"
      },
      {
        "word": "Malls",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "Malls"
    }
  },
  {
    "Texto": "A Light S.A. arquivou a ata de a Reunião de o Conselho de Administração realizada hoje . Confira : http://t.co/F8LbSlsFfV $LIGT3",
    "marks": [
      {
        "word": "Administração",
        "type": "rel"
      },
      {
        "word": "A Light S.A.",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Administração",
        "subscript": "rel"
      },
      {
        "word": "A",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "A Light S.A."
    }
  },
  {
    "Texto": "$RSID3 - Rossi Resid ( rsid-nm ) - Indicacao De Candidato A Membro De o Conselho De Admin . http://t.co/XAZrrT0xHk",
    "marks": [
      {
        "word": "administração",
        "type": "rel"
      },
      {
        "word": "Membro",
        "type": "arg0"
      },
      {
        "word": "Rossi Resid ( rsid-nm )",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "administração",
        "subscript": "rel"
      },
      {
        "word": "Membro",
        "subscript": "nmod"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Membro",
      "arg1": "-",
      "arg2": "Rossi Resid ( rsid-nm )"
    }
  },
  {
    "Texto": "#IBOV #CCRO3 CCR publica ata de a reunião de o conselho de administração realizada dia 19 de fevereiro . http://t.co/R0eQ7JedZl",
    "marks": [
      {
        "word": "administração",
        "type": "rel"
      },
      {
        "word": "CCR",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "administração",
        "subscript": "rel"
      },
      {
        "word": "CCR",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "CCR"
    }
  },
  {
    "Texto": "RT @chrinvestor : O que acontece com as ações de uma cia quando se descobre que a sua administração ' roubou ' bilhões ? Em o Brasil , o papel sob …",
    "marks": [
      {
        "word": "administração",
        "type": "rel"
      },
      {
        "word": "cia",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "administração",
        "subscript": "rel"
      },
      {
        "word": "cia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "cia"
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