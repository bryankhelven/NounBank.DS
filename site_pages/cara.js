document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "@live_trade tá mesmo com uma cara boa essa venda . Vamos aguardar . #PETR4 e #VALE5 estão bem doidinhas hoje .",
    "marks": [
      {
        "word": "cara",
        "type": "rel"
      },
      {
        "word": "essa venda",
        "type": "arg0"
      },
      {
        "word": "boa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cara",
        "subscript": "rel"
      },
      {
        "word": "venda",
        "subscript": "nsubj"
      },
      {
        "word": "boa",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "essa venda",
      "arg1": "boa"
    }
  },
  {
    "Texto": "Vc tem dúvida q o #IBOLESMA está a cara de o PT ? A #PETR4 é 13 ! a #VALE5 é 2 vezes 13 , q é 26 e a #OGXP3 é 0,26 ou seja 13 dividido p/ 50 !",
    "marks": [
      {
        "word": "cara",
        "type": "rel"
      },
      {
        "word": "o #IBOLESMA está",
        "type": "arg0"
      },
      {
        "word": "de o PT",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cara",
        "subscript": "rel"
      },
      {
        "word": "está",
        "subscript": "cop"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "o #IBOLESMA está",
      "arg1": "de o PT"
    }
  },
  {
    "Texto": "RT @picapautrader : Vc tem dúvida q o #IBOLESMA está a cara de o PT ? A #PETR4 é 13 ! a #VALE5 é 2 vezes 13 , q é 26 e a #OGXP3 é 0,26 ou seja 13 …",
    "marks": [
      {
        "word": "cara",
        "type": "rel"
      },
      {
        "word": "o #IBOLESMA está",
        "type": "arg0"
      },
      {
        "word": "de o PT",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cara",
        "subscript": "rel"
      },
      {
        "word": "está",
        "subscript": "cop"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "o #IBOLESMA está",
      "arg1": "de o PT"
    }
  },
  {
    "Texto": "@Live_Trade Em a #VALE5 tem gap em 27,90 e com cara de ir lá , cachorro é cachorro , viado é viado e gap é gap !",
    "marks": [
      {
        "word": "cara",
        "type": "rel"
      },
      {
        "word": "gap em 27,90",
        "type": "arg0"
      },
      {
        "word": "de ir lá",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cara",
        "subscript": "rel"
      },
      {
        "word": "90",
        "subscript": "nsubj"
      },
      {
        "word": "ir",
        "subscript": "advmod"
      }
    ],
    "args": {
      "arg0": "gap em 27,90",
      "arg1": "de ir lá"
    }
  },
  {
    "Texto": "Essa notícia de o recorde de produção de a #PETR4 em o pré sal ta com uma cara de ter vindo pra tentar defender fundo ...",
    "marks": [
      {
        "word": "cara",
        "type": "rel"
      },
      {
        "word": "Essa notícia",
        "type": "arg0"
      },
      {
        "word": "de ter vindo pra tentar defender fundo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cara",
        "subscript": "rel"
      },
      {
        "word": "notícia",
        "subscript": "nsubj"
      },
      {
        "word": "ter",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "Essa notícia",
      "arg1": "de ter vindo pra tentar defender fundo"
    }
  },
  {
    "Texto": "#IBOV com cara de queda ! Topo em #CESP6 ? Fundo em #PDGR3 ?",
    "marks": [
      {
        "word": "cara",
        "type": "rel"
      },
      {
        "word": "#IBOV",
        "type": "arg0"
      },
      {
        "word": "de queda",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cara",
        "subscript": "rel"
      },
      {
        "word": "IBOV",
        "subscript": "root"
      },
      {
        "word": "queda",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "#IBOV",
      "arg1": "de queda"
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