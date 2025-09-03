document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0"];
  const data = [
  {
    "Texto": "$TIMP3 - Tim Part S/a (timp-nm) - Deliberacoes Da Assembleia http://t.co/0MkHI1c4BP",
    "marks": [
      {
        "word": "deliberação",
        "type": "rel"
      },
      {
        "word": "Da Assembleia",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "deliberação",
        "subscript": "rel"
      },
      {
        "word": "Assembleia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Da Assembleia"
    }
  },
  {
    "Texto": "$LIGT3 - Light S/a (ligt-nm) - deliberacoes De Assembleias / Distribuicao De Dividendo http://t.co/IoOoCOiGT1",
    "marks": [
      {
        "word": "deliberação",
        "type": "rel"
      },
      {
        "word": "De Assembleias",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "deliberação",
        "subscript": "rel"
      },
      {
        "word": "Assembleias",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De Assembleias"
    }
  },
  {
    "Texto": "$DASA3 - Dasa (dasa-nm)- Deliberacoes Da Ago / Distribuicao De Dividendo http://t.co/9eQGNWhrwd",
    "marks": [
      {
        "word": "deliberação",
        "type": "rel"
      },
      {
        "word": "Da Ago",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "deliberação",
        "subscript": "rel"
      },
      {
        "word": "Ago",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Da Ago"
    }
  },
  {
    "Texto": "$CYRE3 - Cyrela Realt (cyre) - Deliberacoes Da Ago/e / Distribuicao De Dividendo http://t.co/m7Rt4wHstX",
    "marks": [
      {
        "word": "deliberação",
        "type": "rel"
      },
      {
        "word": "Da Ago/e",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "deliberação",
        "subscript": "rel"
      },
      {
        "word": "Ago",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Da Ago/e"
    }
  },
  {
    "Texto": "$RENT3 - Localiza (rent-nm) - deliberacoes De Ago/e http://t.co/koG0j3sK7K",
    "marks": [
      {
        "word": "deliberação",
        "type": "rel"
      },
      {
        "word": "De Ago/e",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "deliberação",
        "subscript": "rel"
      },
      {
        "word": "Ago",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De Ago/e"
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