document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Remem para o Money : Limites de petróleo e Mudanças Climáticas - como e ... petrobras , petr4 , http://t.co/QcVaudCfDL",
    "marks": [
      {
        "word": "Mudança",
        "type": "rel"
      },
      {
        "word": "Climáticas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Mudança",
        "subscript": "rel"
      },
      {
        "word": "Climáticas",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Climáticas",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Mudanca Em a Diretoria Executiva De a Petrobras Distribuidora http://t.co/3n7vTntAVX",
    "marks": [
      {
        "word": "mudança",
        "type": "rel"
      },
      {
        "word": "Em a Diretoria Executiva De a Petrobras Distribuidora",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "mudança",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Em a Diretoria Executiva De a Petrobras Distribuidora",
      "arg2": "-"
    }
  },
  {
    "Texto": "E o senhor mercado esta alucinado com a possibilidade de mudança de gestão ... PETR4 as nuvens http://t.co/Ptc007FfwQ",
    "marks": [
      {
        "word": "mudança",
        "type": "rel"
      },
      {
        "word": "de gestão",
        "type": "arg1"
      },
      {
        "word": "alucinado",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "mudança",
        "subscript": "rel"
      },
      {
        "word": "gestão",
        "subscript": "nmod"
      },
      {
        "word": "alucinado",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de gestão",
      "arg2": "alucinado"
    }
  },
  {
    "Texto": "Ativa indica 10 ações para lucrar em abril : Os analistas optaram por não fazer nenhuma mudan ... http://t.co/CaOZi4DIyG #infomoney #vale5",
    "marks": [
      {
        "word": "mudança",
        "type": "rel"
      },
      {
        "word": "nenhuma",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "mudança",
        "subscript": "rel"
      },
      {
        "word": "nenhuma",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "nenhuma",
      "arg2": "-"
    }
  },
  {
    "Texto": "Virada : BBAS3 em ponto perigoso de mudança de a cotação para baixo . IMA-crash alto . http://t.co/rowQqe82CN",
    "marks": [
      {
        "word": "mudança",
        "type": "rel"
      },
      {
        "word": "de a cotação",
        "type": "arg1"
      },
      {
        "word": "para baixo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "mudança",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "baixo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a cotação",
      "arg2": "para baixo"
    }
  },
  {
    "Texto": "Mercado subiu bem ontem e hoje , geou mudanças em nossas posições : stop em bvmf3 , ccro3 . RP em mrve3 . Posições com rp ja feita continua",
    "marks": [
      {
        "word": "mudança",
        "type": "rel"
      },
      {
        "word": "em nossas posições :",
        "type": "arg1"
      },
      {
        "word": "stop em bvmf3 , ccro3 . RP em mrve3 . Posições com rp ja feita continua",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "mudança",
        "subscript": "rel"
      },
      {
        "word": "posições",
        "subscript": "nmod"
      },
      {
        "word": "rp",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em nossas posições :",
      "arg2": "stop em bvmf3 , ccro3 . RP em mrve3 . Posições com rp ja feita continua"
    }
  },
  {
    "Texto": "Mudanças em a carteira de ações de a Lato Sensu . Saída de AEDU3 e BBSE3 ( por apresentarem redução em o seus valores ... http://t.co/1LVOZVEF5e",
    "marks": [
      {
        "word": "Mudança",
        "type": "rel"
      },
      {
        "word": "por apresentarem redução em o seus valores",
        "type": "arg0"
      },
      {
        "word": "em a carteira de ações de a Lato Sensu",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Mudança",
        "subscript": "rel"
      },
      {
        "word": "valores",
        "subscript": "nmod"
      },
      {
        "word": "ações",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "por apresentarem redução em o seus valores",
      "arg1": "em a carteira de ações de a Lato Sensu",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ativa faz mudanças em carteira de março , veja quem saiu e quem entrou : A nova escolhida por o ... http://t.co/mEfz1RLyk9 #infomoney #vale5",
    "marks": [
      {
        "word": "mudança",
        "type": "rel"
      },
      {
        "word": "Ativa",
        "type": "arg0"
      },
      {
        "word": "em carteira de março",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "mudança",
        "subscript": "rel"
      },
      {
        "word": "Ativa",
        "subscript": "nsubj"
      },
      {
        "word": "março",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Ativa",
      "arg1": "em carteira de março",
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