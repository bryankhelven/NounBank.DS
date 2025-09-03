document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#BR #BOVESPA #GOLL4 Gol assina acordo de compartilhamento de voos com TAP . http://t.co/wHGukBg7qp",
    "marks": [
      {
        "word": "compartilhamento",
        "type": "rel"
      },
      {
        "word": "Gol",
        "type": "arg0"
      },
      {
        "word": "de voos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compartilhamento",
        "subscript": "rel"
      },
      {
        "word": "Gol",
        "subscript": "nsubj"
      },
      {
        "word": "voos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Gol",
      "arg1": "de voos",
      "arg2": "-"
    }
  },
  {
    "Texto": "$GOLL4 - GOL e TAP assinam acordo para compartilhamento de voos http://t.co/F87EcEzEWK",
    "marks": [
      {
        "word": "compartilhamento",
        "type": "rel"
      },
      {
        "word": "GOL",
        "type": "arg0"
      },
      {
        "word": "de voos",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "compartilhamento",
        "subscript": "rel"
      },
      {
        "word": "GOL",
        "subscript": "nsubj"
      },
      {
        "word": "voos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "GOL",
      "arg1": "de voos",
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