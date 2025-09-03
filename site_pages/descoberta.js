document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "OGX tem 40 % de Piapara , pré sal , Bloco BS-4 . Localiza - se próximo a as descobertas gigantes Libra e Franco , e Tb a recente descoberta de a Petr4",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "gigantes Libra e Franco",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "Franco",
        "subscript": "appos"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "gigantes Libra e Franco",
      "arg2": "-"
    }
  },
  {
    "Texto": "OGX tem 40 % de Piapara , pré sal , Bloco BS-4 . Localiza - se próximo a as descobertas gigantes Libra e Franco , e Tb a recente descoberta de a Petr4",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "de a Petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a Petr4",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @reminiscences : Sugestao para Graça Foster melhorar Petrobras #Petr4 : fazer campanha contra Dilma … melhor que anunciar descobertas de re …",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "de re",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "re",
        "subscript": "nmod:wtrunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de re",
      "arg2": "-"
    }
  },
  {
    "Texto": "#Petrobrás anuncia descoberta de nova jazida de #propina em o pré-sal e aumento de a exploração de o fisiologismo em a bacia de as almas . #PETR4",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "de nova jazida de #propina",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "nsubj"
      },
      {
        "word": "nova",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "de nova jazida de #propina",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @ppaulovagner : #Petrobrás anuncia descoberta de nova jazida de #propina em o pré-sal e aumento de a exploração de o fisiologismo em a bacia de as …",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "de nova jazida de #propina",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "nsubj"
      },
      {
        "word": "nova",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "de nova jazida de #propina",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @ppaulovagner : #Petrobrás anuncia dscberta d nova jazida d #propina n pré-sal e aumento d exploraç d fisiologismo n bacia d almas . #PETR4",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "de nova jazida de #propina",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "nsubj"
      },
      {
        "word": "nova",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "de nova jazida de #propina",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Adriano3Luis : OGX tem 40 % de Piapara , pré sal , Bloco BS-4 . Localiza - se próximo a as descobertas gigantes Libra e Franco , e Tb a recente d …",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "gigantes Libra e Franco",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "Franco",
        "subscript": "appos"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "gigantes Libra e Franco",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Adriano3Luis : OGX tem 40 % de Piapara , pré sal , Bloco BS-4 . Localiza - se próximo a as descobertas gigantes Libra e Franco , e Tb a recente d …",
    "marks": [
      {
        "word": "descoberta",
        "type": "rel"
      },
      {
        "word": "gigantes Libra e Franco",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "descoberta",
        "subscript": "rel"
      },
      {
        "word": "Franco",
        "subscript": "appos"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "gigantes Libra e Franco",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Comprova Descoberta Em Aguas Profundas Em a Bacia Potiguar http://t.co/3JseOl3iVW",
    "marks": [
      {
        "word": "Descoberta",
        "type": "rel"
      },
      {
        "word": "Em Aguas Profundas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Descoberta",
        "subscript": "rel"
      },
      {
        "word": "Profundas",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Em Aguas Profundas",
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