document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "Notas gerais A KLABIN ( KLBN4 ) vai emitir R$ 800 milhões em debêntures simples para financiar parte de o projeto ... http://t.co/wkPIPSbMjk",
    "marks": [
      {
        "word": "projeto",
        "type": "rel"
      },
      {
        "word": "A KLABIN ( KLBN4 )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "projeto",
        "subscript": "rel"
      },
      {
        "word": "KLBN4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "A KLABIN ( KLBN4 )",
      "arg1": "-"
    }
  },
  {
    "Texto": "$CRUZ3 - Souza Cruz ( cruz ) - Fato Relevante Aprovacao De Projetos http://t.co/k7eMPEhA82",
    "marks": [
      {
        "word": "Projeto",
        "type": "rel"
      },
      {
        "word": "$CRUZ3 - Souza Cruz ( cruz )",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Projeto",
        "subscript": "rel"
      },
      {
        "word": "cruz",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "$CRUZ3 - Souza Cruz ( cruz )",
      "arg1": "-"
    }
  },
  {
    "Texto": "Vale ( VALE5 ) – Adiou para 30 de março o prazo para a decisão sobre o projeto de exploração de potássio . #VisaoAtiva - Marginalmente negativa",
    "marks": [
      {
        "word": "projeto",
        "type": "rel"
      },
      {
        "word": "Vale ( VALE5 )",
        "type": "arg0"
      },
      {
        "word": "de exploração de potássio",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeto",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nsubj"
      },
      {
        "word": "exploração",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Vale ( VALE5 )",
      "arg1": "de exploração de potássio"
    }
  },
  {
    "Texto": "CIEL3 valorizou , está entre as ações indicadas de a Carteira Valor . Deve ter sido por o projeto especial de larga demanda pra Copa . Foi genial .",
    "marks": [
      {
        "word": "projeto",
        "type": "rel"
      },
      {
        "word": "CIEL3",
        "type": "arg0"
      },
      {
        "word": "especial de larga demanda pra Copa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeto",
        "subscript": "rel"
      },
      {
        "word": "CIEL3",
        "subscript": "nsubj"
      },
      {
        "word": "larga",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "CIEL3",
      "arg1": "especial de larga demanda pra Copa"
    }
  },
  {
    "Texto": "#VALE3 #VALE5 - BNDES aprova R$ 6,2 bi para projetos de a Vale em Carajás - http://t.co/8foLxVlVla",
    "marks": [
      {
        "word": "projeto",
        "type": "rel"
      },
      {
        "word": "BNDES",
        "type": "arg0"
      },
      {
        "word": "de a Vale em Carajás",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeto",
        "subscript": "rel"
      },
      {
        "word": "BNDES",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "BNDES",
      "arg1": "de a Vale em Carajás"
    }
  },
  {
    "Texto": "#PETR4 Quase R$ 600 milhões só em terraplanagem ! ! ! E mais um bilhão em projetos e estudos ... http://t.co/xHxOXmZJzP",
    "marks": [
      {
        "word": "projeto",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "projeto",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "parataxis:hashtag"
      }
    ],
    "args": {
      "arg0": "#PETR4",
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