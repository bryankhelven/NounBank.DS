document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "( ALLL3 ) : A ALL e a Rumo deram início a conversas para que a concessionária aumente o volume de o transporte de ... http://t.co/t2JXbpKAef",
    "marks": [
      {
        "word": "conversa",
        "type": "rel"
      },
      {
        "word": "ALL",
        "type": "arg0"
      },
      {
        "word": "para que a concessionária aumente o volume de o transporte de",
        "type": "arg1"
      },
      {
        "word": "Rumo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "conversa",
        "subscript": "rel"
      },
      {
        "word": "ALL",
        "subscript": "nsubj"
      },
      {
        "word": "que",
        "subscript": "case"
      },
      {
        "word": "Rumo",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "ALL",
      "arg1": "para que a concessionária aumente o volume de o transporte de",
      "arg2": "Rumo"
    }
  },
  {
    "Texto": "#TIMP3 - Telecom Italia diz que não há conversas de fusão sobre TIM - http://t.co/O502wucYkW",
    "marks": [
      {
        "word": "conversa",
        "type": "rel"
      },
      {
        "word": "Telecom Italia",
        "type": "arg0"
      },
      {
        "word": "de fusão sobre TIM",
        "type": "arg1"
      },
      {
        "word": "TIM",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "conversa",
        "subscript": "rel"
      },
      {
        "word": "Italia",
        "subscript": "flat:name"
      },
      {
        "word": "fusão",
        "subscript": "nmod"
      },
      {
        "word": "TIM",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Telecom Italia",
      "arg1": "de fusão sobre TIM",
      "arg2": "TIM"
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