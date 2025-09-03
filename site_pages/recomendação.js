document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "RT @AASchwartz : @piavu e as recomendações de compra em jbss3 e mmxm3 de o @ferrisss em o início de o ano . Se ele soubesse um mín de AT não levava …",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      },
      {
        "word": "de compra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
        "subscript": "rel"
      },
      {
        "word": "compra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de compra",
      "arg2": "-"
    }
  },
  {
    "Texto": "Guiné aprova proposta de cassar concessões de Vale e BSGR , diz fonte : A recomendação foi fei ... http://t.co/YccHpNWsUt #infomoney #vale5",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "BB Investimentos troca 5 ativos de sua carteira , veja recomendações : Em este mês , entraram as ... http://t.co/6nvfUxbw1P #infomoney #vale5",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "Santander recomenda 2 novos papéis para o mês , confira : BRF e Braskem são as novas recomenda ... http://t.co/7hzE9qppCV #infomoney #vale5",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "BBSE3 - ' É muito cedo para basear a recomendação em o resultado de as eleições ' , diz BTG - InfoMoney Veja mais em : http://t.co/thncBwA5YP",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "Geral troca EZTec por Itaú Unibanco , confira as 10 recomendações : A Geral Investimentos fez ... http://t.co/Tk3Klt4bBt #infomoney #vale5",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "Veja as 10 ações preferidas de a Socopa para comprar em esta semana : Continuam entre as recomend ... http://t.co/pqQ9H0vNAL #infomoney #vale5",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "#goau4 ganhou recomendação de compra de uma corretora e já reflete em o preço . #bbas3 disparou ontem , rompeu resistência e Mm : COMPRAR !",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      },
      {
        "word": "de compra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
        "subscript": "rel"
      },
      {
        "word": "compra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de compra",
      "arg2": "-"
    }
  },
  {
    "Texto": "#abev3 também andou recomendação e sobe forte . Continuo comprado . Vou entrar em #cemig4 por as Mm , de olho em uma resistência ~ 16.65",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "Corretora indica compra de Vale , Cielo e mais 8 ações , confira : Permanecem entre as recomend ... http://t.co/tveDkCIOc0 #infomoney #vale5",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "#MRFG3 - Análise #Ichimoku - Recomendação de Compra . http://t.co/TdLbYJsEds",
    "marks": [
      {
        "word": "Recomendação",
        "type": "rel"
      },
      {
        "word": "de Compra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recomendação",
        "subscript": "rel"
      },
      {
        "word": "Compra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Compra",
      "arg2": "-"
    }
  },
  {
    "Texto": "#NATU3 - Análise #Ichimoku - Recomendação de Compra . http://t.co/cVGkA7dvAT",
    "marks": [
      {
        "word": "Recomendação",
        "type": "rel"
      },
      {
        "word": "de Compra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recomendação",
        "subscript": "rel"
      },
      {
        "word": "Compra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Compra",
      "arg2": "-"
    }
  },
  {
    "Texto": "#UGPA3 - Recomendação de Compra - Análise #Ichimoku . http://t.co/rhIXdSFo3Q",
    "marks": [
      {
        "word": "Recomendação",
        "type": "rel"
      },
      {
        "word": "de Compra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recomendação",
        "subscript": "rel"
      },
      {
        "word": "Compra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Compra",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CRUZ3 - Análise #Ichimoku - Recomendação de Compra . http://t.co/3xVuPeOwc9",
    "marks": [
      {
        "word": "Recomendação",
        "type": "rel"
      },
      {
        "word": "de Compra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Recomendação",
        "subscript": "rel"
      },
      {
        "word": "Compra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Compra",
      "arg2": "-"
    }
  },
  {
    "Texto": "@luizmoratoneto temos recomendação de venda para PDGR3 .",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      },
      {
        "word": "de venda",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
        "subscript": "rel"
      },
      {
        "word": "venda",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de venda",
      "arg2": "-"
    }
  },
  {
    "Texto": "@piavu e as recomendações de compra em jbss3 e mmxm3 de o @ferrisss em o início de o ano . Se ele soubesse um mín de AT não levava essas cacetadas !",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      },
      {
        "word": "de compra",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
        "subscript": "rel"
      },
      {
        "word": "compra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de compra",
      "arg2": "-"
    }
  },
  {
    "Texto": "JPMORGAN eleva recomendação s/ Usiminas e Gerdau para ' overweight ' . Agora USIM5 + 3,26 % e GGBR4 , + 1,87 %",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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
    "Texto": "VALE5 em o topo de as recomendações faz tempo e EU FORA ! .. ô quem poderá nos defender ?",
    "marks": [
      {
        "word": "recomendação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "recomendação",
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