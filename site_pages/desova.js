document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#PCAR4 Lembram a desova que comentei ontem , foi exatamente quem desconfiei . Abilio Diniz vendeu todas as suas ações http://t.co/SnLDXqDKeC",
    "marks": [
      {
        "word": "desova",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "desova",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PCAR4 GRANDE INVESTIDOR PODE TER REDUZIDO POSIÇÃO ITAU hoje fez uma desova de quase 297 milhões de reais a o preço médio de 104,06 .",
    "marks": [
      {
        "word": "desova",
        "type": "rel"
      },
      {
        "word": "ITAU",
        "type": "arg0"
      },
      {
        "word": "de quase 297 milhões de reais",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "desova",
        "subscript": "rel"
      },
      {
        "word": "ITAU",
        "subscript": "nmod"
      },
      {
        "word": "quase",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "ITAU",
      "arg1": "de quase 297 milhões de reais",
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