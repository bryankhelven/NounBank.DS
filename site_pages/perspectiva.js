document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#BOVESPA #USIM5 S&P eleva perspectiva de nota de a Usiminas para estável : http://t.co/JdfGy10phl #BR",
    "marks": [
      {
        "word": "perspectiva",
        "type": "rel"
      },
      {
        "word": "S&P",
        "type": "arg0"
      },
      {
        "word": "de nota de a Usiminas para estável",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "perspectiva",
        "subscript": "rel"
      },
      {
        "word": "P",
        "subscript": "nsubj"
      },
      {
        "word": "nota",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "S&P",
      "arg1": "de nota de a Usiminas para estável",
      "arg2": "-"
    }
  },
  {
    "Texto": "#BOVESPA #VALE5 Ação de a Vale sobe com perspectiva de estímulo em a China . http://t.co/dcYSiVa45x #ASIA",
    "marks": [
      {
        "word": "perspectiva",
        "type": "rel"
      },
      {
        "word": "de estímulo em a China",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "perspectiva",
        "subscript": "rel"
      },
      {
        "word": "estímulo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de estímulo em a China",
      "arg2": "-"
    }
  },
  {
    "Texto": "@coroneldoblog Apenas a perspectiva de divulgação de nova pesquisa de o IBOPE , logo mais , faz Petrobrás ( PETR4 ) disparar em a Bovespa de novo .",
    "marks": [
      {
        "word": "perspectiva",
        "type": "rel"
      },
      {
        "word": "de divulgação de nova pesquisa de o IBOPE",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "perspectiva",
        "subscript": "rel"
      },
      {
        "word": "divulgação",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de divulgação de nova pesquisa de o IBOPE",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR3 #PETR4 - Fitch afirma rating de a Petrobras em BBB com perspectiva estável - http://t.co/O6p9US6gV4",
    "marks": [
      {
        "word": "perspectiva",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "perspectiva",
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
    "Texto": "Teria curiosidade de saber o que a Dilma achou de a #PETR4 subir mais de 7 % com a perspectiva de que ela pode perder a eleição ...",
    "marks": [
      {
        "word": "perspectiva",
        "type": "rel"
      },
      {
        "word": "de que ela pode perder a eleição",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "perspectiva",
        "subscript": "rel"
      },
      {
        "word": "que",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de que ela pode perder a eleição",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @chrinvestor : Teria curiosidade de saber o que a Dilma achou de a #PETR4 subir mais de 7 % com a perspectiva de que ela pode perder a el …",
    "marks": [
      {
        "word": "perspectiva",
        "type": "rel"
      },
      {
        "word": "de que ela pode perder a el",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "perspectiva",
        "subscript": "rel"
      },
      {
        "word": "que",
        "subscript": "obj:wtrunc"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de que ela pode perder a el",
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