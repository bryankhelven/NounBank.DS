document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "@marcosloro @stanleyburburin eu sou e estou comprador de a @petrobras principalmente PETR4",
    "marks": [
      {
        "word": "comprador",
        "type": "rel"
      },
      {
        "word": "eu",
        "type": "arg0"
      },
      {
        "word": "de a @petrobras principalmente PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "comprador",
        "subscript": "rel"
      },
      {
        "word": "eu",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "eu",
      "arg1": "de a @petrobras principalmente PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "@malcaetano : vários papéis com IMA - Entrada intetessante : GGBR4 a 0.85 , VALE5 a 0.85 . Surgindo compradores em o mercado ?",
    "marks": [
      {
        "word": "comprador",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "comprador",
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
    "Texto": "A os compradores de abertura desesperados de #petr4 a rsposta",
    "marks": [
      {
        "word": "comprador",
        "type": "rel"
      },
      {
        "word": "de #petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "comprador",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #petr4",
      "arg2": "-"
    }
  },
  {
    "Texto": "#VALE5 @HBMyCAP e opções é pegadinha , compra pra perder , só cai , existe um comprador ?",
    "marks": [
      {
        "word": "comprador",
        "type": "rel"
      },
      {
        "word": "#VALE5 @HBMyCAP e opções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "comprador",
        "subscript": "rel"
      },
      {
        "word": "opções",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#VALE5 @HBMyCAP e opções",
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