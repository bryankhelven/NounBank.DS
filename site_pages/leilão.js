document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "e tem início o leilão de a #PETR4 ! De olho em a abertura . =)",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DASA3 - Dasa ( dasa-nm ) - Aquisicao De Acoes Remanescentes De o Leilao http://t.co/0HuaywrCqa",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "De Ações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "Ações",
        "subscript": "case"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Ações",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DASA3 - Dasa ( dasa-nm ) - Fato Relevante - Resultado Final Leilao Opa http://t.co/tE2KAm5lnC",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "Opa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "Opa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Opa",
      "arg2": "-"
    }
  },
  {
    "Texto": "Hoje tem leilão emergencial de energia , que depende largamente de ELET6 . Boa oportunidade para fechar contratos estáveis e de margem maior .",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "de energia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "energia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de energia",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Leilao De Energia http://t.co/8kHVf6iVwI",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "De Energia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "Energia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Energia",
      "arg2": "-"
    }
  },
  {
    "Texto": "#CPFE3 - CPFL fecha contrato de energia de Serra de a Mesa e não disputará leilão A-0 - http://t.co/Hk3v5n3Xap",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "A-0",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "0",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "A-0",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Leilao De Petrq87 ( petr3 ) Ate 15:35 H - Oscilacao Maxima Permitida http://t.co/RgMJZcPtfT",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "De Petrq87 ( petr3 )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "Petrq87",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Petrq87 ( petr3 )",
      "arg2": "-"
    }
  },
  {
    "Texto": "OIBR4 foi para o leilão de fechamento caindo mais de 10 % ...",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "de fechamento",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "fechamento",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de fechamento",
      "arg2": "-"
    }
  },
  {
    "Texto": "OIBR4 vai explodir em o leilão .",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "@ferrisss ML desovou lote de 100 milha em a petr4 em o leilao , simplesmente 3 vezes o lote vendido durante todo o pregao",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "ML",
        "type": "arg0"
      },
      {
        "word": "lote de 100 milha",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "ML",
        "subscript": "nsubj"
      },
      {
        "word": "100",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "ML",
      "arg1": "lote de 100 milha",
      "arg2": "-"
    }
  },
  {
    "Texto": "bonito ver o bradescão e o itaú brigando com o Morgan Stanley e o Credit Suiss em o leilão final de a ABEV3 .",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "final de a ABEV3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "final de a ABEV3",
      "arg2": "-"
    }
  },
  {
    "Texto": "#vale5 encerrado em o leilão 27,09 Loss ( - 0,96 % )",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "petr4 saindo em o leilão",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "@ferrisss Epa ganhei em a Petr4 hoje duas compras uma em 15,84 venda 16,02 e outra compra 15,9 venda em o leilao .",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "#PETR4 leilão maluquinho ! ! !",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Goll4 quase 6 % de alta hj com a bolsa caindo , piores , CYre3 - 5,21 e Rsid3 - 4,86 até o leilão",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "#bovespa #oibr4 Meu Senhor Todo-Poderoso que leilão é esse ? ? ô.Ô",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "@danielzatta que nem , to em vale5 agora .. comprei a 28,2 .. stop de perda em 28,1 ... e alvo em 28,98 .. ou levar ate o leilao de hoje ...",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "#BRFS3 - O leilão por a divisão de lácteos de a BRF começou - http://t.co/fewoACB7aD",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "por a divisão de lácteos de a BRF",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "lácteos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "por a divisão de lácteos de a BRF",
      "arg2": "-"
    }
  },
  {
    "Texto": "leilão de a #PETR4 tá bonito , R$ 17.2 ! ! ! o.O",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Sobre o leilao de pre abertura eu compro efetivamente uma ação ex. petr3 ( live at http://t.co/Gmj7qMwiiw )",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "Sobre a saída de #LLXL3 de o IBOV , lembram de o efeito ' zé mané ' de a ult vez ? Então , não achem voces que a LLX vai afundar em o leilão de a saída .",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "$PETR3 - Leilao De Petrp73 ( petr3 ) Ate 11:52h - Oscilacao Maxima Permitida http://t.co/Se9c4kzLDX",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "De Petrp73 ( petr3 )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "Petrp73",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Petrp73 ( petr3 )",
      "arg2": "-"
    }
  },
  {
    "Texto": "Ações PCAR4 ainda em leilão de abertura indicam queda de mais de 4 % ... Vamos garimpar ...",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "Ações PCAR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "PCAR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Ações PCAR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR4 por R$ 16,00 em o leilão ? Caraca ... o fechamento ajustado - por causa de o JCP - de ontem foi em os R$ 15,57 ... o.O",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "o leilão de #PETR4 tá bem agradável para o vendido ... ( R$ 18,90 em o momento , mas tava em R$ 33,00 até agora há há ... o.O )",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "de #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "pô , de novo leilão de a #PETR4 começando em os R$ 33 ? ! ! ? ! ?",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "Leilão de energia , fala de presidente de a Petrobras , Vale e mais 5 movimentam radar : Graça Fo ... http://t.co/6nFS1FZVJK #infomoney #vale5",
    "marks": [
      {
        "word": "Leilão",
        "type": "rel"
      },
      {
        "word": "de energia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Leilão",
        "subscript": "rel"
      },
      {
        "word": "energia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de energia",
      "arg2": "-"
    }
  },
  {
    "Texto": "Bom dia a todos ... olhem só o leilão em a #CSNA3 ! Vai abrir com forte alta .",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "em a #CSNA3",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "CSNA3",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a #CSNA3",
      "arg2": "-"
    }
  },
  {
    "Texto": "Fim de o leilão em a #bovespa #petr4 alta de 6,61 % em a máxima de o dia , #vale5 alta de 1,93 % e #bbas3 alta de 5,64 % , #ibov alta de 2,1 %",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "em a #bovespa",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "bovespa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "em a #bovespa",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @Fontes_ : Fim de o leilão em a #bovespa #petr4 alta de 6,61 % em a máxima de o dia , #vale5 alta de 1,93 % e #bbas3 alta de 5,64 % , #ibov alta de 2 …",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "em a #bovespa",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "bovespa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "em a #bovespa",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Parece que VALE5 vai abrir forte . Em o leilão de abertura tá a 28,16 .",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
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
    "Texto": "só eu que tô curioso pra ver o comportamento ( e o volume ) de PETR4 e VALE5 em o leilão de fechamento de hoje ? =)",
    "marks": [
      {
        "word": "leilão",
        "type": "rel"
      },
      {
        "word": "de PETR4 e VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "leilão",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de PETR4 e VALE5",
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