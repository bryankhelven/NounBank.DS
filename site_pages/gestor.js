document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "A gente estamos em a contra-mão de o @ferrisss ! ! Amanhã , nossa gestora vai vender JBSS3 ! ! Call de venda , vai cair muito ! !",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestora",
        "type": "arg0"
      },
      {
        "word": "nossa",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestora",
        "subscript": "nsubj"
      },
      {
        "word": "nossa",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "gestora",
      "arg1": "-",
      "arg2": "nossa"
    }
  },
  {
    "Texto": "A gente estamos vendendo JBSS3 aqui em a gestora , como eu disse ontem ! ! Vamos derrubar ! ! O @ferrisss que me desculpe ! !",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestora",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestora",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "gestora",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Em a Bovespa , gestores definem para época de as eleições ações de boa liquidez , como ABEV3 , BBAS3 , CCRO3 , ITUB4 , PCAR4 , RENT3 , UGPA3 , e outras",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestores",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestores",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "gestores",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @garimpodeacoes : Em a Bovespa , gestores definem para época de as eleições ações de boa liquidez , como ABEV3 , BBAS3 , CCRO3 , ITUB4 , PCAR4 , REN …",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestores",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestores",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "gestores",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "@InutiliumX Foram vocês de a gestora que derrubaram BBAS3 hoje ? ? ?",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestora",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestora",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "gestora",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "' Vale vai trazer muitos frutos para quem investir ' , diz gestor de fundo : Leonardo Messer , ge ... http://t.co/KkMcTlfCI6 #infomoney #vale5",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestor",
        "type": "arg0"
      },
      {
        "word": "de fundo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestor",
        "subscript": "nsubj"
      },
      {
        "word": "fundo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "gestor",
      "arg1": "de fundo",
      "arg2": "-"
    }
  },
  {
    "Texto": "Vale vai trazer muitos frutos para quem investir ' , diz gestor de fundo http://t.co/s9IQkrTxMV #VALE4 #VALE5",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestor",
        "type": "arg0"
      },
      {
        "word": "de fundo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestor",
        "subscript": "nsubj"
      },
      {
        "word": "fundo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "gestor",
      "arg1": "de fundo",
      "arg2": "-"
    }
  },
  {
    "Texto": "Bancos , varejo , petróleo e siderurgia , as opiniões de um gestor sobre 4 setores : O destaque ... http://t.co/HfazYF2uc0 #infomoney #vale5",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestor",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestor",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "gestor",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @InutiliumX : Olha lá , @ferris ! ! A gente aqui de a gestora jogamos a JBSS3 lá em a mínima ! ! Eu cantei a pedra ontem ! ! Vamos recomprar lá n …",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestora",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestora",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "gestora",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Vice de o Bradesco entra para o conselho de a Vale , mais 3 empresas agitam a noite : Maior gestor ... http://t.co/8UfJ7jaUiO #infomoney #vale5",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestor",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestor",
        "subscript": "parataxis:strunc"
      }
    ],
    "args": {
      "arg0": "gestor",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "A gente estamos falando sério ! ! Amanhã , a gestora vai vender JBSS3 ! ! Vamos comandar a derrubada , assim como fizemos com PETR4 ! !",
    "marks": [
      {
        "word": "gestor",
        "type": "rel"
      },
      {
        "word": "gestora",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "gestor",
        "subscript": "rel"
      },
      {
        "word": "gestora",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "gestora",
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