document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "@ferrisss @Smarttrade10 @dfittarelli BBAS3 a a R$ 19,09 ... uhnnmm ! ! ! Hj sai decisão sobre julgamento em o STF .",
    "marks": [
      {
        "word": "decisão",
        "type": "rel"
      },
      {
        "word": "em o STF",
        "type": "arg0"
      },
      {
        "word": "sobre julgamento em o STF",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "decisão",
        "subscript": "rel"
      },
      {
        "word": "STF",
        "subscript": "nmod"
      },
      {
        "word": "STF",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "em o STF",
      "arg1": "sobre julgamento em o STF",
      "arg2": "-"
    }
  },
  {
    "Texto": "$VALE5 RT @folha_mercado : Governo vai recorrer de decisão de o STJ sobre lucro em o exterior de a Vale . http://t.co/1BdB7c0Jtu",
    "marks": [
      {
        "word": "decisão",
        "type": "rel"
      },
      {
        "word": "de o STJ",
        "type": "arg0"
      },
      {
        "word": "sobre lucro em o exterior de a Vale",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "decisão",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de o STJ",
      "arg1": "sobre lucro em o exterior de a Vale",
      "arg2": "-"
    }
  },
  {
    "Texto": "Com a decisão de o STF sobre a CPI exclusiva de a #PETROBRAS , hj é o dia ' D ' de o papel . Várias oportunidades de CP serão abertas . #PETR4",
    "marks": [
      {
        "word": "decisão",
        "type": "rel"
      },
      {
        "word": "de o STF",
        "type": "arg0"
      },
      {
        "word": "sobre a CPI exclusiva de a #PETROBRAS",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "decisão",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de o STF",
      "arg1": "sobre a CPI exclusiva de a #PETROBRAS",
      "arg2": "-"
    }
  },
  {
    "Texto": "BBAS3 - 7 % ontem após decisão de o STJ http://t.co/6D3nX6pFj7",
    "marks": [
      {
        "word": "decisão",
        "type": "rel"
      },
      {
        "word": "de o STJ",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "decisão",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "de o STJ",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "BB despenca com decisão em a Justiça : As ações de o BANCO DE O BRASIL ( BBAS3 ) despencaram em os … http://t.co/MXPFjW0DCB",
    "marks": [
      {
        "word": "decisão",
        "type": "rel"
      },
      {
        "word": "em a Justiça",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "decisão",
        "subscript": "rel"
      },
      {
        "word": "Justiça",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "em a Justiça",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CSNA3 - Sid Nacional ( csna ) - Decisao De o Cade - Ato De Concentracao http://t.co/TiZ1NR1soE",
    "marks": [
      {
        "word": "decisão",
        "type": "rel"
      },
      {
        "word": "De o Cade",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "decisão",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De o Cade",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Vale ( VALE5 ) – Adiou para 30 de março o prazo para a decisão sobre o projeto de exploração de potássio . #VisaoAtiva - Marginalmente negativa",
    "marks": [
      {
        "word": "decisão",
        "type": "rel"
      },
      {
        "word": "sobre o projeto de exploração de potássio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "decisão",
        "subscript": "rel"
      },
      {
        "word": "exploração",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "sobre o projeto de exploração de potássio",
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