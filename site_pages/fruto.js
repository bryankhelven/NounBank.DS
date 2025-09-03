document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "@ferrisss @dfittarelli vendinha de itub4 em os 35,10 começando a dar frutos , VAI QUE VAI !",
    "marks": [
      {
        "word": "fruto",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "fruto",
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
    "Texto": "' Vale vai trazer muitos frutos para quem investir ' , diz gestor de fundo : Leonardo Messer , ge ... http://t.co/KkMcTlfCI6 #infomoney #vale5",
    "marks": [
      {
        "word": "fruto",
        "type": "rel"
      },
      {
        "word": "Vale",
        "type": "arg0"
      },
      {
        "word": "quem",
        "type": "arg1"
      },
      {
        "word": "investir",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "fruto",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nsubj"
      },
      {
        "word": "quem",
        "subscript": "obl"
      },
      {
        "word": "investir",
        "subscript": "acl:relcl"
      }
    ],
    "args": {
      "arg0": "Vale",
      "arg1": "quem",
      "arg2": "investir"
    }
  },
  {
    "Texto": "' Vale vai trazer muitos frutos para quem investir ' , diz gestor de fundo http://t.co/s9IQkrTxMV #VALE4 #VALE5",
    "marks": [
      {
        "word": "fruto",
        "type": "rel"
      },
      {
        "word": "Vale",
        "type": "arg0"
      },
      {
        "word": "quem",
        "type": "arg1"
      },
      {
        "word": "investir",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "fruto",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nsubj"
      },
      {
        "word": "quem",
        "subscript": "obl"
      },
      {
        "word": "investir",
        "subscript": "acl:relcl"
      }
    ],
    "args": {
      "arg0": "Vale",
      "arg1": "quem",
      "arg2": "investir"
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