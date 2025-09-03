document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$RSID3 - Rossi Resid ( rsid-nm ) - Alteracao De a Politica De Divulgacao De Fato Relevante http://t.co/gJVTbOY0uA",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "De Fato Relevant",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "Fato",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Fato Relevant",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BVMF3 - Bmfbovespa ( bvmf-nm ) - Cronograma De Divulgacao De Resultados http://t.co/iZYeQRSYPv",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "De Resultados",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "Resultados",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Resultados",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETROBRAS #PETR4 Depois de a divulgação de o GOLPE aplicado contra a petroleira , vai ser difícil o papel não devolver a alta de os últimos dias .",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "de o GOLPE aplicado contra a petroleira",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o GOLPE aplicado contra a petroleira",
      "arg2": "-"
    }
  },
  {
    "Texto": "@coroneldoblog Apenas a perspectiva de divulgação de nova pesquisa de o IBOPE , logo mais , faz Petrobrás ( PETR4 ) disparar em a Bovespa de novo .",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "de nova pesquisa",
        "type": "arg1"
      },
      {
        "word": "de o IBOPE",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "nova",
        "subscript": "nmod"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de nova pesquisa",
      "arg2": "de o IBOPE"
    }
  },
  {
    "Texto": "@tovaga @Ary_AntiPT @Folhaovento Se ainda estivesse em a Bolsa compraria hoje Petr4 e Petr3 e venderia , após a divulgação Pesquisa dia 28 rs !",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "Pesquisa dia 28",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "28",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Pesquisa dia 28",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Andraus_adv : @tovaga @Ary_AntiPT @Folhaovento Se ainda estivesse em a Bolsa compraria hoje Petr4 e Petr3 e venderia , após a divulgação Pesquisa …",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "Pesquisa dia 28",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "28",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Pesquisa dia 28",
      "arg2": "-"
    }
  },
  {
    "Texto": "E hoje em o fim de a tarde teremos a divulgação de mais uma pesquisa eleitoral de a presidência . Será que PETR4 busca mais um fôlego ?",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "de mais uma pesquisa eleitoral de a presidência",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "mais",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de mais uma pesquisa eleitoral de a presidência",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DTEX3 - Duratex ( dtex-nm ) - Material A Disposicao ( politicas De Divulg. E De Negoc. ) http://t.co/ZG4dXwIhJf",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
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
    "Texto": "Dia 28 de abril ( segunda ) haverá divulgacao de Pesquisa Eleitoral para Presidente contratada por a CNT … #Petr4 Talvez recupere",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "de Pesquisa Eleitoral para Presidente contratada por a CNT",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "Pesquisa",
        "subscript": "obl:agent"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Pesquisa Eleitoral para Presidente contratada por a CNT",
      "arg2": "-"
    }
  },
  {
    "Texto": "$VALE3 - Vale ( vale-n1 ) - Informa Datas De Divulgacao De o Desempenho De o 1o. T/2014 http://t.co/HrsAHWIwYv",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      },
      {
        "word": "De o Desempenho De o 1o. T/2014",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Desempenho De o 1o. T/2014",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Material A Disposicao ( politica De Divulgacao E Negociacao ) http://t.co/hIu0WyzXA6",
    "marks": [
      {
        "word": "divulgação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "divulgação",
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