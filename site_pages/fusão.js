document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Cosan e ALL sobem com fusão , 5 ações avançam mais de 4 % , veja destaques : CSN sobe 3 % após an ... http://t.co/pZCukJKQV0 #infomoney #vale5",
    "marks": [
      {
        "word": "fusão",
        "type": "rel"
      },
      {
        "word": "Cosan e ALL",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "fusão",
        "subscript": "rel"
      },
      {
        "word": "ALL",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Cosan e ALL",
      "arg2": "-"
    }
  },
  {
    "Texto": "FUSÃO : Enquanto a OIBR4 caiu 11,14 % , a TIMP3 subiu 4 % ...",
    "marks": [
      {
        "word": "FUSÃO",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "FUSÃO",
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
    "Texto": "Ouro : AEDU3 Fusão só depende de o CADE em jun/14 1 AEDU = 0,4548 KROT 43,7 * 0,4548 = 19,87 19,87 / 13,13 = 51 % 51 % de espaço pra altas ! !",
    "marks": [
      {
        "word": "Fusão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Fusão",
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
    "Texto": "#ALLL3 - Operadora de ferrovia ALL deve aprovar fusão com a Rumo hoje , dizem jornais - http://t.co/hXf8blfdrM",
    "marks": [
      {
        "word": "fusão",
        "type": "rel"
      },
      {
        "word": "com a Rumo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "fusão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "com a Rumo"
    }
  },
  {
    "Texto": "OIBR4 dispara com Minoritários tentando barrar fusão com Portugal Telecom http://t.co/pYPtSzga8g",
    "marks": [
      {
        "word": "fusão",
        "type": "rel"
      },
      {
        "word": "com Portugal Telecom",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "fusão",
        "subscript": "rel"
      },
      {
        "word": "Portugal",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "com Portugal Telecom"
    }
  },
  {
    "Texto": "#OIBR4 - Fusão entre Oi e PT está mais próxima - http://t.co/z5C2oG5h9D",
    "marks": [
      {
        "word": "Fusão",
        "type": "rel"
      },
      {
        "word": "Oi e PT",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Fusão",
        "subscript": "rel"
      },
      {
        "word": "PT",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Oi e PT",
      "arg2": "-"
    }
  },
  {
    "Texto": "#TIMP3 - Telecom Italia diz que não há conversas de fusão sobre TIM - http://t.co/O502wucYkW",
    "marks": [
      {
        "word": "fusão",
        "type": "rel"
      },
      {
        "word": "sobre TIM",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "fusão",
        "subscript": "rel"
      },
      {
        "word": "TIM",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "sobre TIM"
    }
  },
  {
    "Texto": "MP recomendou a o Cade , venda de ativos de a Anhanguera para que a fusão com a Kroton não represente ato de concentração . #AEDU3 #KROT3",
    "marks": [
      {
        "word": "fusão",
        "type": "rel"
      },
      {
        "word": "com a Kroton",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "fusão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "com a Kroton"
    }
  },
  {
    "Texto": "Acionistas votam hoje em fusão de a ALL com Rumo , Santander , Petrobras e mais 6 em o radar : Petr ... http://t.co/PQ31oKjQ1m #infomoney#vale5",
    "marks": [
      {
        "word": "fusão",
        "type": "rel"
      },
      {
        "word": "de a ALL",
        "type": "arg1"
      },
      {
        "word": "com Rumo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "fusão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "Rumo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a ALL",
      "arg2": "com Rumo"
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