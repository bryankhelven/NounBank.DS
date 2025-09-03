document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "Day trade VALE5 Previsto e evitado zona de alto risco e falta de liquidez absurda 27-03-14 http://t.co/FZV3HPrEG3",
    "marks": [
      {
        "word": "falta",
        "type": "rel"
      },
      {
        "word": "de liquidez absurda",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "falta",
        "subscript": "rel"
      },
      {
        "word": "liquidez",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de liquidez absurda"
    }
  },
  {
    "Texto": "BISA3 - AGE sobre OPA não foi realizada por falta de quórum A AGE de a Brookfield Incorporações que deliberaria ... http://t.co/UHOEPbGUFS",
    "marks": [
      {
        "word": "falta",
        "type": "rel"
      },
      {
        "word": "de quórum",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "falta",
        "subscript": "rel"
      },
      {
        "word": "quórum",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de quórum"
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