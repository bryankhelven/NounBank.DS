document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "Ontem o minério de ferro subiu 4 % , alcançando os US$ 116,8 . Expectativa é de que sejam anunciados estímulos em a economia chinesa . #VALE5",
    "marks": [
      {
        "word": "Expectativa",
        "type": "rel"
      },
      {
        "word": "é de que sejam anunciados estímulos em a economia chinesa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Expectativa",
        "subscript": "rel"
      },
      {
        "word": "que",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "é de que sejam anunciados estímulos em a economia chinesa"
    }
  },
  {
    "Texto": "RT @chrinvestor : Ontem o minério de ferro subiu 4 % , alcançando os US$ 116.8 . Expectativa é de que sejam anunciados estímulos em a economia ch …",
    "marks": [
      {
        "word": "Expectativa",
        "type": "rel"
      },
      {
        "word": "é de que sejam anunciados estímulos em a economia chinesa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Expectativa",
        "subscript": "rel"
      },
      {
        "word": "que",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "é de que sejam anunciados estímulos em a economia chinesa"
    }
  },
  {
    "Texto": "RT @garimpodeacoes : Localiza ( RENT3 ) tem lucro recorde e mantém expectativa positiva p/ o corrente ano . Agora sobe em a Bovespa 2,84 % mas em a máx …",
    "marks": [
      {
        "word": "expectativa",
        "type": "rel"
      },
      {
        "word": "Localiza ( RENT3 )",
        "type": "arg0"
      },
      {
        "word": "positiva p/ o corrente ano",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "expectativa",
        "subscript": "rel"
      },
      {
        "word": "RENT3",
        "subscript": "nsubj"
      },
      {
        "word": "ano",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "Localiza ( RENT3 )",
      "arg1": "positiva p/ o corrente ano"
    }
  },
  {
    "Texto": "Em a trave … 49.984 . Mas tá estável , como indicava o iBOV futuro . VALE5 frustrou minha expectativa . Bão tamém …",
    "marks": [
      {
        "word": "expectativa",
        "type": "rel"
      },
      {
        "word": "minha",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "expectativa",
        "subscript": "rel"
      },
      {
        "word": "minha",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "minha",
      "arg1": "-"
    }
  },
  {
    "Texto": "Não é que o KingKong #PETR4 está se segurando com a expectativa de a pesquisa de sábado ...",
    "marks": [
      {
        "word": "expectativa",
        "type": "rel"
      },
      {
        "word": "de a pesquisa de sábado",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "expectativa",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a pesquisa de sábado"
    }
  },
  {
    "Texto": "Mesmo c/ expectativa pessimista s/ pesquisa IBOPE q deve ser divulgada amanhã , ações de a Petro fecharam em alta : PETR3 , + 1,36 % e PETR$ + 0,92 %",
    "marks": [
      {
        "word": "expectativa",
        "type": "rel"
      },
      {
        "word": "pessimista",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "expectativa",
        "subscript": "rel"
      },
      {
        "word": "pessimista",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "pessimista"
    }
  },
  {
    "Texto": "Minério de ferro sobe 4 % em a China com expectativa de estímulo econômico : Cotações de a commodi ... http://t.co/gCQ5AkNoWz #infomoney #vale5",
    "marks": [
      {
        "word": "expectativa",
        "type": "rel"
      },
      {
        "word": "de estímulo econômico",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "expectativa",
        "subscript": "rel"
      },
      {
        "word": "estímulo",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de estímulo econômico"
    }
  },
  {
    "Texto": "RT @clickinv_VALE5 : Minério de ferro sobe 4 % em a China com expectativa de estímulo econômico : Cotações de a commodi ... http://t.co/gCQ5AkNoWz …",
    "marks": [
      {
        "word": "expectativa",
        "type": "rel"
      },
      {
        "word": "de estímulo econômico",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "expectativa",
        "subscript": "rel"
      },
      {
        "word": "estímulo",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de estímulo econômico"
    }
  },
  {
    "Texto": "Marfrig ( MRFG3 ) – Divulgou seu resultado de o 4Q13 apresentando boa melhora com números acima de a expectativa . #VisãoAtiva",
    "marks": [
      {
        "word": "expectativa",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "expectativa",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
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