document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$MRVE3 - Mrv ( mrve-nm ) - Pagamento De Dividendo / Ajuste Em o Valor http://t.co/OLYAVgQz1Q",
    "marks": [
      {
        "word": "Ajuste",
        "type": "rel"
      },
      {
        "word": "Em o Valor",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Ajuste",
        "subscript": "rel"
      },
      {
        "word": "Valor",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Em o Valor",
      "arg2": "-"
    }
  },
  {
    "Texto": "Posições que ja alcançaram realização parcial , ajuste em os stops ! vale5 linda a venda ! hehe http://t.co/bAFgR9MAfV",
    "marks": [
      {
        "word": "ajuste",
        "type": "rel"
      },
      {
        "word": "Posições que ja alcançaram realização parcial",
        "type": "arg0"
      },
      {
        "word": "os stops",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "ajuste",
        "subscript": "rel"
      },
      {
        "word": "parcial",
        "subscript": "amod"
      },
      {
        "word": "stops",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Posições que ja alcançaram realização parcial",
      "arg1": "os stops",
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