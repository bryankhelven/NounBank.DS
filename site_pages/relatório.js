document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Notas gerais A marca de a companhia NATURA ( NATU3 ) é a mais valiosa de a América Latina , segundo relatório de a ... http://t.co/UklRaoUG0X",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "A marca de a companhia NATURA ( NATU3 ) é a mais valiosa de a América Latina",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "A marca de a companhia NATURA ( NATU3 ) é a mais valiosa de a América Latina",
      "arg2": "-"
    }
  },
  {
    "Texto": "@ppaulovagner @Fontes_ Hj a tarde recebi relatório em PDF de a corretora @Citi recomendando compra de #USIM5 , fica de olho Paulo .",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "de a corretora @Citi",
        "type": "arg0"
      },
      {
        "word": "recomendando compra de #USIM5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "USIM5",
        "subscript": "acl"
      }
    ],
    "args": {
      "arg0": "de a corretora @Citi",
      "arg1": "recomendando compra de #USIM5",
      "arg2": "-"
    }
  },
  {
    "Texto": "@CaciqueInvest Imagina só , só com essa de a Brin vc já paga sei lá qto tempo de relatório sobra de lambuja petr4 , mmxm3 pomo fesa goll4 etc ...",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
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
    "Texto": "Governo de a Nova Caledônia recebe relatório de a Vale sobre vazamento : Movimento ocorreu mais t ... http://t.co/rtndP6NyW5 #infomoney #vale5",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "de a Vale",
        "type": "arg0"
      },
      {
        "word": "sobre vazamento",
        "type": "arg1"
      },
      {
        "word": "Governo de a Nova Caledônia",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "vazamento",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "de a Vale",
      "arg1": "sobre vazamento",
      "arg2": "Governo de a Nova Caledônia"
    }
  },
  {
    "Texto": "$BRML3 - Br Malls Par ( brml-nm ) / Concepa ( cncp ) - Relatorios De o Agente Fiduciario http://t.co/a3cZlkKck2",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "De o Agente Fiduciario",
        "type": "arg0"
      },
      {
        "word": "$BRML3 - Br Malls Par ( brml-nm ) / Concepa ( cncp )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "cncp",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De o Agente Fiduciario",
      "arg1": "$BRML3 - Br Malls Par ( brml-nm ) / Concepa ( cncp )",
      "arg2": "-"
    }
  },
  {
    "Texto": "Se o Relatório sumiu ou se encontra adulterado , estaremos claramente diante de uma ação criminosa e mafiosa , corroendo por dentro a #PETR4 .",
    "marks": [
      {
        "word": "Relatório",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Relatório",
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
    "Texto": "RT @cafecomtorradas : Se o Relatório sumiu ou se encontra adulterado , estaremos claramente diante de uma ação criminosa e mafiosa , corroendo …",
    "marks": [
      {
        "word": "Relatório",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "Relatório",
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
    "Texto": "$CPFE3 - CPFL Energia divulga o Relatório Anual ( Form 20-F ) 2013 em a SEC http://t.co/Lizy0GjUUH",
    "marks": [
      {
        "word": "Relatório",
        "type": "rel"
      },
      {
        "word": "CPFL Energia",
        "type": "arg0"
      },
      {
        "word": "em a SEC",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Relatório",
        "subscript": "rel"
      },
      {
        "word": "Energia",
        "subscript": "nsubj"
      },
      {
        "word": "SEC",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "CPFL Energia",
      "arg1": "-",
      "arg2": "em a SEC"
    }
  },
  {
    "Texto": "$BBDC3 - Banco Bradesco publica Relatório Anual 2013 em novo formato http://t.co/t4O0DpIJQV",
    "marks": [
      {
        "word": "Relatório",
        "type": "rel"
      },
      {
        "word": "Banco Bradesco",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Relatório",
        "subscript": "rel"
      },
      {
        "word": "Bradesco",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Banco Bradesco",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBDC4 - Banco Bradesco publica Relatório Anual 2013 em novo formato http://t.co/zRgidXiTND",
    "marks": [
      {
        "word": "Relatório",
        "type": "rel"
      },
      {
        "word": "Banco Bradesco",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "Relatório",
        "subscript": "rel"
      },
      {
        "word": "Bradesco",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "Banco Bradesco",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBDC3 - Bradesco ( bbdc-n1 ) - Relatorios De Analise Gerencial http://t.co/NpevWwoQTO",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "$BBDC3 - Bradesco ( bbdc-n1 )",
        "type": "arg0"
      },
      {
        "word": "De Analise Gerencial",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      },
      {
        "word": "Analise",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BBDC3 - Bradesco ( bbdc-n1 )",
      "arg1": "De Analise Gerencial",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ideia de Long&Short por Credit Suisse - PETR4 x PETR3 ... quem quiser o relatório é só pedir !",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
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
    "Texto": "Muito fácil esclarecer a cagada de Pasadena : basta analisár o Relatório levado a o Conselho , que autorizou o rombo em a #PETR4 .",
    "marks": [
      {
        "word": "Relatório",
        "type": "rel"
      },
      {
        "word": "a o Conselho",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Relatório",
        "subscript": "rel"
      },
      {
        "word": "Conselho",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "a o Conselho"
    }
  },
  {
    "Texto": "RT @cafecomtorradas : Muito fácil esclarecer a cagada de Pasadena : basta analisár o Relatório levado a o Conselho , que autorizou o rombo em a # …",
    "marks": [
      {
        "word": "Relatório",
        "type": "rel"
      },
      {
        "word": "a o Conselho",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Relatório",
        "subscript": "rel"
      },
      {
        "word": "Conselho",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "a o Conselho"
    }
  },
  {
    "Texto": "$AEDU3 - Anhanguera ( aedu-nm ) - Relatorio De o Agente Fiduciario http://t.co/ZJfgkx7xEZ",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "De o Agente Fiduciario",
        "type": "arg0"
      },
      {
        "word": "$AEDU3 - Anhanguera ( aedu-nm )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De o Agente Fiduciario",
      "arg1": "$AEDU3 - Anhanguera ( aedu-nm )",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBAS3 - Banco De o Brasil ( bbas-nm ) - Relat. de Analise Gerencial E Material De Apresentacao http://t.co/86ssDmrnfJ",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "$BBAS3 - Banco De o Brasil ( bbas-nm )",
        "type": "arg0"
      },
      {
        "word": "de Analise Gerencial",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "Analise",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BBAS3 - Banco De o Brasil ( bbas-nm )",
      "arg1": "de Analise Gerencial",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BBAS3 - Banco De o Brasil ( bbas-nm ) - Relatorio De Analise Gerencial Reapresentacao http://t.co/06H7Ncc4jQ",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "$BBAS3 - Banco De o Brasil ( bbas-nm )",
        "type": "arg0"
      },
      {
        "word": "De Analise Gerencial",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "Analise",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$BBAS3 - Banco De o Brasil ( bbas-nm )",
      "arg1": "De Analise Gerencial",
      "arg2": "-"
    }
  },
  {
    "Texto": "Entrando em Long&Short PETR4 x PETR3 com spread de R$ 0,57 ! Fica a dica e quem quiser o relatorio é só pedir !",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
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
    "Texto": "@jprcampos @carlos_munhoz meu caro … outro dia vc disse que petr4 entregava relatórios em a Nyse . ultrapar também . veja os múltiplos .",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "petr4",
        "type": "arg0"
      },
      {
        "word": "em a Nyse",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "nsubj"
      },
      {
        "word": "Nyse",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "petr4",
      "arg1": "-",
      "arg2": "em a Nyse"
    }
  },
  {
    "Texto": "Esse relatório quase não entrega nada , só foi quem disse que suporte de a petr4 foi 12,50 , Brin3 6,25 fesa4 , pomo4 artr3 etc q vcs conhecem",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "que suporte de a petr4 foi 12,50 , Brin3 6,25 fesa4 , pomo4 artr3 etc q vcs conhecem",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "ccomp"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "que suporte de a petr4 foi 12,50 , Brin3 6,25 fesa4 , pomo4 artr3 etc q vcs conhecem",
      "arg2": "-"
    }
  },
  {
    "Texto": "$VALE3 - Vale ( vale-n1 ) - Relatorio De as Debentures Participativas 2o.sem/2013 http://t.co/JKEWokJZsQ",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "$VALE3 - Vale ( vale-n1 )",
        "type": "arg0"
      },
      {
        "word": "De as Debentures Participativas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      },
      {
        "word": "as",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$VALE3 - Vale ( vale-n1 )",
      "arg1": "De as Debentures Participativas",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Relatorios De o Agente Fiduciario http://t.co/qRrDpxFNLS",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "De o Agente Fiduciario",
        "type": "arg0"
      },
      {
        "word": "$RENT3 - Localiza ( rent-nm )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De o Agente Fiduciario",
      "arg1": "$RENT3 - Localiza ( rent-nm )",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Relatorio De o Agente Fiduciario Reapresentacao http://t.co/Gk0aK3dHbG",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "De o Agente Fiduciario",
        "type": "arg0"
      },
      {
        "word": "$RENT3 - Localiza ( rent-nm )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "De o Agente Fiduciario",
      "arg1": "$RENT3 - Localiza ( rent-nm )",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DTEX3 - Duratex ( dtex-nm ) - Relatorio Anual E De Sustentabilidade http://t.co/diLO3SeaEV",
    "marks": [
      {
        "word": "relatório",
        "type": "rel"
      },
      {
        "word": "$DTEX3 - Duratex ( dtex-nm )",
        "type": "arg0"
      },
      {
        "word": "De Sustentabilidade",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relatório",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Sustentabilidade",
        "subscript": "conj"
      }
    ],
    "args": {
      "arg0": "$DTEX3 - Duratex ( dtex-nm )",
      "arg1": "De Sustentabilidade",
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