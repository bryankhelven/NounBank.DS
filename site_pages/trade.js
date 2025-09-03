document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#PETR4 já deu entrada e deu 1 % Trade fechado !",
    "marks": [
      {
        "word": "Trade",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Trade",
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
    "Texto": "BVMF3 _ Segue o trade . http://t.co/RLvRj0RQNl",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
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
    "Texto": "#alll3 fechando em a maxima de o dia ... lindo call hoje pra swing trade . Compramos em os R$ 7,4 . #teamclear",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
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
    "Texto": "Trades em andamento , CSNA3 e GGBR4 bateram em a realização parcial ! MAravilha ! http://t.co/B67f6lgMSL",
    "marks": [
      {
        "word": "Trade",
        "type": "rel"
      },
      {
        "word": "CSNA3 e GGBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Trade",
        "subscript": "rel"
      },
      {
        "word": "GGBR4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "CSNA3 e GGBR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "#petr4 = alta de 6,11 % a as 11:47 a o preço de R$ 15,27 , alavancagem de 20X em a CLEAR , MELHOR TRADE DE O ANO ! Parecido c/ dia de o Investment Grade",
    "marks": [
      {
        "word": "TRADE",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "TRADE",
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
    "Texto": "#petr4 16,02 quem vai dar o tapa p/ definir o lado a a trade ?",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
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
    "Texto": "Trade com #JBSS3 concluído com sucesso :D",
    "marks": [
      {
        "word": "Trade",
        "type": "rel"
      },
      {
        "word": "com #JBSS3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Trade",
        "subscript": "rel"
      },
      {
        "word": "JBSS3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "com #JBSS3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Trades em andamento sem realização parcial ou stop loss apenas a venda em bbas3 . Start 20,09 . Stop 21,92 e alvo 18,26",
    "marks": [
      {
        "word": "Trade",
        "type": "rel"
      },
      {
        "word": "Start 20,09 . Stop 21,92 e alvo 18,26",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Trade",
        "subscript": "rel"
      },
      {
        "word": "26",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Start 20,09 . Stop 21,92 e alvo 18,26",
      "arg2": "-"
    }
  },
  {
    "Texto": "@Smarttrade10 @ferrisss MRVE3 perdendo 7.75 em o fechamento hoje fica complicado . Se nao , pode abrir um trade pra curto prazo .",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
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
    "Texto": "@DuctorMarcus 19,2 to saindo de o DT comprado 3hs de trade em o BBAS3 , mas to segurando uma posição em swing .",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
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
    "Texto": "#vale5 olha o trade ! ! ! 26,26 postado em a abertura",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
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
    "Texto": "VALE5 e BOVA11 , trade que já haviam sido feita realização parcial , geraram saída de o restante em o lucro . vale5 a 26,95 e bova11 a 45,97",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      },
      {
        "word": "VALE5 e BOVA11",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
        "subscript": "rel"
      },
      {
        "word": "BOVA11",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "VALE5 e BOVA11",
      "arg2": "-"
    }
  },
  {
    "Texto": "Abrimos compra de VALE5 para o trade em o R$ 27,00 . Heyyyyyyyyyyyyy estamos em o game ! ! !",
    "marks": [
      {
        "word": "trade",
        "type": "rel"
      },
      {
        "word": "Abrimos",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "trade",
        "subscript": "rel"
      },
      {
        "word": "Abrimos",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "Abrimos",
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