document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#FIBR3 O cenário de preço para a celulose é estável em abril , em a comparação com março , afirmou o presidente de a ... http://t.co/HjpD6gPU9O",
    "marks": [
      {
        "word": "comparação",
        "type": "rel"
      },
      {
        "word": "em abril",
        "type": "arg1"
      },
      {
        "word": "com março",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "comparação",
        "subscript": "rel"
      },
      {
        "word": "abril",
        "subscript": "obl"
      },
      {
        "word": "março",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em abril",
      "arg2": "com março"
    }
  },
  {
    "Texto": "#FLRY3 interessante compra com stop em R$ 16,35 não ? Será que vai ser vendida ? Em comparação com a #DASA3 seria perto de R$ 21 !",
    "marks": [
      {
        "word": "comparação",
        "type": "rel"
      },
      {
        "word": "com a dasa",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "comparação",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "case"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "com a dasa"
    }
  },
  {
    "Texto": "@picapautrader https://t.co/lN1y2KpkOJ comparação #PETR4 x #SPX quer dizer comparação só a título didático pq nem se compara msm",
    "marks": [
      {
        "word": "comparação",
        "type": "rel"
      },
      {
        "word": "#PETR4 x #SPX",
        "type": "arg1"
      },
      {
        "word": "#PETR4 x #SPX",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "comparação",
        "subscript": "rel"
      },
      {
        "word": "SPX",
        "subscript": "nmod"
      },
      {
        "word": "SPX",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#PETR4 x #SPX",
      "arg2": "#PETR4 x #SPX"
    }
  },
  {
    "Texto": "@picapautrader https://t.co/lN1y2KpkOJ comparação #PETR4 x #SPX quer dizer comparação só a título didático pq nem se compara msm",
    "marks": [
      {
        "word": "comparação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "comparação",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
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