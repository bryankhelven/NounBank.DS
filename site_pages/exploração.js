document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "#Petrobrás anuncia descoberta de nova jazida de #propina em o pré-sal e aumento de a exploração de o fisiologismo em a bacia de as almas . #PETR4",
    "marks": [
      {
        "word": "exploração",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "de o fisiologismo em a bacia de as almas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exploração",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "de o fisiologismo em a bacia de as almas"
    }
  },
  {
    "Texto": "RT @ppaulovagner : #Petrobrás anuncia descoberta de nova jazida de #propina em o pré-sal e aumento de a exploração de o fisiologismo em a bacia de as …",
    "marks": [
      {
        "word": "exploração",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "de o fisiologismo em a bacia de as almas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exploração",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "de o fisiologismo em a bacia de as almas"
    }
  },
  {
    "Texto": "RT @ppaulovagner : #Petrobrás anuncia dscberta d nova jazida d #propina n pré-sal e aumento d exploraç d fisiologismo n bacia d almas . #PETR4",
    "marks": [
      {
        "word": "exploração",
        "type": "rel"
      },
      {
        "word": "#Petrobrás",
        "type": "arg0"
      },
      {
        "word": "de o fisiologismo em a bacia de as almas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exploração",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#Petrobrás",
      "arg1": "de o fisiologismo em a bacia de as almas"
    }
  },
  {
    "Texto": "Vale ( VALE5 ) – Adiou para 30 de março o prazo para a decisão sobre o projeto de exploração de potássio . #VisaoAtiva - Marginalmente negativa",
    "marks": [
      {
        "word": "exploração",
        "type": "rel"
      },
      {
        "word": "de potássio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "exploração",
        "subscript": "rel"
      },
      {
        "word": "potássio",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de potássio"
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