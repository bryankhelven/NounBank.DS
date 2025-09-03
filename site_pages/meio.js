document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg1"];
  const data = [
  {
    "Texto": "O fundo ocorreu em o dia 17/03 , em os R$ 12,57 . Em 12 pregões já subiu mais de 30 % . Isso tudo , em o meio de escândalos de corrupção . #PETR4",
    "marks": [
      {
        "word": "meio",
        "type": "rel"
      },
      {
        "word": "de escândalos de corrupção.",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "meio",
        "subscript": "rel"
      },
      {
        "word": "escândalos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "de escândalos de corrupção."
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