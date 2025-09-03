document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$ALLL3 - All Amer Lat ( alll-nm ) - Fato Relevante Licensa Ambiental P/ Duplic Subtrechos http://t.co/nJcfQYPDI7",
    "marks": [
      {
        "word": "licença",
        "type": "rel"
      },
      {
        "word": "Duplic Subtrechos",
        "type": "arg1"
      },
      {
        "word": "All Amer Lat ( alll-nm )",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "licença",
        "subscript": "rel"
      },
      {
        "word": "Subtrechos",
        "subscript": "nmod"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Duplic Subtrechos",
      "arg2": "All Amer Lat ( alll-nm )"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Encerramento De a Licenca De o Diretor De Distribuicao http://t.co/t0zHiXiVwN",
    "marks": [
      {
        "word": "licença",
        "type": "rel"
      },
      {
        "word": "Eletrobras ( elet-n1 )",
        "type": "arg0"
      },
      {
        "word": "Do Diretor De Distribuicao",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "licença",
        "subscript": "rel"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      },
      {
        "word": "Diretor",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Eletrobras ( elet-n1 )",
      "arg1": "-",
      "arg2": "Do Diretor De Distribuicao"
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