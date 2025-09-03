document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Sabesp (SBSP3): Responsável por o abastecimento de 47% de a região metropolitana de São Paulo, o Sistema Cantareira... http://t.co/xs8ji7To5z",
    "marks": [
      {
        "word": "abastecimento",
        "type": "rel"
      },
      {
        "word": "o Sistema Cantareira",
        "type": "arg0"
      },
      {
        "word": "abastecimento de 47% de a região metropolitana de São Paulo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "abastecimento",
        "subscript": "rel"
      },
      {
        "word": "Cantareira",
        "subscript": "flat:name"
      },
      {
        "word": "47",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "o Sistema Cantareira",
      "arg1": "abastecimento de 47% de a região metropolitana de São Paulo",
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