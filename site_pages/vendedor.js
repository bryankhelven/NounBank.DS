document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Sou vendedor de BRKM5 . Estou analisando time , hoje ou amanhã . @ferrisss @dfittarelli @HudsonPF @JPedro_Sullivan",
    "marks": [
      {
        "word": "vendedor",
        "type": "rel"
      },
      {
        "word": "de BRKM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "vendedor",
        "subscript": "rel"
      },
      {
        "word": "BRKM5",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de BRKM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "Destaques BTC #PETR3 #PETR4 #SBSP3 #BBAS3 Sou vendedor de todas a o longo de o dia . Petrobras aparece em tds criterios @ferrisss @dfittarelli",
    "marks": [
      {
        "word": "vendedor",
        "type": "rel"
      },
      {
        "word": "de todas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "vendedor",
        "subscript": "rel"
      },
      {
        "word": "todas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de todas",
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